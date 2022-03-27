import { Allbody, NotFoundText, Number404, SpanTitle, TextInfo } from './style';

const NotFound = () => {
    return (
        <Allbody>
            <Number404>404</Number404>
            <NotFoundText>Not Found</NotFoundText>
            <SpanTitle>Sorry, we were unable to find that page</SpanTitle>
            <TextInfo>please use main menu or choose from category below</TextInfo>
        </Allbody>
    );
};

export default NotFound;