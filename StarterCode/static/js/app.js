// from data.js
var tableData = data;

// YOUR CODE HERE!
var body = document.querySelector("tbody")
var dateIP = document.querySelector("#datetime");
var stateIP = document.querySelector("#state");
var searchBtn = document.querySelector("#search");
var cityIp = document.querySelector("#city");
var countryIp = document.querySelector("#country");
var shapeIp = document.querySelector("#shape");


    // searchBtn.addEventListener("click", searchData)
// // https://www.drupal.org/project/pure_css/issues/2673312
    if (searchBtn){
        searchBtn.addEventListener('click', swapper, false);
    }
  


function renderTable(){
    body.innerHTML = "";
    for (var i = 0; i < tableData.length; i++) {
      var address = tableData[i];
      console.log(address)
      var fields = Object.keys(address);
      
      var row = body.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        var field = fields[j];
        var cell = row.insertCell(j);
        cell.innerText = address[field];
      }
    }
  }

  function handleSearchButtonClick() {

    var filterDate = dateIP.value;
    var filterState = stateIP.value.trim().toLowerCase();
    var filterCity = cityIp.value.trim().toLowerCase();
    var filterCountry = countryIp.value.trim().toLowerCase();
    var filterShape = shapeIp.value.trim().toLowerCase();

    if (filterDate != "")
  {
    tableData = dataSet.filter(function(address) 
    {
      var addressDate = address.datetime; 
      return addressDate === filterDate;
    });
  }
  else {tableData};
// /*-----------------------------------------------------------------------------------------------
  if(filterState != "")
  {
    tableData = tableData.filter(function(address)
    {
      var addressState = address.state;
      return addressState === filterState;
    });
  }
  else{tableData};

  if(filterCity != "")
  {
    tableData = tableData.filter(function(address)
    {
      var addressCity = address.city;
      return addressCity === filterCity;
    });
  }

  else{tableData};
// /*-----------------------------------------------------------------------------------------------
if(filterCountry != "")
  {
    tableData = tableData.filter(function(address)
    {
      var addressCountry = address.country;
      return addressCountry === filterCountry;
    });
  }
  else{tableData};

  if(filterShape != "")
  {
    tableData = tableData.filter(function(address)
    {
      var addressShape = address.shape;
      return addressShape === filterShape;
    });
  }
  else{tableData};

renderTable();
  }

  renderTable();