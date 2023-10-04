import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="list-items">
      <button type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="img" />
      </button>
    </li>
  )
}

export default EmojiCard
