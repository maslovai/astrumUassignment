import React from 'react';

class Repo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isHovered:false
        }
        this.toggleHovered = this.toggleHovered.bind(this)
        this.showIssues = this.showIssues.bind(this)    
    }
    
    
    toggleHovered(){
        this.setState({isHovered:!isHovered})
        console.log(this.state)
    }
    showIssues(){
        this.props.handleIssues(this.props.repo.name)
    }

    render(){
        return(
        <div onClick={this.showIssues} 
            className="oneItemRepos"
            // onMouseEnter={this.toggleHovered} 
            // onMouseLeave = {this.toggleHovered}
            // className = {this.state.isHovered ? "isHovered" : "notHovered"}
            >
                    <div className="repoTitle"
                        name={this.props.repo.name}>
                            {this.props.repo.name}
                            <span>{this.props.repo.count}<i className="fas fa-star"></i></span>
                    </div>
                    <div >{this.props.repo.description}</div>
        </div>
    )
    }
}
export default Repo;