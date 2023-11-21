import PricingContainer from "../Components/PricingContainer";

const Pricing = () => {
  return <>
  <h1>Price Of Our Services</h1>
  <PricingContainer service={"Svirka"} servicePrice={20}/>
  <PricingContainer service={"Analen seks"} servicePrice={40}/>
  <PricingContainer service={"Turska Chikiq"} servicePrice={30}/>
  <PricingContainer service={"Golden Shower"} servicePrice={10}/>
  </>;
};

export default Pricing;
