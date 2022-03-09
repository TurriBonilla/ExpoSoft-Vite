import { style } from './style'
import { MdOutlineRadioButtonUnchecked, MdOutlineRadioButtonChecked } from 'react-icons/md'
import { useState } from 'react'
const { WrapperQuestion, Answer } = style

const prueba = [
    {},
    {},
    {},
    {}
]

const QuestionOfPoll = () => {
    const [select, setSelect] = useState(-1)
    return (
        <WrapperQuestion>
            <span>Question</span>
            {prueba.map((data, key: number) => (
                <Answer key={key} onClick={() => setSelect(key)} isSelected={select === key ? true : false}>
                    {select === key ? <MdOutlineRadioButtonChecked /> : <MdOutlineRadioButtonUnchecked />}
                    <label>first question</label>
                </Answer>
            ))}
        </WrapperQuestion>
    )
}

export default QuestionOfPoll