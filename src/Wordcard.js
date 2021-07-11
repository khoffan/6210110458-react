import React, {useState} from 'react';
import _ from 'lodash'
import CharacterCard from './CharacterCard';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}

const prepareStateFromText = (given_text) => {
    let text = given_text.toUpperCase()
    let chars1 = _.shuffle(Array.from(text))
    return {
        text,
        chars1,
    }
}


export default function Wordcard(props){
    const [state ,setState] = useState(prepareStateFromWord(props.value))
    const [states , setStates] = useState(prepareStateFromText(props.value))

    const activationHandler = (c) => {
        console.log(`${c} has been activated.`)
    }

    const activationHandler2 = (c) => {
        console.log(`${c} has been activated.`)
    }
    return (
        <div>
            {
                state.chars.map((c,i) =><CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}>
                </CharacterCard>),
                states.chars1.map((c,i) =><CharacterCard vals={c} key={i} activationHandler2={activationHandler2} ></CharacterCard>)            
            }
        </div>
        
    )
}

