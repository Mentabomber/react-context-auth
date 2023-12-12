import { createContext, useContext, useState } from "react";

// creazione dell context
const PostsContext = createContext();

// creazione di un elemento custom attorno al provider
export function PostsProvider({ children }) {
  const [postsList, setPostsList] = useState([]);

  async function fetchData() {
    const jsonData = await (await fetch('http://localhost:3307/posts')).json();

    setPostsList(jsonData.data);
  }

  return (
    <PostsContext.Provider value={{postsList, fetchData}}>
      {children}
    </PostsContext.Provider>
  );
}

// creazione di un custom hook per accedere al context
export function usePosts() {
  return useContext(PostsContext);
}