/**
 * dotCMS REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DotCmsRestApi);
  }
}(this, function(expect, DotCmsRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DotCmsRestApi.AuthenticationForm();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AuthenticationForm', function() {
    it('should create an instance of AuthenticationForm', function() {
      // uncomment below and update the code to test AuthenticationForm
      //var instance = new DotCmsRestApi.AuthenticationForm();
      //expect(instance).to.be.a(DotCmsRestApi.AuthenticationForm);
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new DotCmsRestApi.AuthenticationForm();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new DotCmsRestApi.AuthenticationForm();
      //expect(instance).to.be();
    });

    it('should have the property rememberMe (base name: "rememberMe")', function() {
      // uncomment below and update the code to test the property rememberMe
      //var instance = new DotCmsRestApi.AuthenticationForm();
      //expect(instance).to.be();
    });

    it('should have the property backEndLogin (base name: "backEndLogin")', function() {
      // uncomment below and update the code to test the property backEndLogin
      //var instance = new DotCmsRestApi.AuthenticationForm();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instance = new DotCmsRestApi.AuthenticationForm();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new DotCmsRestApi.AuthenticationForm();
      //expect(instance).to.be();
    });

  });

}));
