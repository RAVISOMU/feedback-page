import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackGiven: false}

  onFeedback = () => {
    this.setState({isFeedbackGiven: true})
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-app-bg-card">
        <h1 className="feedback-description">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="feedback-app-list">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id} className="emoji-item">
              <button
                type="button"
                className="button"
                onClick={this.onFeedback}
              >
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji"
                />
                <p className="emoji-text">{eachEmoji.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderFeedbackCompleted = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="feedback-app-bg-card">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="greeting">Thank You!</h1>
        <p className="message">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackGiven} = this.state

    return (
      <div className="feedback-app-bg-container">
        {isFeedbackGiven
          ? this.renderFeedbackCompleted()
          : this.renderFeedbackQuestion()}
      </div>
    )
  }
}

export default Feedback
