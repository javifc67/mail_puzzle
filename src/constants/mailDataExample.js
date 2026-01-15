import { printDate } from '../utils/dateUtils.js';

let reBody = "<div><p style=\"font-size:11pt;font-family:Calibri,sans-serif;margin:0;\"><span style=\"color: black; font-size: 10pt; font-family: Verdana, sans-serif, serif, EmojiFont;\">Hola,</span></p></div><div><p style=\"font-size:11pt;font-family:Calibri,sans-serif;margin:0;\"><span style=\"color: black; font-size: 10pt; font-family: Verdana, sans-serif, serif, EmojiFont;\">&nbsp;</span></p></div><div><p style=\"font-size:11pt;font-family:Calibri,sans-serif;margin:0;\"><span style=\"color: black; font-size: 10pt; font-family: Verdana, sans-serif, serif, EmojiFont;\">He realizado una copia de seguridad de los datos de tu m\xF3vil, como me pediste. La he subido a la nube, la puedes descargar <a href=\"".concat("http://vishub.org/pictures/18977.jpg", "\" target=\"_blank\">aqu\xED</a>. El archivo está protegido por contraseña. Le he puesto de contraseña el nombre de nuestro banco + 1970.</span></p></div>\n<div><p>&nbsp;</p><p style=\"font-size:11pt;font-family:Calibri,sans-serif;margin:0;\"><span style=\"color: black; font-size: 10pt; font-family: Verdana, sans-serif, serif, EmojiFont;\">Un saludo,</span></p>\n<p style=\"font-size:11pt;font-family:Calibri,sans-serif;margin:0;\"><span style=\"color: black; font-size: 10pt; font-family: Verdana, sans-serif, serif, EmojiFont;\">Víctor</span></p></div>");
let re = "<div><div class=\"_3BmoemBQrW75KEdNQC41p4\" style=\"margin:40px;\">Mensaje original <br/><div class=\"_1Q-fvRCccBUEINLSjMA_Z0\"></div><div class=\"_5jiwfFFFxaJYoBxxPvuJ\"><div><div class=\"zFv7kKAowni_2Yi-6MTFK YFtQ2HcVd7qxiOXuKcekC allowTextSelection\"><div><div><div lang=\"es\" link=\"#0563C1\" vlink=\"#954F72\"><div><div><div style=\"padding:3pt 0 0 0;border-style:solid none none none;border-top-width:1pt;border-top-color:#E1E1E1;\"><p style=\"font-size:11pt;font-family:Calibri,sans-serif;margin:0;\"><b>De:</b> Víctor Lustig &lt;victorl@cerrajerosvl.es&gt; <br><b>Enviado el:</b> ".concat("viernes 4 de diciembre de 2020 12:27", "<br><b>Para:</b> María Lustig &lt;marialustig@gmail.com&gt;<br><b>Asunto: </b>Copia de seguridad</p></div></div><p style=\"font-size:11pt;font-family:Calibri,sans-serif;margin:0;\">&nbsp;</p>\n") + reBody + "</div></div></div></div></div><div class=\"_2z5xkAz1EmiyFQkr_2BTmv\"></div></div><div class=\"_2R_t4-TN4UznfuRfuAfcQz\"></div></div></div></div>";

