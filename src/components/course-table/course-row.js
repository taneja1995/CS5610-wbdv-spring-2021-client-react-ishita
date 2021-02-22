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

        <tr>
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
                {/*<i onClick={() => setEditing((prevEditing) => !prevEditing)} className="fas fa-edit"></i>*/}

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
                {/*  <i onClick={() => deleteCourse(course)} className="fas fa-trash pull-right"></i>
                <i onClick={() => setEditing((prevEditing) => !prevEditing)} className="fas fa-edit"></i>

                {
                    editing &&
                    <i onClick={() => saveCourse()} className="fas fa-check"></i>
                }

                {
                    !editing &&
                    <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
                }

*/}
            </td>

        </tr>


       )
}

export default CourseRow
