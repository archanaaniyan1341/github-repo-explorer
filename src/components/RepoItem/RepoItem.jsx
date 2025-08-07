// import { FaStar } from "react-icons/fa";
// import { formatNumber } from "../../utils/formatNumber";
// const RepoItem = ({ repo }) => {
//   return (
//     <div className="group border p-4 rounded-lg shadow-sm mb-4 hover:bg-gray-200 transition">
//       <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
//         <h2 className="text-xl font-bold text-blue-700 hover:underline">
//           {repo.name}
//         </h2>
//       </a>
//       <p className="text-gray-700 mt-1">
//         {repo.description || "No description provided"}
//       </p>
//       <div className="flex justify-between items-center mt-4">
//         <div className="flex items-center">
//           <img
//             src={repo.owner.avatar_url}
//             alt={repo.owner.login}
//             className="w-8 h-8 rounded-full mr-2"
//           />
//           <span className="text-sm text-gray-600">{repo.owner.login}</span>
//         </div>
//         <div className="flex items-center text-sm text-gray-600">
//           <FaStar className="mr-1 text-yellow-500" />
//           <span>{formatNumber(repo.stargazers_count)}</span>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default RepoItem;

import { FaStar } from "react-icons/fa";
import { formatNumber } from "../../utils/formatNumber";
import "./RepoItem.css"; // Import the CSS file

const RepoItem = ({ repo }) => {
  return (
    <div className="group repo-item">
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-link">
        {repo.name}
      </a>
      <p className="repo-description">
        {repo.description || "No description provided"}
      </p>
      <div className="repo-meta-container">
        <div className="repo-owner">
          <img
            src={repo.owner.avatar_url}
            alt={repo.owner.login}
            className="repo-avatar"
          />
          <span className="repo-username">{repo.owner.login}</span>
        </div>
        <div className="repo-stars">
          <FaStar className="star-icon" />
          <span>{formatNumber(repo.stargazers_count)}</span>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;