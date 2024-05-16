import { addPosts } from '../store/postsSlice';
 
 export const fetchData = async (dispatch) => {
        try {
            const response = await fetch(`https://api.unsplash.com/search/photos/?page=2&query=office&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`);
            const data = await response.json();
            console.log('API data:', data.results);
            dispatch(addPosts(data.results));
        } catch (error) {
            console.error(error);
        }
    }  ;
