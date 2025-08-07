import { useEffect, useRef } from 'react';

const InfiniteScroll = ({ 
  children, 
  fetchMore, 
  hasMore, 
  loadingComponent, 
  endMessage,
  isLoading,
  threshold = 0.1,
  rootMargin = '20px'
}) => {
  const lastElementRef = useRef();

  useEffect(() => {
    if (!hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [target] = entries;
        if (target.isIntersecting && !isLoading) {
          fetchMore();
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      }
    );

    const currentObserver = observer;
    if (lastElementRef.current) {
      currentObserver.observe(lastElementRef.current);
    }

    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [fetchMore, hasMore, isLoading, rootMargin, threshold]);

  return (
    <>
      {children}
      <div ref={lastElementRef} style={{ height: '1px' }} />
      {isLoading && loadingComponent}
      {!hasMore && !isLoading && endMessage}
    </>
  );
};

export default InfiniteScroll;