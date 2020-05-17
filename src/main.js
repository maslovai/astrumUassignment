import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import createStore from './app/store'
import Body from './components/body';

const store = createStore();

class Main extends React.Component{
    constructor(props){
        super(props)
      
    }
    render(){
        return (
            <Provider store={store}>
            <div className="main">
                <Body />
            </div>
            </Provider>
        )
    }
}
ReactDom.render(<Main/>, document.getElementById('root'));