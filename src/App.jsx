import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./component/Router/Router";

function App() {
  return (
    <div className="w-[1200] container mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
