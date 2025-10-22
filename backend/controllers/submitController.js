const axios = require('axios');
const { getToolStatusId, getEquipoStatusId } = require('../utils/mondayHelpers');

const handleSubmit = async (req, res) => {
    const { nombre, telefono, email, empresa, rol, equipo, tool } = req.body;

    try {
        const columnValues = {
            name: nombre,
            phone_mkrpxamn: { phone: telefono },
            email_mkrpk182: { email, text: email },
            text_mkrpcqwa: empresa,
            text_mkrp60xg: rol,
            single_selectlewjq16: getEquipoStatusId(equipo),
            color_mkrpgbmm: getToolStatusId(tool),
        };

        console.log('Column values enviados a Monday:', columnValues);

        const query = `
            mutation ($boardId: ID!, $itemName: String!, $columnValues: JSON!) {
                create_item (board_id: $boardId, item_name: $itemName, column_values: $columnValues) {
                    id
                }
            }
        `;

        const variables = {
            boardId: process.env.FORM_BOARD_ID,
            itemName: nombre,
            columnValues: JSON.stringify(columnValues),
        };

        console.log('Variables GraphQL:', variables);

        const response = await axios.post(
            'https://api.monday.com/v2',
            { query, variables },
            {
                headers: {
                    Authorization: process.env.MONDAY_API_KEY,
                    'Content-Type': 'application/json',
                },
            }
        );

        console.log('Respuesta completa de Monday:', response.data);

        if (response.data.errors) {
            console.error('Monday API error:', response.data.errors);
            return res.status(500).json({ message: 'Error en Monday API', errors: response.data.errors });
        }

        res.status(200).json({
            message: 'Datos enviados a Monday correctamente',
            itemId: response.data.data.create_item.id,
        });
    } catch (error) {
        console.error('Error al enviar datos a Monday:', error.response?.data || error.message);
        res.status(500).json({ message: 'Hubo un problema al procesar el formulario' });
    }
};

module.exports = { handleSubmit };
