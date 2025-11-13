import { InputToDO } from "./component/InputToDo.jsx";

export default function InputToDo(){
    const [InputValue, setInputValue] = useState('');  
    const addtask = () => {
        if(InputValue.trim() !== ''){
            console.log("New Task Added:", InputValue);
            setInputValue('');
            document.getElementById('input-todo').value = '';
        }
    }
    return (
        <div className="input-todo">
            <input type="text" placeholder="Add a new to-do item" id="input-todo" onChange={(e)=> setInputValue(e.target.value)}/>
            <button onClick={addtask}>Add</button>
        </div>
    );
}