import { useState, useRef } from 'react';

export const QuestionPage = ({ questionData, onSuccess, onFail }) => {
  const [incorrectClicks, setIncorrectClicks] = useState(0);
  // Initialize translation at 0, 0
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  
  const yesButtonRef = useRef(null);
  const noButtonRef = useRef(null);

  const handleIncorrectClick = () => {
    if (incorrectClicks >= 6) {
      onFail();
      return;
    }
    
    setIncorrectClicks((prev) => prev + 1);

    if (yesButtonRef.current && noButtonRef.current) {
      const yesRect = yesButtonRef.current.getBoundingClientRect();
      const noRect = noButtonRef.current.getBoundingClientRect();
      
      // 1. Find the base position by subtracting the current translation 
      // from the current bounding box position.
      const baseX = noRect.left - noButtonPos.x;
      const baseY = noRect.top - noButtonPos.y;
      
      const padding = 20; 
      
      // 2. Calculate the minimum and maximum translation offsets allowed 
      // relative to the base position to keep the button inside the viewport.
      const minTx = -baseX + padding;
      const maxTx = window.innerWidth - (baseX + noRect.width) - padding;
      
      const minTy = -baseY + padding;
      const maxTy = window.innerHeight - (baseY + noRect.height) - padding;
      
      let randomTx, randomTy;
      let isOverlapping = true;
      let attempts = 0;

      while (isOverlapping && attempts < 50) {
        // Generate random translation offsets within the safe boundaries
        randomTx = minTx + (Math.random() * (maxTx - minTx));
        randomTy = minTy + (Math.random() * (maxTy - minTy));

        // Calculate hypothetical absolute screen position for overlap checking
        const absX = baseX + randomTx;
        const absY = baseY + randomTy;

        const buffer = 30;
        const overlapX = absX < yesRect.right + buffer && (absX + noRect.width) > yesRect.left - buffer;
        const overlapY = absY < yesRect.bottom + buffer && (absY + noRect.height) > yesRect.top - buffer;
        
        if (!(overlapX && overlapY)) {
          isOverlapping = false;
        }
        attempts++;
      }

      setNoButtonPos({ x: randomTx, y: randomTy });
    }
  };

  return (
    <div className="content-container animate-page">
      <p className="playful-text">{questionData.questionText}</p>
      
      <div className="button-group">
        <button 
          ref={yesButtonRef}
          className="cloud-button" 
          onClick={onSuccess}
          style={{ 
            transform: `scale(${1 + incorrectClicks * 0.15})`,
            transformOrigin: 'center center',
            transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            zIndex: 10
          }}
        >
          <span>{questionData.yesText}</span>
        </button>
        
        <button 
          ref={noButtonRef}
          className="cloud-button evade-button" 
          onClick={handleIncorrectClick}
          style={{
            position: 'relative',
            transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`,
            zIndex: 100
          }}
        >
          <span>{questionData.noText}</span>
        </button>
      </div>
    </div>
  );
};