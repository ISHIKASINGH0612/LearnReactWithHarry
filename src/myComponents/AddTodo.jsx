import React, { useState } from 'react'

const AddTodo = (props) => {
    // 1. Inputs ke liye state banaiye
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault(); // 2. Yeh sabse zaroori hai! Yeh page refresh hone se rokta hai
        if (!title || !desc) {
            alert("Title or Description empty nahi ho sakte!");
        } else {
            // 3. App.jsx wale function ko data bhejiye
            props.addTodo({ title, desc });
            // 4. Form khali kar dijiye add karne ke baad
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" placeholder="Enter Title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" placeholder="Enter Description" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo

