import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database"
import { useSelector, useDispatch } from "react-redux";
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment,
} from "./assignmentsReducer";

function AssignmentList() {
  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">

      <li className="list-group-item">
        <button className="wd-buttons"
          onClick={() => dispatch(addAssignment({ ...assignment, course: courseId }))}>
          Cancel
        </button>
        <button className="wd-buttons"
          onClick={() => dispatch(updateAssignment(assignment))}>
          Save
        </button>
        <div>
          <input
          value={assignment.name}
          onChange={(e) =>
            dispatch(setAssignment({ ...assignment, name: e.target.value }))
          } />
          </div>

        
        <div><textarea
          value={assignment.description}
          onChange={(e) =>
            dispatch(setAssignment({ ...assignment, description: e.target.value }))
          } /></div>
        
      </li>



      {
        assignments
          .filter((assignment) => assignment.course === courseId)
          .map((assignment, index) => (
            <li key={index} className="list-group-item">


              <button className="wd-buttons"
                onClick={() => dispatch(setAssignment(assignment))}>
                Edit
              </button>
              <button className="wd-buttons"
                onClick={() => dispatch(deleteAssignment(assignment._id))}>
                Delete
              </button>




              <h3>{assignment.name}</h3>
              <p>{assignment.description}</p>
            </li>
          ))
      }
    </ul>
  );
}
export default AssignmentList;