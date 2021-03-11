import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to="/somewhere/to/go",
        id=0,
        deleteItem,
        updateItem,
        item={title: "Some Title", _id:"ABC"},
        active
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCahedItem] = useState(item)
    return (
        <>
            {
                !editing &&
                <>
                    <Link className={`nav-link ${active?'active':''}`} to={to}>
                        {item.title} {JSON.stringify(active)}
                        <i onClick={() => setEditing(true)} className="fas fa-edit fa-pull-right"></i>
                    </Link>

                </>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) =>
                            setCahedItem({
                                ...cachedItem,
                                title: e.target.value
                            })}
                        value={cachedItem.title}/>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(cachedItem)
                    }} className="fas fa-check"></i>
                    <i onClick={() => deleteItem(item)} className="fas fa-times"></i>
                </>
            }
        </>
    )
}

export default EditableItem