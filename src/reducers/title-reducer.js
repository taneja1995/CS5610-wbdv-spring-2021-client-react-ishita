import topicReducer from "./topic-reducer";

const initialState = {
    course: {
        title:""
    }
}

const titleReducer =(state=initialState, action) => {
    switch (action.type) {
        case "FIND_COURSE_TITLE_FOR_COURSE_ID":
            return {
                ...state,
                course: action.course

            }
        default:
            return state
    }
}
export default titleReducer

