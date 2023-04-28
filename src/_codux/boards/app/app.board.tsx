import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 972,
        windowHeight: 526,
        canvasWidth: 794,
        canvasHeight: 798,
    },
});
