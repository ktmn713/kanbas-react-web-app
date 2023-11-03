import { Link, useLocation } from "react-router-dom";
import './AccountNavStyle.css'

function AccountNavigation() {
  const links = ["Notifications",
    "Profile",
    "Files",
    "Settings",
    "ePortfolios",
    "Shared Content",
    "The Hub",
    "Qwickly Course Tools",
    "Global Announcements"];

  const { pathname } = useLocation();
  return (

      <div className="list-group" style={{ width: 150 }}>
        <div className="wd-acc-nav">
          {links.map((link, index) => (
            <div className="wd-acc-nav">
              <Link
                key={index}
                to={`/Kanbas/Account/${link}`}
                className={`list-group-item wd-acc-nav-item
           ${pathname.includes(link) && "wd-acc-nav-active"}`}>
                {link}
              </Link>
             
            </div>
    
          ))}
        </div>
      </div>

  );
}


export default AccountNavigation;