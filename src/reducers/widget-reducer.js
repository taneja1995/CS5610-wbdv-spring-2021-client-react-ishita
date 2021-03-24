const initialState = {
    widgets: []
}

const widgetReducer = (state= initialState, action) =>{
    switch(action.type){
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "UPDATE_WIDGET":
            return {
                widgets: state.widgets.map(w => {
                    if(w.id === action.widget.id) {
                        return action.widget
                    } else {
                        return w

                    }
                })
            }
        case "DELETE_WIDGET":
            const newState1 = {
                widgets: state.widgets.filter(widget => {
                    if(widget.id === action.widgetToDelete.id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState1
        case "FIND_ALL_WIDGETS_FOR_TOPIC":
            return{
                ...state,
                widgets: action.widgets
            }
        default:
            return state
    }
}
export default widgetReducer