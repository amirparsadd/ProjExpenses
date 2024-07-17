import React from "react"
import "../styles/Member.css"
import "../types/MemberComponentInput"

export default function MemberComponent({member, onNameChange, onContributionChange, onDelete, share}: MemberComponentInput){
  return (
    <>
      <div className="member">
        <button className="remove btn-warn" onClick={(e) => {onDelete(e)}}>
          <svg className="remove-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
        </button>
        <div className="inputs">
          <input 
            type="text" maxLength={20} className="input name-input" placeholder='Name'
            value={member.name} onChange={(e) => {onNameChange(e.target.value)}}/>
          <input
            type="number" min={0} className="input contribution-input" placeholder='Contribution'
            value={member.contribution} onChange={(e) => {onContributionChange(e.target.value)}}/>
        </div>
        <div className="share">
          <p className="share-text">Total Share:</p>
          <p className="share-number">%{Math.round((share*100 || 0)*100)/100}</p>
        </div>
      </div>
    </>
  )
}