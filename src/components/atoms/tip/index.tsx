import { Title } from '..';
import { style } from './style'
const { BodyTip } = style

const Tip = () => {
  return (
    <BodyTip>
      <Title title='Tip of week' />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem est
        error quo nisi porro quia quibusdam accusamus animi esse, dolores quam
        aliquid excepturi soluta nobis recusandae praesentium unde consequatur
        molestiae?
      </p>
    </BodyTip>
  );
};

export default Tip;