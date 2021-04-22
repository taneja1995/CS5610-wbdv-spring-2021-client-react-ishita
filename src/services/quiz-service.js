const QUIZZES_URL='https://wbdv-spg-ishita-server-node.herokuapp.com/api/quizzes'

export const findAllQuizzes = () =>
    fetch(`${QUIZZES_URL}`)
        .then(response => response.json());

const findQuizById = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json())
}

export const submitQuiz = (qid, questions) =>
    fetch(`${QUIZZES_URL}/${qid}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const getQuizAttempts = (qid) =>
    fetch(`${QUIZZES_URL}/${qid}/attempts`)
        .then(response => response.json());

export default {
    findAllQuizzes,findQuizById,submitQuiz,getQuizAttempts
}


