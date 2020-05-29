import React from 'react';
import {connect} from 'react-redux';
import * as action from '../app/actions'
import Repo from './repo';

class Repos extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currAPI: this.props.API,
            nextAPI:'',
            btnClicked:false
        }
        this.handleMore = this.handleMore.bind(this)
    }
   
    componentDidUpdate(prevProps, currState){
       if (prevProps.repos!==this.props.repos) this.setState({btnClicked:false})
    }
    handleMore(e){
        e.preventDefault();
        this.setState({btnClicked:true})
        this.props.addMoreRepos(this.props.nextAPI)   
    }; 
  
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
                <Repo key = {i} repo={repo} />)}

            </div>
            <a href="#"onClick={this.handleMore}>
                <button
                className="buttonDiv"
                disabled={this.state.btnClicked||this.props.nextAPI===undefined}
                href="#" >
                    {this.props.nextAPI===undefined?"no more repositories to load"
                        :this.state.btnClicked?"loading...":"load more"}
                </button>
            </a> 
        </div>   
        )
    }
}

const mapStateToProps = (state) => 
({
    author:state.author,
    issues:state.issues,    
    repos: state.repos,
    currentAPI: state.currentAPI,
    nextAPI: state.nextAPI
});
   
const mapDispatchToProps = (dispatch, getState) => ({
    addMoreRepos: api => dispatch(action.addMoreRepos(api))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Repos);