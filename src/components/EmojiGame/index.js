import {Component} from 'react'

import EmojiCard from '../EmojiCard'

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

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

class EmojiGame extends Component {
  state = {topScore: 0, clickedEmojis: [], isGameEnd: false}

  shuffleEmojis = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isPresent = clickedEmojis.includes(id)
    if (isPresent) {
      this.finishGameAndSetTopScore(clickedEmojis.length)
    } else {
      if (emojisList.length - 1 === clickedEmojis.length) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  finishGameAndSetTopScore = newScore => {
    const {topScore} = this.state
    if (newScore > topScore) {
      this.setState({topScore: newScore})
    } else {
      this.setisGameEnd(true)
    }
  }

  restartGame = () => {
    this.setState({clickedEmojis: []})
  }

  setisGameEnd = value => {
    this.setState({isGameEnd: value})
  }

  renderWinOrLoseCard = () => {
    const emojisList = this.props
    const clickedEmojis = this.state
    const isWon = emojisList.length === clickedEmojis.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedEmojis.length}
        onClickPlayAgain={this.restartGame}
      />
    )
  }

  renderEmojiCard = () => {
    const shuffledemojisList = this.shuffleEmojis()
    return (
      <ul className="games">
        {shuffledemojisList.map(each => (
          <EmojiCard
            key={each.id}
            emojiDetails={each}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojis, topScore, isGameEnd} = this.state
    const {currentscore} = clickedEmojis.length
    return (
      <div>
        <div>
          <NavBar
            score={currentscore}
            topScore={topScore}
            isGameEnd={isGameEnd}
          />
        </div>
        <div className="emoji-game">
          {isGameEnd ? this.renderWinOrLoseCard() : this.renderEmojiCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
