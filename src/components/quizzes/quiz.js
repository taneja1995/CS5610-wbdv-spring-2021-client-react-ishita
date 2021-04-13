import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Question from "./questions/question";
import {findQuestionsForQuiz} from "../../services/question-service";


const Quiz = () => {
    const {courseId, quizId,title} = useParams();
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        // TODO: move this to a service file
        findQuestionsForQuiz().then
        (questions => setQuestions(questions))
    },[])

    return(
        <div>
            <h2>Quiz {quizId}</h2>
            <ul>
                {
                    questions.map(question =>
                        <li>
                            <Question question={question}/>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Quiz;