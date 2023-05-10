import {Component} from 'react'

import EmojiCard from '../EmojiCard'

import NavBar from '../NavBar'

import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
    clicked: false,
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
    clicked: false,
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
    clicked: false,
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
    clicked: false,
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
    clicked: false,
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
    clicked: false,
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
    clicked: false,
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
    clicked: false,
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
    clicked: false,
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
    clicked: false,
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
    clicked: false,
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
    clicked: false,
  },
]

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, cards: emojisList}

  clickCount = id => {
    const {cards} = this.state
    cards.find(x => {
      if (x.id === id) {
        this.setState(prevState => ({score: prevState.score + 1}))
        cards.sort(() => Math.random() - 0.5)
      } else {
        this.endGame()
      }

      return true
    })
  }

  endGame = () => {
    const {score, topScore} = this.state
    if (score > topScore) {
      this.setState({topScore: score})
    } else {
      this.setState({score: 0})
    }
    return true
  }

  render() {
    const {score, topScore} = this.state
    return (
      <div>
        <div>
          <NavBar score={score} topScore={topScore} />
        </div>
        <div className="emoji-game">
          <ul className="games">
            {emojisList.map(each => (
              <EmojiCard
                emojiDetails={each}
                key={each.id}
                clickCount={this.clickCount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame
