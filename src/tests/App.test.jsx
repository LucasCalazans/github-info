import { h } from 'preact';
import chai, { expect } from 'chai';
import App from '../components/App';
import assertJsx from 'preact-jsx-chai';
chai.use(assertJsx);

test('Initial structure to tests', () => {
    expect(<App />).contains(
        <div class="app"></div>
    );
});