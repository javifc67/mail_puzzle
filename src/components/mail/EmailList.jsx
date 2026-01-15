import { useState } from 'react';
import "../../assets/scss/mail/EmailList.scss";

export default function EmailList({ selectedEmail, emails, selectEmail, highlightEmail }) {
    const [searchText, setSearchText] = useState("");

    const match = (email, term) => {
        if (term === "") return true;
        const textToSearch = `${email.issue || ""} ${email.description || ""} ${email.name || ""} ${email.date || ""}`;
        return textToSearch.toLowerCase().indexOf(term.toLowerCase()) !== -1;
    };

    return (
        <div className="col2">
            <div className="col2_top">
                <div className="searchbar" style={{ visibility: "visible" }}>
                    <input
                        type="text"
                        placeholder="Buscar..."
                        onChange={(e) => setSearchText(e.target.value)}
                        value={searchText}
                    />
                </div>
                <div className="icons" style={{ display: "none" }}>
                    <i className="fas fa-sync-alt" />
                    <i className="far fa-trash-alt" />
                </div>
            </div>
            <div className="email_list">
                {emails.map((email) => {
                    const isVisible = (searchText === "") || match(email, searchText);
                    const isSelected = selectedEmail && (email.id === selectedEmail.id);
                    const isHighlighted = email.categories.includes("highlighted");

                    return (
                        <div
                            key={email.id}
                            style={{ display: isVisible ? "" : "none" }}
                            className={`email ${email.unread ? 'unread' : ''} ${isSelected ? 'selected' : ''}`}
                        >
                            <a href="#" onClick={(e) => { e.preventDefault(); selectEmail(email.id); }}>
                                <div className="email_header">
                                    <div className="name">{email.name}</div>
                                    <div className="date">{email.date}</div>
                                </div>
                                <div className="email_main">
                                    <div className="email_actions">
                                        <i className="far fa-square" />
                                        <i
                                            className={`${isHighlighted ? "fas" : "far"} fa-star`}
                                            onClick={(e) => { e.stopPropagation(); highlightEmail(email.id); }}
                                        />
                                    </div>
                                    <div className="email_content">
                                        <div className="issue">{email.issue}</div>
                                        <div className="description">{email.description}</div>
                                        <div className="documents">
                                            {email.attachment && (
                                                <div className="document">
                                                    <div className="fa fa-file" />
                                                    <div className="name">{email.attachment.title}</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
