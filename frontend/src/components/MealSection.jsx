import { useState } from 'react';

export default function MealSection({ title }) {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, input]);
      setInput('');
    }
  };

  return (
    <div className="bg-white border border-gray-300 rounded-xl p-4 shadow-sm w-full">
      {/* Fancy Header */}
      <h3 className="text-xl font-bold text-gray-800 font-serif">{title}</h3>

      {/* Items List or Empty Message */}
      {items.length > 0 ? (
        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1 mt-2">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-400 mt-1">No items added yet.</p>
      )}

      {/* Input + Add Button */}
      <div className="flex gap-2 mt-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
          placeholder={`Add ${title} item...`}
        />
        <button
          onClick={addItem}
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}
