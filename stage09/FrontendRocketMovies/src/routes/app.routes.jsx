import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { CreateMovie } from "../pages/CreateMovie";
import { MoviePreview } from "../pages/MoviePreview";
import { Profile } from "../pages/Profile";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createMovie" element={<CreateMovie />} />
      <Route path="/moviePreview" element={<MoviePreview />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}