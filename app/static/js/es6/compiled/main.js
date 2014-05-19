function ajax(url, type) {
  'use strict';
  var data = arguments[2] !== (void 0) ? arguments[2] : {};
  var success = arguments[3] !== (void 0) ? arguments[3] : (function(r) {
    return console.log(r);
  });
  var dataType = arguments[4] !== (void 0) ? arguments[4] : 'html';
  $.ajax({
    url: url,
    type: type,
    dataType: dataType,
    data: data,
    success: success
  });
}
(function() {
  'use strict';
  $(document).ready(initialize);
  function initialize() {
    $('#login').click(login);
    $('#dashboard').on('click', '#add', addFood);
    $('#dashboard').on('click', '#order', order);
  }
  function order() {
    var userId = $('#user').attr('data-id');
    var date = $('#orderDate').text();
  }
  function addFood() {
    var total = $('#totalCost').text();
    var userId = $('#user').attr('data-id');
    var type = $('#type').val();
    var name = $('#name').val();
    var qty = $('#qty').val();
    ajax(("/addfood/" + userId), 'post', {
      type: type,
      name: name,
      qty: qty
    }, (function(h) {
      $('#added').append(h);
      updateTotal(total);
    }));
  }
  function updateTotal(total) {
    total = total.substr(1) * 1;
    var cost = $('.container div.cost:last').text().substr(1) * 1;
    total = ("$ " + (total + cost));
    $('#totalCost').text(total);
  }
  function login() {
    var username = $('#username').val();
    var date = $('#date').val();
    ajax('/login', 'post', {
      username: username,
      date: date
    }, (function(h) {
      $('#dashboard').empty().append(h);
    }));
    $('#username').val('');
    $('#date').val('');
  }
})();

//# sourceMappingURL=main.map
