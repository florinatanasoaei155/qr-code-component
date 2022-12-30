import './styles/index.scss';
import QrImage from './images/image-qr-code.png';
import Card from './components/Card';

const App = () => {
  return (
    <div className="page-wrapper">
      <Card 
        imgSrc={QrImage}
        imgAlt="Scan QR Code"
        title="Improve your front-end skills by building projects"
        subtitle="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
      />
    </div>
  );
}

export default App;
