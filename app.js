function init() {
  console.log("App starting...");
  loadDashboard();
  console.log("Ready.");
}

function loadDashboard() {
  console.log("Loading dashboard panels...");
  const panels = ["tasks", "calendar", "stats"];
  console.log("Panels loaded:", panels);
}
