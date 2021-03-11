import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../../services/lesson-service'
import moduleService from "../../services/module-service";
import {Alert} from "react-bootstrap";

const LessonTabs = (
    {
        lessons=[
            {_id: "123", title: "Lesson A"},
            {_id: "123", title: "Lesson B"},
            {_id: "123", title: "Lesson C"}
        ],
        findLessonsForModule,
        updateLesson,
        createLesson,
        deleteLesson=(item) => alert("delete " + item._id),


    }) => {
    const {layout,courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        console.log("LOAD LESSONS FOR MODULE: " + moduleId)
         /*if(moduleId !== "undefined" && typeof moduleId !== "undefined") {

        }*/
        findLessonsForModule(moduleId)

    }, [moduleId])
    return(
        <div>
           {/* <h2>Lessons</h2>*/}
            <ul className="nav nav-pills mt-3">
                {
                    lessons.map(lesson =>

                        <li
                            className={`nav-link ml-1 ${lesson._id === lessonId ? 'active' : ''}`}>
                            <EditableItem
                                key={lesson._id}
                                /*active={lesson._id === lessonId}*/
                                updateItem={updateLesson}
                                deleteItem={deleteLesson}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                item={lesson}/>



                        </li>
                    )
                }
                <li className="nav-link ml-1">
                    <i onClick={() => createLesson(moduleId)} className="fas fa-plus float-right"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        console.log("LOAD LESSONS FOR MODULE:")
        console.log(moduleId)
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS",
                lessons
            }))
    },
    updateLesson: (lesson) =>
        lessonService.updateLesson(lesson._id, lesson)
            .then(status => dispatch({
                type: "UPDATE_LESSONS",
                lesson
            })),
    createLesson: (moduleId) => {
        console.log("CREATE LESSON FOR MODULE: " + moduleId)
        if(Object.is(moduleId, "undefined") || Object.is(moduleId,undefined))
        {
            alert('Please select a module first to create a lesson.')
        }
        else{
        lessonService
            .createLesson(moduleId, {title: "New Lesson"})
            .then(theActualLesson => dispatch({
                type: "CREATE_LESSON",
                lesson: theActualLesson
            }))
    }},
    deleteLesson: (item) =>
        lessonService.deleteLesson(item._id)
            .then(status => dispatch({
                type: "DELETE_LESSON",
                lessonToDelete: item
            }))
})

export default connect(stpm, dtpm)(LessonTabs)