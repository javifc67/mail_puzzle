import { printDate } from '../utils/dateUtils.js';

const reBody = "<div><p style=\"font-size:11pt;font-family:Calibri,sans-serif;margin:0;\"><span style=\"color: black; font-size: 10pt; font-family: Verdana, sans-serif;\">Hola,</span></p></div><div><p style=\"font-size:11pt;font-family:Calibri,sans-serif;margin:0;\"><span style=\"color: black; font-size: 10pt; font-family: Verdana, sans-serif;\">&nbsp;</span></p></div><div><p style=\"font-size:11pt;font-family:Calibri,sans-serif;margin:0;\"><span style=\"color: black; font-size: 10pt; font-family: Verdana, sans-serif;\">He realizado el volcado de los logs de desinformación del servidor de la UPM para el proyecto ENDGAME, como me pediste. Los he subido a la nube, los puedes descargar <a href=\"http://vishub.org/pictures/18977.jpg\" target=\"_blank\">aquí</a>. El archivo está protegido por contraseña. Le he puesto de contraseña el acrónimo del proyecto en mayúsculas seguido del año de este curso (2026).</span></p></div>\n<div><p>&nbsp;</p><p style=\"font-size:11pt;font-family:Calibri,sans-serif;margin:0;\"><span style=\"color: black; font-size: 10pt; font-family: Verdana, sans-serif;\">Un saludo,<br>Dr. Arnaldo<br>Lab. Ciberseguridad UPM</span></p></div>";

const malditaHtml = `<div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0;">
    <div style="background-color: #000; padding: 20px; text-align: center;">
        <h1 style="color: #fff; margin: 0; letter-spacing: 2px;">MALDITA.ES</h1>
        <p style="color: #ff4d4d; margin: 5px 0 0; font-weight: bold; text-transform: uppercase; font-size: 12px;">Periodismo para que no te la cuelen</p>
    </div>
    <div style="padding: 30px; background-color: #fff;">
        <h2 style="color: #d90000; margin-top: 0; border-bottom: 2px solid #d90000; padding-bottom: 10px;">🚨 ALERTA: Campaña de Desinformación</h2>
        <p style="font-size: 16px; line-height: 1.5;">Hola equipo,</p>
        <p style="font-size: 16px; line-height: 1.5;">Nuestros analistas han detectado una <strong>campaña de desinformación activa</strong> dirigida específicamente a estudiantes de la UPM.</p>
        <div style="background-color: #ffe6e6; border-left: 5px solid #d90000; padding: 15px; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold; color: #d90000;">⚠️ Patrón Detectado</p>
            <p style="margin: 5px 0 0;">Hemos rastreado el origen a una red de <em>perfiles falsos coordinados</em> en la red social X.</p>
        </div>
        <p style="font-size: 16px; line-height: 1.5;">¿Podéis procesar estos datos con el algoritmo de <strong>ENDGAME</strong> para ver si el módulo de gamificación los identifica correctamente?</p>
        <div style="margin-top: 30px; text-align: center;">
            <a target="_blank" href="https://maldita.es/nosotros/20250425/endgame-juego-contra-desinformacion/" style="background-color: #000; color: #fff; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 4px;">VER INFORME DE BOTS</a>
        </div>
        <p style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px; color: #666;">Saludos,<br>El equipo de Maldita.</p>
    </div>
</div>`;

const upmHtml = `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #000; max-width: 700px; margin: 0 auto; background-color: #fff;">
    <div style="border-bottom: 2px solid #0099d0; padding-bottom: 15px; margin-bottom: 30px; display: flex; align-items: center;">
        <img src="https://www.upm.es/gsfs/SFS24596" alt="UPM Logo" style="height: 80px; margin-right: 20px;">
        <div style="border-left: 1px solid #ccc; padding-left: 20px;">
            <h2 style="margin: 0; color: #0099d0; font-weight: normal;">RECTORADO</h2>
            <p style="margin: 5px 0 0; font-size: 12px; color: #666;">Universidad Politécnica de Madrid</p>
        </div>
    </div>
    
    <div style="padding: 0 20px;">
        <p style="text-align: right; color: #666; font-size: 14px; margin-bottom: 40px;">Madrid, 21 de Enero de 2026</p>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 4px; margin-bottom: 30px;">
            <p style="margin: 0; font-weight: bold;">ASUNTO: Liberación de Fondos - Proyecto ENDGAME (H2020)</p>
        </div>

        <p style="font-size: 15px; line-height: 1.6;">Estimados investigadores,</p>
        
        <p style="font-size: 15px; line-height: 1.6;">Nos es grato comunicarles que la <strong>Comisión Europea</strong> ha validado satisfactoriamente los hitos de la primera fase del proyecto.</p>
        
        <p style="font-size: 15px; line-height: 1.6; background-color: #eaf6fb; padding: 20px; border-left: 4px solid #0099d0; margin: 25px 0;">
            ✅ Los fondos para la implementación de la <strong>plataforma de juegos de verificación</strong> ya están disponibles en su centro de coste.
        </p>

        <p style="font-size: 15px; line-height: 1.6;">Confiamos en que esta inyección de recursos permitirá acelerar el desarrollo del módulo de IA.</p>
        
        <p style="font-size: 15px; line-height: 1.6; margin-top: 30px;">Enhorabuena por el trabajo realizado.</p>
    </div>

    <div style="margin-top: 50px; padding-top: 20px; border-top: 1px solid #eee; display: flex; align-items: flex-end;">
        <div>
            <p style="margin: 0; font-weight: bold; color: #333;">Vicerrectorado de Investigación</p>
            <p style="margin: 5px 0 0; font-size: 12px; color: #666;">Paseo Juan XXIII, 11 - 28040 Madrid</p>
            <p style="margin: 2px 0 0; font-size: 12px; color: #0099d0;">www.upm.es</p>
        </div>
    </div>
    <div style="margin-top: 20px; font-size: 10px; color: #999; text-align: justify; line-height: 1.3;">
        Este mensaje y sus archivos adjuntos van dirigidos exclusivamente a su destinatario y pueden contener información confidencial sometida a secreto profesional. No está permitida su comunicación, reproducción o distribución sin la autorización expresa de la Universidad Politécnica de Madrid. Si usted no es el destinatario final, por favor elimínelo e infórmenos por esta vía.
    </div>
</div>`;


