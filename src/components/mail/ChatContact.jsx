export default function ChatContact({ status = "offline", photo, name, msg }) {
    return (
        <div className="contact" title={status === "offline" ? "Este usuario no está conectado en este momento" : ""}>
            <div className="picture2"><img src={photo} alt={name} /></div>
            <div className="contact_info">
                <div className="name2"><span>{name}</span><span className={status} /></div>
                <div className="mail2">{msg}</div>
            </div>
        </div>
    );
}
