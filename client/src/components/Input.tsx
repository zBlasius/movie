import { useState } from "react";
import { Image } from "react-bootstrap";

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
                    className="form-control form-control-lg"
                />
                {isPassword &&
                    <Image
                        style={{ height: "5%", color: 'white', background: 'white', borderRadius: 20, cursor:'pointer' }}
                        src="/visibility-icon.svg"
                        onClick={() => setHiddenValue(!hiddenValue)}
                    />}
            </div>
        </div>
    )

}