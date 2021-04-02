import React, {useState} from 'react'
import {Link, useParams} from "react-router-dom";
import {ListGroup} from "react-bootstrap";

const HeadingWidget = (
    {
        to="/somewhere/to/go",
        deleteItem,
        updateItem,
        _widget}) => {
    const [editing, setEditing] = useState(false)
    const [widget, setWidget] = useState(_widget)

    return (
        <div>{editing &&
        <>
            <i onClick={() => {
                deleteItem(_widget)
                setWidget({})
                setEditing(false)
            }}
               className="fas fa-trash float-right"></i>


            <i onClick={() => {
                updateItem(widget)
                setWidget({})
                setEditing(false)
            }}
               className="fas fa-check float-right"></i>
            <div>
                <input onChange={(e) =>
                    setWidget(widget => ({...widget, text: e.target.value}))}
                       value={widget.text}
                       className="form-control"/>
                <select onChange={(e) =>
                    setWidget(widget => ({...widget, size: parseInt(e.target.value)}))}
                        value={widget.size} className="form-control">
                    <option value={1}>Heading 1</option>
                    <option value={2}>Heading 2</option>
                    <option value={3}>Heading 3</option>
                    <option value={4}>Heading 4</option>
                    <option value={5}>Heading 5</option>
                    <option value={6}>Heading 6</option>
                </select>
                <select onChange={(e) =>
                    setWidget(widget => ({...widget, type: e.target.value}))}
                        className="form-control">
                    <option value={"HEADING"}>Heading</option>
                    <option value={"PARAGRAPH"}>Paragraph</option>
                    <option value={"LIST"}>List</option>
                    <option value={"IMAGE"}>Image</option>

                </select>
            </div>
        </>
        }

            {
                !editing &&
                <div>
                    <Link to={to} className="changeColor" style={{ textDecoration: 'none' }}>
                        <i onClick={() => {
                            setEditing(true)
                            setWidget(_widget)

                        }} className="fas fa-cog float-right" style={{color:"black"}}></i>
                        <h4 style={{color:"black"}}>Heading Widget</h4>
                        {_widget.size === 1 && <h1 style={{color:"black"}}>{_widget.text}</h1>}
                        {_widget.size === 2 && <h2 style={{color:"black"}}>{_widget.text}</h2>}
                        {_widget.size === 3 && <h3 style={{color:"black"}}>{_widget.text}</h3>}
                        {_widget.size === 4 && <h4 style={{color:"black"}}>{_widget.text}</h4>}
                        {_widget.size === 5 && <h5 style={{color:"black"}}>{_widget.text}</h5>}
                        {_widget.size === 6 && <h6 style={{color:"black"}}>{_widget.text}</h6>}
                    </Link>
                </div>
            }


            {/*<div className="h{widget.size}">widget.text</div>

            {
                editing &&
                <div>
                    <input onChange={(e) => setWidget(widget => ({...widget, text: e.target.value}))}
                           value={widget.text}
                           className="form-control"/>
                    <select onChange={(e) => setWidget(widget => ({...widget, size: parseInt(e.target.value)}))}
                            value={widget.size} className="form-control">
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>
                    <select onChange={(e) => setWidget(widget => ({...widget, type: e.target.value}))}
                            className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>

                    </select>
                </div>
            }*/}
        </div>
    )
}

export default HeadingWidget