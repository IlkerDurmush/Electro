import "./ComponentStyles/PricingContainer.css"

interface PriceInfo{
  service: string;
  servicePrice: number;
}

const PricingContainer = ({service, servicePrice}: PriceInfo) => {
  return <>
    <div className="box">
      <div>
        {service} <br />
        {servicePrice}
      </div>
    </div>
  </>;
};

export default PricingContainer;
