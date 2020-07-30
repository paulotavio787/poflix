import React from "react"
import { Formulario } from "./styles"

const FormField = ({ value, onChange, type, name, label, tag, className }) => {
    if (tag === "input") {
        return (
            <Formulario>
                <div className="box2">
                    <label>
                        <div className="Lab">
                            {label}
                        </div>
                        <div className="box">
                            <input
                                className={className}
                                tag={tag}
                                type={type}
                                value={value}
                                name={name}
                                onChange={onChange}
                            />
                        </div>
                    </label>
                </div>
            </Formulario>

        );
    } else {
        return (
            <Formulario>
                <div className="box2">
                    <label >
                        <div className="Lab">
                            {label}
                        </div>
                        <div className="box" >
                            <textarea
                                className={className}
                                tag={tag}
                                type={type}
                                value={value}
                                name={name}
                                onChange={onChange}
                            />
                        </div>

                    </label>
                </div>
            </Formulario>

        );
    }
}

export default FormField;