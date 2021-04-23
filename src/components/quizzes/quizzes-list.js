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
            <ul className='list-group'>
                {
                    quizzes.map(quiz => <li className='list-group-item' key={quiz._id}>
                        <Link className='btn btn-success'
                              to={`/courses/${courseId}/quizzes/${quiz._id}`}>{quiz.title}
                        </Link>
                        <Link
                            to={`/courses/${courseId}/quizzes/${quiz._id}`} className='btn btn-primary float-right'>
                            Start
                        </Link>
                   </li>)
                }
            </ul>
        </div>
    )
}

export default QuizzesList;