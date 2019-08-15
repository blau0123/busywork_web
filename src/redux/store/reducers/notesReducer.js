const initState = {
    noteList: [
        {id: '1', title: "first", body: "note lol"},
        {id: '2', title: "second note", body: "wow another note! i'm so productive"},
        {id: '3', title: "need food", body: "i am hungry pls send food"}
    ]
}

const notesReducer = (state = initState, action) => {
    return state;
}

export default notesReducer;