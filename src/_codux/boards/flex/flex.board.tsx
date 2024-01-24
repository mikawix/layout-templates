import { createBoard } from '@wixc3/react-board';
import { Flex } from '../../../components/flex/flex';

export default createBoard({
    name: 'Flex',
    Board: () => <Flex />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
