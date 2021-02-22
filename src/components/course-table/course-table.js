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
        return(
            <div className="container-fluid">
{/*
                <Link to="/courses/grid">
                    <i className="fas fa-th float-right fa-2x"></i>
                </Link>
*/}
               {/*<h2>Course Table</h2>*/}
                <table className="table table-striped" responsive="sm">
                    <thead>
                    <tr>

                        <th scope="col" >Title
                        </th>
                        <th scope="col" className="d-none d-sm-table-cell">Owned by
                        </th>
                        <th scope="col" className="d-none d-sm-table-cell">Last modified on</th>

                        <th>

                        </th>
                        <th>

                        </th>
                        <th className="row fa-pull-right">
                            <div className="col-12 col-sm-3 ">
                            <Link>
                                <i className="fas fa-folder float-right" style={{marginLeft: "20px"}}></i>
                        </Link>
                            </div>


                        <Link>
                            <i className="fas fa-sort-alpha-up-alt float-right" style={{marginLeft: "20px"}}></i>
                        </Link>


                        <Link to="/courses/grid">
                            <i className="fas fa-th"  style={{marginLeft: "20px"}}></i>

                        </Link>

                        </th>

                    </tr>
                    </thead>
                    <tbody>
                    {/*<CourseRow title="CS5610" owner="me"/>*/}
                    {/*<CourseRow title="CS3200" owner="you"/>*/}
                    {/*<CourseRow title="CS5200" owner="him"/>*/}
                    {/*<CourseRow title="CS4550" owner="she"/>*/}
                    {
                        this.props.courses.map(course =>
                            <CourseRow
                                key={course._id}
                                deleteCourse={this.props.deleteCourse}
                                updateCourse={this.props.updateCourse}
                                course={course}
                                title={course.title}
                                lastModified={course.lastModified}
                                owner={course.owner}/>)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
