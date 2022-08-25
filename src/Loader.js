
function Loader(page = 1) {
    return fetch(`https://reqres.in/api/users?page=${page}`)
    .then(res=>res.json())
    // .then(result=>result?.data)
    .catch(err=>console.log(err));
}

export default Loader
