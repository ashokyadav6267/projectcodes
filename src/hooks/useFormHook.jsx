import React, { useState } from 'react'

const useFormHook = (initialValue = {}) => {

    const [data, setData] = useState(initialValue);

    const handlechange = (e) =>{
        const {name, value} = e.target;
        setData({
            ...data,
            [name]:value
        })
    };

    const resetForm = () =>{
        setData(initialValue)
    };

  return {data, handlechange, resetForm}
}

export default useFormHook;