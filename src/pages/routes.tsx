import { Routes, Route } from "react-router-dom";
import Baccalaureate from "./Baccalaureate/Baccalaureate";
import Error from "./Error";
import Home from "./Home/home";





export default () => (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/baccalaureate" element={<Baccalaureate />} />

      <Route path="*" element={<Error />} />
   </Routes>
)