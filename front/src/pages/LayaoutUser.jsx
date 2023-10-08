import { Outlet } from "react-router-dom";
import MenuUser from "../components/MenuUser";

function LayaoutUser () {
    return (<>
        <MenuUser />
        <Outlet />
        </>
    );

}
export default LayaoutUser;