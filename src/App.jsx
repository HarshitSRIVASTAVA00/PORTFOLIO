import {Navbar, Welcome, Dock} from "#components";
import gsap from "gsap";
import {Resume, Terminal, Finder} from "#windows";
import { Safari } from "#windows";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar/>
            <Welcome/>
            <Dock/>

            <Terminal/>
            <Safari />
            <Resume />
            <Finder />
        </main>
    )
}
export default App;
