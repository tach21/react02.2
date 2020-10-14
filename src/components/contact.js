import React from "react";
import "./contact.css";
import PropTypes from "prop-types";

const users = [
  {
    name: "Pikachu on Acid",
    avatar:
      "https://i.pinimg.com/originals/29/2b/6f/292b6f3e7a8376445b9c64b8d379749f.jpg",
    online: true
  },
  {
    name: "Joe Miller",
    avatar:
      "https://www.nautiljon.com/images/jeuxvideo_persos/00/33/joel_3533.jpg",
    online: false
  },
  {
    name: "Ellie Williams aka kiddo",
    avatar:
      "https://styles.redditmedia.com/t5_3hvpn/styles/communityIcon_9wfc0j4n9i331.png?width=256&s=5dd2688b4cd9e4ebe77f97fc4a3ed5c3fc1ca2de",
    online: true
  }
];

const Contact = (props) => {
  return (
    <div className="Contact">
      <img className="avatar" src={props.image} alt="an avatar" />
      <div>
        <p className="name">{props.name}</p>
        <div className="status">
          <div
            className={props.status ? "status-online" : "status-offline"}
          ></div>
          <p className="status-text">{props.status ? "online" : "offline"}</p>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.string.isRequired
  };


function ContactList(props) {
  return (
    <div>
      {users.map((item) => (
        <Contact image={item.avatar} name={item.name} status={item.online} />
      ))}
    </div>
  );
}

// export default Contact;
export default ContactList;
