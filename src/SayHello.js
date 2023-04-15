import "./styles.css";

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