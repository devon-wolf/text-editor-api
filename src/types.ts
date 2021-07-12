export class ExpressError extends Error {
	status : number | undefined;
}

export interface ExampleRow {
	id: string;
	example_name: string;
	example_body: string;
}

export interface ExampleRequest {
	exampleName: string;
	exampleBody: string;
}
