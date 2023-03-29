import { useState} from "react";

export const useForm = (initialValues) => {
    const [form, setForm] = useState(initialValues);
    
    const onChange = (e) => {
      const{name, value}=e.target
      setForm({ ...form, [name]: value });
    };

    const clearForm=()=>{
      setForm(initialValues)
    }
  
    return { form, onChange, clearForm};
  };