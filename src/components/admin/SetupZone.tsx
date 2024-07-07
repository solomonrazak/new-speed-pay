import { UserContextProvider } from "../context/UserContext";


const SetupZone = () => {
  return (
    <UserContextProvider>
    <main>
      <div className="flex">
        <p>New User</p>
        <p>New Service</p>
      </div>
      <div className="border border-slate-900 rounded-md">

      </div>
    </main>
    </UserContextProvider>
  )
}

export default SetupZone;