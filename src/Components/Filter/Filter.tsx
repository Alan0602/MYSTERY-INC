import { useState } from "react";
import styles from "./Filter.module.css";

type Props = {
  visible: boolean;
};

export const Filter = (_props: Props) => {
  const [initialValue, setInitialValue] = useState<number>(15);
  const [finalValue, setFinalValue] = useState<number>(40);

  const handleMouseDownInitial = (event: React.MouseEvent<HTMLDivElement>) => {
    const initialX = event.clientX;

    const handleMouseMove = (event: MouseEvent) => {
      const deltaX = event.clientX - initialX;
      const newInitialValue = Math.min(
        Math.max(initialValue + deltaX, 0),
        finalValue - 2
      );
      setInitialValue(newInitialValue);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDownFinal = (event: React.MouseEvent<HTMLDivElement>) => {
    const initialX = event.clientX;

    const handleMouseMove = (event: MouseEvent) => {
      const deltaX = event.clientX - initialX;
      const newFinalValue = Math.max(
        Math.min(finalValue + deltaX, 100),
        initialValue + 2
      );
      setFinalValue(newFinalValue);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className={styles.WrapperFilter}>
      <h1>Filters</h1>
      <div>
        <div className={styles.Header}>
          <h3>Age</h3>
          <p>
            {initialValue} - {finalValue}
          </p>
        </div>
        <div className={styles.DragProgress}>
          <div
            className={styles.ProgressBar}
            style={{
              left: `${initialValue}%`,
              width: `${finalValue - initialValue}%`,
            }}
          >
            <div
              className={styles.DraggableHandle}
              onMouseDown={handleMouseDownInitial}
            />
            <div
              className={styles.DraggableHandle2}
              onMouseDown={handleMouseDownFinal}
            />
          </div>
        </div>
      </div>
      <button>Continue</button>
    </div>
  );
};
