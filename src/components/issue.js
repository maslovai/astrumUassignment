import React from 'react';
import FontAwesome from 'react-fontawesome'


export default function Issue({ title, description}) {
  return (
    <div className = "nonScroll">  
    <div className="oneItemIssues">
        <div className="infoIcon">
            <FontAwesome name = "fa-info-circle" className="fas fa-info-circle"/>
        </div>
        <div className="issueBody">
            <div className="issueTitle">{title}</div>
            <div className="issueDescription">{description}</div>
        </div>    
    </div>
    <FontAwesome name = "fa-times-circle"className="fas fa-times-circle infoIcon2"/>
    </div>
  );
}