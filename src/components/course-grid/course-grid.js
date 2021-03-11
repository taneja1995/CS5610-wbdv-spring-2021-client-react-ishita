import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import CourseRow from "../course-table/course-row";
import {updateCourse} from "../../services/course-service";

const CourseGrid = ({courses,deleteCourse, updateCourse}) =>
    <div className="container-fluid">
    <div className="row" style={{fontSize: "1.2em", fontWeight: "bold", marginTop: "10px"}}>
        <div className="col-5 d-none d-md-block">
            Recent Documents
        </div>
        <div className="col-4 d-none d-md-block">
            Owned by me
            <i className="fas fa-caret-down"></i>
        </div>
        <div className="col-12 col-md-3">
            <Link to="/course/table">
            <i className="fas fa-list float-right" style={{marginLeft: "20px"}}></i>
            </Link>
            <i className="fas fa-sort-alpha-up-alt float-right" style={{marginLeft: "20px"}}></i>
            <i className="fas fa-folder float-right" style={{marginLeft: "20px"}}></i>
        </div>
        <div className="row">
            {
                courses.map(course =>
                    <CourseCard  key={course._id}
                        course={course}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}/>

                )
            }
        </div>
    </div>
    </div>



  /* <div>
        {/!*<Link to="/courses/table">
            <i className="fas fa-list fa-2x float-right"></i>
        </Link>
        <h2>Course Grid</h2>*!/}
        <div className="row">
            {
                courses.map(course =>
                    <CourseCard course={course}/>
                )
            }
        </div>
    </div>
*/
export default CourseGrid
