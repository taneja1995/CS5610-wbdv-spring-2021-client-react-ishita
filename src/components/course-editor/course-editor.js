import React from 'react'
import {Link} from "react-router-dom";
import './course-editor.css';

const CourseEditor = ({history}) =>
    <div className="container-fluid">
    <h1>
        {/*<Link to="/courses/table">*/}

            <i className="fas fa-arrow-left btn-outline-primary"
               onClick={() => history.goBack()}></i>

        {/*</Link>*/}
        Course Editor
        <i className="fas fa-times float-right"
           onClick={() => history.goBack()}></i>

    </h1>
        <div className="row ">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-12">

                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

                    <a className="navbar-brand" href="#"><i className="fa fa-times"></i> CS5610-WebDev</a>
                    <ul className="navbar-nav nav-fill w-100">

                        <li className="nav-item">
                            <a className="nav-link active" href="#">Build</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Theme</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Stores</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Apps</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Settings</a>
                        </li>
                        <li className="nav-item">
                            <a className="navbar-brand" href="#"><i className="fa fa-plus"></i></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        <div className="row">
            <div className="col-4">

                <ul className="list-group">
                    <li className="list-group-item active">
                        Module 1-jQuery
                        <i className="fa fa-trash fa-pull-right"></i>
                    </li>
                    <li className="list-group-item">
                        Module 2-React
                        <i className="fa fa-trash fa-pull-right"></i>
                    </li>
                    <li className="list-group-item">Module 3-Redux
                        <i className="fa fa-trash fa-pull-right">
                        </i>
                    </li>
                    <li className="list-group-item">Module 4-Native
                        <i className="fa fa-trash fa-pull-right">
                        </i>
                    </li>
                    <li className="list-group-item">Module 5-Angular
                        <i className="fa fa-trash fa-pull-right">
                        </i>
                    </li>
                    <li className="list-group-item">Module 6-Node
                        <i className="fa fa-trash fa-pull-right">
                        </i>
                    </li>
                    <li className="list-group-item">Module 7-Mongo
                        <i className="fa fa-trash fa-pull-right">
                        </i>
                    </li>
                    <li className="list-group-item">
                        <i className="fa fa-plus fa-pull-right">
                        </i>
                    </li>
                </ul>
            </div>
            <div className="col-8">
                <nav className="navbar navbar-expand-sm">
                    <ul className="navbar-nav nav-fill w-100">
                        <li className="page-item"><a className="page-link pl-1" href="#">Topic 1</a></li>
                        <li className="page-item active"><a className="page-link pl-1" href="#">Topic 2</a></li>
                        <li className="page-item"><a className="page-link pl-1" href="#">Topic 3</a></li>
                        <li className="page-item"><a className="page-link pl-1" href="#">Topic 4</a></li>
                        <li className="page-item"><a className="page-link pl-1 " href="#"><i className="fa fa-plus"></i></a>
                        </li>
                    </ul>
                </nav>
                <div className="row">
                    <div className="container text-right">
                        <div className="col-2 text-right">


                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>


// const CourseEditor = () => {
//   return (
//     <h1>Course Editor</h1>
//   )
// }
export default CourseEditor
