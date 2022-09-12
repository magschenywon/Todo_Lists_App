// prompt info for users to use at during first log-in
let input = prompt('what would you like to do today?'); 

const todos = ['Clean Litter Box', 'Check XXX', 'Do XXX'];

// if user doesn't put 'quit' or 'q', will not exit the app
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {

        // if input 'list', display all the current list info
        console.log('*****************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }

        console.log('*****************')
    } 
    
    else if (input === 'new') {

        // if input 'new', prompt a message for user to enter and add that new todo to the end of the list, and show updated list
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    }
    
    else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter an index to delete:'));
        
        // check if enter the index of list in proper type (String), if true -> delete the item and show delete info; otherwise show mistake
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index')
        }
    }
    input = prompt('what would you like to do?')
}
console.log('OK QUIT THE APP!')
