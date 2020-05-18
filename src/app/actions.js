import superagent from'superagent';

export const reposInitialize = api => dispatch => {
    
    superagent
    .get(api)
    .then(res =>{
        let list=[]
        let nextAPI = res.links.next
        res.body.map(obj=>list.push({name:obj.name, description:obj.description, count:obj.stargazers_count}))
        dispatch(initAction({list, nextAPI}))
    })
    .catch(err => console.log(err));
}
export const addMoreRepos = api => dispatch => {
    superagent
        .get(api)
        .then(res =>{
            let nextAPI = res.links.next
            let list=[]
            res.body.map(obj=>list.push({name:obj.name, description:obj.description, count:obj.stargazers_count}))
            dispatch(addMore({list, nextAPI}))
        })
        .catch(err => console.log(err))
}
export const getRepoAuthor = api => dispatch => {
    superagent
        .get(api)
        .then(res => {
            let author = {
                name:res.body.name,
                login:res.body.login,
                email:"dan.abramov@me.com",
                repos:res.body.public_repos
            }
            dispatch(getAuthor(author))
        })
        .catch(err=>console.log(err))
   
}

// export const getRepoIssues = api => dispatch => {
//     console.log("in actions: ")
//     superagent
//             .get(api)
//             .then(res => {
//             console.log("in actions: ", res.body)
//             let issuesList=[]
//             res.body.map(obj=>issuesList.push({title:obj.title, description:obj.body}))
//             if (issuesList.length===0) issuesList.push({title:`No open issues for ${this.state.repoName}`})
//             dispatch (getIssues(issuesList))
//         })
//         .catch(err => console.log(err));
// }

 const initAction = (obj) => ({
    type: 'INIT',
    payload: obj
 })

 const addMore = (obj) => {
    return {
        type: 'ADD_MORE',
        payload: obj
    }
}

const getAuthor = (author) => ({
    type: 'GET_AUTHOR',
    payload: author
 })

// const getIssues = (list) =>({
//     type: 'GET_ISSUES',
//     payload: list
// })