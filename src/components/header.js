import React from 'react';

export default function Header(name) {
    console.log("in header: ", name)
    return (
        <header className = "header">
        <div className="logo">Logo</div>
        <div className="headerTitle">
            {name.repo.length===0 ? "Repositories":name.repo}</div>
        <div>Iryna Maslova<div className="irynaIM">IM</div></div>
    </header>
    );
  }