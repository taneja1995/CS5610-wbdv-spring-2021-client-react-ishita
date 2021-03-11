import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicService, {findTopicsForLesson} from "../../services/topic-service"


const TopicPills = (
    {
        topics=[],
        findTopicsForLessons,
        updateTopic,
        createTopic,
        findTopicsForLesson,
        deleteTopic=(item) => alert("delete " + item._id),


    }) => {
    const {layout,courseId, moduleId, lessonId,topicId} = useParams();
    useEffect(() => {
        console.log("LOAD TOPICS FOR LESSONS: " + lessonId)
        /*f(lessonId !== "undefined" && typeof lessonId !== "undefined") {


        }*/
        findTopicsForLesson(lessonId)

    }, [lessonId])
    return(
        <div>
           {/* <h2>Topics</h2>*/}
            <ul className="nav nav-pills mt-3">
                {
                    topics.map(topic =>
                        <li className={`nav-link ml-1 ${topic._id === topicId ? 'active' : ''}`}>
                            <EditableItem
                                key={topic._id}
                                /*active={lesson._id === lessonId}*/
                                updateItem={updateTopic}
                                deleteItem={deleteTopic}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                item={topic}/>
                        </li>
                    )
                }
                <li className="nav-link ml-1">
                    <i onClick={() => createTopic(lessonId)} className="fas fa-plus"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => ({
    topics : state.topicReducer.topics
})
const dtpm = (dispatch) => ({
    findTopicsForLesson: (lessonId) => {
        console.log("LOAD TOPICS FOR LESSONS:")
        console.log(lessonId)
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS",
                topics
            }))
    },
    updateTopic: (topic) =>
        topicService.updateTopic(topic._id, topic)
            .then(status => dispatch({
                type: "UPDATE_TOPICS",
                topic
            })),
    createTopic: (lessonId) => {
        console.log("CREATE TOPIC FOR LESSON: " + lessonId)
        if(Object.is(lessonId,undefined) ||  Object.is(lessonId,"undefined"))
        {
            alert('Please select a lesson before creating a topic.')
        }
        else{
        topicService
            .createTopic(lessonId, {title: "New Topic"})
            .then(theActualTopic => dispatch({
                type: "CREATE_TOPIC",
                topic: theActualTopic
            }))
    }},
    deleteTopic: (item) =>
        topicService.deleteTopic(item._id)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topicToDelete: item
            }))
})

export default connect(stpm, dtpm)(TopicPills)