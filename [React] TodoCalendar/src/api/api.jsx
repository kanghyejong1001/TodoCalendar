const API_END_POINT = 'https://localhost:7070'

// export const request = (url) => {
//     return fetch(`${API_END_POINT}${url}`)
//         .then(res => {
//             if (res.ok) {
//                 console.log(res.json())
//                 return res.json();
//             }
//             throw new Error(`${res.status} Error`)
//         })
//         .catch(e => alert(e.message));

// }

export const request = async (url, options = {}) => {
    try {
        const res = await fetch(`${API_END_POINT}${url}`, { ...options })

        if (res.ok) {
            // resolved Promise
            return await res.json()
        }
        // rejected된 에러는 여기서 throw
        throw new Error('API 처리 중 문제가 발생했습니다')
    } catch (e) {
        alert(e.message)
    }
}