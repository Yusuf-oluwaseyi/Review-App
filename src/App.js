import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutLinkIcon from './components/AboutLinkIcon';
import AboutPage from './Pages/AboutPage';
import { FeedbackProvider } from './Context/FeedbackContext';

function App() {
 
  return (
    <FeedbackProvider>
    <Router>
    <Header text='Obsession App'/>
    <div className="container">
    <Routes>
    <Route exact path='/' element={
      <>
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
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
