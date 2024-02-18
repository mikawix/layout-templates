import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <div className={styles.card}>
                <h2>Welcome to your first board 🎉</h2>
                <p>
                    Board is your rendering environment to edit your components. You can use boards
                    to edit different variations of your components.
                </p>
                <p>Double click to edit your first component here.</p>
                <div className={styles.slot}>Drag here elements from +Add elements panel</div>
            </div>
            <p className={styles['read-the-docs']}>
                Click on preview and learn more here:{' '}
                <a href="https://help.codux.com/kb/en/article/what-are-boards">About Boards</a> |{' '}
                <a href="https://help.codux.com/kb/en/article/what-are-components">
                    About Components
                </a>
            </p>
        </div>
    );
}

export default App;
