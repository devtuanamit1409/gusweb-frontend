"use client"

import ButtonGia from '@/test/ButtonGia'
import React, { useState } from 'react'
export default function HooksTest() {
    const [show, setshow] = useState(false)

    return (

        <div>
            <button onClick={() => setshow(!show)}>show</button>
            {show && <ButtonGia />}
        </div>
    )
}




//dùng useState để tạo danh sách
// import React, { useState, useEffect } from 'react';
// export default function HooksTest() {
//     const [job, setjob] = useState(''); // Job hiện tại
//     const [jobs, setjobs] = useState<string[]>([]); // Khởi tạo mảng công việc rỗng

//     useEffect(() => {
//         // Lấy dữ liệu từ localStorage chỉ khi component được mount
//         const storedJobs = localStorage.getItem('jobs');
//         if (storedJobs) {
//             setjobs(JSON.parse(storedJobs)); // Phân tích dữ liệu từ localStorage và cập nhật state
//         }
//     }, []); // Chạy chỉ một lần khi component được mount

//     const handleSumit = () => {
//         if (job.trim()) { // Kiểm tra nếu job không phải là chuỗi rỗng
//             setjobs(prev => {
//                 const newJobs = [...prev, job]; // Thêm công việc mới vào mảng jobs
//                 localStorage.setItem('jobs', JSON.stringify(newJobs)); // Lưu vào localStorage
//                 return newJobs; // Trả về mảng mới
//             });
//             setjob(''); // Đặt lại ô input
//         }
//     };

//     return (
//         <div style={{ padding: 30 }}>
//             <input
//                 onChange={(e) => setjob(e.target.value)}
//                 value={job}
//                 className='border'
//             />
//             <button onClick={handleSumit}>submit</button>
//             <ul>
//                 {jobs.map((job, index) => (
//                     <li key={index}>
//                         {job}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }


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
// "use client";
// import { useState } from 'react'

// const gitfts = [
//     'cpu i9',
//     'ram 16gb',
//     'gpu rtx 3080',
// ]

// export default function HooksTest() {

//     // const [gitf, setGitf] = useState()
//     const [gitf, setGitf] = useState<string | undefined>(undefined);


//     const radomgift = () => {
//         const index = Math.floor(Math.random() * gitfts.length)

//         setGitf(gitfts[index]);
//     }

//     return (
//         <div className='HooksTest'>
//             <h1>{gitf || 'chưa có phần thưởng'}</h1>
//             <button onClick={radomgift}>lấy phần thưởng</button>
//         </div>
//     )
// }

