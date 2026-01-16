import Categories from './Categories';
import ChatContact from './ChatContact';
import "../../assets/scss/mail/LeftMenu.scss";

export default function LeftMenu({ config = {}, chats, selectedCategory, getUnreadEmailsFromCategory, selectCategory, close, I18n }) {
    const { name, username, domain, photo } = config;

    return (
        <div className="col1">
            <div className="top1">
                <div className="menu1">
                    <img src="/images/back.png" alt="back" onClick={close} />
                </div>
            </div>
            <div className="user1">
                <div className="picture1"><img src={photo} alt={name} /></div>
                <div className="user_info">
                    <div className="name1">
                        <h2>{name}</h2>
                    </div>
                    <div className="mail1">{`${username}@${domain}`}</div>
                </div>
            </div>

            <Categories
                selectedCategory={selectedCategory}
                getUnreadEmailsFromCategory={getUnreadEmailsFromCategory}
                selectCategory={selectCategory}
                I18n={I18n}
            />

            <div className="contacts">
                {chats.map((contact, i) => (
                    <ChatContact
                        key={i}
                        photo={contact.photo}
                        name={contact.name}
                        msg={contact.msg}
                        status={contact.status}
                    />
                ))}
            </div>
        </div>
    );
}
