
function Loader() {
    return fetch("https://reqres.in/api/users")
    .then(res=>res.json())
    .then(result=>result?.data)
    .catch(err=>console.log(err));
}

export default Loader
