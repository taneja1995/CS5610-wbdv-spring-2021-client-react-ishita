import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {findAllQuizzes} from "../../services/quiz-service";

const QuizzesList = () => {
    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        findAllQuizzes().then((quizzes) => {
            setQuizzes(quizzes)
        });

    }, [])
    return(
        <div>
            <h2>Quizzes</h2>
            <div className="list-group">
                {
                    quizzes.map((quiz) => {
                        return(
                            <Link
                                to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                className="list-group-item">
                                {quiz.title}
                                <a href="#" className="btn btn-primary float-right">Start</a>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default QuizzesList;