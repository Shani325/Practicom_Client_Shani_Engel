import { createContext, useState ,useEffect} from "react";
import axios  from "axios";


export const userContext = createContext();

export default function UserContext(props) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:44381/User')
            .then(data => { setUsers(data.data) })
            .catch(error => { console.log(error) })
        if(!users){
            setUsers({})
        }
    }, []);

    return (
        <userContext.Provider value={{ users, setUsers }}>
            {props.children}
        </userContext.Provider>
    )
}