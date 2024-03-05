import styles from './App.module.scss';
import component from './assets/component-symbol.svg';
import prev from './assets/preview-symbol.svg';

function App() {
    return (
        <div className={styles.App}>
            <h2>Welcome to your App Component 🎉</h2>
            Double click to edit App component. <br />
            Drag here elements from <b>+ Add elements panel</b>
            <p style={{ fontSize: '12px' }}>
                This project is using Vite + TypeScript. Visit vitejs.dev to learn more.
            </p>
        </div>
    );
}

export default App;
