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
            API: 'https://api.github.com/users/gaearon/repos?page=1&per_page=5&state=open',
            repos: this.props.repos || [],
        }
    }

    componentDidMount(){
        this.props.getRepoAuthor('https://api.github.com/users/gaearon');
        this.props.reposInitialize(this.state.API)    

    }

    render(){
        return(
            <div>
                <Header repo={this.props.activeRepo}/>
                <div className="wrapper">
                    <Repos API='https://api.github.com/users/gaearon/repos?page=1&per_page=5&state=open'/>
                    <Issues issues={this.props.issues}/>
                </div>
                <Footer/>
            </div> 
        )
    }

}

const mapStateToProps = (state) => 
({
    activeRepo: state.activeRepo,
    author: state.author,
    repos: state.repos,
    issues: state.issues
})
      
const mapDispatchToProps = (dispatch, getState) => ({
    getRepoAuthor: api => dispatch(action.getRepoAuthor(api)),
    reposInitialize: api => dispatch(action.reposInitialize(api))

})
  
export default connect(mapStateToProps, mapDispatchToProps)(Body);

