//checkbox checkID
// "use client";
// import { useState } from 'react'

// const courses = [
//     {
//         "id": 1,
//         "name": 'iphone'
//     },
//     {
//         "id": 2,
//         "name": 'mac'
//     },
//     {
//         "id": 3,
//         "name": 'ipad'
//     },
//     {
//         "id": 4,
//         "name": 'watch'
//     }

// ]

// export default function HooksTest() {
//     const [checked, setCheckID] = useState([]);

//     const handleCheck = (id) => {
//         setCheckID(prev => {
//             const ischecked = checked.includes(id)
//             if (ischecked) {
//                 return checked.filter(item => item !== id)
//             }
//             else {
//                 return [...prev, id]
//             }
//         })
//     }

//     const handleClick = () => {
//         console.log({ ids: checked });
//     }

//     return (
//         <div style={{ padding: 320 }}>
//             {courses.map(course => (
//                 <div key={course.id} >
//                     <input
//                         type="checkbox"
//                         checked={checked.includes(course.id)}
//                         onChange={() => handleCheck(course.id)}
//                     />
//                     {course.name}
//                 </div>
//             ))}
//             <button onClick={handleClick}>register</button>
//         </div>
//     )
// }

//radio checkID
// "use client";

// import { useState } from 'react'

// const courses = [
//     {
//         "id": 1,
//         "name": 'iphone'
//     },
//     {
//         "id": 2,
//         "name": 'mac'
//     },
//     {
//         "id": 3,
//         "name": 'ipad'
//     },
//     {
//         "id": 4,
//         "name": 'watch'
//     }

// ]

// export default function HooksTest() {
//     const [checkID, setCheckID] = useState <number | undefined>(undefined);

//     const handleClick = () => {
//     }
//     return (
//         <div style={{ padding: 320 }}>
//             {courses.map(course => (
//                 <div key={course.id}>
//                     <input
//                         checked={checkID === course.id}
//                         onChange={() => setCheckID(course.id)}
//                         type="radio"
//                     />
//                     {course.name}
//                 </div>
//             ))}
//             <button onClick={handleClick}>register</button>
//         </div>
//     )
// }


// Ràng buộc hai chiều
// "use client";
// import { useState } from 'react'

// export default function HooksTest() {
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')

//     const handleClick = () => {
//         console.log(name)
//         console.log(email)
//     }

//     return (
//         <div style={{ padding: 32 }}>
//             <input onChange={e => setName(e.target.value)}
//                 value={name}
//             />
//             <input onChange={e => setEmail(e.target.value)}
//                 value={email}
//             />
//             <button onClick={handleClick}>Chane</button>
//         </div>
//     )
// }


// định nghĩa của useState
"use client";
import { useState } from 'react'

const gitfts = [
    'cpu i9',
    'ram 16gb',
    'gpu rtx 3080',
]

export default function HooksTest() {

    // const [gitf, setGitf] = useState()
    const [gitf, setGitf] = useState<string | undefined>(undefined);


    const radomgift = () => {
        const index = Math.floor(Math.random() * gitfts.length)

        setGitf(gitfts[index]);
    }

    return (
        <div className='HooksTest'>
            <h1>{gitf || 'chưa có phần thưởng'}</h1>
            <button onClick={radomgift}>lấy phần thưởng</button>
        </div>
    )
}

