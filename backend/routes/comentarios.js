/* {
"data": {
    "boards": [
    {
        "id": "18267494879",
        "name": "Comentarios Web",
        "columns": [
        {
            "id": "name",
            "title": "Name",
            "type": "name"
        },
        {
            "id": "text_mkx1e3z0",
            "title": "Cargo",
            "type": "text"
        },
        {
            "id": "text_mkx1cze4",
            "title": "Comentario",
            "type": "text"
        },
        {
            "id": "file_mkx1v538",
            "title": "Logo",
            "type": "file"
        }
        ]
    }
    ]
},
"extensions": {
    "request_id": "1af7c5db-1eb3-9fd6-99b7-eb7914a1167d"
}
} */

const express = require('express');
const { getComentarios } = require('../controllers/comentariosController');
const router = express.Router();

router.get('/', getComentarios);

module.exports = router;
