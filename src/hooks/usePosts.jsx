import { useMemo } from "react";

export const useSortedPosts = (post, sort) => {
    const sortedPost = useMemo(() => {
    console.log('Отработала функция сортед пост');
        if (sort) {
            return [...post].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return post;
    }, [sort, post])
    
    return sortedPost;
}

export const usePosts = (post, sort, query) => {
    const sortedPost = useSortedPosts(post, sort)
    const sortedAndSearchedPost = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(query))
  }, [query, sortedPost])
  
    return sortedAndSearchedPost;
}

export const usePagesArray = (totalPages)=>{
    const getPagesArray = useMemo(() => {
        let result = []
        for (let i = 0; i < totalPages; i++) {
            result.push(i + 1)
        } return result
    }, [totalPages])
    
    return getPagesArray;
}