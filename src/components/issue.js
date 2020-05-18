import React from 'react';
import FontAwesome from 'react-fontawesome'
// import {connect} from 'react-redux';
// import * as action from '../app/actions'

class Issue extends React.Component{
    constructor(props){
        super(props)    
    }

render(){
    return(
    <div className = "nonScroll">  
    <div className="oneItemIssues">
        <div className="infoIcon">
            <FontAwesome name = "fa-info-circle" className="fas fa-info-circle"/>
        </div>
        <div className="issueBody">
            <div className="issueTitle">{this.props.title}</div>
            <div className="issueDescription">{this.props.description}</div>
        </div>    
    </div>
    <FontAwesome name = "fa-times-circle"className="fas fa-times-circle infoIcon2"/>
    </div>
    )
}
}
export default Issue;