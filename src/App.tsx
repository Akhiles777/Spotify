import Layout from "./components/layout/Layout";
import Home from "./Home";
import Playlist from "./pages/Playlist";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
            <Home />
        }
      />


      <Route
        path="/playlist"
        element={
          <Layout>
            <Playlist />
          </Layout>
        }
      />
    </Routes>
  );
}
