import {useGithubUser} from "./useGithubUser"

export function GithubUser ( {username} ) {
const {user, error} = useGithubUser(username)


  return (
    <div>
      <p>Username: {user.login}</p>
      <p>Name: {user.name}</p>
      {error && <h5>{error.message}</h5>}
    </div>
  )
  }


