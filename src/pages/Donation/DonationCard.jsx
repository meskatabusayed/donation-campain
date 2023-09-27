

const DonationCard = ({donate}) => {


    const {image , card_title , card_description , colors, price } = donate || {}  


    return (
        <div>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" style={{ backgroundColor: colors.bg}}>
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img 
      src={image}
      alt="image"
      className="h-full w-full object-cove"
    />
  </div>
  <div className="p-6">
  <div className="p-2 rounded-lg" style={{ backgroundColor: colors.bg ,  color:colors.textColor}} >{card_title}</div>

    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {card_description}
    </h4>
    <p className="font-bold text-xl" style={{color:colors.textColor}}>${price}.00</p>
  
      <button
        
        type="button"
      >
       <div className="p-2 rounded-lg text-white" style={{ backgroundColor: colors.textColor}} >View Details</div>
       
      </button>
    
  </div>
</div>
        </div>


    );
};

export default DonationCard;