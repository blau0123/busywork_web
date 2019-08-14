const initState = {
    noteList: [
        {id: '1', title: "first", body: "note lol"},
        {id: '2', title: "second note", body: "wow another note! i'm so productive"}
    ]
}

const notesReducer = (state = initState, action) => {
    return state;
}

export default notesReducer;