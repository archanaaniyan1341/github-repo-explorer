
import { FaStar } from "react-icons/fa";
import { formatNumber } from "../../utils/formatNumber";
import "./RepoItem.css"; // Import the CSS file
import { FaBookBookmark } from "react-icons/fa6";

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