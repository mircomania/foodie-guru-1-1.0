/* [  
{
    "id": "name",
    "title": "Name",
    "type": "name",
    "labels": null
},
{
    "id": "phonebpido5ad",
    "title": "📲 Teléfono",
    "type": "phone",
    "labels": null
},
{
    "id": "email_mkrfd41s",
    "title": "📩 Email",
    "type": "email",
    "labels": null
},
{
    "id": "color_mkr5rq3z",
    "title": "💰 ¿Cuál es la venta promedio mensual de tu negocio?",
    "type": "status",
    "labels": {
        "0": "Menos de $150,000",
        "1": "$151,000 - $275,000",
        "2": "$276,000 - $500,000",
        "3": "Más de $500,000",
        "4": "No lo sé / No aplica",
        "5": "Por definir"
    }
},
{
    "id": "text_mktzy809",
    "title": "📍 Ciudad desde donde nos contacta",
    "type": "text",
    "labels": null
},
{
    "id": "long_textkentl9l3",
    "title": "🤔 Algún comentario adicional (opcional)",
    "type": "long_text",
    "labels": null
},
    {
    "id": "color_mkyqwabf",
    "title": "Interes",
    "type": "status",
    "labels": {
        "0": "Consultoría",
        "1": "Coaching",
        "2": "Desarrollo de Branding / Identidad de marca",
        "3": "Otra"
    }
] */

const axios = require('axios');
const { getInteresadoStatusId, getVentaStatusId } = require('../utils/mondayHelpers');

const handleSubmit = async (req, res) => {
    const { nombre, telefono, email, interesado, venta, ciudad, comentario } = req.body;

    try {
        const columnValues = {
            name: nombre,
            phonebpido5ad: { phone: telefono },
            email_mkrfd41s: { email, text: email },
            color_mkr5rq3z: getVentaStatusId(venta),
            text_mktzy809: ciudad,
            long_textkentl9l3: comentario,
            color_mkyqwabf: getInteresadoStatusId(interesado),
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
