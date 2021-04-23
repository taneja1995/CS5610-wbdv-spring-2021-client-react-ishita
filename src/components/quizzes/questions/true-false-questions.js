import React, {useState, useEffect} from 'react';

const TrueFalseQuestion = ({question, questions, setQuestions, graded}) => {
    const [answer, setAnswer] = useState('');
    const choices = ["true", "false"];
    const rightAns='';
    const wrongAns='';
    {
        if(answer===question.correct && graded)
        {
            let rightAns=answer;
        }
    }
    {
        if(answer!==question.correct && graded)
        {
            let  wrongAns=answer
        }
    }
    let count = 0;
    useEffect(() => {
        if (graded) {
            const u = questions.filter(q => q._id !== question._id);
            const t = questions.find(q => q._id === question._id);
            t.answer = answer;
            const modifiedQues = [...u, t];
            setQuestions(modifiedQues);
        }
    }, [graded])
    return (
        <div>
            <h4>{question.question}
                {rightAns &&
                <i className="fas fa-check float-right"
                   style={{color: 'green'}}/>}
                {wrongAns &&
                <i className="fas fa-times float-right"
                   style={{color: 'red'}}/>}</h4>
            <ul className='list-group'>
                {
                    choices.map(choice => {
                        const right = graded && question.correct === choice;
                        const wrong = graded && question.correct !== answer && answer === choice;
                        return (<li className={`list-group-item ${right ? 'list-group-item-success' : ''}
                         ${wrong ? 'list-group-item-danger' : ''}`}
                                    key={count++}>
                            <label>
                                <input type='radio'
                                       value={choice} checked={answer === choice}
                                       onChange={e => setAnswer(e.target.value)}/>
                                {' '}
                                {choice}

                            </label>
                            {
                                right &&
                                <i className="fas fa-check float-right"
                                   style={{color: 'green'}}/>
                            }
                            {
                                wrong &&
                                <i className="fas fa-times float-right"
                                   style={{color: 'red'}}/>
                            }
                        </li>)
                    })
                }
            </ul>
            <p>Your Answer: {answer}</p>
        </div>
    );
}

export default TrueFalseQuestion;