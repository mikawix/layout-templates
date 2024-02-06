import { createBoard } from '@wixc3/react-board';
import { StackTest } from '../../../components/stack-test/stack-test';

export default createBoard({
    name: 'StackTest',
    Board: () => <StackTest />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
