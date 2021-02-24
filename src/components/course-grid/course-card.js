import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {updateCourse} from "../../services/course-service";
import {deleteCourse} from "../../services/course-service";

const CourseCard = (
    {course,
        deleteCourse, updateCourse
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

    <div className="col-sm-6 col-md-4 col-lg-3 col-xs-12 col-xl-2 ">
        <div className="card" style={{height:"420px"}}>
            {/*{
                editing &&
                <span style={{position: "absolute", right: "10px", top: "0px", index: 1000, color: "red"}}>
                      <i style={{color: "green", marginLeft: "5px"}} className="fas fa-check fa-1x"></i>
                      <i style={{color: "red", marginLeft: "5px"}} className="fas fa-times fa-2x"></i>
                  </span>
            }*/}
            <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
                 className="card-img-top" alt="..."/>
            <div className="card-body">
                <div className="card-title">

                {
                    !editing &&
                    <Link to="/editor">
                        {course.title}
                    </Link>
                }
                {
                    editing &&
                    <input className="form-control"
                           onChange={(e) => setTitle(e.target.value)}
                           value={title}/>
                }
                </div>

                <p className="card-text">
                    Some description
                </p>
                <Link to="/editor">
                <a href="#" className="btn btn-primary">{course.title}</a>
                </Link>




                {editing &&
                <i onClick={() => deleteCourse(course)} className="fas fa-trash pull-right"
                   style={{ color:'red',position: 'absolute', top: 10, right: 10 }}></i>}
                {/*<i onClick={() => setEditing((prevEditing) => !prevEditing)} className="fas fa-edit"></i>*/}

                {
                    editing &&
                    <i onClick={() => saveCourse()} className="fas fa-check"
                       style={{ color: 'green',position: 'absolute', top: 10, right: 30 }}></i>
                }
                {
                    !editing &&
                    <i onClick={() => setEditing(true)} className="fas fa-edit float-right"
                       style={{color: "blue", position: "absolute", bottom: "10px", right: "5px"}}></i>
                }
            </div>
        </div>
    </div>

)}

export default CourseCard
