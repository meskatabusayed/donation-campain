import Card from "./Card";


const Cards = ({cards}) => {

    console.log(cards);

    return (
        <div className="py-20">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> 
            {
            cards?.map(card =>  <Card key={card.id}card={card}></Card> )
            }
           </div>
        </div>
    );
};

export default Cards;