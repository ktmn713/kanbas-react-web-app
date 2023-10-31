import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './KanbasNavStyle.css';


import { FaUser } from "react-icons/fa";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";


function KanbasNavigation() {
  const links =
    ["Account",
      "Dashboard",
      "Courses",
      "Calendar",
      "Inbox",
      "History",
      "Studio",
      "Commons",
      "Help"];

  const linkToIcon = {
    Account: <FaUser className="wd-nav-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-nav-icon" />,
    Courses: <FaBook className="wd-nav-icon" />,
    Calendar: <FaCalendar className="wd-nav-icon" />,
    Inbox: <FaInbox className="wd-nav-icon" />,
    History: <FaClock className="wd-nav-icon" />,
    Studio: <FontAwesomeIcon icon={faClapperboard} className="wd-nav-icon" />,
    Commons: <FontAwesomeIcon icon={faRightFromBracket} className="wd-nav-icon" />,
    Help: <FontAwesomeIcon icon={faCircleQuestion} className="wd-nav-icon" />,
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group" style={{ width: 150 }}>
      <div className="wd-kanbas-nav">
        <div className="wd-kanbas-nav-item"><img src="https://images.credly.com/images/432ea12d-444b-42e7-a1d9-f5a3655fb948/blob.png" className="wd-nu-logo" alt="logo" />
        </div>
        {links.map((link, index) => (

          <Link
            key={index}
            to={`/Kanbas/${link}`}
            className={`list-group-item wd-kanbas-nav-item 
            ${pathname.includes(link) && "wd-kanbas-nav-active"}`}>
            {linkToIcon[link]} <br />
            {link}

        
          </Link>
        ))}

      </div>
    </div>

  );
}
export default KanbasNavigation;