import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";

const ParagraphWidget = (
    {
        to="/somewhere/to/go",
        deleteItem,
        updateItem,
        _widget,
       }) => {
    const [editing, setEditing] = useState(false)
    const [widget, setWidget] = useState(_widget)

    return (
        <div>

            {
                editing &&
                <>
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

                    </select>
                    <textarea
                        onChange={(e) =>
                            setWidget({...widget, text: e.target.value})}
                        value={widget.text}
                        className="form-control">
                    </textarea>

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
                        <h4 style={{color:"black"}}>Paragraph Widget </h4>
                        <p style={{color:"black"}}>
                            {_widget.text}
                        </p>
                    </Link>

                </div>

            }
        </div>
    )
}

export default ParagraphWidget