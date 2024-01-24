import { createBoard } from '@wixc3/react-board';
import { Grid } from '../../../components/grid/grid';

export default createBoard({
    name: 'Grid',
    Board: () => <Grid />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
    },
});