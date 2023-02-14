import { Box, Button, Dialog, } from "@mui/material";
import ResponsiveDialog from "./contexts/Dialog";
import { Layout } from "./components/Layout";
import { useToast } from "./hooks"

function App() {

  const showToast = useToast()


  return (
    <Layout>
      <Box sx={{ p: 5 }}>
        <ResponsiveDialog />
        <Button
          variant="contained"
          onClick={() => {
            showToast("hello toast")
          }}
        >
          Toggle toast
        </Button>

      </Box>
    </Layout>
  );
}

export default App;
