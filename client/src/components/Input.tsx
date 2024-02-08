import { useState } from "react";
import { Image } from "react-bootstrap";
import "./css/input.scss"

export default function Input({ label, onChange, value, isPassword }: {
    label?: string,
    isPassword?: Boolean
    onChange: React.ChangeEventHandler<HTMLInputElement>
    value: string
}) {
    const [hiddenValue, setHiddenValue] = useState(true)

    return (
        <div className="form-outline form-white mb-4 input-sign">
            {label && <label className="form-label" > {label} </label>}

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 5 }} className="input-style">
                <input
                    type={hiddenValue ? "password" : "text"}
                    value={value}
                    onChange={(e) => onChange(e)}
                    className="form-control form-control-lg input-text"
                />
                <div style={{width:45, height:45, position:'absolute', right:'9%', cursor:'pointer'}} onClick={()=> setHiddenValue(!hiddenValue)}>  </div>
            </div>
        </div>
    )

}