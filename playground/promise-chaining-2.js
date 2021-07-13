require('../src/db/mongoose')
const Task = require('../src/models/task')

// const task = new Task({
//     description: 'To be deleted'
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((e) => {
//     console.log(e)
// })

// if we do not chain the async tasks, the result is unpredictable
// indeed I tested it out and the second count sometimes is faster than the delete 2nd call
// but sometimes it is slower
// Task.countDocuments({ completed: false }).then((result) => {
//     console.log('initial count:', result)
// }).catch((e) => {
//     console.log(e)
// })

// Task.findByIdAndRemove('60ed601a215d272133cf577a').then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// Task.countDocuments({ completed: false }).then((result) => {
//     console.log('second count:', result)
// }).catch((e) => {
//     console.log(e)
// })


// async orchestration function
const deleteTaskAndCount = async () => {
    const firstCount = await Task.countDocuments({ completed: false })
    const deleted = await Task.findByIdAndRemove('60ed6084bc29a8214b3b10b1')
    const secondCount = await Task.countDocuments({ completed: false })
    console.log('first:', firstCount)
    console.log('second:', secondCount)
    return
}

deleteTaskAndCount()
