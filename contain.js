 
fetch("../json/man.json")
  .then((response) => response.json())
  .then((fplane) => {
    printObjects(fplane["tickets"]);
    overView(fplane["solution"]);
    overPoint(fplane["bookemirate"]);
    outZone(fplane["newstate"]);
    solid(fplane["sample"]);
    flashSales(fplane["flash"]);
  });

//head-section
var money ='';

function flashSales(offer){
    offer.forEach(discount =>{
          money += 
          `<li>
              <div class="alloffer">
                <img src="${discount.img}"/>                
                <a href="#">
                    <p>${discount.deal}</p>
                </a>
                <span>
                  <img  class="rounded" src="${discount.detl}"/>
                </span>
              </div>
          </li>`;
    })
    document.querySelector(".sale-list").innerHTML = money;
}



function printObjects(data){
  var tick = '';
  data.forEach(sxd =>{ 
    tick += 
      `<li>
          <h5>${sxd.location}<i class="fa fa-long-arrow-right" aria-hidden="true"></i>${sxd.destination}</h5>
          <span>${sxd.date}</span>
          <a href="#">
            <img src="${sxd.images}">
            <p class="flightDetails">${sxd.fDetails}</p>
            <h4 class="flightRate">${sxd.rate}</h4>
          </a>
          </li>`;
  });
  document.querySelector('#myList').innerHTML = tick;
}

var dealsTicket = '';
function overView(deals){
  deals.forEach(vist =>{ 
    dealsTicket += `<div class="col-sm-3">
                      <div class="spice">
                        <a href="#" class="heads">
                          <img src="${vist.images}">
                        </a>
                        <div class="found">
                          <h4>${vist.place}</h4>
                          <p>${vist.trip}</p>
                          <h5>${vist.from}</h5>
                          <a href="#">${vist.amount}</a>
                        </div>
                        <div  class="throw">
                          <a class="roundshape"> 
                            <img src="${vist.photo}">
                            <p>${vist.content}</p>
                          </a>
                        </div>
                      </div>
                  </div>`;
  });
  document.querySelector('.london-spice').innerHTML = dealsTicket;
//console.log(dealsTicket);
}

function overPoint(data){
  for (var key in data) {
    bookings(data[key]);
    //console.log(data[key]);
  }
}
function bookings(fightMove){
  var images = fightMove["images"];
  var place = fightMove["place"];
  var trip = fightMove["trip"];
  var book = fightMove["book"];
  
 var listtile = document.createElement("li"); 

 var photo =document.createElement('img');
 photo.src = images;
 
 var subjctDiv = document.createElement("div");
 subjctDiv.className = "founder";
 var soft = document.createElement('h4');
 soft.textContent = place;
 var softPara = document.createElement('p');
 softPara.className ="heads";
 softPara.textContent = trip;
 var hard = document.createElement('a');
 hard.setAttribute("href","#");
 hard.textContent = book;

 subjctDiv.appendChild(softPara);
 subjctDiv.appendChild(softPara);
 subjctDiv.appendChild(hard);

 listtile.appendChild(photo);
 listtile.appendChild(subjctDiv);

 
 var usage = document.getElementById('some');
 usage.appendChild(listtile);
}

function outZone(find){
  for (var key in find) {
    safeGaurd(find[key]);
  }
}
function safeGaurd(allView){
  var images = allView["images"];
  var place = allView["place"];
  var book = allView["book"];

  var sun = document.createElement("li");

  var pho =document.createElement('img');
  pho.src = images;
  
 var sub = document.createElement("div");
 sub.className = "user";
 var soft = document.createElement('h4');
 soft.textContent = place;
 var com1 = document.createElement('p');
 com1.className ="headdes";
 com1.textContent = book;

 sub.appendChild(soft);
 sub.appendChild(com1);
 sun.appendChild(pho);
 sun.appendChild(sub);

 var usage = document.getElementById('sound');
 usage.appendChild(sun);
}

function solid(state){
  var source = '';
  state.forEach(fare =>{ 
      source += `<li>
                  <a hre="#"><i class="${fare.icon}" aria-hidden="true"></i></a>
                  <h5>${fare.name}</h5>
                  <span>${fare.tetx}</span>
                  <a class="highPrice" href="#">
                    <p>${fare.num}</p>
                  </a>
                </li>`;
      //console.log(sxd.name);
  })
  document.getElementById('price').innerHTML = source;
}

