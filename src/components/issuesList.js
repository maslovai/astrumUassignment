import React from 'react';
import Issue from './issue'

export default function Issues(list) {
    return (
        list.issues.length===0 ?
        <div className = "issuesInitial">
            Click on the repo to view issues.
            </div> :
        <div className="issuesContainer">
            {list.issues.map((issue, i) =>
                <Issue 
                    key = {i} 
                    title={issue.title}
                    description = {issue.description}
                />
            )} 
        </div>
    )
}