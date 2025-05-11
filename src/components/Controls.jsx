import { queueMove } from "../stores/player";
import useEventListeners from "../hooks/useEventListeners";
import useGameStore from "../stores/game";
import "./Controls.css";

export function Controls() {
  useEventListeners();
  const status = useGameStore((state) => state.status);

  const handleMove = (direction) => {
    if (status === "over") return;
    queueMove(direction);
  };

  return (
    <div id="controls">
      <div>
        <button onClick={() => handleMove("forward")}>▲</button>
        <button onClick={() => handleMove("left")}>◀</button>
        <button onClick={() => handleMove("backward")}>▼</button>
        <button onClick={() => handleMove("right")}>▶</button>
      </div>
    </div>
  );
}