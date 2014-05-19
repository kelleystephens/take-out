// /* global io */
/* jshint unused:false */

function ajax(url, type, data={}, success=r=>console.log(r), dataType='html'){
  'use strict';
  $.ajax({url:url, type:type, dataType:dataType, data:data, success:success});
}

(function(){
  'use strict';

  $(document).ready(initialize);

  // var socket;

  function initialize(){
    // initializeSocketIo();
    $('#login').click(login);
    $('#dashboard').on('click', '#add', addFood);
    $('#dashboard').on('click', '#order', order);
  }

  function order(){
    var userId = $('#user').attr('data-id');
    var date = $('#orderDate').text();
    
  }

  function addFood(){
    var total = $('#totalCost').text();
    var userId = $('#user').attr('data-id');
    var type = $('#type').val();
    var name = $('#name').val();
    var qty = $('#qty').val();
    ajax(`/addfood/${userId}`, 'post', {type:type, name:name, qty:qty}, h=>{
      $('#added').append(h);
      updateTotal(total);
    });
  }

  function updateTotal(total){
    total = total.substr(1) * 1;
    var cost = $('.container div.cost:last').text().substr(1) * 1;
    total = `$ ${total + cost}`;
    $('#totalCost').text(total);
  }


  function login(){
    var username = $('#username').val();
    var date = $('#date').val();
    ajax('/login', 'post', {username:username, date:date}, h=>{
      $('#dashboard').empty().append(h);
    });
    $('#username').val('');
    $('#date').val('');
  }
  //
  // function initializeSocketIo(){
  //   socket = io.connect('/app');
  // }

})();
