import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function RemainingCaloriesChart({
  calories,
  maxCalories,
  caloriesBurned,
}) {
  return (
    <div className="w-[200px]">
      <CircularProgressbar
        value={calories - caloriesBurned}
        maxValue={maxCalories}
        text={`${maxCalories - calories + caloriesBurned} LEFT`}
        styles={buildStyles({
          strokeLinecap: 'round',

          // Text size
          textSize: '12px',

          // Colors
          pathColor: '#14b8a6',
          textColor: '#14b8a6',
          trailColor: '#121212',
        })}
      />
    </div>
  );
}