//swapping the text
var swap = document.querySelectorAll('.swape');
var org = document.getElementsByClassName("origin");
var dest = document.getElementsByClassName("destination");
swap.forEach((change,index) =>{
  change.addEventListener("click",function(){
  var ans = org[index].value;
  org[index].value = dest[index].value;
  dest[index].value = ans;
  })
})
//swapping end
  
// adding persons
// dropdown add/subx
  var add = document.querySelectorAll('.plus');
 var remov = document.querySelectorAll('.minus');
 var solut = document.querySelectorAll('#swapval');
add.forEach((addtion,index) =>{
  addtion.addEventListener("click",function(){
        let pls = parseInt(solut[index].value);
        solut[index].value = pls + 1;
        pls = solut[index].value;
        console.log(solut[index].value);
        console.log(pls);
  })
})
remov.forEach((sub,index) =>{ 
  sub.addEventListener("click",function(){
    let pls = parseInt(solut[index].value);
    if(pls >= 1){
      solut[index].value = pls - 1;
      pls = solut[index].value;
      console.log(solut[index].value);
      console.log(pls);
    }else{
      alert("add the persons");
    }
  })
})
//adding end



//multi city
// Call addInput() function on button click

var container = document.getElementById('addboxes');
var conta = document.createElement('div');
conta.className = 'mainadd';

function addInput(){

    let inputOrgin = document.createElement('input');
    inputOrgin.placeholder = 'Originng';
    let orginIcon = document.createElement('i');
    orginIcon.className = 'fa fa-map-marker';
    orginIcon.setAttribute("aria-hidden" ,"true");
    let orginContainer =document.createElement('span');
    orginContainer .className = 'spd';
    orginContainer.appendChild(orginIcon);

    let inputDestination = document.createElement('input');
    inputDestination.placeholder = 'Destination';
    let destinationIcon = document.createElement('i');
    destinationIcon.className = 'fa fa-map-marker';
    destinationIcon.setAttribute("aria-hidden" ,"true");
    let destinationContainer =document.createElement('span');
    destinationContainer.className = 'spd';
    destinationContainer.appendChild(destinationIcon );

    let inputCalendar = document.createElement('input');
    inputCalendar.placeholder = 'Depart Date';
    let calendarContainer =document.createElement('span');
    calendarContainer.className = 'spd';
    let iconCalendar = document.createElement('i');
    iconCalendar.className = 'fa fa-calendar';
    iconCalendar.setAttribute("aria-hidden" ,"true");
    calendarContainer.appendChild(iconCalendar);


    let inputButton = document.createElement('button');
    inputButton.className = 'btn';
    inputButton.textContent = "Remove";
    inputButton.addEventListener("click",removeIt);
    let buttonContainer =document.createElement('span');
    buttonContainer.className = 'spd';

    orginContainer.appendChild(inputOrgin);
    destinationContainer.appendChild( inputDestination);
    calendarContainer.appendChild(inputCalendar);
    buttonContainer.appendChild(inputButton);

    conta.appendChild(orginContainer);
    conta.appendChild(destinationContainer);
    conta.appendChild(calendarContainer);
    conta.appendChild(buttonContainer);


    container.appendChild(conta);

    function removeIt(){
      buttonContainer.appendChild(orginContainer);
      buttonContainer.appendChild(destinationContainer);
      buttonContainer.appendChild(calendarContainer);
      conta.appendChild(buttonContainer);
      console.log(buttonContainer);     
      conta.removeChild(buttonContainer);
    }
}
//Call addInput() function on button click end 

 //list page start
fetch("../json/man.json")
.then((response) => response.json())
.then((fplane) => {
  pageList(fplane["listPlane"]);
});
var obj ="";
function pageList(quer){
  quer.forEach(pst =>{
  obj += 
   `<li>
      <div class="row">
        <div class="col-sm-3">
          <div class="fdetals">
            <img src="${pst.img}"/>
            <span>${pst.asia}</span>
            <p>${pst.detl}</p>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="fusage">
            <h5>${pst.time}</h5>
            <p class="tmeblck">${pst.timebe}</p>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="fusage">
            <h6>${pst.length}</h6>
            <p class="tmeblck">${pst.stop}</p>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="fusage">
            <h5>${pst.tim}</h5>
            <p class="tmeblck">${pst.betim}</p>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="fdetalscenter">
            <h4><i class="fa fa-usd" aria-hidden="true"></i>${pst.rate}</h4>
            <button>${pst.butn}</button>
          </div>
        </div>
      </div>
    </li>`;
  })
  document.querySelector('#non-flight').innerHTML = obj;
}
//list page end