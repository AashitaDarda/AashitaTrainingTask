// Calculator Jquery Validations
$(document).ready(function() {
    let screen =$("#display");
    buttons=$('button');
    let screenValue='';
      $("button").click(function(e){
        buttonText =$(this).text();
        console.log(buttonText)

        if (buttonText == 'C') {
         screenValue="";
         screen.val(screenValue);
       } else if (buttonText == '=') {
         ans=eval(screenValue);
         screen.val(ans);
         return screenValue="";
       } else {
         screenValue += buttonText;
         screen.val(screenValue);
         if (buttonText == '*') {
         var myArray = screenValue.split("*");
            k="*";
            z="";
           for (var i = 0; i < myArray.length; i++) {
             a=myArray[i]
               if (a != "") {
              z=z+a+k;
              screen.val(z);

               }
             }
             return screenValue=z;
         } else if (buttonText == '%') {
           var myArray = screenValue.split("%");
              k="%";
              z="";
             for (var i = 0; i < myArray.length; i++) {
               a=myArray[i]
                 if (a != "") {
                   z=z+a+k;
                    screen.val(z);
                 }
             }
             return screenValue=z;
         } else if (buttonText == '+') {
           var myArray = screenValue.split("+");
              k="+";
              z="";
             for (var i = 0; i < myArray.length; i++) {
               a=myArray[i]
                 if (a != "") {
                   z=z+a+k;
                     screen.val(z);
                 }
             }
             return screenValue=z;

         } else if (buttonText == '-') {
           var myArray = screenValue.split("-");
              k="-";
              z="";
             for (var i = 0; i < myArray.length; i++) {
               a=myArray[i]
                 if (a != "") {
                   z=z+a+k;
                    screen.val(z);
                 }
             }
             return screenValue=z;
         } else if (buttonText == '/') {
           var myArray = screenValue.split("/");
              k="/";
              z="";
             for (var i = 0; i < myArray.length; i++) {
               a=myArray[i]
                 if (a != "") {
                   z=z+a+k;
                  screen.val(z);
                 }
             }
             return screenValue=z;
          } else if (buttonText == '.') {
            var myArray = screenValue.split(".");
               k=".";
               z="";
              for (var i = 0; i < myArray.length; i++) {
                a=myArray[i]
                  if (a != "") {
                    z=z+a+k;
                    screen.val(z);
                  }
              }
              return screenValue=z;
           }

        }
      });
});

// Dropdown Jquery Validations
$(document).ready(function(){

    $('#drop1').change(function(){
        var drop1 = $('#drop1').val();
        if(drop1 !== ''){
            $('#drop2').prop('disabled', false) ;
        }
        else{
            $('#drop2').prop('disabled', true) ;
        }
    });

    $('#drop2').change(function(){
        var drop2 = $('#drop2').val();
        if(drop2 !== ''){
            $('#drop3').prop('disabled', false) ;
        }
        else{
            $('#drop3').prop('disabled', true) ;
        }
    });

    $('#drop3').change(function(){
         $('#drop3').val();
    });

    $('#submit').click(function(){
        var drop1 = $('#drop1').val()
        var drop2 = $('#drop2').val()
        var drop3 = $('#drop3').val()

        if(drop1 == ''){
            $('#showinfo').show().html("Select atlest one city from dropdown list")
        }
        else if(drop2!=='' && drop2 == drop3){
            $('#showinfo').show().html("Don't select same cities from dropdown list...Please Select another City");
        }
        else if(drop1 !== '' && drop2=='' && drop3 !==''){
            $('#showinfo').show().html("tDon't keep it blank.Please fill city");
        }
        else if(drop1 == drop2 || drop1 == drop3){
            $('#showinfo').show().html("Don't select same cities from dropdown list...Please Select another City");
        }
        else {
            $('#showinfo').show().html("your data is saved successfully");
        }
    });   
});

//Login Registration Jquery Validations
//Popup of Login button
$(function (){
    $("#loginmodal").dialog({
        modal: true,
        autoOpen: false,
        title: "Login Box",
        width :700,
        height:400
    });
    $("#login").click(function(){
        $("#loginmodal").dialog('open');
    });
});

//Popup of Registration Button
$(function (){
    $("#RegistrationModal").dialog({
        modal: true,
        autoOpen: false,
        title: "Registration Box",
        width: 800,
        height:500
    });
    $("#reglink").click(function(){
        $("#RegistrationModal").dialog('open');
        $("#loginmodal").dialog('close');
    });
    $("#registration").click(function(){
        $("#RegistrationModal").dialog('open');
    });
});

