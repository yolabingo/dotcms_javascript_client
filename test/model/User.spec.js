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
    instance = new DotCmsRestApi.User();
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

  describe('User', function() {
    it('should create an instance of User', function() {
      // uncomment below and update the code to test User
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be.a(DotCmsRestApi.User);
    });

    it('should have the property modificationDate (base name: "modificationDate")', function() {
      // uncomment below and update the code to test the property modificationDate
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property timeZone (base name: "timeZone")', function() {
      // uncomment below and update the code to test the property timeZone
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property fullName (base name: "fullName")', function() {
      // uncomment below and update the code to test the property fullName
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property defaultUser (base name: "defaultUser")', function() {
      // uncomment below and update the code to test the property defaultUser
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property companyId (base name: "companyId")', function() {
      // uncomment below and update the code to test the property companyId
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property actualCompanyId (base name: "actualCompanyId")', function() {
      // uncomment below and update the code to test the property actualCompanyId
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property passwordExpired (base name: "passwordExpired")', function() {
      // uncomment below and update the code to test the property passwordExpired
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property female (base name: "female")', function() {
      // uncomment below and update the code to test the property female
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property languageId (base name: "languageId")', function() {
      // uncomment below and update the code to test the property languageId
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property timeZoneId (base name: "timeZoneId")', function() {
      // uncomment below and update the code to test the property timeZoneId
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property resolution (base name: "resolution")', function() {
      // uncomment below and update the code to test the property resolution
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property refreshRate (base name: "refreshRate")', function() {
      // uncomment below and update the code to test the property refreshRate
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property recipientId (base name: "recipientId")', function() {
      // uncomment below and update the code to test the property recipientId
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property recipientName (base name: "recipientName")', function() {
      // uncomment below and update the code to test the property recipientName
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property recipientAddress (base name: "recipientAddress")', function() {
      // uncomment below and update the code to test the property recipientAddress
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property recipientInternetAddress (base name: "recipientInternetAddress")', function() {
      // uncomment below and update the code to test the property recipientInternetAddress
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property multipleRecipients (base name: "multipleRecipients")', function() {
      // uncomment below and update the code to test the property multipleRecipients
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property anonymousUser (base name: "anonymousUser")', function() {
      // uncomment below and update the code to test the property anonymousUser
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property userRole (base name: "userRole")', function() {
      // uncomment below and update the code to test the property userRole
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property emailAddress (base name: "emailAddress")', function() {
      // uncomment below and update the code to test the property emailAddress
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property additionalInfo (base name: "additionalInfo")', function() {
      // uncomment below and update the code to test the property additionalInfo
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property passwordExpirationDate (base name: "passwordExpirationDate")', function() {
      // uncomment below and update the code to test the property passwordExpirationDate
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property middleName (base name: "middleName")', function() {
      // uncomment below and update the code to test the property middleName
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property male (base name: "male")', function() {
      // uncomment below and update the code to test the property male
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property skinId (base name: "skinId")', function() {
      // uncomment below and update the code to test the property skinId
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property loginDate (base name: "loginDate")', function() {
      // uncomment below and update the code to test the property loginDate
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property loginIP (base name: "loginIP")', function() {
      // uncomment below and update the code to test the property loginIP
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property lastLoginDate (base name: "lastLoginDate")', function() {
      // uncomment below and update the code to test the property lastLoginDate
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property lastLoginIP (base name: "lastLoginIP")', function() {
      // uncomment below and update the code to test the property lastLoginIP
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property failedLoginAttempts (base name: "failedLoginAttempts")', function() {
      // uncomment below and update the code to test the property failedLoginAttempts
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property agreedToTermsOfUse (base name: "agreedToTermsOfUse")', function() {
      // uncomment below and update the code to test the property agreedToTermsOfUse
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property birthday (base name: "birthday")', function() {
      // uncomment below and update the code to test the property birthday
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property comments (base name: "comments")', function() {
      // uncomment below and update the code to test the property comments
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property nickName (base name: "nickName")', function() {
      // uncomment below and update the code to test the property nickName
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property deleteInProgress (base name: "deleteInProgress")', function() {
      // uncomment below and update the code to test the property deleteInProgress
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property deleteDate (base name: "deleteDate")', function() {
      // uncomment below and update the code to test the property deleteDate
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property passwordReset (base name: "passwordReset")', function() {
      // uncomment below and update the code to test the property passwordReset
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property passwordEncrypted (base name: "passwordEncrypted")', function() {
      // uncomment below and update the code to test the property passwordEncrypted
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property smsId (base name: "smsId")', function() {
      // uncomment below and update the code to test the property smsId
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property aimId (base name: "aimId")', function() {
      // uncomment below and update the code to test the property aimId
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property icqId (base name: "icqId")', function() {
      // uncomment below and update the code to test the property icqId
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property msnId (base name: "msnId")', function() {
      // uncomment below and update the code to test the property msnId
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property ymId (base name: "ymId")', function() {
      // uncomment below and update the code to test the property ymId
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property favoriteActivity (base name: "favoriteActivity")', function() {
      // uncomment below and update the code to test the property favoriteActivity
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property favoriteBibleVerse (base name: "favoriteBibleVerse")', function() {
      // uncomment below and update the code to test the property favoriteBibleVerse
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property favoriteFood (base name: "favoriteFood")', function() {
      // uncomment below and update the code to test the property favoriteFood
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property favoriteMovie (base name: "favoriteMovie")', function() {
      // uncomment below and update the code to test the property favoriteMovie
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property favoriteMusic (base name: "favoriteMusic")', function() {
      // uncomment below and update the code to test the property favoriteMusic
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property dottedSkins (base name: "dottedSkins")', function() {
      // uncomment below and update the code to test the property dottedSkins
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property roundedSkins (base name: "roundedSkins")', function() {
      // uncomment below and update the code to test the property roundedSkins
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property greeting (base name: "greeting")', function() {
      // uncomment below and update the code to test the property greeting
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property layoutIds (base name: "layoutIds")', function() {
      // uncomment below and update the code to test the property layoutIds
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property _new (base name: "new")', function() {
      // uncomment below and update the code to test the property _new
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

    it('should have the property modified (base name: "modified")', function() {
      // uncomment below and update the code to test the property modified
      //var instance = new DotCmsRestApi.User();
      //expect(instance).to.be();
    });

  });

}));
