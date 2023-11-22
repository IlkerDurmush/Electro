import "./ComponentStyles/PricingContainer.css"
import example from "../Images/example.jpg"

interface ServiceInfo{
  service: string;
  servicePrice: number;
}

const PricingContainer = ({service, servicePrice}: ServiceInfo) => {
  return <>
    <div className="box">
      <div className="serviceImageBox">
        <img src={example} alt="Image of Service" className="serviceImage"/>
      </div>
      <div className="serviceInfo">
        {service} <br />
        {servicePrice}<span>лв.</span>
      </div>
    </div>
  </>;
};

export default PricingContainer;
