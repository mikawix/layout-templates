import { createBoard } from '@wixc3/react-board';
import { NewComponent6 } from '../../../components/new-component-6/new-component-6';

export default createBoard({
    name: 'NewComponent6',
    Board: () => <NewComponent6 />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 768,
        windowWidth: 1024,
    },
});
