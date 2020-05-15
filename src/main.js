import React from 'react';
import ReactDom from 'react-dom';
import './style/main.scss';
import Body from './components/body';
import Header from './components/header';

class App extends React.Component{
    constructor(props){
        super(props)
      
    }
    render(){
        return (
            <div className="main">
                <Header/>
                <Body />
            </div>
        )
    }
}
ReactDom.render(<App/>, document.getElementById('root'));