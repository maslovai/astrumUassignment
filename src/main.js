import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import createStore from './app/store'
import Body from './components/body';

const store = createStore();

function Main(){
    return (
        <Provider store={store}>
        <div className="main">
            <Body API='https://api.github.com/users/gaearon'/>
        </div>
        </Provider>
    )
}
ReactDom.render(<Main/>, document.getElementById('root'));