import { Route, Routes } from "react-router-dom"
import { PATH } from "../components"
import { DashboardHome, Groups, NotFound, Rooms, Stacks, Students, Teachers } from "../pages"
import { Sitebar, Header } from "../modules"

const DashboardRoute = () => {
    // { id: 5, path: PATH.users, element: <Users /> }

    const routeList = [
        { id: 1, path: PATH.home, element: <DashboardHome /> },
        { id: 2, path: PATH.stacks, element: <Stacks /> },
        { id: 3, path: PATH.groups, element: <Groups /> },
        { id: 4, path: PATH.rooms, element: <Rooms /> },
        { id: 5, path: PATH.teachers, element: <Teachers /> },
        { id: 6, path: PATH.students, element: <Students /> },
        { id: 7, path: PATH.notFound, element: <NotFound /> }
    ]
    return (
        <div className="flex">
            <Sitebar/>
            <div className="w-[78%} h-screen">
                <Header/>
                <Routes>{routeList.map(item => <Route key={item.id} path={item.path} element={item.element} />)}</Routes>
            </div>
        </div>   
    )
}

export default DashboardRoute