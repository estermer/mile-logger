$(function(){

  //Create a form element
  var $form = $("<form>").attr('id', 'home-form');

  //click events to render a form for logging in or registering
  $('#register').on('click', function(){
    console.log("i work");
    //clear html of main
    $('#home').html('');

    var username = "<input class='login-register' type='text' name='username' placeholder='ENTER A USERNAME'><br>";
    var password = "<input class='login-register' type='password' name='password' placeholder='ENTER A PASSWORD'><br>";
    var submit = "<input class='submit-button' type='submit' name='register' value='REGISTER'>"

    $form.html(username + password + submit).attr('action', '/register').attr('method', 'POST');
    //remember to add the attr for the method and the action

    // add form into main
    $('#home').html($form);

  });

  $('#login').on('click', function(){

    //clear html of main
    $('#home').html('');

    var username = "<input class='login-register' type='text' name='username' placeholder='ENTER YOUR USERNAME'><br>";
    var password = "<input class='login-register' type='password' name='password' placeholder='ENTER YOUR PASSWORD'><br>";
    var submit = "<input class='submit-button' type='submit' name='login' value='LOGIN'>"

    $form.html(username + password + submit).attr('action', '/login').attr('method', 'POST');
    //remember to add the attr for the method and the action

    // add form into main
    $('#home').html($form);

  });
});
