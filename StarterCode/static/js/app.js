var tableData = data;
var tbody = d3.select("tbody");

  function renderTable(data){
    

    tbody.html("")
    data.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
        });
      });
    }
  var filter = d3.select("#filter-btn");
  renderTable(tableData);
  filter.on("click", function() {
    // Select the current count
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue)
  var filteredData = tableData.filter(row => row.datetime === inputValue);

  // var inputElement2 = d3.select("#City");
  // // Get the value property of the input element
  // var inputValue2 = inputElement2.property("value");
  // console.log(inputValue)
  // var filteredData2 = tableData.filter(row => row.City === inputValue2);
  
  renderTable(filteredData)
  })