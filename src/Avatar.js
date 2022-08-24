import './App.css'

function Avatar({name,img}) {
    return (
        <div >
            <img className='avatar' src={img} alt={name}/>
        </div>
    )
}

export default Avatar
