import React, {useState} from 'react'
import {Link, useParams} from "react-router-dom";

const ListWidget = (
    {
        to="/somewhere/to/go",
        deleteItem,
        updateItem,
        _widget,
    }) => {
    const [editing, setEditing] = useState(false)
    const [widget, setWidget] = useState(_widget)

    return (


        <div>{
            !editing &&
            <>
                <Link to={to} className="changeColor" style={{textDecoration: 'none'}}>
                    <i onClick={() => {
                        setEditing(true)
                        setWidget(_widget)
                    }} className="fas fa-cog float-right" style={{color: "black"}}></i>
                    <h2>List Widget</h2>
                    {/*{<p style={{color: "black"}}>
                        {_widget.text}
                    </p>}`*/}


                    <>
                        {
                            _widget.ordered == 1 &&
                            <ol>
                                {
                                    _widget.text.split("\n").map(item => {
                                        return (
                                            <li>{item}</li>
                                        )
                                    })
                                }
                            </ol>
                        }
                        {
                            (_widget.ordered == 0 || _widget.ordered===null) &&
                            <ul>
                                {
                                    _widget.text.split("\n").map(item => {
                                        return (
                                            <li>{item}</li>
                                        )
                                    })
                                }
                            </ul>
                        }
                    </>
                </Link>

            </>
        }

            {
                editing &&
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
                    <select onChange={(e) => setWidget(widget => ({...widget, type: e.target.value}))}
                            value={widget.type} className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"LIST"}>List</option>
                        <option value={"IMAGE"}>Image</option>
                    </select>
                    <div>
                        <input type="checkbox" onChange={(e) => {
                            setWidget(widget => ({...widget, ordered: (e.target.checked) ? 1 : 0}))
                            console.log(widget.ordered)
                        }
                        }
                               checked={(widget.ordered === 1)}
                        /> Ordered
                        <br/>
                        List Items
                        <textarea
                            onChange={(e) =>
                                setWidget({...widget, text: e.target.value})}
                            value={widget.text} rows={10}
                            className="form-control">
                    </textarea>
                    </div>

                    {/* <div>
                        <input type="checkbox"/> Ordered
                        <br/>
                        List Items
                        <textarea rows={10} value={widget.text} className="form-control">

                    </textarea>
                    </div>*/}
                </>
            }
            {/*<textarea></textarea>*/}
        </div>

    )
}
export default ListWidget