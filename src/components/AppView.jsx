import React, { useCallback } from "react";
import Trending from "../pages/Trending";
import Settings from "../pages/Settings";
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

  return <main className="flex-1 min-h-[75vh]">{renderView()}</main>;
};
export default AppView;