var requestManager = require('../request-manager');
var qrMerchantOrdersModel = require('../models/qrMerchantOrdersModel');
//var collectionsModule = require('./collections');
//var preConditions = require('../precondition');

var qrMerchantOrders = module.exports = {
  schema: qrMerchantOrdersModel
};

qrMerchantOrders.create = requestManager.describe({
  path: '/npmobile/instore/qr/:collector_id/:pos_id',
  method: 'POST'
});

qrMerchantOrders.save = qrMerchantOrders.create;

qrMerchantOrders.update = requestManager.describe({
  path: '/npmobile/instore/qr/:collector_id/:pos_id/:id',
  method: 'PUT'
});

qrMerchantOrders.get = requestManager.describe({
  path: '/npmobile/instore/qr/:collector_id/:pos_id/:id',
  method: 'GET'
});

qrMerchantOrders.findById = qrMerchantOrders.get;


qrMerchantOrders.search = requestManager.describe({
  path: '/npmobile/instore/qr/:collector_id/:pos_id/search',
  method: 'GET'
});

/**
 * Search payment: Use v0 -> /collections
 */
payment.oldSearch = collectionsModule.search;

/**
 * Cancel payment: Use v0 -> /collections
 * @param id
 * @param callback
 * @returns {*}
 */
payment.cancel = function (id, callback) {
  var paymentId = (typeof arguments[0] === 'object') ? arguments[0].id : arguments[0];

  callback = preConditions.getCallback(callback);

  return collectionsModule.put({
    id: paymentId,
    status: 'cancelled'
  }, callback);
};

/**
 * Refund payment: Use v0 -> /collections
 * @param id
 * @param callback
 * @returns {*}
 */
payment.refund = function (id, callback) {
  var paymentId = (typeof arguments[0] === 'object') ? arguments[0].id : arguments[0];

  callback = preConditions.getCallback(callback);

  return collectionsModule.put({
    id: paymentId,
    status: 'refunded'
  }, callback);
};

/**
 * Refund partial payment: Use v0 -> /collections
 * @param refund
 * @param callback
 * @returns {Thenable.<U>|*|{anyOf}|*}
 */
payment.refundPartial = function (refund, callback) {
  callback = preConditions.getCallback(callback);

  return collectionsModule.refunds.post(refund, callback);
};


