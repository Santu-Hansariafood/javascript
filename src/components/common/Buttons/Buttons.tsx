import React from 'react';

interface NavProps {
  onBack: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const Buttons: React.FC<NavProps> = ({ onBack, onNext, isFirst, isLast }) => {
  return (
    <div className="flex justify-between gap-4 mt-6">
      <button
        onClick={onBack}
        disabled={isFirst}
        className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 disabled:opacity-50"
      >
        Back
      </button>
      <button
        onClick={onNext}
        disabled={isLast}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Buttons;
