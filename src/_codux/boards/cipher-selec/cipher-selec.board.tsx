import { createBoard } from '@wixc3/react-board';
import { CipherSelec } from '../../../components/cipher-selec/cipher-selec';

export default createBoard({
    name: 'CipherSelec',
    Board: () => <CipherSelec />,
    environmentProps: {
        canvasWidth: 762,
    },
});
