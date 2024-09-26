//1 useEffect(callback)
// gọi callback mỗi khi component re-render 


import React, { useEffect } from 'react'
//callback luôn luôn được gọi sau khi component mounted 

export default function ButtonGia() {
    useEffect(() => {
        console.log('Component mounted')
    })
    return (
        <div>
            <h3>hello word</h3>
        </div>
    )
}