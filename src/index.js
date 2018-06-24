import { h, render } from 'preact';
import App from './components/App';
import './assets/scss/styles.scss';

render(
    <App />,
    document.getElementById("main")
);