export const FeedbackPage = ({ text, image, onNext }) => (
  <div className="content-container animate-page">
    <p className="playful-text">{text}</p>
    {image && (
      <img src={image} alt="Feedback" className="feedback-image" />
    )}
    <button className="cloud-button" onClick={onNext}>
      <span>次へ</span>
    </button>
  </div>
);