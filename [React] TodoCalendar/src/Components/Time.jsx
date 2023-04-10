// import { getTime, getDate } from "../util/current.js";

// export default function Time ({ $target }) {
//     const $date = document.createElement('h2')
//     const $time = document.createElement('h3')

//     $target.appendChild($date)
//     $target.appendChild($time)
    
//     let time = getTime()
//     let date = getDate()
    
//     this.init = () => {
//         $date.innerHTML = `${date.year}/${date.month}/${date.date}`
//         $time.innerHTML = `
//                 ${time.hours < 10 ? "0" + time.hours : time.hours}:
//                 ${time.minutes < 10 ? "0" + time.minutes : time.minutes}:
//                 ${time.seconds < 10 ? "0" + time.seconds : time.seconds}`
//         setInterval(() => {
//             time = getTime()
//             $time.innerHTML = `
//                 ${time.hours < 10 ? "0" + time.hours : time.hours}:
//                 ${time.minutes < 10 ? "0" + time.minutes : time.minutes}:
//                 ${time.seconds < 10 ? "0" + time.seconds : time.seconds}`
            
//             if (getDate().day !== date.day) {
//                 date = getDate()
//                 $date.innerHTML = `${date.year}/${date.month}/${date.date}`
//             }
//         }, 1000);
//     }

//     this.init()
// }