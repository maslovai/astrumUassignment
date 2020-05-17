import React from 'react';
class Header extends React.Component{
    
    render(){
        return(
            <header className = "header">
                <div className="logo">Logo</div>
                <div className="headerTitle">Repositories</div>
                <div>Iryna Maslova<div className="irynaIM">IM</div></div>
            </header>
        )
    }
}
export default Header