import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full h-screen bg-slate-200 flex flex-col justify-center items-center">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
