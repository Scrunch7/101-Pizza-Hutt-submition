


    function openForm() {
        document.getElementById("myForm").style.display = "block";
      }   
      function closeForm() {
        document.getElementById("myForm").style.display = "none";
      }
      // Get the modal
    var modal = document.getElementById('loginPopUp');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var modal = document.getElementById('signInPopUp');

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }









