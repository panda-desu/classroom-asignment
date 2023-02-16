import { Stack } from "@mui/material";
import { Layout } from "./components/Layout";
import { Routes, Route } from 'react-router';
import { CategoriesScreen, HomeScreen } from "./pages";
import { blueGrey } from "@mui/material/colors";
import { NewCategories } from "./pages/NewCategories";

const bgColor = blueGrey[50]

const wrapperStyle = {
  p: 5,
  bgcolor: bgColor,
  width: "calc(100vw - 65px)",
  minHeight: "calc(100vh - 65px)",
  boxSizing: "border-box",
};

function App() {

  return (
    <Layout>
      <Stack sx={wrapperStyle}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/categories" element={<CategoriesScreen />} />
          <Route path="/categories/new" element={<NewCategories />} />
        </Routes>
      </Stack>
    </Layout>
  );
}

export default App;
