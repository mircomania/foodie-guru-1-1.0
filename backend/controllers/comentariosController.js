const axios = require('axios');

const getComentarios = async (req, res) => {
    try {
        const query = `
            query {
                boards(ids: [${Number(process.env.COMENT_BOARD_ID)}]) {
                    items_page {
                        items {
                            id
                            name
                            column_values {
                                id
                                text
                                value
                            }
                        }
                    }
                }
            }
        `;

        const response = await axios.post(
            'https://api.monday.com/v2',
            { query },
            {
                headers: {
                    Authorization: process.env.MONDAY_API_KEY,
                    'Content-Type': 'application/json',
                },
            }
        );

        console.log('Respuesta completa Monday Comentarios:', JSON.stringify(response.data, null, 2));

        const boards = response.data.data?.boards || [];
        if (!boards.length) {
            return res.status(404).json({ message: 'No se encontraron items en Comentarios' });
        }

        const items = boards[0].items_page.items.map((item) => {
            const cargo = item.column_values.find((c) => c.id === 'text_mkw2mp7s')?.text || '';
            const comentario = item.column_values.find((c) => c.id === 'text_mkw22srf')?.text || '';
            const logo = item.column_values.find((c) => c.id === 'file_mkw2br55');

            return {
                id: item.id,
                nombre: item.name,
                cargo,
                comentario,
                logo: logo?.value ? JSON.parse(logo.value).files[0].url : null,
            };
        });

        res.status(200).json(items);
    } catch (error) {
        console.error('Error al obtener comentarios:', error.response?.data || error.message);
        res.status(500).json({ message: 'Error al obtener comentarios' });
    }
};

module.exports = { getComentarios };
