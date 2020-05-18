import React from 'react';
import Issue from './issue'
// import * as reposActions from '../app/actions';
// import {connect} from 'react-redux';
const API = `${'https://api.github.com/repos/gaearon/'}`

import superagent from'superagent';

const renderIf = (test, componentTrue, componentFalse=null) => test ? componentTrue : componentFalse;

class Issues extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            repoName: this.props.repoName,
            issues:[]
        }
        
    }
    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.repoName!==prevState.repoName){
          return {repoName : nextProps.repoName};
        }
        else return null;
    }
    componentDidUpdate(prevState) {
        if (prevState.repoName!== this.state.repoName) {
          superagent
            .get(`${API}${this.props.repoName}/issues?page=1&per_page=10&state=all`)
            .then(res => {
            let issuesList=[]
            res.body.map(obj=>issuesList.push({title:obj.title.toUpperCase(), description:obj.body}))
            if (issuesList.length===0) issuesList.push({title:`No open issues for ${this.state.repoName}`})
            this.setState({issues:issuesList})
        })
        .catch(err => console.log(err));
        }
    }
  
    render(){
        return(
            renderIf(!this.props.repoName.length, 
            <div className="issuesInitial">Issues will appear here. Please select repository form the list.</div>,
            <div className="issuesContainer">
                {this.state.issues.map((issue, i)=>
                <Issue 
                    key = {i} 
                    name={issue}
                    title={issue.title}
                    description = {issue.description}
                />)} 
          </div>
            )
        )
    }
}

export default Issues