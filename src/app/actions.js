import superagent from'superagent';

export const reposInitialize = api => dispatch => {
    
    superagent
    .get(api)
    .then(res =>{
        // console.log(res.links.next)
        let list=[]
        let nextAPI = res.links.next
        res.body.map(obj=>list.push({name:obj.name, description:obj.description, count:obj.stargazers_count}))
        dispatch(initAction({list, nextAPI}))
    })
    .catch(err => console.log(err));
}

export const getRepoName = name => dispatch =>{
    dispatch(getRepo(name))
}

export const loadRepoIssues = name => dispatch => {
    
    superagent
        .get(`https://api.github.com/repos/gaearon/${name}/issues?page=1&per_page=10&state=all`)
        .then(res => {
        let issuesList=[]
        res.body.map(obj=>issuesList.push({title:obj.title, description:obj.body}))
        if (issuesList.length===0) issuesList.push({title:`No open issues for ${name}`})
        dispatch(loadIssues(issuesList))
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

 const initAction = (obj) => ({
    type: 'INIT',
    payload: obj
 })

 const getRepo = name => ({
    type:'GET_NAME',
    payload: name
 })

 const loadIssues = list =>({
     type: 'LOAD_ISSUES',
     payload: list
 })

const getAuthor = (author) => ({
    type: 'GET_AUTHOR',
    payload: author
 })

const addMore = (obj) => {
    return {
        type: 'ADD_MORE',
        payload: obj
    }
}