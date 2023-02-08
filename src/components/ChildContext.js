import { createContext, useState ,useEffect} from "react";
import axios  from "axios";


export const childContext = createContext();

export default function ChildContext(props) {

    const [children, setChildren] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:44381/Child')
            .then(data => { setChildren(data.data) })
            .catch(error => { console.log(error) })
    }, []);

    return (
        <childContext.Provider value={{ children, setChildren }}>
            {props.children}
        </childContext.Provider>
    )
}