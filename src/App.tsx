import styles from './App.module.scss';
import component from './assets/component-symbol.svg';
import add from './assets/add-symbol.svg';
import prev from './assets/preview-symbol.svg';

function App() {
    return (
        <div className={styles.App}>
            <div
                style={{
                    padding: '2em',
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
                    You can use boards to edit different variations of your components. <br />
                    Double click to edit your first component here. Double click to edit your first
                    component here.
                    <img src={component} alt="" />
                </p>
                <div
                    style={{
                        width: '800px',
                        height: '250px',
                        borderRadius: '30px',
                        border: '2px dashed #888',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#888888',
                    }}
                >
                    Drag here elements from
                    <img
                        src={add}
                        alt=""
                    />
                    Add elements panel
                </div>
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
    );
}

export default App;
