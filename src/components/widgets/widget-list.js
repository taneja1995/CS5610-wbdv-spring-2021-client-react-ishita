import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import widgetService from "../../services/widget-service"
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {Alert} from "react-bootstrap";


const WidgetList = ({widgets=[], findWidgetsForTopic,
    createWidget,
    updateWidget,
    deleteWidget/*=(_widget) => alert("delete" + _widget.id)*/,

                    }) => {
    const {layout,courseId, moduleId, lessonId,topicId,wid} = useParams();
    // TODO: move all state handling to widgets-reducer.js
    /*const [widgets, setWidgets] = useState([])*/
   /* const [widget, setWidget] = useState({})*/
    useEffect(() => {
        // TODO: move all server communication to widgets-service.js
        console.log("LOAD WIDGETS FOR A TOPIC"+ topicId)
       /* fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
            .then(response => response.json())
            .then(widgets => setWidgets(widgets))*/
        findWidgetsForTopic(topicId)
    }, [topicId])
    return(
        <div>
            <i onClick={()=>createWidget(topicId)} className="fas fa-plus float-right fa-2x"></i>
            <h2>Widget List</h2>
            <ul className="list-group">
                {
                    widgets.map(_widget =>
                        <li key={_widget.id} className={`list-group-item ${wid === _widget.id ? 'active' : ''}`}>
                            {/*{
                                _widget.id === widget.id &&
                                <>
                                    <i onClick={() => {deleteWidget(widget)
                                        setWidget({})}
                                    } className="fas fa-trash float-right"></i>
                                    <i onClick={() => {
                                        updateWidget(widget)
                                        setWidget({})
                                    }} className="fas fa-check float-right"></i>
                                </>
                            }
                            {
                                _widget.id !== widget.id &&
                                <i onClick={() => setWidget(_widget)} className="fas fa-cog float-right" ></i>
                            }*/}
                            {
                                _widget.type === "HEADING" &&
                                <HeadingWidget
                                    to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${_widget.id}`}
                                    deleteItem={deleteWidget}
                                    updateItem={updateWidget}
                                    _widget={_widget}/>
                            }
                            {
                                _widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${_widget.id}`}
                                    deleteItem={deleteWidget}
                                    updateItem={updateWidget}
                                    _widget={_widget}/>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
const  stpm =(state) => ({
    widgets: state.widgetReducer.widgets
})
const dtpm =(dispatch) =>({
      createWidget:(topicId) =>{
          console.log("CREATE WIDGET FOR THE TOPIC" + topicId)
          if(Object.is(topicId, "undefined") || Object.is(topicId,undefined))
          {
              alert('Please select a topic first to create a widget.')
          }
          else{
              widgetService.createWidget(topicId,{type: "HEADING", size: 1, text: "New Widget"})
                  .then(theActualWidget => dispatch({
                      type: "CREATE_WIDGET",
                      widget: theActualWidget
                  }))
          }
      },
      updateWidget: (widget) =>
          widgetService.updateWidget(widget.id,widget)
              .then(status =>dispatch({
                  type:"UPDATE_WIDGET",
                  widget
              })),
    deleteWidget: (item) =>
        widgetService.deleteWidget(item.id)
            .then(status => dispatch({
                type: "DELETE_WIDGET",
                widgetToDelete: item
            })),
    findWidgetsForTopic: (topicId) =>
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets => dispatch({
                type: "FIND_ALL_WIDGETS_FOR_TOPIC",
                widgets
            }))

})
export default connect(stpm, dtpm)(WidgetList)

