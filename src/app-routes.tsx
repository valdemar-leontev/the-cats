
import { Route, Routes } from "react-router";
import Gallery from "./components/gallery/gallery";
import { useAppData } from "./contexts/app-data-context";

export const AppRoutes = () => {

  const {getImagesAsync} = useAppData();

  return (
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path="/favorites" element={<Gallery />} />
    </Routes>
  );
};