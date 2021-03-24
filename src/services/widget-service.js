const WIDGETS_URL="https://wbdv-webapp-spring21-ishita.herokuapp.com/api/widgets";
const TOPICS_URL="https://wbdv-webapp-spring21-ishita.herokuapp.com/api/topics"
export const createWidget = (topicId,widget) =>
    // TODO: move all server communication to widgets-service
    fetch(`${TOPICS_URL}/${topicId}/widgets`, {
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
    fetch(`${WIDGETS_URL}/${id}`, {
        method: "DELETE"
    }).then(response => response.json())

export const updateWidget = (id, widget) =>
    // TODO: move all server communication to widgets-service.js
    fetch(`${WIDGETS_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    }).then(response => response.json())

export const findWidgetsForTopic= (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}/widgets`)
        .then(response => response.json())


export default {
    createWidget, deleteWidget, updateWidget,findWidgetsForTopic
}
