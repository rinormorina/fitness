$(function () {
  function after_form_submitted(data) {
    if (data.result == "success") {
      $form.find("input, button, textarea").hide();
      $form.find(".message-success").show();
      $form.find(".message-error").hide();
    } else {
      $form.find(".message-error").append("<ul></ul>");

      jQuery.each(data.errors, function (key, val) {
        $form
          .find(".message-error ul")
          .append("<li>" + key + ":" + val + "</li>");
      });
      $form.find(".message-success").hide();
      $form.find(".message-error").show();

      //reverse the response on the button
      $('button[type="button"]', $form).each(function () {
        $btn = $(this);
        label = $btn.prop("orig_label");
        if (label) {
          $btn.prop("type", "submit");
          $btn.text(label);
          $btn.prop("orig_label", "");
        }
      });
    } //else
  }

  $(".contact-form").submit(function (e) {
    e.preventDefault();

    $form = $(this);
    //show some response on the button
    $('button[type="submit"]', $form).each(function () {
      $btn = $(this);
      $btn.prop("type", "button");
      $btn.prop("orig_label", $btn.text());
      $btn.text("Sending ...");
    });

    $.ajax({
      type: "POST",
      url: "./contact-form/handler.php",
      data: $form.serialize(),
      success: after_form_submitted,
      dataType: "json",
    });
  });
});
