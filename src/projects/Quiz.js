import React, { useState } from 'react'

function Quiz() {
    const questions = [
        {
            questionText: 'Who is member of HoloAdvent?',
            answersOption: [
                { answerText: 'Nerissa Ravencraft', isCorrect: false },
                { answerText: 'Shiri Novella', isCorrect: false },
                { answerText: 'FUWAMOCO', isCorrect: false },
                { answerText: 'Koseki Bijou', isCorrect: true }

            ]
        },
        {
            questionText: 'Who is the owner of X?',
            answersOption: [
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Mark Zuckeberg', isCorrect: false },
                { answerText: 'Bills Gate', isCorrect: false },
                { answerText: 'Warren Buffett', isCorrect: false }

            ]
        },
        {
            questionText: 'Which nut is Ayunda favorite?',
            answersOption: [
                { answerText: 'Coconut', isCorrect: false },
                { answerText: 'Walnut', isCorrect: false },
                { answerText: 'Cashews', isCorrect: true },
                { answerText: 'Deeznut', isCorrect: false }

            ]
        },
        {
            questionText: 'Who is not member of Holoh3ro?',
            answersOption: [
                { answerText: 'Vestia Zeta', isCorrect: false },
                { answerText: 'Kaela Kovalskia', isCorrect: false },
                { answerText: 'Usada Pekora', isCorrect: true },
                { answerText: 'Kobo Kanaeru', isCorrect: false }

            ]
        }
    ]
    const initialClass = '';
    const [currentQuestion, setQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [scoreBoard, setScoreBoard] = useState(false);
    const [classForCss, setClass] = useState(initialClass);
    const submitHandler = (isCorrect) => {
        const nextQuestion = currentQuestion+1;
        if (isCorrect) {
            setScore(currentScore => {
                return currentScore + 1;
            })
        }
        if(nextQuestion<questions.length){
            setQuestion(nextQuestion);
            setClass(initialClass);
        }else{
            setScoreBoard(true);
            setClass('show-score')
        }

    }
    return (
        <React.Fragment>
            <div className= {`quiz-container ${classForCss}`}>
                {scoreBoard ?
                    (<div className='score-board'>You scored {score} out of {questions.length} </div>)
                    :
                    (
                        <React.Fragment>
                            <div className='question'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                                <div className='question-text'>{questions[currentQuestion].questionText}</div>
                            </div>
                            <div className='answer-selections'>
                                {questions[currentQuestion].answersOption.map(answer => {
                                    return <button onClick={() => submitHandler(answer.isCorrect)}>{answer.answerText}</button>
                                })}
                            </div>
                        </React.Fragment>
                    )}
            </div>
        </React.Fragment>
    )
}

export default Quiz