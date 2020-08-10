import React, {TextareaHTMLAttributes} from 'react';
import './styles.css';
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
  name:string;
  label:string;

}


const Input:React.FC<TextareaProps>=({label,name,...rest}) =>{
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest }></textarea>
    </div>


  );
}

export default Input;
