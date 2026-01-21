import { MAIL_CATEGORIES } from '../../constants/constants';
import Category from './Category';

export default function Categories({ selectedCategory, getUnreadEmailsFromCategory, selectCategory, I18n }) {
    const categoryData = [
        { id: MAIL_CATEGORIES.RECEIVED, title: I18n.getTrans("i.categories.received"), icon: "/images/inbox.png" },
        { id: MAIL_CATEGORIES.HIGHLIGHTED, title: I18n.getTrans("i.categories.highlighted"), icon: "/images/star.png" },
        { id: MAIL_CATEGORIES.IMPORTANT, title: I18n.getTrans("i.categories.important"), icon: "/images/important.png" },
        { id: MAIL_CATEGORIES.POSTPONED, title: I18n.getTrans("i.categories.postponed"), icon: "/images/clock.png" },
        { id: MAIL_CATEGORIES.SENT, title: I18n.getTrans("i.categories.sent"), icon: "/images/sent.png" },
        { id: MAIL_CATEGORIES.DRAFT, title: I18n.getTrans("i.categories.draft"), icon: "/images/document.png" }
    ];

    return (
        <div className="actions1">
            <ul>
                {categoryData.map(cat => (
                    <Category
                        key={cat.id}
                        id={cat.id}
                        title={cat.title}
                        selected={selectedCategory === cat.id}
                        quantity={getUnreadEmailsFromCategory(cat.id).length}
                        icon={cat.icon}
                        selectCategory={selectCategory}
                    />
                ))}
            </ul>
        </div>
    );
}
