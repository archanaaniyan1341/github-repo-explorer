import React, { useState, useCallback } from "react";
import RepoItem from "../RepoItem/RepoItem";
import InfiniteScroll from "../InfiniteScroll";
import { fetchTrendingRepos } from "../../services/githubService";
import { currentDate } from "../../utils/dateUtil";
import { FaSpinner } from "react-icons/fa";
import constants from "../../constants/appConstants.json";
import "./RepoList.css"; // Import the CSS file

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const createdDate = currentDate();

  const loadRepos = useCallback(async () => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    try {
      const data = await fetchTrendingRepos(createdDate, page);
      setRepos(prev => [...prev, ...data?.items]);
      setHasMore(data?.items?.length > 0);
      setPage(prev => prev + 1);
    } catch (error) {
      console.error("Error fetching repositories:", error);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  }, [page, createdDate, isLoading, hasMore]);

  return (
    <div id="scrollableDiv" className="repo-list-container">
      <InfiniteScroll
        fetchMore={loadRepos}
        hasMore={hasMore}
        isLoading={isLoading}
        loadingComponent={
          <div className="loading-container">
            <FaSpinner className="loading-spinner" /> {constants.text.loading}
          </div>
        }
        endMessage={
          <p className="end-message">{constants.text.endMessage}</p>
        }
      >
        {repos?.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default RepoList;