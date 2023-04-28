import { createBoard } from '@wixc3/react-board';
import { CipherContainer } from '../../../components/cipher-container/cipher-container';

export default createBoard({
    name: 'CipherContainer',
    Board: () => <CipherContainer />
});
