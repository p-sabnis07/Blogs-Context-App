import { createContext, useState } from "react";
import { baseUrl } from './../baseUrl';

// step 1 --> Create Context
export const AppContext = createContext();

// children mhanje ya AppContextProvider chya mdhye je components yetil tyla apan children mhnycha.
// mhnun sarvat first app.js la children bnva index.js mdhye jaun.
export default function AppContextProvider({children}) {
    // this state for loading 
    const [loading, setLoading] = useState(false);
    // this state for fetching the posts
    const [posts, setPosts] = useState([]);
    // this state for to determining the number of page that we are currently visiting
    const [page, setPage] = useState(1);
    // this state for showing the total number of pages
    const [totalPages, setTotalPages] = useState(null);

    // data filling
    // now we have to fetch the data from the given API
    async function fetchBlogPosts(page = 1) {
        setLoading(true);
        // url mdhye 2 things ahet ek ahe baseUrl ani dusri mhnje tyat aplyala pages add krave lagtat mg ....
        let url = `${baseUrl}?page=${page}`
        // console.log('Printing the Final URL');
        // console.log(url);
        try {
            const result = await fetch(url);
            const data = await result.json();
            // console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } catch(error) {
            console.log("Error Fetching Data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page) {
        setPage(page);
        fetchBlogPosts(page);
    }

    // value object indicates our whole data is in value here
    // this is the context or snapshot of data
    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange,
    };

    // step 2 --> Provider
    // here we passed the all data to the children and the children is App.js
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}