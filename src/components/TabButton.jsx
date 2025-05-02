export default function TabButton({ onSelect, children, isSelected }) {
    return (
        <li>
            <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
        </li>
    );
}