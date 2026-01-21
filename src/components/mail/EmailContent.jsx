import "../../assets/scss/mail/EmailContent.scss";
import EmailContentBody from "./EmailContentBody";
export default function EmailContent({ config, email, highlightEmail, I18n }) {

    if (!email) {
        return (
            <div className="col3">
                <div className="no_mail">
                    <div className="nm_img">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 68.5">
                            <path
                                d="M13.1 7.738c-.4 0-.7.1-1 .2l36.2 32.3c.9.8 2.6.8 3.5 0L88 7.938c-.3-.1-.7-.2-1-.2H13.1zm-3.9 2.9c-.1.3-.2.7-.2 1.1v44c0 .4.1.7.2 1.1l26.8-22.2-26.8-24zm81.6 0l-26.8 24 26.8 22.2c.1-.3.2-.7.2-1.1v-44c0-.4-.1-.7-.2-1.1zM39 37.338l-26.9 22.2c.3.1.6.2 1 .2h73.8c.4 0 .7-.1 1-.2L61 37.338l-6.6 5.9c-2.5 2.2-6.3 2.2-8.8 0l-6.6-5.9z"
                                fill="#d3dde4"
                            />
                        </svg>
                    </div>
                    <div className="nm_text">{I18n.getTrans("i.noEmailSelected")}</div>
                </div>
            </div>
        );
    }

    const isHighlighted = email.categories.includes("highlighted");

    return (
        <div className="col3">
            <div className="mail_header">
                <div className="mail_issue">
                    <img
                        src={isHighlighted ? '/images/star.png' : '/images/star_empty.png'}
                        onClick={(e) => { e.stopPropagation(); highlightEmail(email.id); }}
                    />
                    <h1>{email.issue}</h1>
                </div>
            </div>

            <div className="mail_main">
                <div className="mail_top">
                    <div className="info">
                        {email.picture && <div className="profile_img">
                            <img src={email.picture} alt="" />
                        </div>}
                        <div className="contact">
                            <div className="name">
                                <h2>{email.name}</h2><span>&#60;{email.from}&#62;</span>
                            </div>
                            <div className="recipient">
                                {email.to ? <span>{I18n.getTrans("i.to")} {email.to}</span> : <span>{I18n.getTrans("i.to")} {config.username + "@" + config.domain}</span>}
                            </div>
                        </div>
                    </div>
                    <div className="date">{email.date}</div>
                </div>
                <div className="mail_content" >
                    <EmailContentBody content={email.content} attachment={email.attachment} I18n={I18n} />
                </div>
            </div>
        </div>
    );
}
