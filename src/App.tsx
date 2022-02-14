import { Routes, Route } from "react-router-dom";

import { Repo } from "./pages/Repo";
import { Repos } from "./pages/Repos";

export default function app() {
  return(
    <Routes>
      <Route path="/" element={<Repos />} />
      <Route path="/repos/*" element={<Repo />} />
    </Routes>
  )
}