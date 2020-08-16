// from data.js
var tableData = data;
console.log(tableData);

// Create variable for table reference
var tbody = d3.select("tbody");

// Get values for table columns
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // Appen each row with the data
    var row = tbody.append("tr");

    // Use `Object.entries` to print each UFO Sighting 
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append each value to the corresponding cell
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Select the filter button and give event
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    var inputElement = d3.select("#datetime");
    // Get the value property of the input date, state, shape
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    // Filter data with datetime equal to input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    // print the filtered values
    console.log(filteredData);


    filteredData.forEach(function(selections) {

    console.log(selections);
    // Append one table row 
    var row = tbody.append("tr");
    // Use `Object.entries` to print each UFO Sighting value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
});
