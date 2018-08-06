var mercadopago = require('../../index');
//var config = require('../config');
var oldAccessToken = mercadopago.configurations.getAccessToken();

//mercadopago.sandbox_mode(true);

exports.run = function (req, res) {
  var qr_merchant_orders = {
    collector_id: 1,
    pos_id: 2,
    external_reference : "ej111111111",
    items :[{
      title : "Hamburguesa",
      currency_id : "ARS",
      unit_price : 0.1,
      quantity : 1
    },{
      title : "Gaseosa",
      currency_id : "ARS",
      unit_price : 0.1,
      quantity : 1
    }]
  };

  // Set the access_token credentials for testing
  //mercadopago.configurations.setAccessToken(config.access_token);

  mercadopago.qrMerchantOrders.create(qr_merchant_orders).then(function (data) {
    res.render('jsonOutput', {
      result: data
    });
  }).catch(function (error) {
     res.render('500', {
      error: error
    });
  }).finally(function() {
    mercadopago.configurations.setAccessToken(oldAccessToken);
  });
};

/*
var mercadopago = require('../../index');

exports.run = function (req, res) {
  var payment = {
    description: 'Buying a PS4',
    transaction_amount: 10500,
    payment_method_id: 'rapipago',
    payer: {
      email: 'test_user_3931694@testuser.com',
      identification: {
        type: 'DNI',
        number: '34123123'
      }
    }
  };

  mercadopago.payment.create(payment).then(function (data) {
    res.render('jsonOutput', {
      result: data
    });
  }).catch(function (error) {
    res.render('500', {
      error: error
    });
  });
};
/* */