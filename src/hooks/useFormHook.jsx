import React, { useState } from 'react'

const useFormHook = (initialValue = {}) => {

    const [Data, setData] = useState(initialValue);

    const handlechange = (e) =>{
        const {name, value} = e.target;
        setData({
            ...Data,
            [name]:value
        })
    };

    const resetForm = () =>{
        setData(initialValue)
    };

  return {Data, handlechange, resetForm}
}

export default useFormHook;