class TODOList{
    constructor(){
        this.tasks=[];
        console.log('tasks',this.tasks);
    }
    aggiungiTask(task){
     this.tasks.push(task)
     console.log("tasks", this.tasks)

     const todo = document.getElementById("todo")
     const p = document.createElement("p")
     p.appendChild(document.createTextNode(task))
     todo.appendChild(p)
     p.addEventListener("click", (e)=>{
        this.concludiTask(task);
      
     })
    }
    concludiTask(task){
        
        const index=this.tasks.indexOf(task)
       this.tasks.splice(index,1)
       console.log(this.tasks)
    }

}
 


document.addEventListener('DOMContentLoaded',()=>{
    const newTaskBtn=document.getElementById('new-task-btn');
    const clearBtn=document.getElementById('clear-btn');
    const input = document.getElementById('new-task');

    const todoList= new TODOList();

    newTaskBtn.addEventListener('click',()=>{
       
        todoList.aggiungiTask(input.value);

    });
    clearBtn.addEventListener('click',()=>{
        console.log('pulisci task');

    });

    input.addEventListener('keypress',(e)=>{
        if(e.key==='enter'){
            
           
            todoList.aggiungiTask(input.value);
            input.value= "";
        }

    });

    
});