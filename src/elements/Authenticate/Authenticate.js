/**
 * path = "/authenticate"
 */

import { Outlet } from "react-router-dom";

 export default function Authenticate(){
    return (
        <div className="authenticate">
            <h1>Authenticate</h1>
            <Outlet></Outlet>
        </div>
    )
}