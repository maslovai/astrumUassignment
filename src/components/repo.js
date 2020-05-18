import React from 'react';
// import {connect} from 'react-redux';
// import * as action from '../app/actions'

class Repo extends React.Component{
    constructor(props){
        super(props)
        this.showIssues = this.showIssues.bind(this)    
    }
    
    showIssues(){
        this.props.handleIssues(this.props.repo.name)
    }

    render(){
        return(
        <div onClick={this.showIssues} 
            className="oneItemRepos"
            >
                    <div className="repoTitle"
                        name={this.props.repo.name}>
                            {this.props.repo.name}
                            <span>{this.props.repo.count}<i className="fas fa-star"></i></span>
                    </div>
                    <div >{this.props.repo.description}</div>
        </div>
    )
    }
}
export default Repo;