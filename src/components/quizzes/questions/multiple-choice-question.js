import React,{useState} from "react";

const MultipleChoiceQuestion = ({question}) => {
    const [correct, setCorrect] = useState(false);
    const [answer, setAnswer] = useState('');
    const [displayAns, setDisplayAns] = useState(false);
    return (
        <div>
            <h4>{question.question}{
                // if answer is wrong then setDisplayAns will be called and displayAns would be set to true.
                displayAns&&(
                    answer===question.correct? <i className="fas fa-check float-right" style={{ color: 'green'}} ></i>
                        : <i className="fas fa-times float-right" style={{ color: 'red'}}></i>
                )
            }
            {/*// if answer is correct*/}
                {
                    correct&&(
                        <i className="fas fa-check float-right" style={{ color: 'green'}}></i>
                    )
                }
            </h4>
            {/* {question.correct}*/}

            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return (
                           <li className={`list-group-item ${displayAns && (question.correct===choice?`list-group-item-success`:
                           answer===choice?`list-group-item-danger`:'')
                           } ${ correct && (question.correct === choice?`list-group-item-success`:'')}`}
                           key={question._id}>
                            <label>
                                <input type="radio" onClick={() => setAnswer(choice)}
                                       name={question._id}/>
                                {' '}
                                {choice}
                            </label>
                               {
                                   displayAns&&((question.correct === choice)?
                                       <i className="fas fa-check float-right" style={{ color: 'green'}} ></i> :
                                       (answer===choice)?
                                           <i className="fas fa-times float-right" style={{ color: 'red'}}></i>:''
                                   )
                               }
                               {
                                   correct&&( question.correct === choice?
                                       <i className="fas fa-check float-right" style={{ color: 'green'}}></i>:``
                                   )
                               }
                           </li>

                        )

                    })
                }
            </ul>
            {/*print the chosen answer*/}
            Your answer: {answer}
            <br/>
            <br/>
            <button className="btn btn-success" onClick={() =>
                // if answer is correct

            {
                if (answer === question.correct) {
                   /* alert("right answer");*/
                    setCorrect(true);
                }
                // if answer is wrong then display both right and wrong answers
                else {
                    /*alert("wrong answer");*/
                    setCorrect(false);
                    setDisplayAns(true);
                }
            }
            }>Grade
            </button>
            <br/>
            <br/>
        </div>
    )
}

export default MultipleChoiceQuestion;