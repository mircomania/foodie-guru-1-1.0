export const ParseTextToJSX = (text, baseKey) => {
    const lines = text.split('\n').filter(Boolean);
    const content = [];

    let listMode = false;
    let buffer = [];

    lines.forEach((line, idx) => {
        const trimmed = line.trim();

        if (trimmed.startsWith('- ')) {
            listMode = true;
            buffer.push(<li key={`${baseKey}-li-${idx}`}>{trimmed.replace('- ', '')}</li>);
        } else {
            if (listMode) {
                content.push(<ul key={`${baseKey}-ul-${idx}`}>{buffer.slice()}</ul>);
                buffer.length = 0;
                listMode = false;
            }
            content.push(<p key={`${baseKey}-p-${idx}`}>{trimmed}</p>);
        }
    });

    if (listMode && buffer.length > 0) {
        content.push(<ul key={`${baseKey}-ul-end`}>{buffer.slice()}</ul>);
    }

    return content;
};
