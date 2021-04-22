const QUIZZES_URL = 'https://wbdv-spg-ishita-server-node.herokuapp.com/api/quizzes';
export const findQuestionsForQuiz = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => response.json())
}

export default {findQuestionsForQuiz
}