function init() {
  console.log("App starting...");
  authenticateUser();
  loadDashboard();
  console.log("Ready.");
}

function authenticateUser() {
  console.log("Checking credentials...");
  const user = { name: "admin", role: "superuser" };
  console.log("User logged in:", user.name);
}

function loadDashboard() {
  console.log("Loading dashboard panels...");
  const panels = ["tasks", "calendar", "stats"];
  console.log("Panels loaded:", panels);
}

init();
