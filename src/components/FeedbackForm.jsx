import { useState, useContext, useEffect } from "react"
import RatingSelect from "./RatingSelect"
import Card from "../shared/Card"
import Button from "../shared/Button"
import FeedbackContext from "../Context/FeedbackContext"

function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [rating, setRating] = useState(10)
    const [message, setMessage] = useState('')
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleChange = (e) => {
        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be atleast 10 character')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }

            if(feedbackEdit.edit === true ) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }

            setText('')
        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>Please Rate Our Service</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input onChange={handleChange} type="text" placeholder="Write your review" value={text}/>
                <Button type="submit" isDisabled={btnDisabled} version='secondary'>Send</Button>
            </div>
            {message && <div className="message">{message}</div> }
        </form>
    </Card>
  )
}

export default FeedbackForm
