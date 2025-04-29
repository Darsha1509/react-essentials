export default function TabButton({ children }) {
    function handleClick() {
        console.log("Hello handler!")
    }

    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    );
}