// Generated by CoffeeScript 1.7.1
(function() {
  window.Backbone.sync = jasmine.createSpy('sync').andCallFake(function(method, model, options) {
    var callback, resp, status;
    model.updatedByRemoteSync = true;
    resp = options.serverResponse || model.toJSON();
    status = 200;
    callback = options.success;
    if (typeof options.errorStatus === 'number') {
      resp.status = status = options.errorStatus;
      callback = options.error;
    }
    if (Backbone.VERSION === '0.9.10') {
      return callback(model, resp, options);
    } else {
      return callback(resp, status, {
        status: status,
        response: resp
      });
    }
  });

}).call(this);

//# sourceMappingURL=spec_helper.map
