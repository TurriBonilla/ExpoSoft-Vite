import { style } from './style'
import { MdOutlineRadioButtonUnchecked, MdOutlineRadioButtonChecked } from 'react-icons/md'
import { useState } from 'react'
const { WrapperQuestion } = style

const prueba = [
    {},
    {},
    {},
    {}
]

const QuestionOfPoll = () => {
    const [select, setSelect] = useState(0)
    return (
        <WrapperQuestion>
            <span>Question</span>
            {prueba.map((data, key: number) => (
                <div key={key} onClick={() => setSelect(key)}>
                    {select === key ? <MdOutlineRadioButtonChecked /> : <MdOutlineRadioButtonUnchecked />}
                    <label>first question</label>
                </div>
            ))}
        </WrapperQuestion>
    )
}

export default QuestionOfPoll