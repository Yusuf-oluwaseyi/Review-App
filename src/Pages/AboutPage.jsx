import Card from "../shared/Card"
import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About This Project</h1>
            <p>This is a react app to leave reviews for our Obsession app that helps you schedule your goals</p>
            <p>Version: 1.0.0 </p>

            <p>
                <Link to="/">Go Back Home</Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage