// const perPage = 10;
// const page = 1;

function getPosts(page, perPage) {
    const baseURL ="https://jsonplaceholder.typicode.com/"
const endPoint = "/posts";
    const params = new URLSearchParams({ _page: page, _limit: perPage, })
    
    return fetch(`${baseURL}${endPoint}`).then((res) => {
        if (!res.ok) {
            throw new Error(res.status);
            
        }
        return res.json()
    });
}
// getPosts(page, perPage).then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.log(error);
// })