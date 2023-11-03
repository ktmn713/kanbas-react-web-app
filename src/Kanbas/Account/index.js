import { Navigate, Route, Routes, useParams } from "react-router-dom";
import AccountNavigation from "./AccountNavigation";
import { FaBars } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import './AccountStyle.css'


function Account() {
    return (

        



        <div>
            <div className="wd-header">
                 <FaBars className="wd-icons" />
               Katie Nguyen's Profile
               <hr />
            </div>
       <AccountNavigation />
        
        <div>
          <div
            className="overflow-y-scroll position-fixed bottom-0 end-0"
            style={{
              left: "320px",
              top: "110px",
            }}
          >
        <div class="wd-content">

<FaUser className="wd-profile-icon"/>

<button className="wd-buttons">Edit Profile</button>

<h1>Katie Nguyen</h1>


<div className="wd-subtitle">Contact</div>

<div class="wd-profile-text">No registered services, you can add some on the <a class="wd-profile-link" href="#">settings</a> page. </div>

<div className="wd-subtitle">Biography</div>

<div class="wd-profile-text">Student, Computer Engineering</div>

<div class="wd-profile-subtitle">Links</div>

<a class="wd-profile-link" href="https://www.youtube.com/">
    <div class="wd-profile-text">
        <i class="fa-solid fa-link"></i>
        <span class="wd-profile-link">YouTube</span>
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </div>
</a>

</div>
            
          </div>
        </div>
  
      </div>


    );
}
export default Account;