import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Intro from "../pages/home/Intro";

const RoutesProject = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={
              <Intro>
                <Home />
              </Intro>
              } />
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesProject;
