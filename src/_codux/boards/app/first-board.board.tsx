import { createBoard } from '@wixc3/react-board';
import component from './../assets/component-symbol.svg';
// import prev from './../assets/preview-symbol.svg';
import prev from '../../../assets/preview-symbol.svg';
import App from '../../../App';

export default createBoard({
    name: 'First Board',
    Board: () => (
        <div style={{ display: 'flex', padding: '2rem' }}>
            <div
                style={{
                    padding: '2em',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <h2>Welcome to your first board 🎉</h2>
                <p>
                    Board is a rendering environment that allows you to visually edit your
                    components.
                    <br />
                    You can use boards to edit different variations of your components. Double click
                    to edit your first component here. Double click to edit your first component
                    here
                </p>
                <App />
                <p
                    style={{
                        color: '#888888',
                        textAlign: 'center',
                        display: 'flex',
                        alignContent: 'center',
                        gap: '5px',
                    }}
                >
                    Click on preview{' '}
                    <img src={prev} alt="" style={{ boxShadow: '0.71px 0.71px 5px #888888' }} />
                    and learn more here:
                    <a href="https://help.codux.com/kb/en/article/what-are-boards">About Boards</a>|
                    <a href="https://help.codux.com/kb/en/article/what-are-components">
                        About Components
                    </a>
                </p>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 1024,
    },
});
