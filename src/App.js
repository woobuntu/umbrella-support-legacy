import { Container, CssBaseline } from "@mui/material";
import { Fragment } from "react";
import {
  ContactUs,
  Greeting,
  SupportHistory,
  SupportMethods,
} from "./components";
import Title from "./components/Title";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Title />
        <Greeting />
        <SupportMethods />
        <ContactUs />
        <SupportHistory />
      </Container>
    </Fragment>
  );
}

export default App;
