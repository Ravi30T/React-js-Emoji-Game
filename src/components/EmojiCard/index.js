// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {cardDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = cardDetails

  const onClickEachEmoji = () => {
    onClickEmoji(id)
  }

  return (
    <li className="listItem">
      <button
        className="eachCardContainer"
        type="button"
        onClick={onClickEachEmoji}
      >
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
