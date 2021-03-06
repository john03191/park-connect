$(function() {
  function buildHTML(message)  {
    if ( message.image ) {
      let html =
          `<div class='message' data-message-id=${message.id}>
            <div class='faceicon'>
              <p>${message.user_name}</p>
            </div>
            <div class='chatting'>
              <div class='chatting__says'>
                <p class="lower-message__content">
                ${message.content}
                </p>
                <img src=${message.image} >
              </div>
              <div class='message__date'>
                ${message.created_at}
              </div>
            </div>
          </div>`        
      return html;
    } else {
      let html =
      `<div class='message' data-message-id=${message.id}>
      <div class='faceicon'>
        <p>${message.user_name}</p>
      </div>
      <div class='chatting'>
        <div class='chatting__says'>
          ${message.content}
        </div>
        <div class='message__date'>
          ${message.created_at}
        </div>
      </div>
    </div>`
      return html;
    };
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      let html = buildHTML(data) ;
      $('.messages').append(html);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('form')[0].reset();
      $('.form__submit').prop("disabled", false);
    })
    .fail(function(){
      alert('メッセージ送信に失敗しました');
    });
  })

  let reloadMessages = function() {

    let last_message_id = $('.message:last').data("message-id");
    $.ajax({
      url:  "api/messages",
      type: 'get',
      datatype: 'json',
      data: {id: last_message_id}
    })
    
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.messages').append(insertHTML);
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    }); 
  };

  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }
});