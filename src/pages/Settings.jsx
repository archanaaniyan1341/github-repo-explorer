import constants from "../constants/appConstants.json";
const Settings = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <p className="text-gray-700">{constants.settings.content}</p>
    </div>
  );
};
export default Settings;
