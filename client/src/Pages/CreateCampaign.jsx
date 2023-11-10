import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { money } from '../assets';
import { CustomButton , FormField } from '../Components';
import { checkIfImage } from '../utils';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: '',
  });
  const handleFormFieldChange=(fieldname,e)=>{
    setForm({...form , [fieldname]: e.target.value});
  }
  const handleSubmit=()=>{

  }
  return (
    <div className='bg-[#1c1c24] mt-[3rem] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
      {isLoading && <div>Loader...</div>}
      <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]'>
        <h1 className='font-bold sm:text-[25px] text-[18px]  leading-[38px] text-white'>Start a Campaign</h1>
      </div>
      <form onSubmit={handleSubmit} className=' bg -white w-full mt-[65px] flex flex-col gap[30px]'>
        <div className="flex flex-wrap gap-[40px]">
          <FormField LabelName ="Your Name"
          placeholder ="Satwik Kanhere"
          inputType ="text"
          value ={form.name}
          handleChange={(e)=>handleFormFieldChange('name', e)}/>
          <FormField LabelName ="Campaign Title"
          placeholder ="Write a Title"
          inputType ="text"
          value ={form.title}
          handleChange={(e)=>handleFormFieldChange('title', e)}/>
          
          </div> 
          <div className='mt-[2rem]'>
          <FormField LabelName ="Story "
          placeholder ="Write a Story"
          issTextArea
          value ={form.description}
          handleChange={(e)=>handleFormFieldChange('description', e)}
          />
          </div>


          <div className='mt-[2rem]'>
          <div className="flex flex-wrap gap-[40px]">
          <FormField LabelName ="Goal"
          placeholder ="ETH 0.50"
          inputType ="text"
          value ={form.target}
          handleChange={(e)=>handleFormFieldChange('target', e)}/>
          <FormField LabelName ="End Date"
          placeholder ="End Date"
          inputType ="date"
          value ={form.deadline}
          handleChange={(e)=>handleFormFieldChange('deadline', e)}/>
            <FormField LabelName ="Campaign Image"
          placeholder ="Place image url of your campaign"
          inputType ="url"
          value ={form.image}
          handleChange={(e)=>handleFormFieldChange('image', e)}/>
          </div> 
          <div className="flex justify-center items-center mt-[40px] ">
            <CustomButton btnType="Submit" title="Submit new Campaign" styles="bg-[#1dc071]" />
          </div>
          </div>
        </form>
    </div>
  );
};

export default CreateCampaign;
