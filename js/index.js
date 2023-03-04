let loadData = () => {
  let url = "https://openapi.programming-hero.com/api/ai/tools";
  fetch(url)
    .then((res) =>res.json())
    .then((data) =>loadData1(data.data.tools));
};
let seeMore = document.getElementById("seeMore");
let loadData1 =(data)=> {
  if (data.length > 6) {
    data=data.slice(0, 6);
    seeMore.style.visibility = "visible";
  }

  for (let i of data) {
    let mainCard = document.getElementById("mainCard");
    let newCard = document.createElement("div");
    newCard.classList.add("col");
    newCard.innerHTML = `
    <div class="col ">
    <div class="card shadow rounded bg-transparent">
      <img class=" h-50 " src="${i.image}" class=" rounded card-img-top" alt="...">
      <div class="card-body ">
        <h5 class="card-title">Features</h5>
        <p class="card-text fw-semibold mt-4 text-secondary">1. ${i.features[0]}</p>
        <p class="card-text fw-semibold text-secondary">2. ${i.features[1]}</p>
        <p class="card-text fw-semibold text-secondary">3. ${i.features[2]}</p>
      <hr>
    <div class = "d-flex justify-content-between align-items-center">
    <div><h3>${i.name}</h3>
    <h5 class="text-secondary"> ${i.published_in}</h5></div>
    
    <div>
    <button onclick="popUp('${i.id}')" class ="btn btn-outline-warning rounded p-2 " data-bs-toggle="modal" data-bs-target="#staticBackdrop"> Details </button>
    </div>
    </div>
    
        </div>
    </div>
  </div>

  <section id="modalArea" class="container ">
        
        <div class="modal modal-lg fade "  id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content p-lg-5" >
    
      <div class="modal-header">
       
        <button type="button" class=" p-3  btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id= "modal-body">
         
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-warning p-3 rounded" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
 
</div>

      </section>
    `;
    mainCard.appendChild(newCard);
  }
  toggleSpin(false);
};

//

let popUp = (id) => {
  let url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => popUpDetails(data.data));
};

