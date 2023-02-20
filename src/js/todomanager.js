const _today = (parent) => {
    
}

const _weekly = (parent) => {

}

const _projects = (parent) => {

}

export function switchTodos(buttonText, parent) {
    switch(buttonText) {
        case 'Today':
            _today(parent)
            break;
        case 'Weekly':
            _weekly(parent);
            break;
        case 'Projects':
            _projects(parent);
            break;
        default:
            console.log('Menu name invalid');
    }
}