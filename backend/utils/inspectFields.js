require('dotenv').config();
const axios = require('axios');

async function getBoardFields(boardId) {
    const query = `
        query ($boardId: [ID!]) {
            boards(ids: $boardId) {
                id
                name
                columns {
                    id
                    title
                    type
                    settings_str
                }
            }
        }
    `;

    const variables = { boardId };

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

    const columns = response.data.data.boards[0].columns;

    const formatted = columns.map((col) => {
        let settings = null;

        try {
            if (col.settings_str) {
                settings = JSON.parse(col.settings_str);
            }
        } catch {
            settings = null;
        }

        return {
            id: col.id,
            title: col.title,
            type: col.type,
            labels: settings?.labels || null,
        };
    });

    return formatted;
}

getBoardFields(process.env.FORM_BOARD_ID).then((cols) => {
    console.log('Campos del board:');
    console.log(JSON.stringify(cols, null, 2));
});
