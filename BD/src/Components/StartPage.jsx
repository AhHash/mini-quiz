export const StartPage = ({ onStart }) => (
  <div className="content-container animate-page">
    <p className="playful-text">ミニクイズへようこそ！</p>
    <button className="cloud-button" onClick={onStart}>
      <span>スタート</span>
    </button>
  </div>
);