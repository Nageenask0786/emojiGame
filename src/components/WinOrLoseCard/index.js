// Write your code here.
import {Component} from 'react'

const winImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const loseGame = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

class WinOrLoseCard extends Component {
  render() {
    const {isWon, score, onClickPlayAgain} = this.props

    const imageUrl = isWon ? winImage : loseGame

    const altText = isWon ? 'happyFace' : 'sadFace'

    const gameStatus = isWon ? 'You Won' : 'You Lose'

    const label = isWon ? 'Best Score' : 'Score'

    return (
      <div>
        <div>
          <h1 className="heading">{gameStatus}</h1>
          <p className="para">{label}</p>
          <p className="score">{score}/12</p>
          <button className="button" type="button" onClick={onClickPlayAgain}>
            Play Again
          </button>
        </div>
        <div>
          <img src={imageUrl} alt={altText} />
        </div>
      </div>
    )
  }
}

export default WinOrLoseCard
