'use strict';

describe('Service: userApiFactory', function () {

  // load the service's module
  beforeEach(module('zazcarPrototypeApp'));

  // instantiate service
  var userApiFactory;
  beforeEach(inject(function (_userApiFactory_) {
    userApiFactory = _userApiFactory_;
  }));

  it('should do something', function () {
    expect(!!userApiFactory).toBe(true);
  });

});
