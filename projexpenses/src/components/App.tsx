import React, { useEffect, useState } from 'react'
import '../styles/App.css'
import "../types/Member"
import MembersListComponent from './MembersList'
import { getTotalContribution } from "../utils/contribution"
import { loadObject, saveObject } from "../utils/localStorage"

function App() {
  const [totalContribution, setTotalContribution] = useState(0)
  const [members, setMembers]: [Array<Member>, Function] = useState(loadObject("members", []))
  
  useEffect(() => {
    setTotalContribution(getTotalContribution(members))
    saveObject("members", members)
  }, [members])

  return (
    <>
      <div className="title">
        <h1 className="title-text">ProjExpenses</h1>
        <h5 className="subtitle-text">Work Together Better.</h5>
      </div>

      <MembersListComponent members={members} setMembers={setMembers} totalContribution={totalContribution}/>
    </>
  )
}

export default App
