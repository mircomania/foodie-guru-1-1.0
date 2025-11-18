/* {
"data": {
    "boards": [
    {
        "id": "9197450873",
        "name": "📲 Leads",
        "columns": [
        {
            "id": "name",
            "title": "Name",
            "type": "name"
        },
        {
            "id": "short_text3y3tles1",
            "title": "👨‍🍳 Nombre de tu Negocio",
            "type": "text"
        },
        {
            "id": "phonebpido5ad",
            "title": "📲 Teléfono",
            "type": "phone"
        },
        {
            "id": "long_textkentl9l3",
            "title": "🤔 Algún comentario adicional (opcional)",
            "type": "long_text"
        },
        {
            "id": "color_mkr5rq3z",
            "title": "💰 ¿Cuál es la venta promedio mensual de tu negocio?",
            "type": "status"
        },
        {
            "id": "color_mkr57t33",
            "title": "🔽 Status",
            "type": "status"
        },
        {
            "id": "multiple_person_mkr5v2z1",
            "title": "👤",
            "type": "people"
        },
        {
            "id": "color_mkr5her6",
            "title": "📈 Etapa de tu Negocio",
            "type": "status"
        },
        {
            "id": "date_mkr525rg",
            "title": "📅 Seguimiento",
            "type": "date"
        },
        {
            "id": "pulse_log_mkrccz68",
            "title": "📅 Creación",
            "type": "creation_log"
        },
        {
            "id": "email_mkrfd41s",
            "title": "📩 Email",
            "type": "email"
        },
        {
            "id": "board_relation_mkrfcsje",
            "title": "👤 Contactos",
            "type": "board_relation"
        },
        {
            "id": "board_relation_mkrfpxj3",
            "title": "🤑 Deals",
            "type": "board_relation"
        },
        {
            "id": "color_mktw838z",
            "title": "Trigger seguimiento 2 días",
            "type": "status"
        },
        {
            "id": "text_mktzy809",
            "title": "📍 Ciudad desde donde nos contacta",
            "type": "text"
        }
        ]
    }
    ]
},
"extensions": {
    "request_id": "7ede5389-b7d4-9562-8a9e-2810d11b360f"
}
} */

const axios = require('axios');

const handleSubmit = async (req, res) => {
    const { nombre, telefono, email, empresa, rol } = req.body;

    try {
        const columnValues = {
            name: nombre,
            phone_mkrpxamn: { phone: telefono },
            email_mkrpk182: { email, text: email },
            text_mkrpcqwa: empresa,
            text_mkrp60xg: rol,
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
