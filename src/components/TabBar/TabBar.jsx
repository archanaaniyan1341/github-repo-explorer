// components/TabBar.js
import { FiSettings } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import constants from "../../constants/appConstants.json";
import './TabBar.css';

 const TAB_CONFIG = {
  trending: {
    id: "trending",
    title: "Trending Github Repos",
    icon: <FaStar className="text-xl" />,
    label: constants.title.trending,
   
  },
  settings: {
    id: "settings",
    title: "Settings",
    icon: <FiSettings className="text-xl" />,
    label: constants.title.settings,
  
  },
};


const TabBar = ({ activeTab, onTabChange }) => (
  <footer className="tab-bar">
    {Object.values(TAB_CONFIG).map((tab) => (
      <button
        key={tab.id}
        onClick={() => onTabChange(tab.id)}
        className={`tab-button ${
          activeTab === tab.id ? 'tab-button-active' : 'tab-button-inactive'
        }`}
        aria-label={tab.label}
      >
        {tab.icon}
        <span className="tab-label">{tab.label}</span>
      </button>
    ))}
  </footer>
);

export default TabBar;