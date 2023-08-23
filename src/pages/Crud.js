import React, { useState, useEffect } from "react";
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const CRUD = () => {
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        content: "",
    });

    const [editID, setEditID] = useState()

    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(0)

    const { id, title, content } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id && title && content) {
            axios.post('https://fang-list-backend-e3e57c8589d1.herokuapp.com/note', formData)
                .then(res => {
                    setData([...data, res.data]);
                    setFormData({ id: "", title: "", content: "" });

                })
                .catch(err => console.log(err))

        }
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        if (id && title && content) {
            axios.put(`https://fang-list-backend-e3e57c8589d1.herokuapp.com/note/${editID}`, formData)
                .then(res => {
                    setFormData({ id: "", title: "", content: "" });
                    setRefresh(refresh + 1)
                })
                .catch(err => console.log(err))
        }
    };

    const handleDelete = (deleteID) => {
        axios.delete(`https://fang-list-backend-e3e57c8589d1.herokuapp.com/note/${deleteID}`)
        .then(res => {
            console.log('Record Gone!', res)

        })
        .catch(err => console.log(err))
    };

    const handleEdit = (editIDNotState) => {
        axios.get(`https://fang-list-backend-e3e57c8589d1.herokuapp.com/note/${editIDNotState}`)
            .then(res => {
                setFormData(res.data)

            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        axios.get('https://fang-list-backend-e3e57c8589d1.herokuapp.com/note')
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err))
    }, [refresh]);

    return (
        <div className="crud-container">
            <div className="crud-stuff">
                <h4>The Notes are all here!!</h4>
                <form>
                    <div className="form-group">
                        <label htmlFor="id">ID</label>
                        <input
                            type="text"
                            className="form-id"
                            id="id"
                            placeholder="Enter id here..."
                            name="id"
                            value={id}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-title"
                            id="title"
                            placeholder="Enter title here..."
                            name="title"
                            value={title}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <textarea
                            className="form-content"
                            id="content"
                            rows="7"
                            cols="100"
                            placeholder="Sweet nothingness goes here..."
                            name="content"
                            value={content}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button type="submit" onClick={(e) => { 
                        handleSubmit(e)
                    }}>
                        Submit😎
                    </button>
                    <button type="submit" onClick={(e) => {
                        handleUpdate(e)
                    }}>
                        Update🤳🏾
                    </button>
                </form>
                
                <hr />
                
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.content}</td>
                                <td>
                                    <EditIcon onClick={() => {
                                        handleEdit(item.id)
                                        setEditID(item.id)
                                    }}>
                                        Edit
                                    </EditIcon>{" "}
                                    <DeleteIcon onClick={() => handleDelete(item.id)}>
                                        Delete
                                    </DeleteIcon>
                                </td>
                            </tr>))}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default CRUD;