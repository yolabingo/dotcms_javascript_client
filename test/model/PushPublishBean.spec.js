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
    instance = new DotCmsRestApi.PushPublishBean();
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

  describe('PushPublishBean', function() {
    it('should create an instance of PushPublishBean', function() {
      // uncomment below and update the code to test PushPublishBean
      //var instance = new DotCmsRestApi.PushPublishBean();
      //expect(instance).to.be.a(DotCmsRestApi.PushPublishBean);
    });

    it('should have the property whereToSend (base name: "whereToSend")', function() {
      // uncomment below and update the code to test the property whereToSend
      //var instance = new DotCmsRestApi.PushPublishBean();
      //expect(instance).to.be();
    });

    it('should have the property publishDate (base name: "publishDate")', function() {
      // uncomment below and update the code to test the property publishDate
      //var instance = new DotCmsRestApi.PushPublishBean();
      //expect(instance).to.be();
    });

    it('should have the property publishTime (base name: "publishTime")', function() {
      // uncomment below and update the code to test the property publishTime
      //var instance = new DotCmsRestApi.PushPublishBean();
      //expect(instance).to.be();
    });

    it('should have the property expireDate (base name: "expireDate")', function() {
      // uncomment below and update the code to test the property expireDate
      //var instance = new DotCmsRestApi.PushPublishBean();
      //expect(instance).to.be();
    });

    it('should have the property expireTime (base name: "expireTime")', function() {
      // uncomment below and update the code to test the property expireTime
      //var instance = new DotCmsRestApi.PushPublishBean();
      //expect(instance).to.be();
    });

    it('should have the property neverExpire (base name: "neverExpire")', function() {
      // uncomment below and update the code to test the property neverExpire
      //var instance = new DotCmsRestApi.PushPublishBean();
      //expect(instance).to.be();
    });

    it('should have the property filterKey (base name: "filterKey")', function() {
      // uncomment below and update the code to test the property filterKey
      //var instance = new DotCmsRestApi.PushPublishBean();
      //expect(instance).to.be();
    });

    it('should have the property iWantTo (base name: "iWantTo")', function() {
      // uncomment below and update the code to test the property iWantTo
      //var instance = new DotCmsRestApi.PushPublishBean();
      //expect(instance).to.be();
    });

    it('should have the property timezoneId (base name: "timezoneId")', function() {
      // uncomment below and update the code to test the property timezoneId
      //var instance = new DotCmsRestApi.PushPublishBean();
      //expect(instance).to.be();
    });

    it('should have the property iwantTo (base name: "iwantTo")', function() {
      // uncomment below and update the code to test the property iwantTo
      //var instance = new DotCmsRestApi.PushPublishBean();
      //expect(instance).to.be();
    });

  });

}));
