import { getContributionPercentage } from "../utils/contribution"
import '../styles/MembersList.css'
import React, { MouseEventHandler } from 'react'
import MemberComponent from './Member'
import "../types/MembersListComponentInput"

export default function MembersListComponent({ members, setMembers, totalContribution }: MembersListComponentInput){
  return (
    <>
      <div className="members">
        <div className="creation">
          <h3 className="members-text">
            Members ({members ? members.length : "0"})
          </h3>
          <div className="add-member">
            <button
              className='btn-default'
              onClick={(e) => setMembers([...members, {name: "", contribution: 0, id: crypto.randomUUID()}])}
            >New Member</button>
          </div>
        </div>
        <div className="members-list">
        {
            members.map((member, idx) => {
            return (
                <MemberComponent
                key={member.id}
                share={getContributionPercentage(totalContribution, member.contribution)}
                member={member}
                onNameChange={(name: string) => {
                    let newMembers = [...members]
                    newMembers[idx].name = name

                    setMembers(newMembers)
                }}
                onDelete={(e: MouseEventHandler) => {
                    setMembers(members.filter(x => {return x.id != member.id}))
                }}
                onContributionChange={(contribution: string) => {
                    let newMembers = [...members]
                    newMembers[idx].contribution = parseInt(contribution == "" ? "0" : contribution)

                    setMembers(newMembers)
                }}/>
            )
            })
        }
        </div>
      </div>
    </>
  )
}