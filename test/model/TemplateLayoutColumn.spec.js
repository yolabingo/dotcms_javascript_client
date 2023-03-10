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
    instance = new DotCmsRestApi.TemplateLayoutColumn();
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

  describe('TemplateLayoutColumn', function() {
    it('should create an instance of TemplateLayoutColumn', function() {
      // uncomment below and update the code to test TemplateLayoutColumn
      //var instance = new DotCmsRestApi.TemplateLayoutColumn();
      //expect(instance).to.be.a(DotCmsRestApi.TemplateLayoutColumn);
    });

    it('should have the property containers (base name: "containers")', function() {
      // uncomment below and update the code to test the property containers
      //var instance = new DotCmsRestApi.TemplateLayoutColumn();
      //expect(instance).to.be();
    });

    it('should have the property widthPercent (base name: "widthPercent")', function() {
      // uncomment below and update the code to test the property widthPercent
      //var instance = new DotCmsRestApi.TemplateLayoutColumn();
      //expect(instance).to.be();
    });

    it('should have the property leftOffset (base name: "leftOffset")', function() {
      // uncomment below and update the code to test the property leftOffset
      //var instance = new DotCmsRestApi.TemplateLayoutColumn();
      //expect(instance).to.be();
    });

    it('should have the property styleClass (base name: "styleClass")', function() {
      // uncomment below and update the code to test the property styleClass
      //var instance = new DotCmsRestApi.TemplateLayoutColumn();
      //expect(instance).to.be();
    });

    it('should have the property preview (base name: "preview")', function() {
      // uncomment below and update the code to test the property preview
      //var instance = new DotCmsRestApi.TemplateLayoutColumn();
      //expect(instance).to.be();
    });

    it('should have the property width (base name: "width")', function() {
      // uncomment below and update the code to test the property width
      //var instance = new DotCmsRestApi.TemplateLayoutColumn();
      //expect(instance).to.be();
    });

    it('should have the property left (base name: "left")', function() {
      // uncomment below and update the code to test the property left
      //var instance = new DotCmsRestApi.TemplateLayoutColumn();
      //expect(instance).to.be();
    });

  });

}));
