// src/pages/DailyLogPage.jsx
import { useState } from 'react';
import dayjs from 'dayjs';
import MealSection from '../components/MealSection';

const meals = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];

export default function DailyLogPage() {
  const [date, setDate] = useState(dayjs());

  const changeDay = (offset) => {
    setDate(date.add(offset, 'day'));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sticky Date Header */}
      <div className="sticky top-0 bg-white shadow z-10 p-4 flex items-center justify-between text-center">
        <button onClick={() => changeDay(-1)} className="text-xl px-3">←</button>
        <h2 className="text-md font-semibold">
          {date.format('dddd, MMMM D, YYYY')}
        </h2>
        <button onClick={() => changeDay(1)} className="text-xl px-3">→</button>
      </div>

      {/* Meal Sections */}
      <div className="p-4 space-y-4">
        {meals.map((meal) => (
          <MealSection key={meal} title={meal} />
        ))}
      </div>
    </div>
  );
}
