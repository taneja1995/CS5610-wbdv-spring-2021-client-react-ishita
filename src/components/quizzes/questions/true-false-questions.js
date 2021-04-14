import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
    const [answer, setAnswer] = useState(null)
    const [correct, setCorrect] = useState(false)
    const [displayAns, setdisplayAns] =useState(false)
    const[grade,setGrade] =useState(false)
    return (
        <div>
            <h4>
                {question.question}
                {     (question.correct!==JSON.stringify(answer)&& (grade))&&
                        <i className="fas fa-times float-right" style={{color:"red"}}></i>
                }
                {     ((question.correct===JSON.stringify(answer))&& (grade))&&

                    (<i  className="fas fa-check float-right" style={{color:"green"}}></i>)

                }
            </h4>
            {/*{question.correct}
            <br/>
            {JSON.stringify(answer)}
            <br/>*/}
            <br/>
            <ul className="list-group">
                <li className={`list-group-item
                ${
                    ( (grade))&& ("true"!==question.correct)&& (JSON.stringify(answer)==="true")&&
                    ('list-group-item-danger')
                }
                ${
                    (grade)&& ("true"===question.correct)&&
                    'list-group-item-success'
                }
                `}>
                    <label><input
                        type="radio" onClick={() => setAnswer(true)} name={question._id}/>
                        {' '}
                        True</label>
                    {
                        ( (grade))&& ("true"!==question.correct)&& (JSON.stringify(answer)==="true")&&
                        <i className="fas fa-times float-right" style={{color:"red"}}></i>
                    }
                    {
                        (grade)&& ("true"===question.correct)&&
                        <i className="fas fa-check float-right" style={{color:"green"}}></i>
                    }
                </li>
                <li className={`list-group-item
                ${
                    ( (grade))&& ("false"!==question.correct)&& (JSON.stringify(answer)==="false")&&
                    ('list-group-item-danger')
                }
                ${
                    (grade)&& ("false"===question.correct)&&
                    ('list-group-item-success')
                }
                `}>
                    <label><input
                        type="radio" onClick={() => setAnswer(false)} name={question._id}/>
                        {' '}
                        False</label>
                    {
                        ( (grade))&& ("false"!==question.correct)&& (JSON.stringify(answer)==="false")&&
                        <i className="fas fa-times float-right" style={{color:"red"}}></i>
                    }
                    {
                        (grade)&& ("false"===question.correct)&&
                        <i className="fas fa-check float-right" style={{color:"green"}}></i>
                    }
                </li>
            </ul>

            Your answer: {(answer===null)?'':((answer)?'True':'False')}
            <br/>
            <br/>
            <button type="button" className="btn btn-success"
                    onClick={
                        ()=>
                        {   // setting the grade value to true on click
                            setGrade(true)
                            // when answer is true
                            if(answer)
                            {
                                // if the correct answer is true
                                if(question.correct)
                                {
                                    setCorrect(true)
                                    setdisplayAns(false)
                                }
                                // if the correct answer is false
                                else
                                {
                                    setCorrect(false)
                                    setdisplayAns(true)
                                }
                            }
                            // when the given answer is false
                            else
                            {
                                // when correct answer is false
                                if(!question.correct)
                                {
                                    setCorrect(true)
                                    setdisplayAns(false)
                                }
                                // when correct answer is true
                                else
                                {
                                    setCorrect(false)
                                    setdisplayAns(true)
                                }
                            }
                        }
                    }
            >Grade</button>
            <br/>
            <br/>
        </div>
    )
}

export default TrueFalseQuestion;