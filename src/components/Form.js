import React, {useState} from "react";
import { useCommentsStore } from "../stores/hooks";

const Form = () => {
    const { addComment } = useCommentsStore();
    const [inputData, setInputData] = useState("")

    const handleSubmit = 
        (e) => {
            e.preventDefault();
            
            const comment = {
                id: Date.now(),
                comment: inputData
            }

            addComment(comment);

            setInputData("")
        }

    const handleInputChange = (e) => setInputData(e.target.value)


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