//Validation on Registration Form
$(document).ready(function(){
    $('#info-name').hide();
    $('#info-email').hide();
    $('#info-num').hide();
    $('#info-add').hide();
    $('#info-state').hide();
    $('#info-city').hide();
    $('#info-pass').hide();
    $('#info-conpass').hide();
    $('#info-gen').hide();
    $('#info-hob').hide();

    $('#UserFullName').keyup(function(){
        checkFullName();
    });
    $('#UserEmail').keyup(function(){
        checkEmail();
    });
    $('#PhoneNumber').keyup(function(){
        checkPhoneNum();
    });
    $('#password').keyup(function(){
        checkPassword();
    });
    $('#ConfirmPassword').keyup(function(){
        checkConformPassword();
    });
    $('#UserAddress').keyup(function(){
        checkUserAddress();
    });
    $('#State').click(function(){
        checkState();
    });
    $('#CityName').keyup(function(){
        checkCity();
    });
    $('.gender').click(function(){
        checkGender();
    });
    $('.hobby').click(function(){
        checkHobby();
    });

    //Validation for name
    function checkFullName(){
        var pattern = /^[a-zA-Z\s_, ]*$/;
        var name = $('#UserFullName').val();
        var nameLength = $('#UserFullName').val().length;
        if (name == ''){
            $('#info-name').html("Name required");
            $('#info-name').show();
            $('#UserFullName').css("border","2px solid #F90A0A");
            console.log('fail');
        }
        else if(pattern.test(name) && name !== '' && nameLength >2){
            $('#info-name').hide();
            $('#UserFullName').css('border','2px solid #34F458');
            console.log('pass')
        }
        else{
            $('#info-name').html("!!Should contain only Characters and name length should be start with 3 letters!!");
            $('#info-name').show();
            $('#UserFullName').css("border","2px solid #F90A0A");
            console.log('fail');
        }
    }

        function checkEmail(){
            var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            var email = $('#UserEmail').val();
            if(email == ''){
                $('#info-email').html('Email Required');
                $('#info-email').show();
                $('#UserEmail').css("border","2px solid #F90A0A");
                console.log('fail');
            }
            else if(pattern.test(email) && email !== ''){
                $('#info-email').hide();
                $('#UserEmail').css("border","2px solid #34F458");
                console.log('pass');
            }
            else{
                $("#info-email").html("Invalid Email");
                $("#info-email").show();
                $("#UserEmail").css("border-bottom","2px solid #F90A0A");
            }
        }

        function checkPhoneNum(){
            var num =$('#PhoneNumber').val();
            var numLength =$("#PhoneNumber").val().length;
            if(num == ''){
                $('#info-num').html('Phone Number Required');
                $('#info-num').show();
                $('#PhoneNumber').css("border","2px solid #F90A0A");
                console.log('fail');
            }
            else if(num !== '' && numLength === 10 && num!== 'e'){
                $('#info-num').hide();
                $('#PhoneNumber').css('border','2px solid #34F458');
                console.log('pass')
            }
            else{
                $("#info-num").html("Mobile Number have only 10 digits number");
                $("#info-num").show();
                $("#PhoneNumber").css("border-bottom","2px solid #F90A0A");
                console.log('fail')
            }
        }

        function checkPassword(){
            var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).(?=.*[0-9]).{5,15}$/;
            var password = $('#password').val();
            var password_length =$('#password').val().length;
            if (password == ''){
                $("#info-pass").html("Password required");
                $("#password").css("border","2px solid #F90A0A");
                $("#info-pass").show();
                console.log('fail');
                
              }
            else if (pattern.test(password) && password !== '' && password_length > 5 && password_length < 16) {
               $("#password").css("border","2px solid #34F458");
               $("#info-pass").hide();
              console.log('pass');
               
            }
             else {
                $("#info-pass").html("!!Fill the password correctly in alphanumeric form and have atleast 6 character!!");
               $("#info-pass").show();
                $("#password").css("border","2px solid #F90A0A");
                console.log('fail');
            }
        }
        function checkConformPassword(){
            var password = $('#password').val();
            var conpass = $('#ConfirmPassword').val();
            if(conpass == ''){
                $("#info-conpass").html("Password required");
                $("#ConfirmPassword").css("border","2px solid #F90A0A");
                $("#info-conpass").show();
                console.log('fail');
            }
            else if (conpass === password){
                $("#info-conpass1").html('Password Match').fadeOut(5000);
                $("#ConfirmPassword").css("border","2px solid #34F458");
               $("#info-conpass").hide();
              console.log('pass');
            }
            else{
                $("#info-conpass").html("Password did not match");
                $("#ConfirmPassword").css("border","2px solid #F90A0A");
                $("#info-conpass").show();
                console.log('fail');
            }
        }

        //Validation for address
        function checkUserAddress(){
            var pattern =  /^[a-zA-Z0-9\s_, ]*$/
            var Address = $('#UserAddress').val();
            if(Address == ''){
                $("#info-add").html("Address required");
                $("#UserAddress").css("border","2px solid #F90A0A");
                $("#info-add").show();
                console.log('fail');
            }
            else if(pattern.test(Address) && Address !== '' && Address.length >=10){
                $("#UserAddress").css("border","2px solid #34F458");
                $("#info-add").hide();
               console.log('pass');
            }
            else{
                $("#info-add").html("You have to give proper Address with house number");
                $("#UserAddress").css("border","2px solid #F90A0A");
                $("#info-add").show();
                console.log('fail');
            }
        }

        //validation for city
        function checkCity(){
            var pattern =  /^[a-zA-Z\s_, ]*$/
            var city = $('#CityName').val();
            if(city == ''){
                $("#info-city").html("City required");
                $("#CityName").css("border","2px solid #F90A0A");
                $("#info-city").show();
                console.log('fail');
            }
            else if(pattern.test(city) && city !== '' && city.length > 3){
                $("#CityName").css("border","2px solid #34F458");
                $("#info-city").hide();
               console.log('pass');
            }
            else{
                $("#info-city").html("You have to give proper City");
                $("#CityName").css("border","2px solid #F90A0A");
                $("#info-city").show();
                console.log('fail');
            }
        }

        //Validation for gender selection
        var option = false;
        $('#male').click(function(){
            option = true;
            $('#info-gen').hide()
        });
        $('#female').click(function(){
            option = true;
            $('#info-gen').hide()
        });

        function checkGender(){
            var male = $('#male').attr('checked');
            var female = $('#female').attr('checked');
            if(male !== 'checked' && female !== 'checked' && option!== true){
                $('#info-gen').show().html("Select gender field")
            }
        }

    $('#AccountCreate').click(function(event){
        event.preventDefault();
        checkFullName();
        checkEmail();
        checkPhoneNum();
        checkUserAddress();
        checkState();
        checkCity();
        checkPassword();
        checkConformPassword();
        checkGender();
        checkHobby();
        var name = $('#UserFullName').val();
        var namepattern = /^[a-zA-Z\s_, ]*$/;
        var nameLength = $('#UserFullName').val().length;
        var email = $('#UserEmail').val();
        var emailpattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var num =$('#PhoneNumber').val();
        var numLength =$("#PhoneNumber").val().length;
        var password = $('#password').val();
        var passpattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).(?=.*[0-9]).{5,15}$/;
        var password_length =$('#password').val().length;
        var conpass = $('#ConfirmPassword').val();
        var Address = $('#UserAddress').val();
        var Addresspattern =  /^[a-zA-Z0-9\s_, ]*$/
        var city = $('#CityName').val();
        var citypattern =  /^[a-zA-Z\s_, ]*$/
        var state = $('#State').val();
        var hobby = $('input[type="checkbox"]:checked');
        hobbylenght=hobby.length;
        console.log(hobbylenght)
        var male = $('#male').attr('checked');
        var female = $('#female').attr('checked');
        if (namepattern.test(name) && name !== '' && nameLength >2 && email !=='' && emailpattern.test(email) && 
            num !=='' && numLength === 10 && num!== 'e' && passpattern.test(password) && password !== '' && 
            password_length > 5 && password_length < 16 && conpass !=='' && conpass === password  && 
            Addresspattern.test(Address) && Address !== '' && Address.length >=10 && citypattern.test(city) && city !== '' 
            && city.length > 3 && state != '' && hobbylenght > 1  && (male == 'checked' || female == 'checked')){
                alert('Data Saved successfully.You have created your account');
                console.log(true);
                location.reload()
        }
        else{
            alert('Complete all the entries');
            console.log(false);

        } 
        
    });

    function checkHobby(){
        var Hobby = $('input[type="checkbox"]:checked');
        // console.log(Hobby)
        if(Hobby.length < 2){
            $('#info-hob').show();
            $('#info-hob').html('Select atleast 2 hobbies');
            return false;
        }
        else{
            $('#info-hob').hide();
            return true;
        }
    }

    //for State
    function checkState(){
        var state = $('#State').val();
        if(state == ''){
            $('#info-state').show().html("Select one State")
        }
        else{
            $('#info-state').hide()
        }
    }
    
});

