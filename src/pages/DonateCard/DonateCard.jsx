import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Donations from "./Donations";

const DonateCard = () => {
  const [donateCard, setDonateCard] = useState({});

  const { id } = useParams();

  const donateCards = useLoaderData();

  useEffect(() => {
    const findDonate = donateCards?.find((donate) => donate.id == id);

    setDonateCard(findDonate);
  }, [id, donateCards]);

  console.log(donateCard);

  return (
    <div>
      <Donations donateCard={donateCard}></Donations>
    </div>
  );
};

export default DonateCard;
