function byIfElseStatement(role) {
  if (role === "admin") {
    return "ADMIN permissions";
  } else if (role === "user") {
    return "USER permissions";
  } else if (role === "guest") {
    return "GUEST permissions";
  } else {
    return "Unknown Role";
  }
}

function byIfStatementEarlyReturn(role) {
  if (role === "admin") return "ADMIN permissions";
  if (role === "user") return "USER permissions";
  if (role === "guest") return "GUEST permissions";
  return "Unknown Role";
}

function bySwitchStatement(role) {
  switch (role) {
    case "admin":
      return "ADMIN permissions";
    case "user":
      return "USER permissions";
    case "guest":
      return "GUEST permissions";
    default:
      return "Unknown Role";
  }
}

function byObjectLookup(role) {
  const roleGrants = {
    admin: "ADMIN permissions",
    user: "USER permissions",
    guest: "GUEST permissions",
  };
  return roleGrants[role] || "Unknown Role";
}

const roles = ["user", "admin", "guest", "test"];
roles.forEach((role) => {
  console.log(`get grant of role: ${role}`);
  console.log(byIfElse(role));
  console.log(bySwitch(role));
  console.log(byObject(role));
  console.log();
});
