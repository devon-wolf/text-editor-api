/* eslint-disable no-mixed-spaces-and-tabs */
import pool from '../utils/pool';

// body comes in after being stringified, remains stringified in model

export default class Document {
	id: string;
	title: string;
	body: string;

	constructor(row: { id: string, title: string, body: string }) {
	    const { id, title, body } = row;
	    this.id = id;
	    this.title = title;
	    this.body = body;
	}

	static async create({ title, body }: { title: string, body: string }): Promise<Document> {
	    const { rows } = await pool.query(
	        `INSERT INTO documents (title, body)
			VALUES ($1, $2)
			RETURNING *`,
	        [
	            title,
	            body
	        ]
	    );
	    return new Document(rows[0]);
	}

	static async getAll(): Promise<Document[]> {
	    const { rows } = await pool.query('SELECT * FROM documents');
	    return rows.map(row => new Document(row));
	}

	static async getById(id: string): Promise<Document> {
	    const { rows } = await pool.query('SELECT * FROM documents WHERE id=$1', [id]);
	    return new Document(rows[0]);
	}

	static async update(id: string, { title, body }: { title: string, body: string }): Promise<Document> {
	    const { rows } = await pool.query(`
            UPDATE documents
            SET
            title=$1,
            body=$2
            WHERE id=$3
            RETURNING *
        `,
	    [
	        title,
	        body,
	        id
	    ]);
	    return new Document(rows[0]);
	}

	static async delete(id: string) : Promise<Document> {
	    const { rows } = await pool.query('DELETE FROM documents WHERE id=$1 RETURNING *', [id]);
	    return new Document(rows[0]);
	}
}
