import { createBoard } from '@wixc3/react-board';
import { NewComponent } from '../../../components/new-component/new-component';

export default createBoard({
    name: 'Grid',
    Board: () => <NewComponent />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 768,
        windowWidth: 1024,
    },
});
