import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";



const Donation = () => {


    const [donations , setDonations] = useState([])

    const [noFound , setNoFound] = useState(false)
    const [isShow , setIsShow] = useState(false)
   


    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donation'))
        if(donationItems){

            setDonations(donationItems)
        }
        else
        {
            console.log("No data Found");

            setNoFound("No Data Found")
        }



    } ,[])

    console.log(donations)

    return (
        <div>
            {
                noFound ? <p className="text-center">{noFound}</p> : <div>

            


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {
                           isShow ?  donations.map(donate => <DonationCard key={donate} donate={donate}></DonationCard>) 
                           :
                           donations.slice(0,4).map(donate => <DonationCard key={donate} donate={donate}></DonationCard>) 
                        }
                    </div>
                   
                   {
                    donations.length > 4 &&  <button onClick={() => setIsShow(!isShow)} className="px-5 py-2 bg-green-700 block mx-auto mt-10 text-white">{isShow? "See Less" : "See More"}</button>
                   }


                </div> 
            }
        </div>
    );
};

export default Donation;