let popUpDetails = (data) => {
  let modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
   <div class ="d-flex flex-lg-row flex-column gap-4 container">
    <div class ="container ">
    <div class="bg-danger-subtle card p-lg-4 d-flex flex-lg-row flex-column container" >
    <div class="card-body container">
    <h5 class="card-title fw-bold">${data.description}</h5>
    

    <div class ="d-flex flex-lg-row flex-column gap-3 mt-4 container">
    <div class= "bg-warning-subtle px-lg-3 py-lg-2 rounded">
    
    <p id ="price" class="fw-bold text-center container">${
      data.pricing[0].price
    }</p>
         <p class="fw-bold text-center">${data.pricing[0].plan}</p>
    </div>
    <div class= "bg-info-subtle px-lg-3 py-lg-2 rounded">
    <p id ="price1" class="fw-bold text-center">${data.pricing[1].price}</p>
         <p class="fw-bold text-center">${data.pricing[1].plan}</p>
    </div>
    <div class= "bg-success-subtle px-lg-3 py-lg-2 rounded">
    <p id ="price2" class="fw-bold text-center">${data.pricing[2].price}</p>
         <p class="fw-bold text-center">${data.pricing[2].plan}</p>
    </div>
    </div>


<div class = "container"> 
  <div class="d-flex flex-lg-row flex-column justify-content-between mt-4 container">

    <div class ="container">
      <h3 class="mt-4">Features</h3>
        <li class="card-text fw-semibold mt-4 text-secondary">  ${data.features[1].feature_name}</li>
        <li class="card-text fw-semibold text-secondary">  ${data.features[2].feature_name}</li>
        <li class="card-text fw-semibold text-secondary">  ${data.features[3].feature_name}</li>
    </div>
    <div>
        <div id="integrationDiv"><h3 id="integrations" class="mt-4">Integrations</h3>
          <li id="integration1" class=" card-text fw-semibold mt-4 text-secondary">${data.integrations[0]}</li>
          <li id="integration2" class=" card-text fw-semibold text-secondary">${data.integrations[1]}</li>
          <li id="integration3" class=" card-text fw-semibold text-secondary">${data.integrations[2]}</li>
        </div>
    </div>
   </div> 
</div>
</div>
</div>
</div>
<div class ="card container">
   <div>
   <section id="accuracySection" class ="text-end">
    <span class="text-white fw-bold py-2 px-2 rounded-3 mt-5 bg-danger"> ${data.accuracy.score * 100}% accuracy</span> 
   </section>
   <img src ="${data.image_link[0]}" class ="img-fluid p-4"></div>
   <h3 class = "text-center">${data.input_output_examples[0].input}</h3>
   <h5 class = "text-center mt-4 p-lg-4 text-secondary">${data.input_output_examples[0].output}</h5>
    </div>
</div> `;
  
  
  let score = document.getElementById("score");
  let integrationDiv = document.getElementById("integrationDiv");
  let integration1 = document.getElementById("integration1");
  let integration2 = document.getElementById("integration2");
  let integration3 = document.getElementById("integration3");

  let price = document.getElementById("price");
  let price1 = document.getElementById("price1");
  let price2 = document.getElementById("price2");

  if (price.innerText === "0" || price.innerText === "No cost") {
    price.innerText = "Free of Cost";
  } else {
  }
  if (price1.innerText === "0" || price1.innerText === "No cost") {
    price1.innerText = "Free of Cost";
  } else {
  }
  if (price2.innerText === "0" || price2.innerText === "No cost") {
    price2.innerText = "Free of Cost";
  } else {
  }

  if (
    integration1.innerText === "undefined" ||
    integration1.innerText === "No cost" ||
    integration2.innerText === "undefined" ||
    integration2.innerText === "No cost" ||
    integration3.innerText === "undefined" ||
    integration3.innerText === "No cost"
  ) {
    // console.log("Yes");
    integrationDiv.innerHTML = `<h3 id="integrations" class="mt-4">Integrations</h3>
    <p class="mt-5 fw-bold text-secondary">No data Found</p>
    `;
  } else {
    
  }

  let accuracy = document.getElementById("accuracy");
  let accuracySection = document.getElementById("accuracySection");

  if ((accuracy.innerText = null || accuracy.innerText === "0")) {
    accuracySection.innerHTML = "";
  } else {
    accuracySection.innerHTML = `<span class="text-white fw-bold py-2 px-2 rounded-3 mt-5 bg-danger">${ data.accuracy.score * 100}% accuracy</span> `;
  }
};

let toggleSpin = (isLoad) => {
  let loader = document.getElementById("loader");
  if (isLoad) {
    loader.style.visibility = "visible";
  } else {
    loader.style.visibility = "hidden";
  }
};

seeMore.addEventListener("click", function () {
  toggleSpin(true);
  seeMore.style.visibility = "hidden";


  let url = "https://openapi.programming-hero.com/api/ai/tools";
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadData2(data.data.tools));



  let loadData2 = (data) => {
    data = data.slice(6, 12);

    for (let i of data) {
      console.log(i);
      let mainCard = document.getElementById("mainCard");
      let newCard = document.createElement("div");
      newCard.classList.add("col");
      newCard.innerHTML = `
    <div class="col">
    <div class="card shadow rounded bg-transparent h-100">
      <img src="${i.image}" class=" rounded card-img-top" alt="...">
      <div class="card-body ">
        <h5 class="card-title">Features</h5>
        <p class="card-text fw-semibold mt-4 text-secondary">1 . ${i.features[0]}</p>
        <p class="card-text fw-semibold text-secondary">2 . ${i.features[1]}</p>
        <p class="card-text fw-semibold text-secondary">3 . ${i.features[2]}</p>
      <hr>
    <div class ="d-flex justify-content-between align-items-center">
    <div><h3>${i.name}</h3>
    <h5 class="text-secondary">${i.published_in}</h5></div>
    
    <div>
    <button onclick="popUp('${i.id}')" class ="btn btn-outline-warning rounded p-2 " data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details</button>
    </div>
    </div>
    
        </div>
    </div>
  </div>

  <section id="modalArea" class="container">
        <div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content p-lg-5" >
    
      <div class="modal-header">
       
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id= "modal-body">
         
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-warning" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
 
</div>

      </section>
    `;
      mainCard.appendChild(newCard);
      toggleSpin(false);
    }
  };
});

loadData();
