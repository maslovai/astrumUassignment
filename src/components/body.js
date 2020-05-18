import React from 'react';
import Repos from './reposList';
import Issues from './issuesList';
import Header from './header';
import Footer from './footer';
import {connect} from 'react-redux';
import * as action from '../app/actions'

class Body extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            author:{},
            activeRepo:'',
            API: ''
        }
        this.getName = this.getName.bind(this)
    }
    getName(name){
        this.setState({ activeRepo: name })
    }

    UNSAFE_componentWillMount(){
        this.props.getRepoAuthor('https://api.github.com/users/gaearon')
    }
    shouldComponentUpdate(newState,oldState){
        if (newState.activeRepo!==oldState.activeRepo) return true;
    }

    render(){
        return(
            <div>
                <Header repoName={this.state.activeRepo}/>
                <div className="wrapper">
                    <Repos author={this.props.author}getName={this.getName} API='https://api.github.com/users/gaearon/repos?page=1&per_page=5&state=open'/>
                    <Issues repoName={this.state.activeRepo}/>
                </div>
                <Footer/>
            </div> 
        )
    }

}

const mapStateToProps = (state) =>  
({
    activeRepo: state.activeRepo,
    author: state.author
  })

      
  const mapDispatchToProps = (dispatch, getState) => ({
      getRepoAuthor: api => dispatch(action.getRepoAuthor(api)),
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Body);

