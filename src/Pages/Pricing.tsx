import PricingContainer from "../Components/PricingContainer";

const Pricing = () => {
  return <>
  <h1>Price Of Our Services</h1>
  <PricingContainer service={"Electrical Wiring"} servicePrice={20}/>
  <PricingContainer service={"Floor Heat Installation"} servicePrice={40}/>
  <PricingContainer service={"AC Mounting"} servicePrice={30}/>
  <PricingContainer service={"Other Electric"} servicePrice={10}/>
  </>;
};

export default Pricing;
