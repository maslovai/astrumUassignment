import superagent from'superagent';
let API = `https://api.github.com/users/gaearon/repos?page=2&per_page=5`;

export const reposInitialize = () => dispatch => {
    console.log("in action initialize!!! ")
    superagent
        .get(API)
        .then(res =>{
            let list = res.body
            // console.log("in action initialize: ", res.body)
            dispatch(initAction(list))
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