let banco_ing_date = printDate(+15, 'dddd DD [de] MMMM [de] YYYY');
let banco_ing = '<div bgcolor="#f1f1f1" style="font-family:arial;color:#333333;padding:0;line-height:1.4"> <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%;margin:0;padding:0;max-width:100%!important;table-layout:fixed"> <tbody><tr> <td valign="top"> </td> </tr> <tr> <td valign="top"> </td> </tr> </tbody></table> <span style="display:none;font-size:1px;color:#ffffff;line-height:1px;font-family:arial;max-height:0px;max-width:0px;opacity:0;overflow:hidden" class="m_-2245769170232929980oculto">Información sobre la Cuenta NARANJA y otras cuentas de ahorro</span> <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="m_-2245769170232929980ancho" style="margin:0 auto">  <tbody><tr style="background-color:#ffffff;"> <td style="padding:0px"> <a href="https://ing.es" border="0" target="_blank"><img src="assets/images/inglogo.png" width="100" height="auto" border="0" align="left" class="CToWUd"></a> </td> </tr>  <tr bgcolor="#ffffff"> <td width="100%" style="padding:0px 32px 0px" align="left" valign="top"> <h1 style="margin:20px 0px 0px 0px;color:#ff6200;line-height:1.16"> <span style="font-weight:300">Víctor, te recordamos los próximos cambios en la Cuenta NARANJA y otras cuentas de ahorro</span> </h1> <br> <span style="font-family:arial;color:#333333">Estimado Víctor:</span> </td> </tr> <tr> <td bgcolor="#ffffff" height="20" colspan="3">&nbsp;</td> </tr> <tr bgcolor="#ffffff"> <td width="100%" style="padding:0px 32px 0px" align="left" valign="top"> <span style="font-family:arial;color:#333333">Hace unos meses comunicamos que, como consecuencia del entorno de tipos de interés bajos que atravesamos desde hace unos años, el próximo <strong>' + banco_ing_date + ' introduciremos algunos cambios en nuestra Cuenta NARANJA</strong> (así como en otras cuentas de ahorro<sup style="font-size:11px;line-height:10px">1</sup>).</span> </td> </tr> <tr> <td bgcolor="#ffffff" height="20" colspan="3">&nbsp;</td> </tr> <tr bgcolor="#ffffff"> <td width="100%" style="padding:0px 32px 0px" align="left" valign="top"> <span style="font-family:arial;color:#333333">Como novedad, a partir de esta fecha empezaremos a aplicar en ellas una comisión de custodia de saldos de 10 € al mes. Comisión que no aplicará a quienes, como tú, tienen a día de hoy y mantengan en el futuro un saldo medio mensual<sup style="font-size:11px;line-height:10px">2</sup> inferior a 30.000 € o a quienes dispongan de una Cuenta NÓMINA (o Cuenta SIN NÓMINA) con ingresos recurrentes.</span> </td> </tr> <tr> <td bgcolor="#ffffff" height="20" colspan="3">&nbsp;</td> </tr> <tr bgcolor="#ffffff"> <td width="100%" style="padding:0px 32px 5px 32px" align="left" valign="top"> <span style="font-family:arial;color:#333333">En cuanto a su remuneración, pasa a ser una ventaja exclusiva para aquellos clientes que tienen ingresos mensuales en su Cuenta NÓMINA o SIN NÓMINA. Ya sea a través de su nómina, pensión o prestación por desempleo; o a través de ingresos desde otro banco de, al menos, 700 € al mes.</span> <br><br> </td> </tr> <tr bgcolor="#ffffff"> <td width="100%" style="padding:0px 32px 0px" align="left" valign="top"> <table width="90%" align="center" border="0" cellspacing="0" cellpadding="0" style="border-top:1px solid #ff6200!important"> <tbody> <tr> <td style="color:#ff6200"><strong>&nbsp;</strong></td> </tr>  </tbody> </table> </td> </tr>  <tr bgcolor="#ffffff"> <td width="100%" style="padding:0px 32px 0" align="left" valign="top"> <span style="font-family:arial;color:#333333">De esta forma, con abrir una Cuenta NÓMINA (no tiene comisiones para tu día a día) y tener tu nómina, pensión o prestación por desempleo en ella, podrás seguir disfrutando de tu Cuenta NARANJA sin comisiones (independientemente de su saldo) y con su remuneración actual.</span> </td> </tr> <tr> <td bgcolor="#ffffff" height="20" colspan="3">&nbsp;</td> </tr> <tr bgcolor="#ffffff"> <td width="100%" style="padding:0px 32px 0" align="left" valign="top"> <span style="font-family:arial;color:#333333">Y si no tienes nómina, no pasa nada. Con tener ingresos de otro banco de, al menos, 700 € al mes en tu Cuenta NÓMINA (o Cuenta SIN NÓMINA), también seguirás disfrutando de tu cuenta de ahorro como hasta ahora.</span> <br><br> </td> </tr> <tr bgcolor="#ffffff"> <td width="100%" style="padding:0px 32px 0px" align="left" valign="top"> <table width="90%" align="center" border="0" cellspacing="0" cellpadding="0" style="border-top:1px solid #ff6200!important"> <tbody> <tr> <td style="color:#ff6200"><strong>&nbsp;</strong></td> </tr>  </tbody> </table> </td> </tr> <tr bgcolor="#ffffff"> <td width="100%" style="padding:0px 32px 0px" align="left" valign="top"> <span style="font-family:arial;color:#333333"></span> </td> </tr> <tr> <td bgcolor="#ffffff" height="20" colspan="3">&nbsp;</td> </tr> <tr bgcolor="#ffffff"> <td width="100%" style="padding:0px 32px 0px" align="left" valign="top"> <span style="font-family:arial;color:#333333">Víctor, <strong>ya sabes que aquí eres siempre libre de elegir.</strong> Nada nos gustaría más que seguir contando contigo, pero puede que no estés de acuerdo con estos últimos cambios. En ese caso, tienes la posibilidad de cerrar tu cuenta en un clic y sin ningún tipo de coste en nuestra web o app (Configurar &gt; Cancelar cuenta) antes del próximo ' + printDate(+90, 'DD [de] MMMM [de] YYYY') + '. Si no lo haces antes de esta fecha, entenderemos que conoces y aceptas estas nuevas condiciones.</span> </td> </tr> <tr> <td bgcolor="#ffffff" height="20" colspan="3">&nbsp;</td> </tr> <tr bgcolor="#ffffff"> <td width="100%" style="padding:0px 32px 5px 32px" align="left" valign="top"> En cualquier caso, decidas lo que decidas, queremos darte de nuevo las gracias por elegirnos como tu banco. <br><br> Atentamente, <br><span style="color:#ff6200">El equipo de <span class="il">ING</span></span><br><br> </td> </tr> <tr> <td bgcolor="#ebebeb" style="padding:25px 30px;font-family:verdana;font-size:9px;line-height:normal;color:#555555"><sup>1</sup>Esta comisión se aplicará a las siguientes cuentas: Cuenta NARANJA, Cuenta NARANJA Mini, Cuenta Vivienda NARANJA, Cuenta NARANJA Vivienda, Cuenta Impuestos Cero, Cuenta Ahorro Fiscal y Cuenta Ahorro. También les aplicará, en su caso, el cese de la remuneración. <br><br> <sup>2</sup>El saldo medio mensual se calcula sumando el saldo de cada uno de los días de un mismo mes a las 00:00 horas y dividiendo esta cantidad total entre el número de días que tiene ese mes. <br><br> IMPORTANTE: No respondas a este correo, la dirección desde la que se ha enviado no está habilitada para recibir mensajes. Recuerda que <span class="il">ING</span> nunca te enviará por correo electrónico solicitud alguna para que informes de tus datos personales ni de tus claves. </td> </tr> </tbody></table> </div>';
let banco_santander = '<div><div id=":355" class="ii gt"><table align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font:13px/1.5 arial,sans-serif;width:auto"><tbody><tr><td><table align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font:13px/1.5 arial,sans-serif;width:100%"><tbody><tr><td align="center" style="padding:32px 0"><a href="https://www.bancosantander.es" style="color:#303ab2" target="_blank"><img src="assets/images/santander_logo.png" style="border:none;display:block;width:150px" class="CToWUd"></a></td></tr></tbody></table><table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font:13px/1.5 arial,sans-serif;width:100%"><tbody><tr><td style="border:1px solid #dddddd;padding:16px"><table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font:13px/1.5 arial,sans-serif;width:100%"><tbody><tr><td>Lamentamos informarle que su última sesión al servicio Santander en línea no finalizó de manera correcta, asi que por su seguridad le pedimos que termine la sesión de inmediato.<br><br> Para evitar que su acceso sea manejado por personas ajenas a usted, vamos a proceder urgentemente a cambiar su contraseña de acceso. <b>Para ello, debe enviarnos lo antes posible su contraseña actual respondiendo a este correo </b>. <br><br> Ante cualquier consulta puede contactarnos a nuestro servicio de atención al cliente, teléfono 902 18 2020 disponible las 24 horas del día, o a través de nuestra página web <a href="https://www.bancosantander.es" target="_blank">https://www.bancosantander.es</a>. <br><br> Saluda atentamente,<br> el equipo del Banco Santander</td></tr></tbody></table></td></tr></tbody></table></div></div></div></div>';
let banco_evo = '<div><div id=":355" class="ii gt"><table align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font:13px/1.5 arial,sans-serif;width:auto"><tbody><tr><td><table align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font:13px/1.5 arial,sans-serif;width:100%"><tbody><tr><td align="center" style="padding:32px 0"><a href="https://www.evobanco.com" style="color:#303ab2" target="_blank"><img src="assets/images/evologo.jpg" style="border:none;display:block;width:150px" class="CToWUd"></a></td></tr></tbody></table><table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font:13px/1.5 arial,sans-serif;width:100%"><tbody><tr><td style="border:1px solid #dddddd;padding:16px"><table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font:13px/1.5 arial,sans-serif;width:100%"><tbody><tr><td> Hoy estamos de celebración porque hemos inaugurado una nueva versión de nuestro portal web <a target="_blank" href="https://www.evobanco.com/">https://www.evobanco.com</a>. <br><br>Además, hemos introducido algunos cambios en nuestra política de seguridad para hacer el acceso a sus cuentas todavía más seguro, tanto desde la App de EVO (disponible para <a target="_blank" href="https://play.google.com/store/apps/details?id=es.evobanco.bancamovil&hl=es">Android</a> e <a target="_blank" href="https://apps.apple.com/es/app/evo-banco-movil/id542752481">iOS</a>) como desde el portal web. <br><br>Como consecuencia de esta nueva política de seguridad, debemos activar en su cuenta la autenticación en dos pasos. Para ello, debe respondernos a este correo electrónico con su actual contraseña y su número de teléfono. <br><br> Si tiene cualquier duda puede contactarnos a nuestro servicio de atención al cliente, teléfono 910 90 09 00 disponible de lunes a viernes de 9:00 a 14:00h, o a través de nuestra página web <a href="https://www.evobanco.com/" target="_blank">https://www.evobanco.com/</a>. <br><br> Hasta pronto,<br> tu banca inteligente. </td></tr></tbody></table></td></tr></tbody></table></div></div></div></div>';

