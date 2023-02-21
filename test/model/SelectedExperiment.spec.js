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
    instance = new DotCmsRestApi.SelectedExperiment();
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

  describe('SelectedExperiment', function() {
    it('should create an instance of SelectedExperiment', function() {
      // uncomment below and update the code to test SelectedExperiment
      //var instance = new DotCmsRestApi.SelectedExperiment();
      //expect(instance).to.be.a(DotCmsRestApi.SelectedExperiment);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new DotCmsRestApi.SelectedExperiment();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new DotCmsRestApi.SelectedExperiment();
      //expect(instance).to.be();
    });

    it('should have the property pageUrl (base name: "pageUrl")', function() {
      // uncomment below and update the code to test the property pageUrl
      //var instance = new DotCmsRestApi.SelectedExperiment();
      //expect(instance).to.be();
    });

    it('should have the property variant (base name: "variant")', function() {
      // uncomment below and update the code to test the property variant
      //var instance = new DotCmsRestApi.SelectedExperiment();
      //expect(instance).to.be();
    });

    it('should have the property lookBackWindow (base name: "lookBackWindow")', function() {
      // uncomment below and update the code to test the property lookBackWindow
      //var instance = new DotCmsRestApi.SelectedExperiment();
      //expect(instance).to.be();
    });

  });

}));