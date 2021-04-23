import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import QuizService from '../../services/quiz-service';

const QuizAttempts = () => {
    const {courseId, quizId} = useParams();
    const [attempts, setAttempts] = useState([]);
    useEffect(() => {
        QuizService.getQuizAttempts(quizId)
            .then(a => setAttempts(a));
    }, [quizId])
    return (
        <div>
            <div className='row'>
                <h2>Total Attempts</h2>
            </div>
            <table className='table'>
                <thead>
                <tr>
                    <th>Series</th>
                    <th>Attempt ID</th>
                    <th>Score</th>
                </tr>
                </thead>
                <tbody>
                {
                    attempts.map((attempt, count) =>
                        <tr key={attempt._id}>
                            <td>{count}</td>
                            <td>
                                {attempt._id}
                            </td>
                            <td>
                                {attempt.score}
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
}

export default QuizAttempts;