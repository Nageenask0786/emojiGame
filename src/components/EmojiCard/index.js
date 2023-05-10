import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickCount} = props
  const {emojiUrl, emojiName, id} = emojiDetails

  const click = () => {
    clickCount(id)
  }
  return (
    <li className="list-items">
      <button type="button" onClick={click}>
        <img src={emojiUrl} alt={emojiName} className="img" />
      </button>
    </li>
  )
}

export default EmojiCard
