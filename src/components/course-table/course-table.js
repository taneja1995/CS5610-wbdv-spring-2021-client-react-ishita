import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";
import Table from "react-bootstrap/Table";

export default class CourseTable extends
    React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
<div style={{marginTop: "0px", padding: "15px"}}>
    <div className="row" style={{fontSize: "1em", borderBottom: "1px solid #aaaaaa", borderTop: "1px solid #aaaaaa", padding: "5px"}}>
       <div className="col-4 col-md-7 col-lg-6" style={{fontWeight:"bold"}}>Title</div>
        <div className="col-2 d-none d-md-block" style={{fontWeight:"bold"}}>Owned by</div>
        <div className="col-2 d-none d-lg-block" style={{fontWeight:"bold"}}>Last modified</div>
        <div className="col-8 col-md-3 col-lg-2">
            <Link to="/courses/grid">
            <i className="fas fa-th fa-1x float-right" style={{marginLeft: "20px"}}></i>
            </Link>
            <i className="fas fa-sort-alpha-up-alt fa-1 float-right" style={{marginLeft: "20px"}}></i>
            <i className="fas fa-folder fa-1 float-right" style={{marginLeft: "20px"}}></i>
        </div>
    </div>
    </div>
    <div>
    {
        this.props.courses.map(course =>
            <CourseRow
                key={course._id}
                deleteCourse={this.props.deleteCourse}
                updateCourse={this.props.updateCourse}
                course={course}
                title={course.title}
                lastModified={course.lastModified}
                owner={course.owner}/>)}

    </div>
            </div>



        )
    }
}
