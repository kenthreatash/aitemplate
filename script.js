// --- Stepper logika ---
const steps = document.querySelectorAll(".step");
let currentStep = 0;

function showStep(n) {
  steps.forEach((s,i)=>s.classList.remove("active"));
  steps[n].classList.add("active");
}

showStep(currentStep);

document.querySelectorAll(".nextBtn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    if(currentStep < steps.length-1) currentStep++;
    showStep(currentStep);
  });
});

document.querySelectorAll(".prevBtn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    if(currentStep > 0) currentStep--;
    showStep(currentStep);
  });
});

// --- Feltételes mezők ---
const attendance = document.getElementById("attendance");
const yesSection = document.getElementById("yesSection");
const noSection = document.getElementById("noSection");

const totalGuests = document.getElementById("totalGuests");
const childrenSection = document.getElementById("childrenSection");
const children = document.getElementById("children");
const childrenDetails = document.getElementById("childrenDetails");

const diet = document.getElementById("diet");
const dietDetails = document.getElementById("dietDetails");

attendance?.addEventListener("change", ()=>{
  yesSection.classList.add("hidden");
  noSection.classList.add("hidden");
  childrenSection.classList.add("hidden");
  if(attendance.value==="Igen") yesSection.classList.remove("hidden");
  if(attendance.value==="Nem") noSection.classList.remove("hidden");
});

totalGuests?.addEventListener("change", ()=>{
  if(parseInt(totalGuests.value) > 1){
    childrenSection.classList.remove("hidden");
  } else {
    childrenSection.classList.add("hidden");
    children.value="Nincs";
    childrenDetails.classList.add("hidden");
  }
});

children?.addEventListener("change", ()=>{
  childrenDetails.classList.toggle(children.value==="Van");
});

diet?.addEventListener("change", ()=>{
  dietDetails.classList.toggle(diet.value==="Van");
});
