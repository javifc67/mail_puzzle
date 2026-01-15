import Category from './Category';

export default function Categories({ selectedCategory, getUnreadEmailsFromCategory, selectCategory }) {
    const categoryData = [
        { id: "received", title: "Recibidos", icon: "/images/inbox.png" },
        { id: "highlighted", title: "Destacados", icon: "/images/star.png" },
        { id: "important", title: "Pospuestos", icon: "/images/clock.png" },
        { id: "postponed", title: "Importantes", icon: "/images/important.png" },
        { id: "sent", title: "Enviados", icon: "/images/sent.png" },
        { id: "draft", title: "Borradores", icon: "/images/document.png" }
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
