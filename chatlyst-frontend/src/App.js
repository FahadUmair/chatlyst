import Navbar from "./components/NavBar";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div className="min-h-screen min-w-[350px] bg-primary-background text-white bg-blurry-shapes bg-cover bg-center bg-no-repeat ">
      <div className="pr-4 pl-4">
        <Navbar />
      </div>
      <ChatPage />
    </div>
  );
}

export default App;
