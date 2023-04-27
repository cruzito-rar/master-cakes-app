$(document).ready(function () {
  const form = $('#contact_form');
  const Toast = Swal.mixin({
   toast: true,
   position: 'bottom-end',
   showConfirmButton: false,
   timer: 3000,
   timerProgressBar: true,
   
   didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
   }
  });
 
  form.submit(function (event) { 
   const username = $('#username').val().toLowerCase(), email = $('#email').val(), message = $('#message').val();
 
   Email.send({
    SecureToken : '7425ee5a-68a9-469d-83ef-e227d86ff272',
    To : 'dcruzer92@gmail.com',
    From : 'cruzkun1527@gmail.com',
    Subject : 'Re: [master-cakes/solicitud de pan], email: ('+email+')',
    Body : message
   }).then(
    Toast.fire({
     icon: 'info',
     iconColor: '#05B0FF',
     title: 'Successfully sent message'
    })
   );
 
   $(document).find('input[type=text], input[type=email], textarea').each(function(){
    $(this).val('');
   });
   
   event.preventDefault();
  });
 });