const attendance = document.getElementById("attendance");
const yesSection = document.getElementById("yesSection");
const noSection = document.getElementById("noSection");

const diet = document.getElementById("diet");
const dietDetails = document.getElementById("dietDetails");

const children = document.getElementById("children");
const childrenDetails = document.getElementById("childrenDetails");

attendance.addEventListener("change", () => {
  yesSection.classList.add("hidden");
  noSection.classList.add("hidden");

  if (attendance.value === "Igen") yesSection.classList.remove("hidden");
  if (attendance.value === "Nem") noSection.classList.remove("hidden");
});

diet.addEventListener("change", () => {
  dietDetails.classList.toggle(diet.value !== "Van");
});

children.addEventListener("change", () => {
  childrenDetails.classList.toggle(children.value !== "Van");
});
