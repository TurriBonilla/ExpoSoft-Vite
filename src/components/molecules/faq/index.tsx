import { style } from './style'
import { MdAdd, MdRemove } from 'react-icons/md'
import { Title } from 'components/atoms';
import { IFaq } from 'interfaces';
const { WrapperFaq, WrapperHeader } = style;

const Faq = (props: IFaq) => {
    const { faq, body, show } = props;

    return (
        <WrapperFaq>
            <WrapperHeader isActive={show}>
                <Title title={faq} />
                {show ? <MdRemove /> : <MdAdd />}
            </WrapperHeader>
            {show && <p>{body}</p>}
        </WrapperFaq>
    );
};

export default Faq;