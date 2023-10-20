import { Link } from "react-router-dom";
import db from "../Database";
import './DashboardStyle.css';

function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses ({courses.length})</h2>
            <div className="card-deck wd-course-card-grid">
                {courses.map((course) => (
                    <Link key={course._id}
                        to={`/Kanbas/Courses/${course._id}`}
                        
                        className="card">
                            <img src="https://htmlcolorcodes.com/assets/images/colors/baby-blue-color-solid-background-1920x1080.png" class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{course.number} {course.name}</h5>
                            <p className="card-text">{course._id}</p>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
}
export default Dashboard;