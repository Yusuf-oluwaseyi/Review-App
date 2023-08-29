import { useState } from "react"
import Card from "../shared/Card"
import Button from "../shared/Button"

function FeedbackForm() {
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }

  return (
    <Card>
        <form>
            <h2>Please Rate Our Service</h2>
            {/* @todo -rating component */}
            <div className="input-group">
                <input onChange={handleChange} type="text" placeholder="Write your review" value={text}/>
                <Button type="submit" version='secondary'>Send</Button>
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm
