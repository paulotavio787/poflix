import React from "react"

const FormField = ({value, onChange, type, name, label, tag}) => {
    if (tag === "input") {
        return(
            <div>
            <label>
                {label}
                <input
                    tag={tag}
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
            </label>
           </div>
        );
    }else{
        return(
            <div>
            <label>
                {label}
                <textarea
                    tag={tag}
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
            </label>
           </div>
        );
    }
}

export default FormField;