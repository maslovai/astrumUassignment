import React from 'react';
import Repos from './reposList';
import Issues from './issuesList';
import Header from './header';
import Footer from './footer';
import {connect} from 'react-redux';
import * as action from '../app/actions'

class Body extends React.PureComponent{
    constructor(props){
        super(props);
        this.state= {
            author:{},
            activeRepo:'',
            API: '',
            issues:[]
        }
        this.getName = this.getName.bind(this)
    }
    getName(name){
        this.props.loadRepoIssues(name);
        this.props.getRepoName(name)
    }

    UNSAFE_componentWillMount(){
        this.props.getRepoAuthor('https://api.github.com/users/gaearon');
    }

    render(){
        return(
            <div>
                <Header repo={this.props.activeRepo}/>
                <div className="wrapper">
                    <Repos getName={this.getName} API='https://api.github.com/users/gaearon/repos?page=1&per_page=5&state=open'/>
                    {/* author={this.props.author} */}
                    <Issues issues={this.props.issues}/>
                </div>
                <Footer/>
            </div> 
        )
    }

}

const mapStateToProps = (state) => 
{
    console.log("in map, state: ", state) 
return({
    activeRepo: state.activeRepo,
    author: state.author,
    issues: state.issues
  })
}
      
  const mapDispatchToProps = (dispatch, getState) => ({
      getRepoAuthor: api => dispatch(action.getRepoAuthor(api)),
      loadRepoIssues : name => dispatch(action.loadRepoIssues(name)),
      getRepoName : name => dispatch(action.getRepoName(name))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Body);

