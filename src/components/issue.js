import React, {useState} from 'react';
import FontAwesome from 'react-fontawesome'


export default function Issue({ title, description}) {
  const [active, makeActive] = useState(false);
  
  return (
    <div className = "nonScroll">  
    <div className={active?"activeIssue":"oneItemIssues"}>
        <div className="infoIcon">
            <FontAwesome name = "fa-info-circle" className="fas fa-info-circle"/>
        </div>
        <div className="issueBody" onMouseEnter={()=>makeActive(!active)} onMouseLeave={()=>makeActive(!active)}>
            <div className="issueTitle">{title}</div>
            <div className="issueDescription"className={active?"showActive":"issueDescription"}>{description}</div>
        </div>    
    </div>
    <FontAwesome name = "fa-times-circle"className="fas fa-times-circle infoIcon2"/>
    </div>
  );
}