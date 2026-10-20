import {useState} from 'react'


function Todolist(){

    const [tasks, setTask] = useState([]);
    const [newtask, setnewtask] = useState("");

    const changetask = (event) => {
        setnewtask(event.target.value)
    }

    const addtask = () => {
        if(newtask.trim() !== ""){
            setTask(t => [...t, newtask])
            setnewtask("");
        }
        
    }
    const removetask = (index) => {
        setTask(tasks.filter((_, i) => { return i !== index}))
    }
    const moveup = (index) => {

        const updatetask = [...tasks];
        if(index > 0){
            [updatetask[index], updatetask[index - 1]] = 
            [updatetask[index - 1], updatetask[index]]
        }
        setTask(updatetask)
    
    }
    const movedown = (index) => {
        const updatetask = [...tasks];

        if(index < tasks.length - 1){
            [updatetask[index], updatetask[index + 1]] = 
            [updatetask[index + 1], updatetask[index]]
        }
        setTask(updatetask)
    }


    return(
        <div>
            <h1 style={{color: 'red'}}>To Do Tasks</h1>
            <div>
                <input type="text" value={newtask} placeholder='enter a tasks..' onChange={changetask} />
                <button className='add-btn' onClick={addtask} >add task</button>
                
            </div>
            <ol>
                {tasks.map((task, index) => <li key={index} >
                    <span>{task}</span>
                    <button className='delete-btn' onClick={() => removetask(index)}> delete</button>
                    <button className='up-btn' onClick={() => moveup(index)} >👆🏽</button>
                    <button className='up-btn' onClick={() => movedown(index)} >👇🏽</button>
                </li>)}
                
            </ol>
        </div>
    );

}
export default Todolist