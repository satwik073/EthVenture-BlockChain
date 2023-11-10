import React from 'react'

const FormField = ({LabelName , placeholder , value , inputType , issTextArea , handleChange}) => {
  return (
    <label className='flex-1 w-full flex flex-col'>
        {LabelName && (
            <span className="font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">{LabelName}</span>
        )}
        {issTextArea ? (
            <textarea/>
        ):(
            <input required value={value} onChange={handleChange} type={inputType} 
            step="0.1"/>
        )}
    </label>
  )
}

export default FormField