import Routers from "./Routers"
import { BrowserRouter } from 'react-router-dom';

export default function HomePage() {
    return (
        <div>
            <h1>ברוכים הבאים</h1>
            <BrowserRouter>
                <Routers />
            </BrowserRouter>
        </div>
    )
}