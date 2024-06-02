// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.getElementById('contactForm');

    // Add submit event listener to the form
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get form data
        const formData = new FormData(form);

        // Convert FormData to a JSON object
        const data = {
            email: formData.get('email'),
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName')
        };

        // Send form data to the API endpoint using Axios
        axios.post('https://getform.io/f/pbmqenzb', data)
            .then(response => {
                // Handle success response
                console.log('Success:', response.data);
                alert('Form is submitted successfully!');
                form.reset(); // Reset form fields
                window.location.href = 'Further.html';
            })
            .catch(error => {
                // Handle error response
                console.error('Error:', error);
                alert('There was a problem with the form submission.');
            });
    });
});


//Contact.html form submit button focus 
$(document).ready(function(){

    $('.input').focus(function(){
      $(this).parent().find(".label-txt").addClass('label-active');
    });
  
    $(".input").focusout(function(){
      if ($(this).val() == '') {
        $(this).parent().find(".label-txt").removeClass('label-active');
      };
    });
  
});