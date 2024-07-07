import { useUserContext } from "../context/UserContext"


const NewService = () => {
    const {access, department, firstName, lastName, email, phoneNumber} = useUserContext()
  return (
    <div>
        <h1>Summary</h1>
        <div>
        <div className="flex">
        <div>
            <p>Access</p>
            <p>{access}</p>
        </div>
        <div>
            <p>Department</p>
            <p>{department}</p>
        </div>
        </div>
        <div className="flex">
        <div>
            <p>FirstName</p>
            <p>{firstName}</p>
        </div>
        <div>
            <p>LastName</p>
            <p>{lastName}</p>
        </div>
        </div>
        <div className="flex">
        <div>
            <p>Email Address</p>
            <p>{email}</p>
        </div>
        <div>
            <p>Phone Number</p>
            <p>{phoneNumber}</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default NewService