$(document).ready(function(){
    $('#PassInfo').hide();
    $('#emailInfo').hide();

    $('#Useremail').keyup(function(){
        CheckLoginEmail();
    });

    $('#userpswd').keyup(function(){
        CheckLoginPswd();
    });

    $('#rememberme').click(function(){
        var email = $('#Useremail').val();
        var pswd = $('#userpswd').val();
        console.log('User Email is ' +email);
        console.log('User Password is ' +pswd);
    });

        function CheckLoginEmail(){
            var email = $('#Useremail').val();
            var patternEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if(email == ''){
                $('#emailInfo').html('Email Field required').show();
                $('#Useremail').css('border','2px solid red');
            }
            else if(patternEmail.test(email) && email !== ''){
                $('#emailInfo').hide();
                $('#Useremail').css('border','2px solid green');
            }
            else{
                $('#Useremail').css('border','2px solid red');
                $('#emailInfo').html('Invalid Email').show();
            }
        }

        function CheckLoginPswd(){
            var password = $('#userpswd').val();
            var patternPswd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).(?=.*[0-9]).{5,15}$/;
            if(password == ''){
                $('#PassInfo').html('Password Field required').show();
                $('#userpswd').css('border','2px red solid');
            }
            else if(patternPswd.test(password) && password !== ''){
                $('#PassInfo').hide();
                $('#userpswd').css('border','2px green solid');
            }
            else{
                $('#PassInfo').html('Password should contain alphabets(A-Z and a-z) and numbers(0-9) and atleast have 6 characters').show();
                $('#userpswd').css('border','2px red solid');
            }
        }


    $('#LoginBtn').click(function(event){
        event.preventDefault();
            CheckLoginEmail();
            CheckLoginPswd();
        var email = $('#Useremail').val();
        var patternEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var password = $('#userpswd').val();
        var patternPswd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).(?=.*[0-9]).{5,15}$/;

        if(patternEmail.test(email) && email !== '' && password !== '' && patternPswd.test(password)){
            alert ('You Logged In Successfully');
            location.assign('Welcome.html');
        }
        else{
            alert('Complete all the entries');
        }  
    });
});

