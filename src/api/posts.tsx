import { useEffect, useState } from 'react';

const useFetchPostsData = () => {
  const [postsData, setPostsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://graphqlzero.almansi.me/api", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `
              query GetPosts($options: PageQueryOptions) {
                posts(options: $options) {
                  data {
                    id
                    title
                  }
                  meta {
                    totalCount
                  }
                }
              }
            `,
            variables: {
              options: {
                paginate: {
                  page: 1,
                  limit: 100
                }
              }
            }
          })
        });
        const {data} = await response.json();
        setPostsData(data?.posts?.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return postsData;
};

export default useFetchPostsData;
