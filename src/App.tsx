import styles from './App.module.scss';
import component from './assets/component-symbol.svg';
import prev from './assets/preview-symbol.svg';

function App() {
    return (
        <div className={styles.App}>
            <h2>Welcome to your App Component 🎉</h2>
            <span>
                Double click to edit App component
                <br />
                &amp; drag here elements from + Add <b>Elements</b> Panel
            </span>
            <p style={{ fontSize: '12px', marginTop: '80px' }}>
                This project is using Vite + TypeScript. Visit vitejs.dev to learn more.
            </p>
        </div>
    );
}

export default App;
