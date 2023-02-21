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
    instance = new DotCmsRestApi.FileAssetContentType();
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

  describe('FileAssetContentType', function() {
    it('should create an instance of FileAssetContentType', function() {
      // uncomment below and update the code to test FileAssetContentType
      //var instance = new DotCmsRestApi.FileAssetContentType();
      //expect(instance).to.be.a(DotCmsRestApi.FileAssetContentType);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new DotCmsRestApi.FileAssetContentType();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new DotCmsRestApi.FileAssetContentType();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new DotCmsRestApi.FileAssetContentType();
      //expect(instance).to.be();
    });

    it('should have the property defaultType (base name: "defaultType")', function() {
      // uncomment below and update the code to test the property defaultType
      //var instance = new DotCmsRestApi.FileAssetContentType();
      //expect(instance).to.be();
    });

    it('should have the property detailPage (base name: "detailPage")', function() {
      // uncomment below and update the code to test the property detailPage
      //var instance = new DotCmsRestApi.FileAssetContentType();
      //expect(instance).to.be();
    });

    it('should have the property fixed (base name: "fixed")', function() {
      // uncomment below and update the code to test the property fixed
      //var instance = new DotCmsRestApi.FileAssetContentType();
      //expect(instance).to.be();
    });

    it('should have the property iDate (base name: "iDate")', function() {
      // uncomment below and update the code to test the property iDate
      //var instance = new DotCmsRestApi.FileAssetContentType();
      //expect(instance).to.be();
    });

    it('should have the property system (base name: "system")', function() {
      // uncomment below and update the code to test the property system
      //var instance = new DotCmsRestApi.FileAssetContentType();
      //expect(instance).to.be();
    });

    it('should have the property versionable (base name: "versionable")', function() {
      // uncomment below and update the code to test the property versionable
      //var instance = new DotCmsRestApi.FileAssetContentType();
      //expect(instance).to.be();
    });

    it('should have the property multilingualable (base name: "multilingualable")', function() {
      // uncomment below and update the code to test the property multilingualable
      //var instance = new DotCmsRestApi.FileAssetContentType();
      //expect(instance).to.be();
    });

    it('should have the property variable (base name: "variable")', function() {
      // uncomment below and update the code to test the property variable
      //var instance = new DotCmsRestApi.FileAssetContentType();
      //expect(instance).to.be();
    });

    it('should have the property urlMapPattern (base name: "urlMapPattern")', function() {
      // uncomment below and update the code to test the property urlMapPattern
      //var instance = new DotCmsRestApi.FileAssetContentType();
      //expect(instance).to.be();
    });

    it('should have the property publishDateVar (base name: "publishDateVar")', function() {
      // uncomment below and update the code to test the property publishDateVar
      //var instance = new DotCmsRestApi.FileAssetContentType();
      //expect(instance).to.be();
    });

    it('should have the property expireDateVar (base name: "expireDateVar")', function() {
      // uncomment below and update the code to test the property expireDateVar
      //var instance = new DotCmsRestApi.FileAssetContentType();
      //expect(instance).to.be();
    });

    it('should have the property modDate (base name: "modDate")', function() {
      // uncomment below and update the code to test the property modDate
      //var instance = new DotCmsRestApi.FileAssetContentType();
      //expect(instance).to.be();
    });

    it('should have the property host (base name: "host")', function() {
      // uncomment below and update the code to test the property host
      //var instance = new DotCmsRestApi.FileAssetContentType();
      //expect(instance).to.be();
    });

    it('should have the property siteName (base name: "siteName")', function() {
      // uncomment below and update the code to test the property siteName
      //var instance = new DotCmsRestApi.FileAssetContentType();
      //expect(instance).to.be();
    });

    it('should have the property icon (base name: "icon")', function() {
      // uncomment below and update the code to test the property icon
      //var instance = new DotCmsRestApi.FileAssetContentType();
      //expect(instance).to.be();
    });

    it('should have the property sortOrder (base name: "sortOrder")', function() {
      // uncomment below and update the code to test the property sortOrder
      //var instance = new DotCmsRestApi.FileAssetContentType();
      //expect(instance).to.be();
    });

    it('should have the property folder (base name: "folder")', function() {
      // uncomment below and update the code to test the property folder
      //var instance = new DotCmsRestApi.FileAssetContentType();
      //expect(instance).to.be();
    });

    it('should have the property folderPath (base name: "folderPath")', function() {
      // uncomment below and update the code to test the property folderPath
      //var instance = new DotCmsRestApi.FileAssetContentType();
      //expect(instance).to.be();
    });

  });

}));
