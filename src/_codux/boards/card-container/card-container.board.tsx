import { createBoard } from '@wixc3/react-board';
import { CardContainer } from '../../../components/card-container/card-container';

export default createBoard({
    name: 'CardContainer',
    Board: () => <CardContainer />,
    environmentProps: {
        canvasHeight: 420,
        windowWidth: 1070,
    },
});
