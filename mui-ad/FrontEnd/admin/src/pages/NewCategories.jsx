import { BreadCrumbs } from "../components";
import { Home, NavigateNext } from "@mui/icons-material";
import { Typography, TextField, Button } from "@mui/material";
import { Stack } from "@mui/system";
import axios from "axios";
const breadCrumbs = [
  {
    label: "",
    link: "/",
    icon: <Home />,
  },
  {
    label: "Categories",
    link: "/categories",
  },
  {
    label: "new",
  },
];

export const NewCategories = () => {
  const submit = () => {
    axios.post("http://localhost:8000/categories", {
      name: nameRef.current.value,
    });
  };
  return (
    <>
      <BreadCrumbs items={breadCrumbs} />
      <Stack
        sx={{
          mt: 3,
          bgcolor: "white",
          p: 3,
          borderRadius: 2,
          boxShadow: "0 0 5px rgba(0,0,0,.1)",
        }}
      >
        <Typography variant="h5" sx={{ mb: 4, color: "rgb(110, 110, 110)" }}>
          Add Category
        </Typography>
        <TextField ref={nameRef} label="Name" variant="outlined" />
        <Stack sx={{ mt: 5, flexDirection: "row", gap: 2 }}>
          <Button
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
            variant="contained"
          >
            Save
          </Button>
          <Button variant="outlined">Reset</Button>
          <Button variant="outlined">Delete</Button>
        </Stack>
      </Stack>
    </>
  );
};
