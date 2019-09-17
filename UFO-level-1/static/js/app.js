// from data.js
var tableData = data;

// create table elements and append table data to HTML with d3js 

// reference tbody element in html with d3
var tbody = d3.select('tbody') 


// loop through each object, creating a row element and cell and populating it with data.
tableData.forEach((ufoRecord) => {
    var row = tbody.append('tr');
    Object.entries(ufoRecord).forEach(([key, value]) => {
        var cell = row.append('td');
        cell.text(value);
    });
});




// reference button in variable  (var button = d3.select(".id or #class"))
// reference user input of field in variable


// write filter function to populate table row based on object value:date

// create event handler (button.on("clicl", function))

//change html table to reflect only filtered data
