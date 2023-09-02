import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from '../Context/FeedbackContext'


function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)

  if(!feedback || feedback.length === 0) {
    return <h2>No feedback yet</h2>
  }

  return (
    <div className="feedback-list">
    <AnimatePresence>
      {feedback.map((item) => (
        <motion.div
          key={item.id}
          initial={{ scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
          type: "spring",
          stiffness: 260,
          damping: 20 }}
        >
          <FeedbackItem key={item.id} item={item} />
        </motion.div>
      ))}
    </AnimatePresence>
    </div>
  )
}

export default FeedbackList