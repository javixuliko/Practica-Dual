const app = {
  name: "TaskFlow",
  version: "1.0.0",
  initialized: false
};

// Application core
function init() {
  console.log("App starting...");
  authenticateUser();
  console.log("Ready.");
}

function authenticateUser() {
  console.log("Checking credentials...");
  const user = { name: "admin", role: "superuser" };
  console.log("User logged in:", user.name);
}

init();
