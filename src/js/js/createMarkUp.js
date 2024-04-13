export function createMarkUp(array) {
    return array.map((post) => `<li>${post.id} -${post.title}</li>`)
    
}