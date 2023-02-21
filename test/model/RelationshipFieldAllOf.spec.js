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
    instance = new DotCmsRestApi.RelationshipFieldAllOf();
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

  describe('RelationshipFieldAllOf', function() {
    it('should create an instance of RelationshipFieldAllOf', function() {
      // uncomment below and update the code to test RelationshipFieldAllOf
      //var instance = new DotCmsRestApi.RelationshipFieldAllOf();
      //expect(instance).to.be.a(DotCmsRestApi.RelationshipFieldAllOf);
    });

    it('should have the property searchable (base name: "searchable")', function() {
      // uncomment below and update the code to test the property searchable
      //var instance = new DotCmsRestApi.RelationshipFieldAllOf();
      //expect(instance).to.be();
    });

    it('should have the property unique (base name: "unique")', function() {
      // uncomment below and update the code to test the property unique
      //var instance = new DotCmsRestApi.RelationshipFieldAllOf();
      //expect(instance).to.be();
    });

    it('should have the property listed (base name: "listed")', function() {
      // uncomment below and update the code to test the property listed
      //var instance = new DotCmsRestApi.RelationshipFieldAllOf();
      //expect(instance).to.be();
    });

    it('should have the property readOnly (base name: "readOnly")', function() {
      // uncomment below and update the code to test the property readOnly
      //var instance = new DotCmsRestApi.RelationshipFieldAllOf();
      //expect(instance).to.be();
    });

    it('should have the property forceIncludeInApi (base name: "forceIncludeInApi")', function() {
      // uncomment below and update the code to test the property forceIncludeInApi
      //var instance = new DotCmsRestApi.RelationshipFieldAllOf();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instance = new DotCmsRestApi.RelationshipFieldAllOf();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new DotCmsRestApi.RelationshipFieldAllOf();
      //expect(instance).to.be();
    });

    it('should have the property modDate (base name: "modDate")', function() {
      // uncomment below and update the code to test the property modDate
      //var instance = new DotCmsRestApi.RelationshipFieldAllOf();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new DotCmsRestApi.RelationshipFieldAllOf();
      //expect(instance).to.be();
    });

    it('should have the property relationType (base name: "relationType")', function() {
      // uncomment below and update the code to test the property relationType
      //var instance = new DotCmsRestApi.RelationshipFieldAllOf();
      //expect(instance).to.be();
    });

    it('should have the property required (base name: "required")', function() {
      // uncomment below and update the code to test the property required
      //var instance = new DotCmsRestApi.RelationshipFieldAllOf();
      //expect(instance).to.be();
    });

    it('should have the property variable (base name: "variable")', function() {
      // uncomment below and update the code to test the property variable
      //var instance = new DotCmsRestApi.RelationshipFieldAllOf();
      //expect(instance).to.be();
    });

    it('should have the property sortOrder (base name: "sortOrder")', function() {
      // uncomment below and update the code to test the property sortOrder
      //var instance = new DotCmsRestApi.RelationshipFieldAllOf();
      //expect(instance).to.be();
    });

    it('should have the property values (base name: "values")', function() {
      // uncomment below and update the code to test the property values
      //var instance = new DotCmsRestApi.RelationshipFieldAllOf();
      //expect(instance).to.be();
    });

    it('should have the property regexCheck (base name: "regexCheck")', function() {
      // uncomment below and update the code to test the property regexCheck
      //var instance = new DotCmsRestApi.RelationshipFieldAllOf();
      //expect(instance).to.be();
    });

    it('should have the property hint (base name: "hint")', function() {
      // uncomment below and update the code to test the property hint
      //var instance = new DotCmsRestApi.RelationshipFieldAllOf();
      //expect(instance).to.be();
    });

    it('should have the property defaultValue (base name: "defaultValue")', function() {
      // uncomment below and update the code to test the property defaultValue
      //var instance = new DotCmsRestApi.RelationshipFieldAllOf();
      //expect(instance).to.be();
    });

    it('should have the property fixed (base name: "fixed")', function() {
      // uncomment below and update the code to test the property fixed
      //var instance = new DotCmsRestApi.RelationshipFieldAllOf();
      //expect(instance).to.be();
    });

    it('should have the property contentTypeId (base name: "contentTypeId")', function() {
      // uncomment below and update the code to test the property contentTypeId
      //var instance = new DotCmsRestApi.RelationshipFieldAllOf();
      //expect(instance).to.be();
    });

    it('should have the property dbColumn (base name: "dbColumn")', function() {
      // uncomment below and update the code to test the property dbColumn
      //var instance = new DotCmsRestApi.RelationshipFieldAllOf();
      //expect(instance).to.be();
    });

    it('should have the property iDate (base name: "iDate")', function() {
      // uncomment below and update the code to test the property iDate
      //var instance = new DotCmsRestApi.RelationshipFieldAllOf();
      //expect(instance).to.be();
    });

    it('should have the property indexed (base name: "indexed")', function() {
      // uncomment below and update the code to test the property indexed
      //var instance = new DotCmsRestApi.RelationshipFieldAllOf();
      //expect(instance).to.be();
    });

    it('should have the property dataType (base name: "dataType")', function() {
      // uncomment below and update the code to test the property dataType
      //var instance = new DotCmsRestApi.RelationshipFieldAllOf();
      //expect(instance).to.be();
    });

    it('should have the property skipRelationshipCreation (base name: "skipRelationshipCreation")', function() {
      // uncomment below and update the code to test the property skipRelationshipCreation
      //var instance = new DotCmsRestApi.RelationshipFieldAllOf();
      //expect(instance).to.be();
    });

  });

}));
