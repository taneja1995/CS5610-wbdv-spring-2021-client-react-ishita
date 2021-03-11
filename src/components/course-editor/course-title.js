import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import courseService from '../../services/course-service';

const CourseTitle =({
    course={},
    findTitleForCourse


}) =>{
 const {layout, courseId, moduleId}= useParams();
    useEffect(() => {
        // alert(courseId)
        findTitleForCourse(courseId)
    }, [])

    return(
        <>
            {course.title}
        </>
    )
}

const stpm =(state) => {
    return{
        course: state.titleReducer.course
    }
}

const dtpm =(dispatch) =>{
    return{
        findTitleForCourse: (courseId) =>{
            courseService.findCourse(courseId)
                .then(course => dispatch({
                    type:"FIND_COURSE_TITLE_FOR_COURSE_ID",
                    course: course
                }))
        }
    }
}
export default connect(stpm,dtpm)
(CourseTitle)