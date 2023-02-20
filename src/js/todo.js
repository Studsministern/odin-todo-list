import { getTodoHTML } from "./DOMmanager";

export const Todo = (description, dueDate) => { // Todo factory function
    let _todo = {
        description: description,
        dueDate: dueDate
    }

    const getDescription = () => _todo.description;    
    const getShortDescription = () => {
        let strList = _todo.description.split(/\s+/);
        if(strList.length > 3) {
            return strList.slice(0, 4).join(" ") + "...";
        }
        return strList.join(" ");
    }

    const getDOM = () => getTodoHTML(this);

    const editDescription = (newDescription) => _todo.description = newDescription;
    const editDueDate = (newDueDate) => _todo.dueDate = newDueDate;

    return { 
        getDescription,
        getShortDescription,
        getDOM,
        editDescription,
        editDueDate
    };
};