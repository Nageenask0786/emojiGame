import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {emojiUrl, emojiName, id} = emojiDetails

  const click = () => {
    onClickEmoji(id)
  }
  return (
    <li className="list-items">
      <button type="button" onClick={click}>
        <img src={emojiUrl} alt={emojiName} className="img" key={id} />
      </button>
    </li>
  )
}

export default EmojiCard
