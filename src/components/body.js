import React from 'react';
import Repos from './reposList';
import Issues from './issuesList';
import Header from './header';
import Footer from './footer';
import superagent from'superagent';

const API="https://api.github.com/users/gaearon"

class Body extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            author:{},
            activeRepo:''
        }
        this.getName = this.getName.bind(this)
    }
    getName(name){
        this.setState({ activeRepo: name })
    }

    UNSAFE_componentWillMount(){
        superagent
        .get(API)
        .then(res =>{
            let author={
                name:res.body.name,
                login:res.body.login,
                email:"dan.abramov@me.com",
                repos:res.body.public_repos
            }
            this.setState({
                author:{...this.state.author,...author}
            })
        })
        .catch(err=>console.log(err))
    }
    shouldComponentUpdate(newState,oldState){
        if (newState.activeRepo!==oldState.activeRepo) return true;
    }

    render(){
        return(
            <div>
                <Header repoName={this.state.activeRepo}/>
                <div className="wrapper">
                    <Repos author={this.state.author}getName={this.getName} API='https://api.github.com/users/gaearon/repos?page=1&per_page=5&state=all'/>
                    <Issues repoName={this.state.activeRepo}/>
                </div>
                <Footer/>
            </div> 
        )
    }

}
export default Body
















//     constructor(props){
//         super(props)
//         this.initialState = {
//             repos: this.props.repos || [],
//         }
//         this.state = this.initialState;
//         // this.reposInitialize=this.reposInitialize.bind(this)
//         this.handleMore= this.handleMore.bind(this)
//     }
//     UNSAFE_componentWillMount(){
//         console.log("hey!", this.initialState, this.State)
//         superagent
//         .get(API)
//         .then(res =>{
//             console.log(res.body)
//             let list=[]
//             res.body.map(obj=>list.push(obj.name.toUpperCase()))
//             console.log("in body initialize: ", list)
//             this.setState({repos:list})
//             // console.log("in action initialize: ", res.body)
//             // dispatch(initAction(list))
//         })
//         .catch(err => console.log(err));
//         // this.reposInitialize;
//         // this.setState(this.initialState);
        

//     }
//     // reposInitialize(){
//     //     this.props.reposInitialize()
//     //     this.setState(this.initialState);
//     // }
//     handleMore(e){
//         e.preventDefault();

//         this.props.addMoreRepos(repos)
//     }

//     render(){
//         return(
//           <div>
//             <ul>
//               {this.state.repos.map((repoName, i)=><li key = {i} name={repoName}>{repoName}</li>)} 
//               <li><a onClick={()=>this.props.taskDelete(task)} href="#">Load More</a></li> 
//             </ul>
            
//           </div>
            
//         )
//     }
// }
// const mapStateToProps = state => ({
//     repos:state.repos
// })

// const mapDispatchToProps = (dispatch)=>({
//     initAction: reposList => dispatch(reposActions.initAction(reposList)),
//     addMore: reposList => dispatch(reposActions.addMore(reposList)),
// })


// export default connect(mapStateToProps, mapDispatchToProps)(Body);