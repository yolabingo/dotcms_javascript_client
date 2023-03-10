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
    instance = new DotCmsRestApi.Persona();
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

  describe('Persona', function() {
    it('should create an instance of Persona', function() {
      // uncomment below and update the code to test Persona
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be.a(DotCmsRestApi.Persona);
    });

    it('should have the property map (base name: "map")', function() {
      // uncomment below and update the code to test the property map
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property lowIndexPriority (base name: "lowIndexPriority")', function() {
      // uncomment below and update the code to test the property lowIndexPriority
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property userAPI (base name: "userAPI")', function() {
      // uncomment below and update the code to test the property userAPI
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property indexPolicyDependencies (base name: "indexPolicyDependencies")', function() {
      // uncomment below and update the code to test the property indexPolicyDependencies
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property keyTag (base name: "keyTag")', function() {
      // uncomment below and update the code to test the property keyTag
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property identifier (base name: "identifier")', function() {
      // uncomment below and update the code to test the property identifier
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property inode (base name: "inode")', function() {
      // uncomment below and update the code to test the property inode
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property live (base name: "live")', function() {
      // uncomment below and update the code to test the property live
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property working (base name: "working")', function() {
      // uncomment below and update the code to test the property working
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property archived (base name: "archived")', function() {
      // uncomment below and update the code to test the property archived
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property versionType (base name: "versionType")', function() {
      // uncomment below and update the code to test the property versionType
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property modDate (base name: "modDate")', function() {
      // uncomment below and update the code to test the property modDate
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property versionId (base name: "versionId")', function() {
      // uncomment below and update the code to test the property versionId
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property modUser (base name: "modUser")', function() {
      // uncomment below and update the code to test the property modUser
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property locked (base name: "locked")', function() {
      // uncomment below and update the code to test the property locked
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property permissionId (base name: "permissionId")', function() {
      // uncomment below and update the code to test the property permissionId
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property permissionType (base name: "permissionType")', function() {
      // uncomment below and update the code to test the property permissionType
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property host (base name: "host")', function() {
      // uncomment below and update the code to test the property host
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property _new (base name: "new")', function() {
      // uncomment below and update the code to test the property _new
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property variantId (base name: "variantId")', function() {
      // uncomment below and update the code to test the property variantId
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property languageId (base name: "languageId")', function() {
      // uncomment below and update the code to test the property languageId
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property folder (base name: "folder")', function() {
      // uncomment below and update the code to test the property folder
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property fileAsset (base name: "fileAsset")', function() {
      // uncomment below and update the code to test the property fileAsset
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property structureInode (base name: "structureInode")', function() {
      // uncomment below and update the code to test the property structureInode
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property systemHost (base name: "systemHost")', function() {
      // uncomment below and update the code to test the property systemHost
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property categoryId (base name: "categoryId")', function() {
      // uncomment below and update the code to test the property categoryId
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property contentTypeId (base name: "contentTypeId")', function() {
      // uncomment below and update the code to test the property contentTypeId
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property sortOrder (base name: "sortOrder")', function() {
      // uncomment below and update the code to test the property sortOrder
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property titleImage (base name: "titleImage")', function() {
      // uncomment below and update the code to test the property titleImage
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property htmlpage (base name: "htmlpage")', function() {
      // uncomment below and update the code to test the property htmlpage
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property dotAsset (base name: "dotAsset")', function() {
      // uncomment below and update the code to test the property dotAsset
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property persona (base name: "persona")', function() {
      // uncomment below and update the code to test the property persona
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property form (base name: "form")', function() {
      // uncomment below and update the code to test the property form
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property vanityUrl (base name: "vanityUrl")', function() {
      // uncomment below and update the code to test the property vanityUrl
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property keyValue (base name: "keyValue")', function() {
      // uncomment below and update the code to test the property keyValue
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new DotCmsRestApi.Persona();
      //expect(instance).to.be();
    });

  });

}));
