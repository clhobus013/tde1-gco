import Square from "./Square";

export default function () {
    return (
        <div className="board">
            <div className="board-row">
                <Square value="1"></Square>
                <Square value="1"></Square>
                <Square value="1"></Square>
            </div>

            <div className="board-row">
                <Square value="1"></Square>
                <Square value="1"></Square>
                <Square value="1"></Square>
            </div>

            <div className="board-row">
                <Square value="1"></Square>
                <Square value="1"></Square>
                <Square value="1"></Square>
            </div>
        </div>
    )
}