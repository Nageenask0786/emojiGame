import './index.css'

const NavBar = props => {
  const {score, topScore, isGameEnd} = props
  if (isGameEnd) {
    return null
  }
  return (
    <div className="navbar">
      <div className="card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="text">Emoji Game</h1>
      </div>
      <div className="score-cord">
        <p className="score">Score: {score}</p>
        <p className="top-score">Top Score: {topScore}</p>
      </div>
    </div>
  )
}

export default NavBar
