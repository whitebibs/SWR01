import useSWR from "swr"
import { useParams } from "react-router-dom"

const fetcher = (url) => fetch(url).then(res=>res.json())
export function useGithubUser(){
  const {username} = useParams();
const {user, error} = useSWR(`https://api.github.com/users/${username}`, fetcher)
if(error)return <div>failed</div>
return <h3>Hello {user.name}</h3>

}