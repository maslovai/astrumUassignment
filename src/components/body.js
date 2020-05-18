import React from 'react';
import Repos from './reposList';
import Issues from './issuesList';
import Header from './header';
import Footer from './footer';
// import superagent from'superagent';
import {connect} from 'react-redux';
import * as action from '../app/actions'

// const API='https://api.github.com/users/gaearon'

class Body extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            author:{},
            activeRepo:'',
            API: ''
        }
        // {name: "Dan Abramov", login: "gaearon", email: "dan.abramov@me.com", repos: 243}
        // this.state = this.initialState;
        this.getName = this.getName.bind(this)
    }
    getName(name){
        this.setState({ activeRepo: name })
    }

    // static getDerivedStateFromProps(nextProps,prevState){
    //     if(nextProps.API!==prevState.API){
    //       return {API : nextProps.API};
    //     }
    //     else return null;
    // }
    // componentDidMount() {
    //     this.props.getRepoAuthor('https://api.github.com/users/gaearon')
    //   }
    // componentDidUpdate(prevProps,prevState) {
    //     if (prevProps.author!==this.props.author) {
    //         this.props.getRepoAuthor('https://api.github.com/users/gaearon')
    //     }
    // }

    UNSAFE_componentWillMount(){
        this.props.getRepoAuthor('https://api.github.com/users/gaearon')
    }
    shouldComponentUpdate(newState,oldState){
        if (newState.activeRepo!==oldState.activeRepo) return true;
    }

    render(){
        console.log("in body, state:::", this.state.prps)
        return(
            <div>
                <Header repoName={this.state.activeRepo}/>
                <div className="wrapper">
                    <Repos author={this.props.author}getName={this.getName} API='https://api.github.com/users/gaearon/repos?page=1&per_page=5&state=all'/>
                    <Issues repoName={this.state.activeRepo}/>
                </div>
                <Footer/>
            </div> 
        )
    }

}
// export default Body

const mapStateToProps = (state) =>  {console.log("in map state to props, body: ", state)
return({
    activeRepo: state.activeRepo,
    author: state.author
  })
}
      
  const mapDispatchToProps = (dispatch, getState) => ({
      getRepoAuthor: api => dispatch(action.getRepoAuthor(api)),
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Body);

