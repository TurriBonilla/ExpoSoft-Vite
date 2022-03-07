import { Faq } from 'components/molecules';
import { style } from './style';
import { dataFaqs } from 'const';
import { useState } from 'react';
import { Title } from 'components/atoms';
const { WrapperFaqs } = style;

const Faqs = () => {
    const [state, setState] = useState(0)
    return (
        <>
            <WrapperFaqs>
                hola
            </WrapperFaqs>
            <WrapperFaqs>
                <Title title='Frequently FAQs' />
                {dataFaqs.map((data: object, key: number) => (
                    <div onClick={() => setState(key === state ? null : key)}>
                        <Faq key={key} faq={data.faq} body={data.body} show={state === key} />
                    </div>
                ))}
            </WrapperFaqs>
        </>
    );
};

export default Faqs;