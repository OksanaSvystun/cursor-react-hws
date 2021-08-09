function Contact(props) {
  return (
    <div className="contact-container">
      <div className="user-info">
        {/* <img src={user_icon} className="user" alt="user"></img> */}
        <span >{`${props.contact.firstName} ${props.contact.lastName}`}</span>
        {/* <img className="gender" src={props.contact.gender === "male" ? male : props.contact.gender === "female" ? female : unknown} alt="gender"></img> */}
      </div>
      <p>{props.contact.phone}</p>
    </div>
  );
}

export default Contact;