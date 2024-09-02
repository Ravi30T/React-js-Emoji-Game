// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {scoreVal, onClickPlayAgain} = props

  const verifyScore = scoreVal === 12

  const onClickPlayAgainButton = () => {
    onClickPlayAgain()
  }

  return (
    <div>
      <div className="winOrLoseContainer">
        {verifyScore ? (
          <>
            <div className="scoreCardContainer">
              <h1 className="result-heading"> You Won </h1>
              <p className="bestScoreHeading"> Best Score </p>
              <p className="score"> {scoreVal}/12 </p>
              <button
                className="playAgain-Btn"
                onClick={onClickPlayAgainButton}
                type="button"
              >
                Play Again
              </button>
            </div>

            <div className="imgContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
                alt="win or lose"
                className="result-img"
              />
            </div>
          </>
        ) : (
          <>
            <div className="scoreCardContainer">
              <h1 className="result-heading"> You Lose </h1>
              <p className="bestScoreHeading"> Score </p>
              <p className="score"> {scoreVal}/12 </p>
              <button
                className="playAgain-Btn"
                onClick={onClickPlayAgainButton}
                type="button"
              >
                Play Again
              </button>
            </div>

            <div className="imgContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
                alt="win or lose"
                className="result-img"
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default WinOrLoseCard
