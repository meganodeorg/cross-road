import { useEffect } from "react";
import { queueMove } from "../stores/player";
import useGameStore from "../stores/game";

export default function useEventListeners() {
  const status = useGameStore((state) => state.status);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (status === "over") return;

      if (event.key === "ArrowUp" || event.key === "w") {
        event.preventDefault();
        queueMove("forward");
      } else if (event.key === "ArrowDown" || event.key === "s") {
        event.preventDefault();
        queueMove("backward");
      } else if (event.key === "ArrowLeft" || event.key === "a") {
        event.preventDefault();
        queueMove("left");
      } else if (event.key === "ArrowRight" || event.key === "d") {
        event.preventDefault();
        queueMove("right");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [status]);
}