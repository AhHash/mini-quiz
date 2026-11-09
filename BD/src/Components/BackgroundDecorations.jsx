import '../assets/decorations.css'
import image1 from "../assets/img/Nendou.jpg"
import image2 from "../assets/img/Saitama.jpg"
import image3 from "../assets/img/Nendou.jpg"
import image4 from "../assets/img/Saitama.jpg"
import image5 from "../assets/img/Nendou.jpg"

const decorationsData = [
  {
    id: 1,
    imageSrc: image1,
    style: {
      top: '4%',
      left: '4%',
      width: '100px',
      height: '115px',
      transform: 'rotate(-10deg)',
    },
    desktopSize: { width: '150px', height: '175px' }
  },
  {
    id: 2,
    imageSrc: image2,
    style: {
      top: '6%',
      right: '5%',
      width: '120px',
      height: '80px',
      transform: 'rotate(12deg)',
    },
    desktopSize: { width: '180px', height: '115px' }
  },
  {
    id: 3,
    imageSrc: image4,
    style: {
      bottom: '6%',
      left: '5%',
      width: '75px',
      height: '75px',
      transform: 'rotate(9deg)',
    },
    desktopSize: { width: '110px', height: '110px' }
  },
  {
    id: 4,
    imageSrc: image3,
    style: {
      bottom: '5%',
      right: '4%',
      width: '90px',
      height: '125px',
      transform: 'rotate(-14deg)',
    },
    desktopSize: { width: '135px', height: '185px' }
  },
  {
    id: 5,
    imageSrc: image5,
    style: {
      top: '45%',
      left: '3%',
      width: '65px',
      height: '65px',
      transform: 'rotate(-6deg)',
    },
    desktopSize: { width: '95px', height: '95px' }
  }
];

export const BackgroundDecorations = () => {
  return (
    <div className="decorations-layer" aria-hidden="true">
      {decorationsData.map((item) => (
        <div
          key={item.id}
          className="deco-item"
          style={{
            ...item.style,
            '--d-width': item.desktopSize.width,
            '--d-height': item.desktopSize.height,
          }}
        >
          <img 
            src={item.imageSrc} 
            alt="" 
            className="deco-img" 
          />
        </div>
      ))}
    </div>
  );
};