import React from 'react';
import {connect} from 'react-redux';
import * as action from '../app/actions'

class Repo extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            activeRepo:'',
            issues:[]
        }
        this.showIssues = this.showIssues.bind(this)    
    }
    
    showIssues(){
        this.props.loadRepoIssues(this.props.repo.name);
        this.props.getRepoName(this.props.repo.name)
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

const mapStateToProps = (state) => 
({
    activeRepo: state.activeRepo,
    issues: state.issues
  })
const mapDispatchToProps = (dispatch, getState) => ({
      loadRepoIssues : name => dispatch(action.loadRepoIssues(name)),
      getRepoName : name => dispatch(action.getRepoName(name))
})
export default connect(mapStateToProps, mapDispatchToProps)(Repo);