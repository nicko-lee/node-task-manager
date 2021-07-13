require('../src/db/mongoose')
const Task = require('../src/models/task')
const User = require('../src/models/user')





// Task.count({ completed: false }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })


// const task = new Task({
//     description: 'Just add to be deleted'
// })

// task.save().then(() => {
//     console.log(task)
//     return Task.count({ completed: false })
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

// Task.deleteOne({ _id: '60ebb5fe1485ab55b016db39' }).then((result) => {
//     console.log(result)
//     return Task.countDocuments({ completed: false })
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })


// const user = new User({
//     name: 'Lionel Messi',
//     email: 'messi@barcelona.com',
//     password: 'ballondor'
// })

// user.save().then(() => {
//     console.log(user)
// }).catch((e) => {
//     console.log(e)
// })

User.countDocuments({ age: 10 }).then((count) => {
    console.log('initial count:', count)
}).catch((e) => {
    console.log(e)
})

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('60ed5be689eb2d203a24792c', 10).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
