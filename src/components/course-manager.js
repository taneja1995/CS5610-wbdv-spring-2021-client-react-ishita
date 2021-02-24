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
            lastModified: "1/1/2021"
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

                <div className="sticky-top">
                    <div className="row" style={{paddingTop: "10px"}}>
                        <div className="col-1 col-lg-1 col-sm-4">
                            <i className="fas fa-bars fa-2x"></i>
                        </div>
                        <div className="col-2 col-lg-3 d-none d-lg-block">
                            <h3>Course Manager</h3>
                        </div>
                        <div className="col-8 col-lg-7 col-sm-7">
                            <input className="form-control" value={this.state.addNewCourse}
                                   onChange={this.onChange}
                                   placeholder="New Course Title"/>
                        </div>
                        <div className="col-1 col-lg-1 col-sm-1">
                            <i style={{color: "red"}}
                               className="float-right fas fa-plus-circle fa-2x" onClick={this.addCourse}></i>
                        </div>
                    </div>
                </div>


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
                <i className="fas fa-plus-circle fa-3x"
                   style={{color:"red", backgroundColor:"white",position:"fixed", right:"20px",bottom:"20px",index:"1000"}} onClick={this.addCourse}
                ></i>

            </div>
        )
    }
}


// export default CourseManager
