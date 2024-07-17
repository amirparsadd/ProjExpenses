export function getTotalContribution(membersList: Array<Member>){
  let a = 0

  membersList.forEach((member: Member) => {
    a += member.contribution
  });

  return a
}

export function getContributionPercentage(total: number, memberContribution: number){
  return memberContribution / total
}