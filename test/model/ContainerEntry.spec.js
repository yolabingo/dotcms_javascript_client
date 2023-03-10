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
    instance = new DotCmsRestApi.ContainerEntry();
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

  describe('ContainerEntry', function() {
    it('should create an instance of ContainerEntry', function() {
      // uncomment below and update the code to test ContainerEntry
      //var instance = new DotCmsRestApi.ContainerEntry();
      //expect(instance).to.be.a(DotCmsRestApi.ContainerEntry);
    });

    it('should have the property personaTag (base name: "personaTag")', function() {
      // uncomment below and update the code to test the property personaTag
      //var instance = new DotCmsRestApi.ContainerEntry();
      //expect(instance).to.be();
    });

    it('should have the property contentIds (base name: "contentIds")', function() {
      // uncomment below and update the code to test the property contentIds
      //var instance = new DotCmsRestApi.ContainerEntry();
      //expect(instance).to.be();
    });

    it('should have the property containerId (base name: "containerId")', function() {
      // uncomment below and update the code to test the property containerId
      //var instance = new DotCmsRestApi.ContainerEntry();
      //expect(instance).to.be();
    });

    it('should have the property containerUUID (base name: "containerUUID")', function() {
      // uncomment below and update the code to test the property containerUUID
      //var instance = new DotCmsRestApi.ContainerEntry();
      //expect(instance).to.be();
    });

  });

}));
