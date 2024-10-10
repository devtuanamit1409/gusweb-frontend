// import React from 'react';
// import Image from 'next/image';
// import { CardModel } from '@/models/cardModel';

// interface Props {
//     item: CardModel;
// }

// const WhyCardComponent = (props: Props) => {
//     const { item } = props;
//     return (
//         <div className=' home-service-item__box group w-[261px] h-[499px]  p-6 rounded-3xl gap-4 bg-white/25 border-white/25 border-2 backdrop-blur-[10px] flex flex-col items-center justify-between relative overflow-hidden'>
//             <Image
//                 src={item.url || ""}
//                 alt='Image not available'
//                 width={261}
//                 height={195}
//                 className="mb-4"
//             />
//             <div className='flex flex-col flex-grow'>
//                 <p className='text-center text-base font-bold max-h-[120px] overflow-hidden overflow-ellipsis mb-4'>
//                     {item.title}
//                 </p>
//                 <p >
//                     {item.description}
//                 </p>
//             </div>
//         </div>
//     );
// };
// export default WhyCardComponent;
