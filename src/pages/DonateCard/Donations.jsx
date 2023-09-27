import swal from "sweetalert";



const Donations = ({donateCard}) => {

    const {id, image , card_content , card_description ,  price, colors } = donateCard || {}

    const handleAddToDonate = () => {

        const addDonationItemsArray = [];
 
        const donationItems = JSON.parse(localStorage.getItem('donation'))

        if(!donationItems){
            addDonationItemsArray.push(donateCard)
            localStorage.setItem('donation' , JSON.stringify(addDonationItemsArray))
            swal("Good job!", "Donation Added successfully!", "success");
        }
        else{

             const isExits =  donationItems.find(donate => donate.id == id)
             if(!isExits){
                addDonationItemsArray.push(...donationItems , donateCard)
                localStorage.setItem('donation' , JSON.stringify(addDonationItemsArray))
                swal("Good job!", "Donation Added successfully!", "success");
             }
             else{
                swal("All Ready Exist!", "No Duplicate!", "error");
             }



            
        }
        
     
    }

    return (
            <div className="card shadow-xl  relative py-10 ">
       
        <figure>
          <img className="w-full"
            src={image}
            alt=""
          />
        </figure>

       

        <div className="card-body">
          <h2 className="card-title">{card_description}</h2>
          <p>{card_content}</p>
          <div className="card justify-start  absolute  -mt-32 text-white">
           
            <button onClick={handleAddToDonate} className="p-3 rounded-lg bg-[#FF444A] text-white">Donate ${price}</button>
            
          
               
          </div>
         
        </div>
      </div>
      
    );
};

export default Donations;