import React, { useState, useEffect } from "react";
import { Container, Paper } from "@material-ui/core";
import ReactMarkdown from "react-markdown";

const App = () => {
  const [markdown, setMarkdown] = useState("");
  useEffect(() => {
    (async () => {
      const res = await fetch("/resume.md");
      const data = await res.text();
      setMarkdown(data);
    })();
  }, []);
  return (
    <Container style={{ marginTop: 20, marginBottom: 20 }} maxWidth="md">
      <Paper elevation={1} style={{ padding: "10px 30px" }}>
        <ReactMarkdown source={markdown}></ReactMarkdown>
      </Paper>
    </Container>
  );
};

export default App;
