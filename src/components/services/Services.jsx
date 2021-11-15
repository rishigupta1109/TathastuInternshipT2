import "../../assets/css/Services.css";
import wd from "../../assets/images/webdev.jpg";
import ad from "../../assets/images/appdev.jpg";
import sd from "../../assets/images/softdev.jpg";
import ld from "../../assets/images/logodesigning.jpg";
import dm from "../../assets/images/digitalmarketing.jpg";
import Card from "./card";
const serviceArrayOne = [
    { name:"Web Development",src:wd},
    { name:"App Development",src:ad},
]
const ServicearrayTwo=[{ name:"Software Development",src:sd},
{ name:"Logo designing",src:ld},
{ name: "Digital Marketing", src:dm}]
const Services = () => {
    return (
        <div className="Services">
         
            <div className="row">
                {serviceArrayOne.map((element, index) => {
                    return <Card img="serviceimg1" src={element.src} content={element.name} key={index}></Card>
                })}
            </div>
            <div className="row">
                {ServicearrayTwo.map((element, index) => {
                    return <Card img="serviceimg2" src={element.src} content={element.name} key={index}></Card>
                })}
            </div>
        </div>
    )
}
export default Services;