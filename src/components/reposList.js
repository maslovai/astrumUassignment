import React from 'react';
import {connect} from 'react-redux';
import Repo from './repo';
import * as action from '../app/actions'

class Repos extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            repos: this.props.repos || [],
            currAPI: this.props.API,
            nextAPI:'',
            reposPerPage:5
        }
        this.handleMore = this.handleMore.bind(this)
        this.showIssues = this.showIssues.bind(this)
    }
    UNSAFE_componentWillMount(){
        this.props.reposInitialize(this.state.currAPI)    
    }
 
    handleMore(e){
        e.preventDefault();
        this.props.addMoreRepos(this.props.nextAPI)
        }; 
    
    showIssues(name){
        this.props.getName(name)
    }
    render(){
        return(
        <div className="reposContainer">
            { <div className="authorInfo">
                <div>{this.props.author.name} (@{this.props.author.login})</div>
                <div><i className="far fa-envelope"></i> {this.props.author.email}</div>
                <div><i className="fas fa-th-list"></i> {this.props.author.repos} repositories</div>
            </div> }
            <div className="reposList">  
                {this.props.repos.map((repo, i)=>
                <Repo key = {i} repo={repo} handleIssues={this.showIssues}/>)}
            </div>
            <a href="#"onClick={this.handleMore}>
                <button className="buttonDiv"href="#">Load More</button>
            </a> 
        </div>   
        )
    }
}

const mapStateToProps = (state) => 
 ({
    author:state.author,    
    repos: state.repos,
    currentAPI: state.currentAPI,
    nextAPI: state.nextAPI
  });
      
  const mapDispatchToProps = (dispatch, getState) => ({
      reposInitialize: api => dispatch(action.reposInitialize(api)),
      addMoreRepos: api => dispatch(action.addMoreRepos(api))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Repos);