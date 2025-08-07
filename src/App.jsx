
import { useState } from "react";
import Header from "./components/Header";
import TabBar from "./components/TabBar/TabBar";
import AppView from "./components/AppView";

const App = () => {
  const [activeTab, setActiveTab] = useState("trending");

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-md flex flex-col min-h-[90vh]">
        <Header title={activeTab === "trending" ? "Trending Github Repos" : "Settings"}/>
        <AppView activeTab={activeTab} />
        <TabBar activeTab={activeTab} onTabChange={setActiveTab}/>
      </div>
    </div>
  
  );
};

export default App;

