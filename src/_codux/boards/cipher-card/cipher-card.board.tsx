import { createBoard } from '@wixc3/react-board';
import { CipherCard } from '../../../components/cipher-card/cipher-card';

export default createBoard({
    name: 'CipherCard',
    Board: () => <CipherCard />,
    environmentProps: {
        windowWidth: 1002,
        windowHeight: 639,
    },
});
