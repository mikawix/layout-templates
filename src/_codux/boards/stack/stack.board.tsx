import { createBoard } from '@wixc3/react-board';
import { Stack } from '../../../components/stack/stack';

export default createBoard({
    name: 'Stack',
    Board: () => <Stack />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
    },
});
