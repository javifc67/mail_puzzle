export default function Category({ selected, selectCategory, id, icon, title, quantity }) {
    return (
        <li
            className={selected ? "a1_selected" : null}
            onClick={() => selectCategory(id)}
        >
            <img src={icon} alt={title} />
            {title}
            <span>{quantity > 0 ? quantity : ""}</span>
        </li>
    );
}
