import React, {useState} from 'react'
import {Link, useParams} from "react-router-dom";

const ImageWidget = (
    {
        to="/somewhere/to/go",
        deleteItem,
        updateItem,
        _widget,}) => {
    const [editing, setEditing] = useState(false)
    const [widget, setWidget] = useState(_widget)
    return (
        <div>
            {/* <h2>Image Widget</h2>*/}
            {
                editing &&
                <div>
                    <i onClick={() => {
                        deleteItem(_widget)
                        setWidget({})
                        setEditing(false)
                    }
                    }
                       className="fas fa-trash float-right"></i>
                    <i onClick={() => {
                        updateItem(widget)
                        setWidget({})
                        setEditing(false)
                    }
                    }
                       className="fas fa-check float-right"></i>
                    <select onChange={(e) => setWidget(widget => ({...widget, type: e.target.value}))}
                            value={widget.type} className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"LIST"}>List</option>
                        <option value={"IMAGE"}>Image</option>

                    </select>
                    URL
                    <input onChange={(e) =>
                        setWidget(widget => ({...widget, src: e.target.value}))}
                           value={widget.src} placeholder={widget.src} className="form-control"/>
                    width
                    {/*<input value={widget.width} className="form-control"/>*/}
                    <input onChange={(e) =>
                        setWidget(widget => ({...widget, width: e.target.value}))}
                           value={widget.width}
                           className="form-control"/>

                    height
                    <input onChange={(e) =>
                        setWidget(widget => ({...widget, height: e.target.value}))}
                           value={widget.height}
                           className="form-control"/>

                    {/*<input value={widget.height} className="form-control"/>*/}

                </div>
            }
            {
                !editing &&
                <div>
                    <Link to={to} className="changeColor" style={{textDecoration: 'none'}}>
                        <i onClick={() => {
                            setEditing(true)
                            setWidget(_widget)
                        }} className="fas fa-cog float-right" style={{color: "black"}}></i>
                        <h4 style={{color: "black"}}>Image Widget </h4>
                       {/* <p style={{color: "black"}}>
                            {_widget.text}
                        </p>*/}
                        <img src={_widget.src} width={_widget.width} height={_widget.height}/>
                    </Link>

                </div>

            }
        </div>
    )
}

export default ImageWidget