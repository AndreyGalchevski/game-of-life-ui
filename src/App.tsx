import Container from "@mui/material/Container";

import { Header, Grid, Footer } from "./components";

const App = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />
      <Grid />
      <Footer />
    </Container>
  );
};

export default App;
