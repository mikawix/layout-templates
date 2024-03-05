import styles from './App.module.scss';
import component from './assets/component-symbol.svg';
import prev from './assets/preview-symbol.svg';

function App() {
    return (
                <div
                    className={styles.App}
                >
                <h2>Welcome to your first App 🎉</h2>
                    Double click to edit App component. <br/>
                    Drag here elements from <b>+ Add elements panel</b>
                </div>
    );
}

export default App;
