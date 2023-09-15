import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
            {
                id: 1,
                rating: 7,
                text: `I'm rating this app a 7, it fulfilled it goal for me.`,
            },
            {
                id: 2,
                rating: 4,
                text: `I couldn't figure out the UI`,
            },
            {
                id: 3,
                rating: 10,
                text: 'Best Webapp I have ever used, Help me align my tasks',
            }
    ])

    //update edit feedback
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // Add feedback to item
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
      }

      // Delete feedback item
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
          setFeedback(feedback.filter((item) => item.id !== id))
        }
      }

    //   Edit feedback
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
            )
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext