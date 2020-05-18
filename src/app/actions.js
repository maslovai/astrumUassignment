import superagent from'superagent';

export const reposInitialize = api => dispatch => {
    
    superagent
    .get(api)
    .then(res =>{
        let list=[]
        let nextAPI = res.links.next
        console.log("in init actions:   ", res.links.next, nextAPI)
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
            console.log("in action addMore: ", nextAPI)
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