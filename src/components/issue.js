import React from 'react';
import FontAwesome from 'react-fontawesome'
// import faStyles from 'font-awesome/css/font-awesome.css'

class Issue extends React.Component{
    constructor(props){
        super(props)    
    }

render(){
    return(
    <div className="oneItemIssues">
        <div className="infoIcon">
            <FontAwesome name = "fa-info-circle" className="fas fa-info-circle"/>
            </div>
        <div className="issueBody">
            <div className="issueTitle">{this.props.title}</div>
            <div >{this.props.description}</div>
        </div>    
        <FontAwesome name = "fa-times-circle"className="fas fa-times-circle infoIcon2"/>
    </div>
    )
}
}
export default Issue;