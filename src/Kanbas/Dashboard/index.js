import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import './DashboardStyle.css';

function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }
      
) {

    return (
        <div>
            <div className="wd-header">Dashboard</div>
            <hr />
            <h5>Course</h5>
            <input value={course.name} className="form-control" onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <input value={course.number} className="form-control" onChange={(e) => setCourse({ ...course, number: e.target.value }) }/>
            <input value={course.startDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
            <input value={course.endDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />


            <button onClick={addNewCourse} > Add </button>
            <button onClick={updateCourse} > Update </button>


            <div className="wd-subtitle">Published Courses ({courses.length})</div>
            <h2></h2>
            <div className="card-deck wd-course-card-grid">
                {courses.map((course) => (
                    <Link key={course._id}
                        to={`/Kanbas/Courses/${course._id}`}
                        className="card">
                            <button
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>

                        <img src="https://htmlcolorcodes.com/assets/images/colors/baby-blue-color-solid-background-1920x1080.png" class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{course.number} 
                            <button
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>

                            {course.name}</h5>
                            <p className="card-text">{course._id}</p>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
}
export default Dashboard;