import { Header } from "./components/Header";
import { ChatScreen } from "./pages/ChatScreen";
import { Home } from "./pages/Home";
import { Routes, Route } from 'react-router-dom'
import { Article } from "./pages/Article";
import Products from "./pages/Products";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:id" element={<Article />} />
        {/* <Route path="/chat" element={<ChatScreen />} /> */}
        <Route path="/products" element={<Products />} />
      </Routes>


    </>
  );
}

export default App;