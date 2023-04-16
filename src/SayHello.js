import "./styles.css";
import { PropTypes } from "prop-types";

export default function SayHello({firstName, lastName}){
    return (
        <div>
            Hello {firstName} {lastName}!
        </div>
    )
}

SayHello.propTypes = {
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }