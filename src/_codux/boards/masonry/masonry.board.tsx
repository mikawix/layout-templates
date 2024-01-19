import { createBoard } from '@wixc3/react-board';
import { Masonry } from '../../../components/masonry/masonry';

export default createBoard({
    name: 'Masonry',
    Board: () => <Masonry />,
    isSnippet: true,
});
