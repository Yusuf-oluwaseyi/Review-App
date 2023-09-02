import {motion, AnimatePresence} from 'framer-motion'
import FeedbackItem from "./FeedbackItem"


function FeedbackList({ feedback, handleDelete }) {
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
          <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
        </motion.div>
      ))}
    </AnimatePresence>
    </div>
  )
}

export default FeedbackList