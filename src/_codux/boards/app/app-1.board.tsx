import { createBoard } from '@wixc3/react-board';
import component from './../assets/component-symbol.svg';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => (
            <App />
    ),
    environmentProps: {
        windowWidth: 1024,
    },
});
