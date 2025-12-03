import{j as e,H as g,P as t,a as h,l as y}from"./index-2q8ItBWJ.js";import{B as f}from"./BotonNav-C1Nw4j24.js";const p=({title:o,description:a,canonical:s,metaNoIndex:n})=>e.jsxs(g,{children:[e.jsx("title",{children:o}),a&&e.jsx("meta",{name:"description",content:a}),s&&e.jsx("link",{rel:"canonical",href:s}),n&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"})]});p.propTypes={title:t.string.isRequired,description:t.string,canonical:t.string,metaNoIndex:t.bool};const b="_sectionContainer_1wbcm_1",j="_sectionTitulo_1wbcm_17",x="_sectionContenido_1wbcm_61",v="_faqItem_1wbcm_165",c={sectionContainer:b,sectionTitulo:j,sectionContenido:x,faqItem:v},q=o=>({"@context":"https://schema.org","@type":"FAQPage",mainEntity:o.map(a=>({"@type":"Question",name:a.question,acceptedAnswer:{"@type":"Answer",text:a.answer}}))}),m=[{id:1,question:"¿Qué precio tienen sus servicios?",answer:`Nuestros servicios están organizados en programas y proyectos con precio fijo según el alcance. Contamos con:

- Acompañamientos estratégicos de 3 meses

- Coaching intensivo de 1 mes

- Coaching intensivo de 1 mes

Cada proyecto se cotiza con base diagnóstico inicial y las necesidades reales del restaurante. Siempre entregamos una propuesta por escrito con el alcance, entregables y costos desglosados.`},{id:2,question:"¿Cuál es la duración de los proyectos?",answer:`Depende del tipo de intervención:

- Consultoria: 3 meses

- Coaching: 1 mes

- Branding, costeo, recetarios, layouts y procesos: 2 a 3 meses

Los tiempos se establecen formalmente en el contrato y en la propuesta.`},{id:3,question:"¿Con qué clientes han trabajado?",answer:"Hemos trabajado con marcas independientes, cadenas en crecimiento, dark kitchens, cafeterías, panaderias, bares y restaurantes de autor. También hemos impulsado proyectos personales de emprendedores restauranteros que necesitaban orden, rentabilidad y congruencia de marca. Por política de confidencialidad, solo compartimos nombres de clientes cuando ellos lo autorizan."},{id:4,question:"¿Qué experiencia tienen en el mercado?",answer:"Contamos con más de 15 años de experiencia real en la industria restaurantera, operaciones, diseño de conceptos, branding, costeo, administración, liderazgo, procesos y crecimiento. Hemos creado, operado, escalado y vendido conceptos propios, lo que nos permite acompañarte desde la experiencia de campo y no solo desde la teoría."},{id:5,question:"¿Cómo es la estructura de pagos?",answer:`Trabajamos con esquema claro y profesional:

- 50% inicial para reservar, abrir proyecto y arrancar.

- 50% final antes de la entrega total de los documentos o del cierre de la etapa correspondiente.

Para proyectos de 3 meses, manejamos pagos mensuales fijos.

Aceptamos transferencia bancaria, efectivo o factura según requieras.
`},{id:6,question:"¿Manejan garantías?",answer:"Sí. En los programas estratégicos de 3 meses ofrecemos una garantía de mejora, siempre y cuando el cliente cumpla con las tareas, implementaciones y acuerdos establecidos. La garantía se explica claramente en el contrato"},{id:7,question:"¿Qué pasa si el cliente cancela el proyecto sin previo aviso?",answer:`Toda cancelación debe notificarse por escrito con mínimo 15 días de anticipación.

Si el cliente decide cancelar de manera inmediata:

El anticipo o pagos previos no son reembolsables, ya que cubren horas de trabajo, análisis y avances ya realizados.

Si existieran pagos programados a futuro, se detendrán sin penalización adicional.`},{id:8,question:"¿Cuáles son los motivos por los que el despacho puede cancelar un servicio?",answer:`El despacho puede dar por terminado un proyecto en casos como:

- Incumplimiento reiterado de pagos.

- Falta de entrega de información indispensable para avanzar.

- Falta de comunicación prolongada (más de 15 días) sin justificación.

- Actitudes irrespetuosas hacia el equipo o conductas inapropiadas.

- Cambios drásticos en el alcance no autorizados.

En cualquiera de estos casos, se notificará por escrito y se entregará el avance disponible hasta esa fecha.`},{id:9,question:"¿Qué ocurre si el despacho no cumple con los entregables?",answer:`En caso de retrasos atribuibles al despacho:

- Se notifica por escrito la nueva fecha de entrega.

- Se aplica una extensión proporcional del servicio sin costo.

- Si el error fuera mayor y afecta el proyecto, se puede solicitar revisión, reposición o ajuste de los entregables.

Nuestro compromiso es cumplir con calidad, profesionalismo y absoluta transparencia.`},{id:10,question:"¿Cómo se manejan los cambios en el alcance del proyecto?",answer:"Si el cliente solicita agregar entregables, sesiones adicionales o servicios fuera del alcance inicial, se cotizan por separado y se integran mediante un Addendum o propuesta complementaria."},{id:11,question:"¿Cómo se realiza la comunicación durante el proyecto?",answer:`Dependiendo del tipo de proyecto

- Llamadas o videollamadas programadas semanal o quincenalmente.

- Comunicación activa por WhatsApp Business o correo profesional.

- Entrega de documentos vía Google Drive y ZIP descargable

- Monday.com

siempre priorizando la elección del cliente`},{id:12,question:"¿Qué responsabilidades tiene el cliente durante el proceso?",answer:`Para que el proyecto avance en tiempo y forma, el cliente debe:

- Entregar información solicitada

- Aplicar cambios operativos sugeridos.

- Cumplir con pagos y sesiones agendadas.

- Mantener comunicación activa.

El éxito del proyecto depende del trabajo conjunto entre el cliente y el despacho.`}],C=q(m),w=(o,a)=>{const s=o.split(`
`).filter(Boolean),n=[];let r=!1;const i=[];return s.forEach((u,l)=>{const d=u.trim();d.startsWith("- ")?(r=!0,i.push(e.jsx("li",{children:d.replace("- ","")},`${a}-li-${l}`))):(r&&(n.push(e.jsx("ul",{children:i.slice()},`${a}-ul-${l}`)),i.length=0,r=!1),n.push(e.jsx("p",{children:d},`${a}-p-${l}`)))}),r&&i.length&&n.push(e.jsx("ul",{children:i},`${a}-ul-end`)),n},N=()=>e.jsxs("main",{children:[e.jsx(p,{title:"Foodie Guru | FAQ",description:"Encuentra respuestas claras y rápidas a las dudas más comunes sobre el servicio de Foodie Guru.",canonical:"https://foodieguru.mx/faq"}),e.jsx(h,{children:e.jsx("script",{type:"application/ld+json",children:JSON.stringify(C)})}),e.jsxs("section",{className:c.sectionContainer,children:[e.jsxs("header",{className:c.sectionTitulo,children:[e.jsx("h1",{className:"formula-bold",children:"PREGUNTAS FRECUENTES"}),e.jsx("img",{src:y,alt:"Logotipo de Foodie Guru"})]}),e.jsx("div",{className:c.sectionContenido,children:m.map(({id:o,question:a,answer:s})=>e.jsxs("div",{className:c.faqItem,children:[e.jsx("h3",{className:"formula-bold",children:`${o}. ${a}`}),e.jsx("div",{className:"alliance-text",children:w(s,o)}),e.jsx("hr",{})]},o))}),e.jsx(f,{dataCta:"faq-btn",children:"Solicitar Cita"}),e.jsx("hr",{})]})]});export{N as default};
