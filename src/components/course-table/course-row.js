import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
    {
        course,
        lastModified="1/1/2021",
        owner="who knows?",
        deleteCourse,
        updateCourse
    }) => {
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(course.title)

    const saveCourse = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: title
        }
        updateCourse(newCourse)
    }

    return(

        <div className="row" style={{fontSize: "1em", borderBottom: "1px solid #cccccc", padding: "5px"}}>
            <div className="col-8 col-md-7 col-lg-6">
                {
                    editing &&
                    <input value={course.title} className="form-control"
                           onChange={(e) => setTitle(e.target.value)}
                           value={title} style={{fontSize: "0.9em", padding: "0px", paddingLeft: "15px"}}/>
                }
                {
                    !editing &&
                    <span className="">
                    <i className="fas fa-file" style={{marginRight: "10px", color: "blue"}}></i>
                    <Link to={`/courses/table/edit/${course._id}`}>
                    <span>{course.title}</span>
                    </Link>
                  </span>
                }
            </div>
            <div className="col-2 d-none d-md-block">me</div>
            <div className="col-2 d-none d-lg-block">1/1/2021</div>
            <div className="col-4 col-md-3 col-lg-2">
                {
                    editing &&
                    <span className="float-right">
                        {  editing &&
                            <i onClick={() => saveCourse()} style={{color: "green", marginLeft: "5px"}} className="fas fa-check"></i>
                        }
                        {editing &&
                      <i onClick={() => deleteCourse(course)} style={{color: "red", marginLeft: "5px"}} className="fas fa-trash"></i>
                        }

                  </span>
                }
                {
                    !editing &&
                    <i onClick={() => setEditing(true)}  style={{color: "blue"}}
                       className="fas fa-edit float-right"></i>
                }
            </div>
        </div>





















        /*<tr>
            <td>
                {
                    !editing &&
                    <Link to="/editor">
                        {course.title}
                    </Link>
                }
                {
                    editing &&
                    <input
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}/>
                }
            </td>
            <td scope="col" className="d-none d-sm-table-cell">{course.owner}</td>
            <td scope="col" className="d-none d-sm-table-cell">{course.lastModified}</td>
            <td>
            </td>
            <td>
            </td>
            <td>
                {editing &&
                <i onClick={() => deleteCourse(course)} className="fas fa-trash pull-right"></i>
                }
                {/!*<i onClick={() => setEditing((prevEditing) => !prevEditing)} className="fas fa-edit"></i>*!/}

                {
                    editing &&
                    <i onClick={() => saveCourse()} className="fas fa-check"></i>
                }

                {
                    !editing &&
                    <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
                }
            </td>

            <td>

            </td>
            <td>
                {/!*  <i onClick={() => deleteCourse(course)} className="fas fa-trash pull-right"></i>
                <i onClick={() => setEditing((prevEditing) => !prevEditing)} className="fas fa-edit"></i>

                {
                    editing &&
                    <i onClick={() => saveCourse()} className="fas fa-check"></i>
                }

                {
                    !editing &&
                    <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
                }

*!/}
            </td>

        </tr>
*/

       )
}

export default CourseRow
