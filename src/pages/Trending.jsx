import RepoList from "../components/RepoList/RepoList";

const Trending = () => {
  return (
    <div
      className="max-h-[75vh] mx-auto p-4 overflow-y-auto"
      id="scrollableDiv"
    >
      <RepoList />
    </div>
  );
};
export default Trending;
