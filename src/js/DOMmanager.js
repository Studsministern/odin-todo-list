export function getTodoHTML(todo) {
    const div = document.createElement('div');
    div.classList.add('todo');
    
    // Description
    const description = document.createElement('p');
    div.append(description);
    description.innerText = todo.getDescription();

    // Remove button
    const removeButton = document.createElement('button');
    div.append(removeButton);
    removeButton.classList.add('remove');

    removeButton.addEventListener('click', () => {
        if(confirm(`Remove todo with description "${todo.getShortDescription()}"?`)) {
            // Remove the todo
        }
    });

    return div;
}