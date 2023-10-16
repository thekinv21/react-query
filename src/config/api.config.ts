export const BASE_URL = `https://jsonplaceholder.typicode.com/`


// todos url
export const getTodoUrl = (pathname?:string) => pathname ? `${BASE_URL}todos/${pathname}` : `${BASE_URL}todos`

// posts  url
export const getPostUrl = (pathname?:string) => pathname ? `${BASE_URL}posts/${pathname}` : `${BASE_URL}posts`

// users url
export const getUserUrl = (pathname?:string) => pathname ? `${BASE_URL}users/${pathname}` : `${BASE_URL}users`

// photo url
export const getPhotoUrl = (pathname?:string) => pathname ? `${BASE_URL}photos/${pathname}` : `${BASE_URL}photos`