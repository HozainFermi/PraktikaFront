import { Box } from "@chakra-ui/react"
import SideMenu from "./ComponentsForTasks/SideMenu"
import TaskCard from "./ComponentsForTasks/TaskCard"
import "./Tasks.css"

function Tasks(){


    return (
        <Box className="all" minHeight='100vh' bg='#34486A'>
            

            <header>

            </header>

            <section className="sidemenu">
                <SideMenu></SideMenu>
            </section>


            <section className="tasks-viewer">

            <TaskCard></TaskCard>
            <TaskCard></TaskCard>
            <TaskCard></TaskCard>

            </section>
            

        </Box>
    )
}
export default Tasks 