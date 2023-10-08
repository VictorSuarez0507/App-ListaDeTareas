import { Outlet } from "react-router-dom";
import  Menu  from "../components/Menu";

function Layaout () {
    return (<>
            <Menu />
            <Outlet/>
    </>);
};

export default Layaout;
