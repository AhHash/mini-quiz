import { useState } from 'react';
import './App.css';

import { questionsConfig } from './Data/questions';
import { StartPage } from './Components/StartPage';
import { EndPage } from './Components/EndPage';
import { FeedbackPage} from './Components/FeedbackPage'
import { QuestionPage } from './Components/QuestionPage';
import { BackgroundDecorations } from './Components/BackgroundDecorations';



function App() {
  const [appState, setAppState] = useState('start'); // 'start', 'question', 'success', 'fail', 'end'
  const [currentQIndex, setCurrentQIndex] = useState(0);

  const handleStart = () => {
    setAppState('question');
  };

  const handleNextQuestion = () => {
    if (currentQIndex + 1 < questionsConfig.length) {
      setCurrentQIndex((prev) => prev + 1);
      setAppState('question');
    } else {
      setAppState('end');
    }
  };

  const renderContent = () => {
    const currentQuestion = questionsConfig[currentQIndex];

    switch (appState) {
      case 'start':
        return <StartPage onStart={handleStart} />;
        
      case 'question':
        return (
          <QuestionPage 
            key={`q-${currentQuestion.id}`} // The key ensures state (like evasions) resets for each question
            questionData={currentQuestion} 
            onSuccess={() => setAppState('success')} 
            onFail={() => setAppState('fail')} 
          />
        );
        
      case 'success':
        return (
          <FeedbackPage 
            key={`success-${currentQuestion.id}`}
            text={currentQuestion.successFeedback} 
            image={currentQuestion.successImage} // Pass the success image
            onNext={handleNextQuestion} 
          />
        );
        
      case 'fail':
        return (
          <FeedbackPage 
            key={`fail-${currentQuestion.id}`}
            text={currentQuestion.failFeedback} 
            image={currentQuestion.failImage} // Pass the fail image
            onNext={handleNextQuestion} 
          />
        );
        
      case 'end':
        return <EndPage />;
        
      default:
        return null;
    }
  };

  return (
    <div className="app-wrapper animate-page">
      <BackgroundDecorations />
      {renderContent()}
    </div>
  );
}

export default App;