export const allMembers = members => ({
  type: "ALL_MEMBERS",
  members
});

export const currentMember = member => ({
  type: "CURRENT_MEMBER",
  member
});

export const allYears = years => ({
  type: "ALL_YEARS",
  years
});
