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
    instance = new DotCmsRestApi.SiteForm();
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

  describe('SiteForm', function() {
    it('should create an instance of SiteForm', function() {
      // uncomment below and update the code to test SiteForm
      //var instance = new DotCmsRestApi.SiteForm();
      //expect(instance).to.be.a(DotCmsRestApi.SiteForm);
    });

    it('should have the property aliases (base name: "aliases")', function() {
      // uncomment below and update the code to test the property aliases
      //var instance = new DotCmsRestApi.SiteForm();
      //expect(instance).to.be();
    });

    it('should have the property siteName (base name: "siteName")', function() {
      // uncomment below and update the code to test the property siteName
      //var instance = new DotCmsRestApi.SiteForm();
      //expect(instance).to.be();
    });

    it('should have the property tagStorage (base name: "tagStorage")', function() {
      // uncomment below and update the code to test the property tagStorage
      //var instance = new DotCmsRestApi.SiteForm();
      //expect(instance).to.be();
    });

    it('should have the property siteThumbnail (base name: "siteThumbnail")', function() {
      // uncomment below and update the code to test the property siteThumbnail
      //var instance = new DotCmsRestApi.SiteForm();
      //expect(instance).to.be();
    });

    it('should have the property runDashboard (base name: "runDashboard")', function() {
      // uncomment below and update the code to test the property runDashboard
      //var instance = new DotCmsRestApi.SiteForm();
      //expect(instance).to.be();
    });

    it('should have the property keywords (base name: "keywords")', function() {
      // uncomment below and update the code to test the property keywords
      //var instance = new DotCmsRestApi.SiteForm();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new DotCmsRestApi.SiteForm();
      //expect(instance).to.be();
    });

    it('should have the property googleMap (base name: "googleMap")', function() {
      // uncomment below and update the code to test the property googleMap
      //var instance = new DotCmsRestApi.SiteForm();
      //expect(instance).to.be();
    });

    it('should have the property googleAnalytics (base name: "googleAnalytics")', function() {
      // uncomment below and update the code to test the property googleAnalytics
      //var instance = new DotCmsRestApi.SiteForm();
      //expect(instance).to.be();
    });

    it('should have the property addThis (base name: "addThis")', function() {
      // uncomment below and update the code to test the property addThis
      //var instance = new DotCmsRestApi.SiteForm();
      //expect(instance).to.be();
    });

    it('should have the property proxyUrlForEditMode (base name: "proxyUrlForEditMode")', function() {
      // uncomment below and update the code to test the property proxyUrlForEditMode
      //var instance = new DotCmsRestApi.SiteForm();
      //expect(instance).to.be();
    });

    it('should have the property embeddedDashboard (base name: "embeddedDashboard")', function() {
      // uncomment below and update the code to test the property embeddedDashboard
      //var instance = new DotCmsRestApi.SiteForm();
      //expect(instance).to.be();
    });

    it('should have the property languageId (base name: "languageId")', function() {
      // uncomment below and update the code to test the property languageId
      //var instance = new DotCmsRestApi.SiteForm();
      //expect(instance).to.be();
    });

    it('should have the property identifier (base name: "identifier")', function() {
      // uncomment below and update the code to test the property identifier
      //var instance = new DotCmsRestApi.SiteForm();
      //expect(instance).to.be();
    });

    it('should have the property inode (base name: "inode")', function() {
      // uncomment below and update the code to test the property inode
      //var instance = new DotCmsRestApi.SiteForm();
      //expect(instance).to.be();
    });

    it('should have the property forceExecution (base name: "forceExecution")', function() {
      // uncomment below and update the code to test the property forceExecution
      //var instance = new DotCmsRestApi.SiteForm();
      //expect(instance).to.be();
    });

  });

}));
