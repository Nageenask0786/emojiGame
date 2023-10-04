import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isGameInProgress} = props

  return (
    <nav className="navbar">
      <div className="score-card">
        <img
          className="emoji-logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="title">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="scores">
          <p className="score">Score: {currentScore}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
