import React from 'react'
import {Link, useParams} from "react-router-dom";
import lessonReducer from '../../reducers/lesson-reducer';
import moduleReducer from '../../reducers/module-reducer';
import topicReducer from "../../reducers/topic-reducer";
import titleReducer from "../../reducers/title-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "../../components/course-editor/module-list";
import LessonTabs from "././lesson-tabs";
import TopicPills from "./topic-pills";
import courseService from '../../services/course-service';
import lessonService from "../../services/lesson-service";
import CourseTitle from "./course-title";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    titleReducer: titleReducer
})

// const store = createStore(moduleReducer)
// const store = createStore(lessonReducer)
const store = createStore(reducer)

const CourseEditor = ({history}) => {
    const {layout,courseId, moduleId} = useParams();
    return (
        <Provider store={store}>
            <div>
                <h2 style={{fontSize:"2em"}}>
                    <Link to={`/course/${layout}`}>
                        <i className="fas fa-times"></i>
                    </Link>
                    <CourseTitle/>

                    {/*<i onClick={() => history.goBack()}
                       className="fas fa-times float-right"></i>*/}
                    {/*<i onClick={() => props.history.goBack()}*/}
                    {/*   className="fas fa-times float-right"></i>*/}
                </h2>
                <div className="row">
                    <div className="col-4">
                        <ModuleList/>
                    </div>
                    <div className="col-8">
                        <LessonTabs/>
                        <div>
                            <TopicPills/>
                        </div>
                    </div>
                </div>
            </div>
        </Provider>)}

export default CourseEditor
