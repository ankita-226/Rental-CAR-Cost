function calculateRent(){
  const rentDuration = parseInt(document.querySelector("#rentDuration").value)  
  let carType = document.querySelector("#selectOptions").value
  let rentalCost;
  if(carType==="Economy"){
    rentalCost = 4000;
  }
  else if(carType==="Midsize"){
    rentalCost = 10000;
  }
  else if(carType==="Luxury"){
    rentalCost = 20000;
  }
  const totalCost = rentalCost*rentDuration;
  const result = document.querySelector("#output");

result.innerHTML = `Total Rental Cost Rs.  ${totalCost} /-`



}