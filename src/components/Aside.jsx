import { GiClawSlashes } from "react-icons/gi";
import { GiMailbox } from "react-icons/gi";
import { GiPhone } from "react-icons/gi";
import { GiCalendar } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";

const Aside = () => {
  return (
    <aside className="sidebar">
        <div className="sidebar-info">
            <figure className="avatar-box">
                <img src="/images/mamun.jpg" alt="" width="80"/>
            </figure>
            <div className="info-content">
                <h1 className="name">Jose matheus</h1>
                <p className="title">Web Developer</p>
            </div>
            <button className="info_more-btn">
                <span>Show Contacts</span>
                <GiClawSlashes />
            </button>
        </div>

        {/* contact info */}
        <div className="sidebar-info_more">
            <hr className="separator2"/>
            <ul className="contacts-list">
                <li className="contact-item">
                    <div className="icon-box">
                    <GiMailbox />
                    </div>

                    <div className="contact-info">
                        <p className="contact-title">Email</p>
                        <a href="mailto:teste@gmail.com" className="contact-link">teste@gmail.com</a>
                    </div>
                </li>
                <li className="contact-item">
                    <div className="icon-box">
                    <GiPhone />
                    </div>

                    <div className="contact-info">
                        <p className="contact-title">phone</p>
                        <a href="tel:+8712345678" className="contact-link">+87 1234-5678</a>
                    </div>
                </li>
                <li className="contact-item">
                    <div className="icon-box">
                    <GiCalendar />
                    </div>

                    <div className="contact-info">
                        <p className="contact-title">Birthday</p>
                        <time datetime="2002-05-31" className="contact-link">31 maio 2002</time>
                    </div>
                </li>
                <li className="contact-item">
                    <div className="icon-box">
                    <FaLocationDot />
                    </div>

                    <div className="contact-info">
                        <p className="contact-title">localização</p>
                        <address className="contact-list">Petrolina - PE</address>
                    </div>
                </li>
            </ul>
        </div>
    </aside>
  )
}

export default Aside