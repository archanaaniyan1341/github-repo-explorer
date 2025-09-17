import { useState } from "react";
import AppView from "./components/AppView";
import NavBar from "./components/NavBar/NavBar";
import { Route,Routes,BrowserRouter } from "react-router";
import Collections from "./pages/Collections";

const App = () => {
  const [activeTab, setActiveTab] = useState("trending");

  return (
    <BrowserRouter>
      <NavBar />
      <div className=" flex flex-col items-center bg-gray-100 p-4">
        <div className="w-full bg-white rounded-lg shadow-md flex flex-col min-h-[80vh]">
         
          <Routes>
            <Route
              path="/trending"
              element={<AppView activeTab={activeTab} />}
            />
            <Route
            path="/settings"
            element={<AppView activeTab={'settings'} />}
            ></Route>
             <Route
            path="/collections"
            element={<Collections
            />}
            ></Route>
            {/* Add more routes as needed */}
            {/* Example: <Route path="/settings" element={<Settings />} /> */}
          </Routes>
          {/* <TabBar activeTab={activeTab} onTabChange={setActiveTab}/> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
