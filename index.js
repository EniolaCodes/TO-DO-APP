window.addEventListener("load", () =>{
    const form = document.querySelector("#newTaskForm");
    const input = document.querySelector("#newTaskInput");
    const listElement = document.querySelector("#tasks");


    form.addEventListener("submit", (e) =>{
        e.preventDefault();

        const task = input.value;
        if(!task){
            alert("Kindly input what you intend to do")
            return ;
        }

        // create a new task on submit 
        const taskItem = document.createElement("div");
        taskItem.classList.add("task");
        const taskItemContent = document.createElement("div");
        taskItemContent.classList.add("content");
        taskItem.appendChild(taskItemContent);

        const taskItemContentInput = document.createElement("input");
        taskItemContentInput.classList.add("text");
        taskItemContentInput.type = "text";
        taskItemContentInput.value = task; 
        taskItemContentInput.setAttribute("readonly", "readonly");
        taskItemContent.appendChild(taskItemContentInput);

            //  
        const taskItemActions = document.createElement("div");
        taskItemActions.classList.add("actions");
      
        // Edit button
        const taskItemActionsEdit =document.createElement("button");
        taskItemActionsEdit.classList.add("edit");
        taskItemActionsEdit.innerHTML = "edit";

        // Remove Button
        const taskItemActionsRemove = document.createElement("button");
        taskItemActionsRemove.classList.add("remove");
        taskItemActionsRemove.innerHTML = "remove";

        // Append the edit and delete button
        taskItemActions.appendChild(taskItemActionsEdit);
        taskItemActions.appendChild(taskItemActionsRemove);

        // Append the buttons to the task item
        taskItem.appendChild(taskItemActions);

        // Append the task item to the list element
        listElement.appendChild(taskItem);

        input.value = "";
         
        // Create the edit button
        taskItemActionsEdit.addEventListener("click", () =>{
        if(taskItemActionsEdit.innerText.toLowerCase() == "edit"){
            taskItemContentInput.removeAttribute("readonly");
            taskItemContentInput.focus();
            taskItemActionsEdit.innerText = "save";
        } else{
            taskItemContentInput.setAttribute("readonly", "readonly");
            taskItemActionsEdit.innerText = "Edit";
        }
        })

        // Create delete button
        taskItemActionsRemove.addEventListener("click", () => {
            listElement.removeChild(taskItem);
        })
    })

































})