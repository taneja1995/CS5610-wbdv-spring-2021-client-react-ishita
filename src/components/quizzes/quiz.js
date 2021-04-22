import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import QuestionService from '../../services/questions-service';
import QuizService from '../../services/quiz-service';
import Question from "./questions/question";


const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [quiz, setQuiz] = useState({});
    const [questions, setQuestions] = useState([]);
    const [graded, setGraded] = useState(false)
    const [attempt, setAttempt] = useState({})
    useEffect(() => {
        QuizService.findQuizById(quizId)
            .then(res => setQuiz(res));
        QuestionService.findQuestionsForQuiz(quizId)
            .then(res => setQuestions(res));
        if (graded) {
            QuizService.submitQuiz(quiz._id, questions).then(res => setAttempt(res));
        }
    }, [quizId, graded])
    return (
        <div>
            <div className='row'>
                <h2>Quiz No:  {quizId} <br/></h2>
            </div>
            {graded && <Link className='btn btn-dark' to={`/courses/${courseId}/quizzes/${quizId}/attempts`}>Check attempts</Link>}
            {
                questions.map(question =>
                    <div key={question._id}>
                        <Question question={question} questions={questions} setQuestions={setQuestions}
                                  graded={graded}/>
                    </div>
                )
            }
            <div>
                <button onClick={() => setGraded(true)}
                        className='btn btn-success'
                        disabled={graded}>
                    Submit
                </button>
                {
                    graded &&
                    <div>

                        <h2>Submitted Score: {attempt.score}</h2>
                        <h2>
                            Submitted Id: {attempt._id}
                        </h2>
                    </div>
                }
            </div>
        </div>

    )
}

export default Quiz