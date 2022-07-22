import React from 'react';
import dynamic from 'next/dynamic';

const DynamicBackground = ({ currentQuiz }) => {
  const DynamicBg = dynamic(() => import(`../Background/Bg${currentQuiz.id}`));

  return <DynamicBg />;
};

function propsAreEqual(prevCurrentQuiz, nextCurrentQuiz) {
  return prevCurrentQuiz.id !== nextCurrentQuiz.id;
}

export default React.memo(DynamicBackground, propsAreEqual);
