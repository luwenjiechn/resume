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
    <Container style={{ padding: 20 }} fixed>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <ReactMarkdown source={markdown}></ReactMarkdown>
      </Paper>
    </Container>
  );
};

export default App;
