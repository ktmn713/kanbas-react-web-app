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

            <div className="wd-edit-course">
                <div className="wd-subtitle">Add Course</div>
                <input value={course.name} className="form-control" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                <input value={course.number} className="form-control" onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                <input value={course.startDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                <input value={course.endDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
            </div>

            <button className="wd-buttons" onClick={addNewCourse} > Add </button>
            <button className="wd-buttons" onClick={updateCourse} > Update </button>


            <div className="wd-subtitle">Published Courses ({courses.length})</div>
            <hr />
            <div className="card-deck wd-course-card-grid">
                {courses.map((course) => (
                    <Link key={course._id}
                        to={`/Kanbas/Courses/${course._id}`}
                        className="card">
                        <button className="wd-buttons" onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                        }}>
                            Edit Course
                        </button>

                        <img src="https://htmlcolorcodes.com/assets/images/colors/baby-blue-color-solid-background-1920x1080.png" class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{course.number}
                                
                                {course.name}</h5>
                                

                            <p className="card-text">{course._id} <button className="wd-buttons"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        deleteCourse(course._id);
                                    }}>
                                    Delete Course
                                </button></p>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
}
export default Dashboard;