
const initialState = {

    username: null,
    id: null,
    profile_pic: null

}

const GET_USER = 'GET_USER'

export function getUser(userObj) {
    return {
        type: GET_USER,
        payload: userObj
    }

}



export default function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case GET_USER:
            // console.log(payload)
            return { ...state, username: payload.username, profile_pic: payload.profile_pic }
        default:
            return state
    }
}