// Tic Tac Toe Jquery Validation
$(document).ready(function(){
    //All Clear Reset Function
    $('#Reset').click(function(){
        location.reload();
        $('.box').val('');
    });

    flag = 1;
    $('#box1').click(function(){
        if(flag == 1){
            $('#box1').val('X');
            $('#box1').prop('disabled',true)
            flag = 0;
        }
        else{
            $('#box1').val('0');
            $('#box1').prop('disabled' , true);
            flag = 1;
        }
    });

    $('#box2').click(function(){
        if(flag == 1){
            $('#box2').val('X');
            $('#box2').prop('disabled',true)
            flag = 0;
        }
        else{
            $('#box2').val('0');
            $('#box2').prop('disabled' , true);
            flag = 1;
        }
    });

    $('#box3').click(function(){
        if(flag == 1){
            $('#box3').val('X');
            $('#box3').prop('disabled',true)
            flag = 0;
        }
        else{
            $('#box3').val('0');
            $('#box3').prop('disabled' , true);
            flag = 1;
        }
    });

    $('#box4').click(function(){
        if(flag == 1){
            $('#box4').val('X');
            $('#box4').prop('disabled',true)
            flag = 0;
        }
        else{
            $('#box4').val('0');
            $('#box4').prop('disabled' , true);
            flag = 1;
        }
    });

    $('#box5').click(function(){
        if(flag == 1){
            $('#box5').val('X');
            $('#box5').prop('disabled',true)
            flag = 0;
        }
        else{
            $('#box5').val('0');
            $('#box5').prop('disabled' , true);
            flag = 1;
        }
    });

    $('#box6').click(function(){
        if(flag == 1){
            $('#box6').val('X');
            $('#box6').prop('disabled',true)
            flag = 0;
        }
        else{
            $('#box6').val('0');
            $('#box6').prop('disabled' , true);
            flag = 1;
        }
    });

    $('#box7').click(function(){
        if(flag == 1){
            $('#box7').val('X');
            $('#box7').prop('disabled',true)
            flag = 0;
        }
        else{
            $('#box7').val('0');
            $('#box7').prop('disabled' , true);
            flag = 1;
        }
    });

    $('#box8').click(function(){
        if(flag == 1){
            $('#box8').val('X');
            $('#box8').prop('disabled',true)
            flag = 0;
        }
        else{
            $('#box8').val('0');
            $('#box8').prop('disabled' , true);
            flag = 1;
        }
    });

    $('#box9').click(function(){
        if(flag == 1){
            $('#box9').val('X');
            $('#box9').prop('disabled',true)
            flag = 0;
        }
        else{
            $('#box9').val('0');
            $('#box9').prop('disabled' , true);
            flag = 1;
        }
    });

    $('.box').click(function(){
        var box1,box2,box3,box4,box5,box6,box7,box8,box9;
        box1 = $('#box1').val();
        box2 = $('#box2').val();
        box3 = $('#box3').val();
        box4 = $('#box4').val();
        box5 = $('#box5').val();
        box6 = $('#box6').val();
        box7 = $('#box7').val();
        box8 = $('#box8').val();
        box9 = $('#box9').val();

        //check Weteher X is win or not and after that all box will be disabled
        //checking for X is Winner
        if((box1 == 'X' && box2 == 'X' && box3 == 'X') || (box4 == 'X' && box5 == 'X' && box6 == 'X') || 
        (box7 == 'X' && box8 == 'X' && box9 == 'X') || (box1 == 'X' && box4 == 'X' && box7 == 'X') ||
        (box2 == 'X' && box5 == 'X' && box8 == 'X') || (box3 == 'X' && box6 == 'X' && box9 == 'X') ||
        (box1 == 'X' && box5 == 'X' && box9 == 'X') || (box3 == 'X' && box5 == 'X' && box7 == 'X')){
            $('#result').html("Hooray!!! Player X is Winner");
            $('#box1').prop('disabled',true);
            $('#box2').prop('disabled',true);
            $('#box3').prop('disabled',true);
            $('#box4').prop('disabled',true);
            $('#box5').prop('disabled',true);
            $('#box6').prop('disabled',true);
            $('#box7').prop('disabled',true);
            $('#box8').prop('disabled',true);
            $('#box9').prop('disabled',true);     
        }
        
        //checking for 0 is Winner
        else if((box1 == '0' && box2 == '0' && box3 == '0') || (box4 == '0' && box5 == '0' && box6 == '0') ||
                (box7 == '0' && box8 == '0' && box9 == '0') || (box1 == '0' && box4 == '0' && box7 == '0') ||
                (box2 == '0' && box5 == '0' && box8 == '0') || (box3 == '0' && box6 == '0' && box9 == '0') ||
                (box1 == '0' && box5 == '0' && box9 == '0') || (box3 == '0' && box5 == '0' && box7 == '0')){
                    $('#result').html("Hooray!!! Player 0 is Winner");
                    $('#box1').prop('disabled',true);
                    $('#box2').prop('disabled',true);
                    $('#box3').prop('disabled',true);
                    $('#box4').prop('disabled',true);
                    $('#box5').prop('disabled',true);
                    $('#box6').prop('disabled',true);
                    $('#box7').prop('disabled',true);
                    $('#box8').prop('disabled',true);
                    $('#box9').prop('disabled',true);
        }

        //When Match is Tie
        else if((box1 == 'X' || box1 =='0') && (box2 == 'X' || box2 == '0') &&
                (box3 == 'X' || box3 =='0') && (box4 == 'X' || box4 == '0') &&
                (box5 == 'X' || box5 =='0') && (box6 == 'X' || box6 == '0') &&
                (box7 == 'X' || box7 =='0') && (box8 == 'X' || box8 == '0') &&
                (box9 == 'X' || box9 =='0') ){
                $('#result').html('OMG !!! The match is tie');
        }

        else{
            if(flag == 1){
                $('#result').html('Player X chance');
            }
            else
            {
                $('#result').html('Player 0 chance');
            }
        }
    });

});
