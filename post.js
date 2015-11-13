$(function() {
  $("#slack").submit(function() {
    var textarea = $(this).find('textarea[name="text"]');
    var text = textarea.val();
    if (text) {
      slackPost(text, function() {
        textarea.val('');
      });
    }
    return false;
  });

  function slackPost(text, cb) {
    const API_KEY = "Your API Key";
    $.ajax({
      type: 'POST',
      url: 'https://your_api_gateway.amazonaws.com/dev/slack/post',
      data: JSON.stringify({
        text: text
      }),
      headers: {
        "x-api-key": API_KEY
      }
    }).done(function(data) {
      $('#result').empty().append('OK🙆');
      cb();
    }).fail(function(data) {
      $('#result').empty().append('Error🙅');
    });
  }
});
