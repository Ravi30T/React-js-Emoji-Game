// Write your code here.

import './index.css'

const NavBar = props => {
  const {scoreVal, topScoreVal, gameResult} = props

  const navBarStyling = gameResult === true

  const newStyle = navBarStyling ? 'gameOverNavContainer' : 'navContainer'

  return (
    <nav className={newStyle}>
      {gameResult ? (
        <>
          <div className="navLogocontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              className="logo"
              alt="emoji logo"
            />
            <h1 className="navHeading"> Emoji Game </h1>
          </div>
        </>
      ) : (
        <>
          <div className="navLogocontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              className="logo"
              alt="emoji logo"
            />
            <h1 className="navHeading"> Emoji Game </h1>
          </div>

          <div className="navScoreContainer">
            <p className="nav-score"> Score: {scoreVal} </p>
            <p className="top-score"> Top Score: {topScoreVal} </p>
          </div>
        </>
      )}
    </nav>
  )
}

export default NavBar
