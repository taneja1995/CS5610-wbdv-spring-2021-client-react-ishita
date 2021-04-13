import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
    const [answer, setAnswer] = useState('');
    const [correct, setCorrect] = useState(false);
    const [displayAns, setDisplayAns] = useState(false);
    return (
        <div>
            <h4>
                {question.question}
                {
                    answer == question.correct &&
                    <i className="fas fa-check float-right"></i>
                }
                {
                    answer != question.correct &&
                    <i className="fas fa-times float-right"></i>
                }
            </h4>
            {/*{question.correct}*/}
            {/*<br/>*/}
           {/* {JSON.stringify(answer)}*/}
            {/*<br/>*/}
            <label className="list-group-item"><input
                type="radio"
                onClick={() => setAnswer(true)}
                name={question._id}/>
                {' '}
                True</label>
            <label className="list-group-item"><input
                type="radio"
                onClick={() => setAnswer(false)}
                name={question._id}/>
                {' '}
                False</label>
                Your answer: {(answer==null)?'':((answer)?'True':'False')}
                <br/>
                <br/>
                <button className="btn btn-success" onClick={() =>
                {    // if the answer is true
                      if(answer){
                          // if the question's correct answer is true
                          if(question.correct) {
                              alert("right answer");
                              setCorrect(true);
                              setDisplayAns(false);
                          }
                          // if the question's correct answer is false
                          else{
                              alert("wrong answer");
                              setCorrect(false);
                              setDisplayAns(true);
                          }
                      }
                      else{

                          if(!question.correct){

                              setCorrect(true);
                              setDisplayAns(false);
                          }
                          else{

                              setCorrect(false);
                              setDisplayAns(true);
                          }
                              }

                }}>Grade</button>
        </div>
    )
}

export default TrueFalseQuestion;