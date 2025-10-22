// {"data":{"boards":[{"id":"18019877696","name":"👤 Testimonios Website","columns":[{"id":"name","title":"Name","type":"name"},{"id":"text_mkw2mp7s","title":"Cargo","type":"text"},{"id":"text_mkw22srf","title":"Comentario","type":"text"},{"id":"file_mkw2br55","title":"Foto","type":"file"}]}]},"extensions":{"request_id":"96d20f77-0c83-95b9-b790-587f6865f312"}}

const express = require('express');
const { getComentarios } = require('../controllers/comentariosController');
const router = express.Router();

router.get('/', getComentarios);

module.exports = router;
