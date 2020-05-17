import superagent from'superagent';
let API = `https://api.github.com/users/gaearon/repos?page=2&per_page=5`;

export const reposInitialize = (api) => dispatch => {
    console.log("in init actions:   ")
    superagent
    .get(api)
    .then(res =>{
        // let parsed = parse(res.links)
        console.log("Ira look for header here:  ", res)
        let list=[]
        res.body.map(obj=>list.push({name:obj.name, description:obj.description, count:obj.stargazers_count}))
        console.log("in reposList initialize: ", list)
    })
    .catch(err => console.log(err));
}
export const addMoreRepos = () => {
    superagent
        .get(API)
        .then(res => dispatch(addMore(res.body)));
}

 const initAction = reposList => ({
    type: 'INIT',
    payload: reposList
 })

 const addMore = reposList => {
    return {
        type: "ADD_MORE",
        payload: reposList
    }
}