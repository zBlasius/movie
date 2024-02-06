
export default function Input({label, onChange, hiddenValue, value} : {
    label?: string, 
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    hiddenValue?: Boolean
    value:string
}) {

    return (
        <div className="form-outline form-white mb-4 input-sign">
            {label && <label className="form-label" > {label} </label>}
            
            <input type={hiddenValue ? "password": "text"} value={value} onChange={(e)=> onChange(e)} className="form-control form-control-lg" />
        </div>
    )

}