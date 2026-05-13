type TaskStatus = 'Open' | 'InProgress' | 'Closed';

function handleTask(status: TaskStatus): void {
    switch (status) {
        case 'Open':
            console.log("Task is Open");
            break;

        case 'InProgress':
            console.log("Task is In Progress");
            break;

        case 'Closed':
            console.log("Task is Closed");
            break;

        default:
            const exhaustiveCheck: never = status;
            console.log(exhaustiveCheck);
    }
}

handleTask('Open');
handleTask('InProgress');
handleTask('Closed');