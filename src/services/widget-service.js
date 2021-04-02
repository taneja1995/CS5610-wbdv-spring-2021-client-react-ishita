/*const WIDGETS_URL="https://localhost:8080/api/widgets";
const TOPICS_URL="https://localhost:8080/api/topics"*/
export const createWidget = (topicId,widget) =>
    // TODO: move all server communication to widgets-service
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
        method: 'POST',
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    })
        .then(response => response.json())
        /*.then(widget => setWidgets((widgets) => [...widgets, widget]))*/


export const deleteWidget = (id) =>
    // TODO: move all server communication to widgets-service.js
    fetch(`http://localhost:8080/api/widgets/${id}`, {
        method: "DELETE"
    }).then(response => response.json())

export const updateWidget = (id, widget) =>
    // TODO: move all server communication to widgets-service.js
    fetch(`http://localhost:8080/api/widgets/${id}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    }).then(response => response.json())

export const findWidgetsForTopic= (topicId) =>
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
        .then(response => response.json())


export default {
    createWidget, deleteWidget, updateWidget,findWidgetsForTopic
}
