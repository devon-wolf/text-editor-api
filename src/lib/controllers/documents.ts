import { Router } from 'express';
import Document from '../models/Document';

export default Router()
    .post('/', (req, res, next) => {
        console.log('POST request');
        Document
            .create(req.body)
            .then(document => res.send(document))
            .catch(next);
    })

    .get('/', (req, res, next) => {
        console.log('GET request');
        Document
            .getAll()
            .then(documents => res.send(documents))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        console.log(`GET request for id ${req.params.id}`);
        Document
            .getById(req.params.id)
            .then(document => res.send(document))
            .catch(next);
    })

    .put('/:id', (req, res, next) => {
        console.log(`PUT request for id ${req.params.id}`);
        Document
            .update(req.params.id, req.body)
            .then(document => res.send(document))
            .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        console.log(`DELETE request for id ${req.params.id}`);
        Document
            .delete(req.params.id)
            .then(document => res.send(document))
            .catch(next);
    });
