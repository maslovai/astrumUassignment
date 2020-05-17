import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import createStore from '/Users/irynamaslova/Projects/501/astrumU/src/app/store.js';
import './style/main.scss';
import Body from './components/body';
import Header from './components/header';
import Footer from './components/footer';
const store = createStore();

class App extends React.Component{
    constructor(props){
        super(props)
      
    }
    render(){
        return (
            <Provider store={store}>
            <div className="main">
                <Header/>
                <Body />
                <Footer/>
            </div>
            </Provider>
        )
    }
}
ReactDom.render(<App/>, document.getElementById('root'));