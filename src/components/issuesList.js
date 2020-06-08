import React from 'react';
import Issue from './issue'

export default function Issues(list) {
    return (
        list.issues.length===0 ?
        <div className = "issuesInitial">
            Click on a repo to the left to view it's issues.
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