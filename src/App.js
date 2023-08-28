import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './Data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
 
  return (
    <>
    <Header text='Obsession App'/>
    <div className="container">
    <FeedbackList feedback={feedback} />
    </div>
    </>
  );
}

export default App;
