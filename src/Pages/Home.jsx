import Chat from "../Components/Chat"
import SideBar from "../Components/SideBar"

const Home = () => {
    return (
        <div id="home-base" className="w-screen h-screen bg-indigo-500 flex items-center justify-center">
            <div id="app-wrapper" className="bg-white w-3/4 h-3/4 rounded-lg flex">
                <SideBar />
                <Chat />
            </div>
        </div>
    );
};

export default Home;