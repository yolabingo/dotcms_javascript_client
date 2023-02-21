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
    instance = new DotCmsRestApi.Permission();
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

  describe('Permission', function() {
    it('should create an instance of Permission', function() {
      // uncomment below and update the code to test Permission
      //var instance = new DotCmsRestApi.Permission();
      //expect(instance).to.be.a(DotCmsRestApi.Permission);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new DotCmsRestApi.Permission();
      //expect(instance).to.be();
    });

    it('should have the property inode (base name: "inode")', function() {
      // uncomment below and update the code to test the property inode
      //var instance = new DotCmsRestApi.Permission();
      //expect(instance).to.be();
    });

    it('should have the property permission (base name: "permission")', function() {
      // uncomment below and update the code to test the property permission
      //var instance = new DotCmsRestApi.Permission();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new DotCmsRestApi.Permission();
      //expect(instance).to.be();
    });

    it('should have the property bitPermission (base name: "bitPermission")', function() {
      // uncomment below and update the code to test the property bitPermission
      //var instance = new DotCmsRestApi.Permission();
      //expect(instance).to.be();
    });

    it('should have the property individualPermission (base name: "individualPermission")', function() {
      // uncomment below and update the code to test the property individualPermission
      //var instance = new DotCmsRestApi.Permission();
      //expect(instance).to.be();
    });

    it('should have the property roleId (base name: "roleId")', function() {
      // uncomment below and update the code to test the property roleId
      //var instance = new DotCmsRestApi.Permission();
      //expect(instance).to.be();
    });

  });

}));
