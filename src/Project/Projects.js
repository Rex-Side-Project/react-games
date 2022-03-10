import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { CellularAutomaton } from './CellularAutomaton/CellularAutomaton';

const Projects = [
    // { path: "/Game/TicTacToe", name: "Tic-Tac-Toe", component: TicTacToe }
    { path: "/Project/CellularAutomaton", name: "CellularAutomaton", component: CellularAutomaton }
]

class ProjectsList extends Component {
    render() {
        return (
            <div>
                <Link to="/">Back</Link>
                <h1>Projects List</h1>
                <ol>
                    {Projects.map((project) => {
                        return (<li key={project.name}><Link to={project.path}>{project.name}</Link></li>)
                    })}
                </ol>
            </div>
        )
    }
}

class NoProject extends Component {
    render() {
        return (
            <div className="noGameStyle">
                No This Project
            </div>
        )
    }
}

const ProjectsRouteList = [
    // List
    (<Route path="/ProjectsList" key="ProjectsList" component={ProjectsList} />),
    // Projects
    ...Projects.map((project) => {
        return (<Route key={project.name} path={project.path} component={project.component} />)
    }),
    // NoProject
    (<Route path="/Project" key="NoProject" component={NoProject} />)
]

export { ProjectsList, NoProject, ProjectsRouteList }