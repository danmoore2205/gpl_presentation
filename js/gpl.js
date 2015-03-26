Reveal.addEventListener( 'fragmentshown', function( event ) {
    if (event.fragment.classList.contains("last")) {
      var ladder = document.getElementById("ladder");
      var row = ladder.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = "Update";
      cell2.innerHTML = "ladder";
    }

} );