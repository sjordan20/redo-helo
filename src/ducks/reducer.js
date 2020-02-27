
const initialState = {

    username: null,
    user_id: null,
    profile_pic: null,
    allPosts: []

}

const GET_USER = 'GET_USER'
const GET_POSTS = 'GET_POSTS'

export function getUser(userObj) {
    return {
        type: GET_USER,
        payload: userObj
    }
}

export function getPosts(postObj) {
    return {
        type: GET_POSTS,
        payload: postObj
    }
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case GET_USER:
            return {
                ...state,
                username: payload.username,
                user_id: payload.user_id,
                profile_pic: payload.profile_pic
            }
        case GET_POSTS:
            console.log(payload.post)
            return {
                ...state,
                allPosts: payload.post
            }

        default:
            return state
    }
}