import { useState } from 'react';

export default function RangeSlider({
  sliderVal,
  setSliderVal,
  label,
  labelUnit,
  min,
  max,
}) {
  return (
    <div className="flex flex-row items-center gap-4 border border-teal-700 rounded-lg p-3">
      <p className="font-extralight">{label}</p>
      <input
        min={min}
        max={max}
        type="range"
        value={sliderVal}
        onChange={(e) => setSliderVal(e.target.value)}
        class="w-full h-3 bg-gray-200 accent-teal-500 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
      />
      <div className="flex flex-row gap-2 items-end tabular-nums">
        <p className="text-3xl">
          {`${sliderVal.length < 3 ? `0${sliderVal}` : sliderVal}`}{' '}
        </p>
        <p className="font-extralight">{labelUnit}</p>
      </div>
    </div>
  );
}
