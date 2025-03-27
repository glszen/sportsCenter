const classes = [
    { id: 1, title: "Yoga", img: "../images/yoga.jpg", desc: ` 
       <h3 class="textc" style="font-weight: bold; ">Why are your Yoga?</h3>
       <br>
       <p class="textc" style="font-weight: bold;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, error? Dolorem cum nostrum eius numquam quam rerum ducimus ipsam eveniet nemo quas officiis eligendi delectus exercitationem maiores facere voluptas iusto, sequi quidem beatae.</p>
       <br>
       <h3 class="textc" style="font-weight: bold;">When comes Yoga Your Time.</h3>
       <br>
       <p class="textc" style="font-weight: bold;">Saturday-Sunday: 8:00am - 10:00am</p>
       <p class="textc" style="font-weight: bold;">Monday-Tuesday: 10:00am - 12:00am</p> 
       <p class="textc" style="font-weight: bold;">Wednesday-Friday: 3:00pm - 6:00pm</p>
      ` },
    { id: 2, title: "Group", img: "../images/group.webp", desc: ` 
       <h3 class="textc" style="font-weight: bold; ">Why are your Group?</h3>
       <br>
       <p class="textc" style="font-weight: bold;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, error? Dolorem cum nostrum eius numquam quam rerum ducimus ipsam eveniet nemo quas officiis eligendi delectus exercitationem maiores facere voluptas iusto, sequi quidem beatae.</p>
       <br>
       <h3 class="textc" style="font-weight: bold;">When comes Group Your Time.</h3>
       <br>
       <p class="textc" style="font-weight: bold;">Saturday-Sunday: 8:00am - 10:00am</p>
       <p class="textc" style="font-weight: bold;">Monday-Tuesday: 10:00am - 12:00am</p> 
       <p class="textc" style="font-weight: bold;">Wednesday-Friday: 3:00pm - 6:00pm</p>
      ` },
    { id: 3, title: "Solo", img: "../images/solo.jpg", desc: ` 
       <h3 class="textc" style="font-weight: bold; ">Why are your Solo?</h3>
       <br>
       <p class="textc" style="font-weight: bold;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, error? Dolorem cum nostrum eius numquam quam rerum ducimus ipsam eveniet nemo quas officiis eligendi delectus exercitationem maiores facere voluptas iusto, sequi quidem beatae.</p>
       <br>
       <h3 class="textc" style="font-weight: bold;">When comes Solo Your Time.</h3>
       <br>
       <p class="textc" style="font-weight: bold;">Saturday-Sunday: 8:00am - 10:00am</p>
       <p class="textc" style="font-weight: bold;">Monday-Tuesday: 10:00am - 12:00am</p> 
       <p class="textc" style="font-weight: bold;">Wednesday-Friday: 3:00pm - 6:00pm</p>
      ` },
    { id: 4, title: "Stretching", img: "../images/stret.webp", desc: ` 
       <h3 class="textc" style="font-weight: bold; ">Why are your Stretching?</h3>
       <br>
       <p class="textc" style="font-weight: bold;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, error? Dolorem cum nostrum eius numquam quam rerum ducimus ipsam eveniet nemo quas officiis.</p>
       <br>
       <h3 class="textc" style="font-weight: bold;">When comes Stretching Your Time.</h3>
       <br>
       <p class="textc" style="font-weight: bold;">Saturday-Sunday: 8:00am - 10:00am</p>
       <p class="textc" style="font-weight: bold;">Monday-Tuesday: 10:00am - 12:00am</p> 
       <p class="textc" style="font-weight: bold;">Wednesday-Friday: 3:00pm - 6:00pm</p>
      `},
];



function filterClasses(selectedClass) {

    const filteredClasses = classes.filter(item => item.title === selectedClass);

    const classDivId = selectedClass.toLowerCase() + "Info";
    const classDiv = document.getElementById(classDivId);

    const allDivs = ['yogaInfo', 'groupInfo', 'soloInfo', 'stretchingInfo'];
    allDivs.forEach(divId => {
        document.getElementById(divId).innerHTML = ""; // Clear other content.
    });

    filteredClasses.forEach(item=> {
        const classContent = `
        <div class="row justify-content-center pt-5">
        <div class="col-10 col-lg-5">
           <p>${item.desc}</p>
           </div>
            <div class="col-11 justify-content-center d-flex col-lg-5">
            <img src="${item.img}" alt="${item.title}" class="img">
            </div>
            </div>
        `;
        
        classDiv.innerHTML = classContent;
    });
   
}

document.addEventListener('DOMContentLoaded', () => { //Show div after page reloaded.
    filterClasses('Yoga');
  });

document.getElementById('yoga').addEventListener('click', () => filterClasses('Yoga'));
document.getElementById('group').addEventListener('click', () => filterClasses('Group'));
document.getElementById('solo').addEventListener('click', () => filterClasses('Solo'));
document.getElementById('stretching').addEventListener('click', () => filterClasses('Stretching'));

function setActive(element){
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => button.classList.remove('active'));
  element.classList.add('active');
}

function calculatorBMI(){
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  if (isNaN(height) || isNaN(weight)) {
    alert("Please enter valid height and weight.");
    return;
  }

  if (height === "" || weight === "") {
    alert("Please enter both height and weight.");
    return;
  }

  const bmi = (weight / ((height/100)**2)).toFixed(1);
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Your BMI is: " + bmi;

  const progressBar = document.getElementById("bmi-progress");
  const progressPercentage = calculateProgress(bmi);
  
  // Width animasyonunu uyguluyoruz
  progressBar.style.transition = 'width 1s ease-in-out';
  progressBar.style.width = progressPercentage + "%";

  progressBar.className = "bmi-progress";

  if (bmi < 18.5) {
    resultDiv.innerHTML += " (Underweight)";
    progressBar.classList.add("bmi-underweight"); // Underweight color
  } else if (bmi >= 18.5 && bmi < 25) {
    resultDiv.innerHTML += " (Normal Weight)";
    progressBar.classList.add("bmi-normal"); // Normal weight color
  } else if (bmi >= 25 && bmi < 30) {
    resultDiv.innerHTML += " (Overweight)";
    progressBar.classList.add("bmi-overweight"); // Overweight color
  } else if (bmi >= 30 && bmi < 35) {
    resultDiv.innerHTML += " (Obese)";
    progressBar.classList.add("bmi-obese"); // Obese color
  } else {
    resultDiv.innerHTML += " (Extremely Obese)";
    progressBar.classList.add("bmi-extremelyobese"); // Extremely obese color
  }
}

function calculateProgress(bmi){

  let progress =0;

  if (bmi < 18.5){
    progress = (bmi/18.5) * 25; // Underweight: 0 - 18.5
  } else if (bmi >= 18.5 && bmi < 25){
    progress = 25 + ((bmi-18.5) / 6.5) * 25; // Normal: 18.5 - 25
  }else if (bmi >= 25 && bmi < 30) {
    progress = 50 + ((bmi - 25) / 5) * 25; // Overweight: 25 - 30
  } else if (bmi >= 30 && bmi < 35) {
    progress = 75 + ((bmi - 30) / 20) * 25; // Obese: 30+
  }
  else {
    progress = 100 + ((bmi - 35) / 10)*25;
  }

  if (progress > 100) {
    progress =100;
  }
  return progress

}

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbarstyle");
  if (window.scrollY > 50) {  // 50px kaydırıldığında
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});