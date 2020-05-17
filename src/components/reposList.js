import React from 'react';
import Repo from './repo';
// import parse from 'parse-link-header';
import superagent from'superagent';

class Repos extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            repos: this.props.repos || [],
            currAPI: this.props.API,
            prevPage:'',
            nextAPI:'',
            reposPerPage:5
        }
        this.handleMore = this.handleMore.bind(this)
        this.showIssues = this.showIssues.bind(this)
    }
    UNSAFE_componentWillMount(){
        superagent
        .get(this.state.currAPI)
        .then(res =>{
            console.log("Ira look for header here:  ", res)
            let list=[]
            res.body.map(obj=>list.push({name:obj.name, description:obj.description, count:obj.stargazers_count}))
            console.log("in reposList initialize: ", list)
            this.setState({
                repos:list,
                nextAPI:res.links.next
            })
        })
        .catch(err => console.log(err));
    }
    handleMore(e){
        e.preventDefault();
        superagent
        .get(this.state.nextAPI)
        .then(res =>{
            let list=[]
            res.body.map(obj=>list.push({name:obj.name, description:obj.description, count:obj.stargazers_count}))
            console.log("in reposList on click: ", list)
            this.setState({
                repos:[...this.state.repos,...list],
                nextAPI:res.links.next
            })
        .catch(err => console.log(err))
        }); 
    }
    showIssues(name){
        this.props.getName(name)
    }
    render(){
        return(
        <div className="reposContainer">
            <div className="authorInfo">
                <div>{this.props.author.name} (@{this.props.author.login})</div>
                <div><i class="far fa-envelope"></i> {this.props.author.email}</div>
                <div><i class="fas fa-th-list"></i> {this.props.author.repos} repositories</div>
            </div>
            <div className="reposList">  
                {this.state.repos.map((repo, i)=>
                <Repo key = {i} repo={repo} handleIssues={this.showIssues}/>)}
            </div>
            <a href="#"onClick={this.handleMore}>
                <button className="buttonDiv"href="#">Load More</button>
            </a> 
        </div>   
        )
    }
}

export default Repos