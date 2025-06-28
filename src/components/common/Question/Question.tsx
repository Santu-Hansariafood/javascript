'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';
import BlurText from '@/components/animations/BlurText/BlurText';

interface QuestionProps {
  icon: LucideIcon;
  text: string;
}

const Question: React.FC<QuestionProps> = ({ icon: Icon, text }) => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div className="flex items-start bg-blue-100 rounded-lg p-4 shadow-md">
      <Icon className="text-blue-600 w-6 h-6 mt-1" />
      <div className="ml-3">
        <BlurText
          text={text}
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-blue-800 font-semibold text-lg"
        />
      </div>
    </div>
  );
};

export default Question;
