import "../../assets/scss/mail/EmailContent.scss";
export default function EmailContentBody({ content, attachment, I18n }) {
    return (

        <div className="mail_content_body" >
            <div className="body">

                {(content.html && content.html.trim().length > 0)
                    ? <div dangerouslySetInnerHTML={{ __html: content.html }} />
                    : <>
                        {content.img && <img className="body_img" src={content.img} />}
                        {content.body && content.body.map((line, index) => (
                            <div key={index}><br /><p>{line}</p></div>
                        ))}
                    </>}
                {attachment && (
                    <a href={attachment.url} rel="noopener noreferrer" target="_blank">
                        <div className="document">
                            <img src="/images/document.png" alt={attachment.title} />
                            <div className="name">{attachment.title}</div>
                        </div>
                    </a>
                )}
            </div>
            {content.response && <div className="response">
                <p style={{ fontWeight: "bold" }}>{I18n.getTrans("i.response.1")} {content.response.date}, {content.response.name} &lt;{content.response.from}&gt; {I18n.getTrans("i.response.2")}:</p>
                <EmailContentBody content={content.response.content} attachment={content.response.attachment} I18n={I18n} />
            </div>}
        </div>
    );
}
