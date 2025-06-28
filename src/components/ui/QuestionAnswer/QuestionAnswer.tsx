'use client';

import React, { Suspense, useEffect, useState } from 'react';
const Cards = dynamic(() => import('@/components/common/Cards/Cards'));
const Question = dynamic(() => import('@/components/common/Question/Question'));
const Answer = dynamic(() => import('@/components/common/Answer/Answer'));
const Buttons = dynamic(() => import('@/components/common/Buttons/Buttons'));
import { HelpCircle, CheckCircle } from 'lucide-react';
import dynamic from 'next/dynamic';

interface QAItem {
  id: number;
  question: string;
  answer: string;
}

const QuestionAnswer = () => {
  const [data, setData] = useState<QAItem[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch('/data/data.json')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error('Failed to load data:', err));
  }, []);

  if (data.length === 0) return <div className="text-center mt-10">Loading...</div>;

  const current = data[index];

  return (
    <Suspense fallback={<p>Loading...</p>}>
    <div className="flex justify-center items-center min-h-screen p-6 bg-gradient-to-br from-blue-50 to-white">
      <Cards title={`Question ${current.id}`} description="">
        <div className="space-y-6">
          <Question icon={HelpCircle} text={current.question} />
          <Answer icon={CheckCircle} text={current.answer} />
          <Buttons
            onBack={() => setIndex((i) => i - 1)}
            onNext={() => setIndex((i) => i + 1)}
            isFirst={index === 0}
            isLast={index === data.length - 1}
          />
        </div>
      </Cards>
    </div>
    </Suspense>
  );
};

export default QuestionAnswer;
