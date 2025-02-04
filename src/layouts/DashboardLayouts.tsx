import { Outlet } from "react-router";

export default function DashboardLayouts(){
    return (
        <div>
            <aside>Sidebar Menu</aside>
            <main>
                <Outlet />
            </main>
        </div>
    )
}