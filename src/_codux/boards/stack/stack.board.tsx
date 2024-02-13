import { createBoard } from '@wixc3/react-board';
import { Stack } from '../../../components/stack/stack';

export default createBoard({
    name: 'Stack',
    Board: () => <Stack />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 768,
        windowWidth: 1024,
    },
});
