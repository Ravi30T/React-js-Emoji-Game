/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {scoreVal: 0, topScoreVal: 0, selectedEmojis: [], gameOver: false}

  onClickEmoji = id => {
    const {selectedEmojis} = this.state

    const verifyEmoji = selectedEmojis.includes(id)

    const updateSelectEmojisList = id

    if (selectedEmojis.length === 11 && !verifyEmoji) {
      this.setState(prevState => ({
        gameOver: !prevState.gameOver,
        topScoreVal: selectedEmojis.length + 1,
        scoreVal: prevState.scoreVal + 1,
      }))
    } else if (verifyEmoji) {
      this.setState(prevState => ({
        gameOver: !prevState.gameOver,
      }))
    } else {
      this.setState(prevState => ({
        selectedEmojis: [...prevState.selectedEmojis, updateSelectEmojisList],
        scoreVal: prevState.scoreVal + 1,
        topScoreVal: prevState.topScoreVal,
      }))
    }
  }

  onClickPlayAgain = () => {
    const {scoreVal} = this.state

    this.setState(prevState => ({
      gameOver: !prevState.gameOver,
      selectedEmojis: '',
      scoreVal: 0,
      topScoreVal:
        scoreVal > prevState.topScoreVal ? scoreVal : prevState.topScoreVal,
    }))
  }

  render() {
    const {emojisList} = this.props

    const {scoreVal, topScoreVal, gameOver} = this.state

    const randomEmojis = emojisList.sort(() => Math.random() - 0.5)

    return (
      <div className="bgContainer">
        <div>
          <NavBar
            scoreVal={scoreVal}
            topScoreVal={topScoreVal}
            gameResult={gameOver}
          />
        </div>

        <div className="mainContainer">
          {gameOver ? (
            <WinOrLoseCard
              scoreVal={scoreVal}
              onClickPlayAgain={this.onClickPlayAgain}
            />
          ) : (
            <div>
              <ul className="emojisContainer">
                {randomEmojis.map(each => (
                  <EmojiCard
                    key={each.id}
                    cardDetails={each}
                    onClickEmoji={this.onClickEmoji}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
