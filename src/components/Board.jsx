import Square from "./Square";

export default function () {
    return (
        <div className="board">
            <div className="board-row">
                <Square></Square>
                <Square></Square>
                <Square></Square>
            </div>

            <div className="board-row">
                <Square></Square>
                <Square></Square>
                <Square></Square>
            </div>

            <div className="board-row">
                <Square></Square>
                <Square></Square>
                <Square></Square>
            </div>
        </div>
    )
}