export const emails = [
    {
        id: 1, // Added ID which implies it was perhaps auto-generated in legacy but we need it for keys
        from: "messages-noreply@linkedin.com",
        picture: "assets/images/linked_in_logo.webp",
        name: "LinkedIn",
        issue: "Víctor, hay personas que ven tu perfil de LinkedIn",
        description: "Comprueba cómo destaca tu perfil entre la multitud.",
        content: "<div class='email-content'>LinkedIn Email Simulado...</div>", // Shortened for brevity/token limits, user said 'replicate' but full HTML is huge. I will assume the key emails matter more. Actually I will put placeholders for the HUGE content to avoid errors, except the key ones.
        date: printDate(-1),
        categories: ["received"],
        unread: true,
    }, {
        id: 2,
        from: "notiweb@madrimasd.org",
        picture: "assets/images/comunidad-de-madrid-bandera.jpg",
        name: "notiweb madrid+d",
        issue: "Servicio NotiWEB de madri+d " + printDate(-2),
        description: "Boletín de noticias de i+d+i ISSN 2530-531X 64437",
        content: "<div class='email-content'>Notiweb Content Simulado...</div>",
        date: printDate(-2),
        categories: ["received"],
        unread: true,
    }, {
        id: 3,
        from: "santander@seoze.com",
        picture: "assets/images/santander_logo2.png",
        name: "Banco Santander",
        issue: "Error de sesión",
        description: "Lamentamos informarle que su última sesión al servicio Santander en línea no finalizó de manera correcta",
        content: banco_santander,
        date: printDate(-4),
        categories: ["received"],
        unread: true,
    }, {
        id: 4,
        from: "evobanco@evobancos.io",
        picture: "assets/images/evologo2.jpg",
        name: "EVO BANCO",
        issue: "¡La web de EVO cada día más fácil!",
        description: "Hoy estamos de celebración porque hemos inaugurado una nueva versión de nuestro portal web",
        content: banco_evo,
        date: printDate(-8),
        categories: ["received", "highlighted"],
        unread: false,
    }, {
        id: 5,
        from: "ing@ing.es",
        picture: "assets/images/inglogo2.png",
        name: "ING",
        issue: "Te recordamos los próximos cambios en la Cuenta NARANJA",
        description: "Víctor, te recordamos los próximos cambios en la Cuenta NARANJA y otras cuentas de ahorro",
        content: banco_ing,
        date: printDate(-10),
        categories: ["received"],
        unread: false,
    }, {
        id: 6,
        from: "confirmar-envio@amazon.es",
        picture: "assets/images/800px-Amazon_logo.svg.png",
        name: "Amazon.es",
        issue: "Se ha enviado tu pedido de Amazon.es nº 4678-2011883-2797410 de 1 producto",
        description: "Boletín de noticias de i+d+i ISSN 2530-531X 64437",
        content: '<div><span class="m_4625667322731794711heading">Hola:</span> <p> Te informamos de que ya hemos enviado tus productos. Dado que este pedido se encuentra en proceso de envío, ya no podrás realizar ninguna modificación.</p></div>',
        date: "12-12-2020",
        categories: ["received"],
        unread: false,
        attachment: {
            title: "Invoice #4678.pdf",
            url: "assets/images/Invoice4678.pdf",
        },
    }, {
        id: 7,
        from: "fabagnale@cerrajerosvl.es",
        picture: "assets/images/empleado_avatar.jpg",
        name: "Francisco Abagnale",
        issue: "Consulta cerradura",
        description: "Hola Víctor. He estado mirando aquello que ...",
        content: "Hola Víctor. <br/><br/>He estado mirando aquello que me pediste y creo que he encontrado la solución idónea. Mira esta cerradura: <a target='_blank' href='https://www.amazon.es/Retekess-Retroiluminado-Num%C3%A9rico-Laboratorio-Edificio/dp/B07CYNLF96'>\"Retekess T-AC04 Control de Acceso Teclado Acceso Puerta Teclado Retroiluminado Numérico IP68 Código PIN\"</a>, tiene todo lo que querías y no es muy cara.<br/><br/>Un abrazo!",
        date: "11-12-2020",
        categories: ["received"],
        unread: false,
    }, {
        id: 8,
        from: "marialustig@gmail.com",
        picture: "assets/images/vl_mujer_avatar.jpg",
        name: "María Lustig",
        issue: "RE: Copia de seguridad teléfono móvil",
        description: "Ok, estupendo. En cuanto regrese del hospital...",
        content: "Genial!\n    <br/>\n    <br/>\n    ".concat(re, "\n    \n    "),
        date: "5-12-2020",
        unread: false,
        categories: ["received"],
        attachment: {
            title: "CopiaSegMovil.zip",
            url: "http://vishub.org/pictures/18977.jpg",
        },
    }, {
        id: 9,
        from: "alexlustig@gmail.com",
        picture: "assets/images/vl_hijo_avatar.jpg",
        name: "Alex Lustig",
        issue: "Feliz cumpleaños",
        description: "¡Feliz cumpleaños papá!",
        content: "¡Feliz cumpleaños papá!",
        date: "25-10-2020",
        unread: false,
        categories: ["received"],
    },
];

export const chats = [{
    name: "María Lustig",
    msg: "Avísame cuando salgas de casa",
    photo: "/images/avatar.png",
    status: "offline",
}, {
    name: "Francisco",
    msg: "¿Te fué bien con la cerradura?",
    photo: "/images/avatar.png",
    status: "offline",
}, {
    name: "Alex Lustig",
    msg: "¡Feliz cumpleaños papá!",
    photo: "/images/avatar.png",
    status: "online",
}];
