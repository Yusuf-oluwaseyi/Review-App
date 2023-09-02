import { FaTimes } from 'react-icons/fa'
import { useContext } from 'react'
import Card from "../shared/Card"
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackItem({ item }) {
  const {deleteFeedback} = useContext(FeedbackContext)

  return (
    <Card reverse={false}>
    <div className="num-display">{item.rating}</div>
    <button onClick={() => deleteFeedback(item.id)} className='close'><FaTimes color='#c1fe00'/></button>
    <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem