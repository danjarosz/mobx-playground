import React, {useState, useCallback} from "react";

const Form = () => {
    const [inputData, setInputData] = useState("")

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            
            const comment = {
                id: Date.now(),
                comment: inputData
            }

            console.log(comment)

            setInputData("")
        },
        [],
    )

    const handleInputChange = useCallback(
        (e) => setInputData(e.target.value),
        [],
    )

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Wpisz komentarz:
                <input 
                    type="text" 
                    value={inputData} 
                    onChange={handleInputChange}
                />
            </label>
        </form>
    )
}

export default Form;