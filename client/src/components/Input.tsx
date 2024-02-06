export default function Input({label, onChange, hiddenValue, value} : {
    label?: string, 
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    hiddenValue?: Boolean
    value:string
}) {

    function showValue(){
        if(hiddenValue){
            let arrStr = value.split('');
            let str = arrStr.map(item=> "*")
            
            return str.join('')
        }
        
        return value
    }

    return (
        <div className="form-outline form-white mb-4 input-sign">
            {label && <label className="form-label" > {label} </label>}
            
            <input value={showValue()} onChange={(e)=> onChange(e)} className="form-control form-control-lg" />
        </div>
    )

}