const mailSent = {
    id: 7,
    from: "arnaldo.gomez@upm.es",
    to: "ip.endgame@upm.es",
    picture: "/images/avatar.png",
    name: "Arnaldo",
    issue: "Volcado de logs",
    description: "Hola, He realizado el volcado de logs...",
    attachment: {
        title: "datos_bulos.zip",
        url: "#",
    },
    content: {
        html: reBody
    },
    date: printDate(-6),
    categories: ["sent"],
    unread: false,
}

export const emails = [
    {
        id: 1,
        from: "ip.endgame@upm.es",
        name: "Investigador Principal",
        issue: "RE: Volcado de datos ENDGAME",
        description: "Perfecto, Arnaldo. Ya he recibido el enlace...",
        picture: "https://www.upm.es/gsfs/SFS24596",
        content: {
            body: [
                "Perfecto, Arnaldo. Ya he recibido el enlace. Mañana mismo empezaremos con la fase de gamificación para detectar los bulos de la red.",
                "Buen trabajo."
            ],
            response: {
                ...mailSent
            }
        },
        date: printDate(0),
        unread: true,
        attachment: {
            title: "plan_de_gamificacion.pdf",
            url: "#",
        },
        categories: [
            "received",
            "highlighted",
            "important",
        ],
    },
    {
        id: 2,
        picture: "https://files.maldita.es/maldita/system/maldita-logo.webp",
        from: "alertas@maldita.es",
        name: "Maldita.es",
        issue: "Alerta: Campaña detectada en X",
        description: "Hemos encontrado un rastro de bots coordinados...",
        content: {
            html: malditaHtml
        },
        date: printDate(-2),
        categories: ["received"],
        unread: true,
    },
    {
        id: 3,
        from: "rectorado@upm.es",
        name: "Rectorado UPM",
        issue: "Fondos Proyecto ENDGAME",
        description: "Confirmación de fondos de la Comisión Europea...",
        picture: "https://www.upm.es/gsfs/SFS24596",
        content: {
            html: upmHtml
        },
        date: printDate(-3),
        categories: ["received", "important"],
        unread: false,
    },
    {
        id: 4,
        from: "comite.etico@upm.es",
        name: "Comité Ético UPM",
        issue: "Revisión Algoritmo Detección",
        description: "Se requiere documentación adicional sobre IA...",
        content: {
            img: "https://www.upm.es/sfs/Rectorado/Vicerrectorado%20de%20Investigacion/Images/banner_etica.jpg",
            body: [
                "Atención Investigador Principal,",
                "Para cumplir con los requisitos de Horizonte Europa, necesitamos que adjunten el informe de impacto ético sobre el tratamiento de datos de los alumnos.",
                "Especialmente en lo referente al módulo de aprendizaje automático que clasifica las respuestas en los juegos.",
                "Gracias."
            ]
        },
        date: printDate(-4),
        categories: ["received", "postponed"],
        unread: false,
    },
    {
        id: 5,
        from: "info@it-security.com",
        name: "IT Security Conference",
        issue: "Confirmación de envío",
        description: "Tu artículo 'Gamifying Truth' ha sido enviado...",
        content: {
            img: "https://eventos.upm.es/_files/_event/_127786/_header_img/_189391.png",
            body: [
                "Estimado autor,",
                "Confirmamos la recepción de su borrador titulado 'Gamifying Truth: A new approach to media literacy' para el congreso internacional.",
                "El comité científico revisará el documento y recibirá una respuesta antes del próximo mes.",
                "Gracias por su contribución.",
                "Atentamente, IT Security Conference team",
                "www.it-security-conference.com"
            ]
        },
        date: printDate(-1),
        categories: ["received"],
        unread: false,
    },
    {
        id: 6,
        from: "investigador@upm.es",
        name: "notas ENDGAME",
        issue: "[BORRADOR] Notas metodología",
        description: "Notas sobre cómo puntuar a los alumnos...",
        content: {
            body: [
                "IDEAS PARA EL JUEGO:",
                "- Añadir 100 puntos extra si el alumno detecta el deepfake en menos de 10 segundos.",
                "- Si fallan tres veces seguidas, mostrar el consejo de verificación de Maldita.es.",
                "- ¿Podemos integrar el login de la UPM directamente?"
            ]
        },
        date: printDate(-5),
        categories: ["draft"],
        unread: false,
    },
    mailSent
];

export const chats = [{
    name: "Investigador principal",
    msg: "¿Has podido abrir el .pdf con la clave?",
    photo: "https://www.upm.es/gsfs/SFS24596",
    status: "online",
}, {
    name: "Maldita Lab",
    msg: "El servidor de verificación está listo.",
    status: "offline",
    photo: "https://files.maldita.es/maldita/system/maldita-logo.webp",
}];