import { Link } from "react-router-dom";

const Card = ({card}) => {

    const {id , image , card_title , card_description , colors } = card || {}


  return (
    <div>
       <Link to={`/donation/${id}`} > <div className="card shadow-lg" style={{ backgroundColor: colors.bg}}>
      <figure>
        <img
          src={image}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
        
          <div className="p-2 rounded-lg" style={{ backgroundColor: colors.bg ,  color:colors.textColor}} >{card_title}</div>
        </h2>
        <p className="font-bold text-xl" style={{color:colors.textColor}}>{card_description}</p>
        
      </div>
    </div></Link>
    </div>
  );
};

export default Card;
