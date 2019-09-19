// from data.js
var tableData = data;

// reference tbody element in html with d3
var tbody = d3.select('tbody') 

// create a function loop through object, creating a row element and cell and populating it with data.
function createTable(ufoData){
  ufoData.forEach((ufoRecord) => {
    var row = tbody.append('tr');
    
    Object.entries(ufoRecord).forEach(([key, value]) => {
        var cell = row.append('td');
        cell.text(value);
        })
    })
}

createTable(tableData)

// reference button in variable
var button = d3.select('#filter-btn');

//create event listener to execute function on button click
button.on('click', function() {
    //clear data from table
    tbody.html(" ");

    

    var filtersObj = {
        'datetime': d3.select('#datetime').property('value'),
        'city': d3.select('#city').property('value'),
        'state': d3.select('#state').property('value'),
        'country': d3.select('#country').property('value'),
        'shape': d3.select('#shape').property('value'),
        'durationMinutes': d3.select('#durationMinutes').property('value')
    };

    console.log(filtersObj)

    for (key in filtersObj) {
        if (!filtersObj[key]) {
            delete filtersObj[key];
        }
    }

    var filters = Object.entries(filtersObj);

    console.log(filters)

    const filteredData = tableData.filter(item => 
        filters.every(([key, value]) => item[key] == value)
    );

    console.log(filteredData);

    createTable(filteredData);

    // //check that date is entered in valid format and if so populate table with filtered data
    // if (moment(filtersObj.datetime, 'M/D/YYYY', true).isValid() || !filtersObj['datime']){
    //     createTable(filteredData); 
    // }
    // else {
    //     alert("Please enter a date in January 2010 as M/D/YYYY format");
    // }
});


