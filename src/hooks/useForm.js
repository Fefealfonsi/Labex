import React, { useState} from "react";

export const useForm = (initialValues) => {
    const [form, setForm] = useState(initialValues);
  
    const onChange = (value, name) => {
      setForm({ ...form, [name]: value });
    };

    const clearForm=()=>{
      setForm(initialValues)
    }
  
    return { form, onChange, clearForm};
  };