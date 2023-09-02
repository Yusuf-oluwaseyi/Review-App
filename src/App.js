import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import FeedbackData from './Data/FeedbackData';
import AboutLinkIcon from './components/AboutLinkIcon';
import AboutPage from './Pages/AboutPage';
import { FeedbackProvider } from './Context/FeedbackContext';

function App() {
  const [feedback, setFeedback] = useState      (FeedbackData)
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
 
  return (
    <FeedbackProvider>
    <Router>
    <Header text='Obsession App'/>
    <div className="container">
    <Routes>
    <Route exact path='/' element={
      <>
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList handleDelete={deleteFeedback}/>
      </>
    }>
    </Route>
    <Route path='/about' element={<AboutPage/>} />
    </Routes>
    <AboutLinkIcon />
    </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
