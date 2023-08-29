import { FaTimes } from 'react-icons/fa'
import Card from "../shared/Card"

function FeedbackItem({ item, handleDelete }) {

  return (
    <Card reverse={false}>
    <div className="num-display">{item.rating}</div>
    <button onClick={() => handleDelete(item.id)} className='close'><FaTimes color='#c1fe00'/></button>
    <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem