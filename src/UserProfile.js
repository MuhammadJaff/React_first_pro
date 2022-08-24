import './App.css'

function UserProfile({name,write}) {
    return (
        <div className="user_pro">
            <h2>{name}</h2>
            <h3><a href={`mailto:${write}`}>{name}</a></h3>
        </div>
    )
}

export default UserProfile

