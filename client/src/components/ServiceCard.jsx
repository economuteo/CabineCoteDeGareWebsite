import Wrapper from "../assets/wrappers/ServiceCard";
import { Link } from "react-router-dom";

const ServiceCard = ({ image, title, description, to }) => {
    return (
        <Wrapper>
            <Link to={to} className="card">
                <div className="card-image">
                    <img loading="lazy" src={image} alt={title} />
                </div>
                <p className="title">{title}</p>
                <p className="description">{description}</p>
            </Link>
        </Wrapper>
    );
};

export default ServiceCard;
