const Card = (props) => {
  const { imgSrc, imgAlt, title, subtitle } = props;

  return (
    <div className="card">
      <div className="card-header">
        <img className="card-image" src={imgSrc} alt={imgAlt} />
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}

export default Card;