import { useState } from "react";
import Square from "./Square";

export default function () {

    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(''));

    function click(i) {
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
          } else {
            nextSquares[i] = "O";
          }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    return (
        <div className="board">
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => click(0)}/>
                <Square value={squares[1]} onSquareClick={() => click(1)}/>
                <Square value={squares[2]} onSquareClick={() => click(2)}/>
            </div>

            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => click(3)}/>
                <Square value={squares[4]} onSquareClick={() => click(4)}/>
                <Square value={squares[5]} onSquareClick={() => click(5)}/>
            </div>

            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => click(6)}/>
                <Square value={squares[7]} onSquareClick={() => click(7)}/>
                <Square value={squares[8]} onSquareClick={() => click(8)}/>
            </div>
        </div>
    )
}