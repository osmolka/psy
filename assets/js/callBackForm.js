$(function () {
  $("#callbackFormModal input").not("[type=submit]").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function ($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var name = $("input[name=name]").val();
      var phone = $("input[name=phone]").val();

      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }
      $this = $("#callbackSubmitModal");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      $.ajax({
        url: "./mail/callback.php",
        type: "POST",
        data: {
          name: name,
          phone: phone
        },
        cache: false,
        success: function () {
          // Success message
          $('#success_callbackModal').html("<div class='alert alert-success'>");
          $('#success_callbackModal > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success_callbackModal > .alert-success')
            .append("<strong>Успешно отправлена</strong>");
          $('#success_callbackModal > .alert-success')
            .append('</div>');
          //clear all fields
          $('#callbackFormModal').trigger("reset");
        },
        error: function () {
          // Fail message
          $('#success_callbackModal').html("<div class='alert alert-danger'>");
          $('#success_callbackModal > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success_callbackModal > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
          $('#success_callbackModal > .alert-danger').append('</div>');
          //clear all fields
          $('#callbackFormModal').trigger("reset");
        },
        complete: function () {
          setTimeout(function () {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
        }
      });
    },
    filter: function () {
      return $(this).is(":visible");
    },
  });
  $("a[data-toggle=\"tab\"]").click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$('input[name=name]').focus(function () {
  $('#success_callbackModal').html('');
});

$(function () {
  $("#callbackForm input").not("[type=submit]").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function ($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var name = $("input[name=user_name]").val();
      var phone = $("input[name=user_phone]").val();

      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }
      $this = $("#callbackSubmit");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      $.ajax({
        url: "./mail/callback.php",
        type: "POST",
        data: {
          name: name,
          phone: phone
        },
        cache: false,
        success: function () {
          // Success message
          $('#success_callback').html("<div class='alert alert-success'>");
          $('#success_callback > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success_callback > .alert-success')
            .append("<strong>Успешно отправлена</strong>");
          $('#success_callback > .alert-success')
            .append('</div>');
          //clear all fields
          $('#callbackForm').trigger("reset");
        },
        error: function () {
          // Fail message
          $('#success_callback').html("<div class='alert alert-danger'>");
          $('#success_callback > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success_callback > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
          $('#success_callback > .alert-danger').append('</div>');
          //clear all fields
          $('#callbackForm').trigger("reset");
        },
        complete: function () {
          setTimeout(function () {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
        }
      });
    },
    filter: function () {
      return $(this).is(":visible");
    },
  });
  $("a[data-toggle=\"tab\"]").click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$('input[name=name]').focus(function () {
  $('#success_callback').html('');
});