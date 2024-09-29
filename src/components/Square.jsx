export default function Square({value, onSquareClick}) {
    return <button className="square" onClick={onSquareClick}>
            <p className="text">{value}</p>
        </button>
}