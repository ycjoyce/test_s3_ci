import { useState } from "react";

const App = () => {
  const [content, setContent] = useState("mooBiz");

  return (
    <div>
      Hello {content}
      <button
        data-cy="btn-test"
        className="btn btn-primary"
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
