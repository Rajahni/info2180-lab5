$(document).ready(function() {
    let lookupBtn = $("#lookup");
    let resultDiv = $("#result");
    let citiesBtn = $("#lookupCity")

    resultDiv.hide();

    lookupBtn.click(function(){
        let search = $("#country").val().trim();
        $.get(`http://localhost/info2180-lab5/world.php?country=${search}&context=none`, function(result) {
            resultDiv.html(result).show();
        })
    })
    
    citiesBtn.click(function(){
        let search = $("#country").val().trim();
        $.get(`http://localhost/info2180-lab5/world.php?country=${search}&context=cities`, function(result) {
            resultDiv.html(result).show();
        })
    })
});