import "./user.css"
export default function Friend({ friend }) {
    console.log(friend)
    const { name, email, phone, username} = friend;
    return (
        <div  className="box">
            <h3>Name: {name}</h3>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <p>Username : {username}</p>
            <p>Address : {friend.address.city}</p>
            <p>Company Name : {friend.company.name}</p>
        </div>
    )
}