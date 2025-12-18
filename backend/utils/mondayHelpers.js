function getInteresadoStatusId(interesado) {
    switch (interesado) {
        case 'Consultoría':
            return { index: 0 };
        case 'Coaching':
            return { index: 1 };
        case 'Desarrollo de Branding / Identidad de marca':
            return { index: 2 };
        case 'Otra':
            return { index: 3 };
        default:
            return null;
    }
}

function getVentaStatusId(venta) {
    switch (venta) {
        case 'Menos de $150,000':
            return { index: 0 };
        case '$151,000 - $275,000':
            return { index: 1 };
        case '$276,000 - $500,000':
            return { index: 2 };
        case 'Más de $500,000':
            return { index: 3 };
        case 'No lo sé / No aplica':
            return { index: 4 };
        case 'Por definir':
            return { index: 5 };
        default:
            return null;
    }
}

module.exports = { getInteresadoStatusId, getVentaStatusId };
