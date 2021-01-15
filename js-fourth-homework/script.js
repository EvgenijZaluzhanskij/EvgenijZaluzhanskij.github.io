const tasks = [
    {
        "task": "Learn JS",
        "author": "Me",
        "priority": 100,
        "estimate": new Date("2020-12-31")
    },
    {
        "task": "Buy food",
        "author": "My girlfriend",
        "priority": 50,
        "estimate": new Date("2020-01-16")
    },
    {
        "task": "Repair my car",
        "author": "Dad",
        "priority": 9000,
        "estimate": new Date("2020-02-01")
    },
    {
        "task": "Explain Shmebulok meme",
        "author": "Mom",
        "priority": 20,
        "estimate": new Date("2021-12-31")
    },
    {
        "task": "Workout",
        "author": "Me",
        "priority": 150,
        "estimate": new Date("2020-01-31")
    },
]

function getAllTasks() {
    result = tasks.reduce((acc, task) => {
        acc.push(task.task)
        return acc
    }, [])
    return result.join("; ")
}

function getTasksByAuthor(author) {
    return tasks.filter(task => task.author === author)
}

function findTasksByText(search_string) {
    return tasks.filter(task => task.task.includes(search_string))
}

function getTheMostPriorityTask() {
    let result = tasks[0]

    tasks.forEach((task, index, array) => {
        if (task.priority > result.priority) {
            result = task
        } 
    })

    return result
}

function getTheNearestTask() {
    let result = tasks[0]

    tasks.forEach(
        (task, index, array) => {
            if (task.estimate < result.estimate) {
                result = task
            }
        }
    )

    return result
}

function main() {
    console.log("Fisrst function: get all tasks as a string")
    console.log(getAllTasks())

    console.log("Second function: get all tasks by author name")
    console.log(getTasksByAuthor("Me"))

    console.log("Third function: find tasks by text")
    console.log(findTasksByText("food"))

    console.log("Fisrst custom function: get the most priority task")
    console.log(getTheMostPriorityTask())

    console.log("Second custom function: get the nearest task")
    console.log(getTheNearestTask())
}

main()