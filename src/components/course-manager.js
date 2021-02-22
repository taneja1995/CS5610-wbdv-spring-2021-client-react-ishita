import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import {Link, Route} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import './course-manager.css';
import  {createRef} from "react";
import Nav from 'react-bootstrap/Nav';
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";

export default class CourseManager
    extends React.Component {
    state = {
        courses: [],
        addNewCourse: ''

    }

    onChange =(e) => {
     this.setState({addNewCourse: e.target.value });

     }

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))
        // .then(courses => this.setState({courses: courses}))
    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {...prevState}
                    nextState.courses = prevState.courses.map(c => {
                        if(c._id === course._id) {
                            return course
                        } else {
                            return c
                        }
                    })
                    return nextState
                })
            })
    }

    deleteCourse = (course) => {
        // alert("delete course " + course._id)
        courseService.deleteCourse(course._id)
            .then(status => {
                // this.setState({
                //   courses: this.state.courses.filter(c => c._id !== course._id)
                // })
                this.setState((prevState) => ({
                    courses: prevState.courses.filter(c => c._id !== course._id)
                }))
            })
    }

    addCourse = (event) => {

        const newCourse = {
            title: this.state.addNewCourse,
            owner: "me",
            lastModified: (new Date()).toDateString()
        }


        courseService.createCourse(newCourse)
            .then(actualCourse => {
                this.state.courses.push(actualCourse)
                this.setState(this.state)
            })
            this.setState({addNewCourse:''})

    }


    render() {
        return(
            <div className="container-fluid">
                <div className="col-12 col-md-12">
               {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">*/}
                    <nav className="navbar navbar-expand-sm bg-dark">
                    <div className="col-1 col-sm-1">
                        <i className="fa fa-bars fa-2x"></i>
                    </div>
                    <div className="col-2 col-md-2 d-none d-sm-table-cell">
                {/*<Navbar.Brand>Course Manager</Navbar.Brand>*/}
                        <a className="navbar-brand">Course Manager</a>
                    </div>

                   {/*Navbar.Collapse id="responsive-navbar-nav ">*/}
                       <div className="col-7 col-md-7 col-sm-10">
                        <ul className="navbar-nav navbar-nav nav-fill">
                            <li className="nav-item">

                                <input  type="text" className="form-control"  value={this.state.addNewCourse}
                                        onChange={this.onChange}
                                       placeholder="New Course Title"  />

                            </li>
                        </ul>

                       </div>
                   {/*</Navbar.Collapse>*/}
                    <div className="col-1 col-md-1 col-sm-1">
                    <Link>
                        <i className="fas fa-plus-circle fa-2x fa-pull-right"
                           style={{color:"red",backgroundColor:"dark", borderSpacing:"20"}}
                                    onClick={this.addCourse}></i>
                    </Link>
                    </div>
                        <div className="col-1 col-md-1 col-sm-1">
                    <Link to="/">
                        <i className="fas fa-2x fa-home float-right"></i>
                    </Link>
                        </div>
               {/* </Navbar>*/}
                    </nav>
                </div>

                <div className="bottomright">
                    <Link>
                        <i className="fas fa-plus-circle fa-3x float-right"
                           style={{color:"red", backgroundColor:"white",position:"absolute", right:"10px",bottom:"10px"}} onClick={this.addCourse}
                        ></i>
                    </Link>
                </div>
              {/*  <h1>Course Manager</h1>*/}
               {/* <button onClick={this.addCourse}>
                    Add Course
                </button>*/}

                {/*<Route path="/courses/table" component={CourseTable}/>*/}
                <Route path="/courses/table" exact={true} >
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                {/*<Route path="/courses/grid" component={CourseGrid}/>*/}
                <Route path="/courses/grid" exact={true} >
                    <CourseGrid courses={this.state.courses}
                                updateCourse={this.updateCourse}
                                deleteCourse={this.deleteCourse}/>
                </Route>
                {/*<CourseTable courses={this.state.courses}/>*/}
                {/*<CourseGrid courses={this.state.courses}/>*/}
            </div>
        )
    }
}
// export default CourseManager
