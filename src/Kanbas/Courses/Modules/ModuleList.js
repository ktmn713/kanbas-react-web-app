import React, {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = (module) => {
    client.updateModule(module).then((status) => {;
    dispatch(updateModule(module));
    });
  };


  return (
    <ul className="list-group">

      <li className="list-group-item">
        <button className="wd-buttons"
          onClick={handleAddModule}>
          Add
        </button>
        <button className="wd-buttons"
          onClick={() => handleUpdateModule(module)}>
          Update
        </button>
        <div>
          <input
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          } />
          </div>

        
        <div><textarea
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          } /></div>
        
      </li>



      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">


              <button className="wd-buttons"
                onClick={() => dispatch(setModule(module))}>
                Edit
              </button>
              <button className="wd-buttons"
                onClick={() => handleDeleteModule(module._id)}>
                Delete
              </button>


              <h3>{module.name}</h3>
              <p>{module.description}</p>
            </li>
          ))
      }
    </ul>
  );
}
export default ModuleList;