// export const saveData = (todo) => {
//   const oldTodoList = loadData();

//       const newTodolist = [...oldTodoList, todo]  /// ... (spread , {} , [])
//       localStorage.setItem('todo', JSON.stringify(newTodolist));

// }

export const saveData = (member) => {
    const oldMemberList = loadData()

    if (oldMemberList === null) {
        localStorage.setItem('member', JSON.stringify([member]))
    } else {
        const newMemberlist = [...oldMemberList, member]
        localStorage.setItem('member', JSON.stringify(newMemberlist))
    }
}

export const loadData = () => {
    return JSON.parse(localStorage.getItem('member'))
}
