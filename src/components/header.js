import React from 'react';
const renderIf = (test, componentTrue, componentFalse=null) => test ? componentTrue : componentFalse;

class Header extends React.Component{
    
    render(){
        return(
            <header className = "header">
                <div className="logo">Logo</div>
                <div className="headerTitle">
                    {renderIf(this.props.repoName.length, this.props.repoName,"Repositories")}</div>
                <div>Iryna Maslova<div className="irynaIM">IM</div></div>
            </header>
        )
    }
}
export default Header