import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// membungkus app.js dengan provider redux agar state bisa di konsumsi di app.js
const RootApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(<RootApp />, document.getElementById('root'));
registerServiceWorker();
