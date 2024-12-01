// I would suggest using string interpolation to buld the endpoint URLs

// Consider placing the Api key in a separate env file for better security
export const API_KEY = '8cac6dec66e09ab439c081b251304443'
export const ENDPOINT = 'https://api.themoviedb.org/3'
// The / after "movie" is causing an error in the request, it should be removed
export const ENDPOINT_DISCOVER = ENDPOINT+'/discover/movie/?api_key='+API_KEY+'&sort_by=vote_count.desc'
export const ENDPOINT_SEARCH = ENDPOINT+'/search/movie/?api_key='+API_KEY
export const ENDPOINT_MOVIE = ENDPOINT+'/movie/507086?api_key='+API_KEY+'&append_to_response=videos'