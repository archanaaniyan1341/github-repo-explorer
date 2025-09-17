import React, { useCallback } from "react";
import Trending from "../pages/Trending";
import Settings from "../pages/Settings";
import Header from "./Header";


const AppView = ({ activeTab }) => {
  const renderView = useCallback(() => {
    switch (activeTab) {
      case "trending":
        return <Trending />;
      case "settings":
        return <Settings />;
      default:
        return null;
    }
  }, [activeTab]);

  return(
    <>
     <Header
            title={
              activeTab === "trending" ? "Trending Github Repos" : "Settings"
            }
          />
     <main className="flex-1 min-h-[80vh]">{renderView()}</main>
     </>
    );
};
export default AppView;