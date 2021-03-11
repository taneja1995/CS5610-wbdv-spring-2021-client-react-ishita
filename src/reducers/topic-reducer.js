const initialState = {
    topics: []
}

const topicReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_TOPIC":
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case "FIND_TOPICS":
            return {
                ...state,
                topics: action.topics
            }
        case "UPDATE_TOPICS":
            return {
                topics: state.topics.map(t => {
                    if(t._id === action.topic._id) {
                        return action.topic
                    } else {
                        return t
                    }
                })
            }
        case "DELETE_TOPIC":
            // alert("delete the module " + action.moduleToDelete.title)
            const newState1 = {
                topics: state.topics.filter(topic => {
                    if(topic._id === action.topicToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState1
        default:
            return state
    }
}

export default topicReducer