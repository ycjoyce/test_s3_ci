import { useState } from "react";

const App = () => {
  const [content, setContent] = useState("mooBiz");

  return (
    <div>
      Hello {content}
      <button
        id="btn-test"
        onClick={() => {
          setContent((p) => (p === "mooBiz" ? "Readmoo" : "mooBiz"));
        }}
      >
        Test
      </button>
    </div>
  );
};

export default App;
