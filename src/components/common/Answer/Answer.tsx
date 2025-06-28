'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';
import BlurText from '@/components/animations/BlurText/BlurText';

interface AnswerProps {
  icon: LucideIcon;
  text: string;
}

const Answer: React.FC<AnswerProps> = ({ icon: Icon, text }) => {
  const handleAnimationComplete = () => {
    console.log('Answer animation completed!');
  };

  return (
    <div className="flex items-start bg-green-100 rounded-lg p-4 shadow-md">
      <Icon className="text-green-600 w-6 h-6 mt-1" />
      <div className="ml-3">
        <BlurText
          text={text}
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-green-800 italic text-base"
        />
      </div>
    </div>
  );
};

export default Answer;
