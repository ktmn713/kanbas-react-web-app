import { Link, useParams, useLocation } from "react-router-dom";
import './CourseNavStyle.css'

function CourseNavigation() {
  const links = ["Home", "Modules", "Assignments", "Grades"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="list-group" style={{ width: 150 }}>
      <div className="wd-course-nav">
      {links.map((link, index) => (
        <div className="wd-course-nav">
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item wd-course-nav-item
           ${pathname.includes(link) && "wd-course-nav-active"}`}>
          {link}
        </Link>
        </div>
      ))}
    </div>
    </div>
  );
}


export default CourseNavigation;