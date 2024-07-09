import { RouterProvider } from "react-router-dom";
import Router from "./router";

function App() {
  return (
    <main>
      <RouterProvider router={Router} />
    </main>
  );
}

export default App;
