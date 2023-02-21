# DotCmsRestApi.BundleApi

All URIs are relative to *https://demo.dotcms.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAll**](BundleApi.md#deleteAll) | **DELETE** /bundle/all | 
[**deleteAllFail**](BundleApi.md#deleteAllFail) | **DELETE** /bundle/all/fail | 
[**deleteAllSuccess**](BundleApi.md#deleteAllSuccess) | **DELETE** /bundle/all/success | 
[**deleteBundlesByIdentifiers**](BundleApi.md#deleteBundlesByIdentifiers) | **DELETE** /bundle/ids | 
[**deleteBundlesOlderThan**](BundleApi.md#deleteBundlesOlderThan) | **DELETE** /bundle/olderthan/{olderThan} | 
[**deleteEnvironmentPushHistory**](BundleApi.md#deleteEnvironmentPushHistory) | **GET** /bundle/deleteenvironmentpushhistory/{params} | 
[**deletePushHistory**](BundleApi.md#deletePushHistory) | **GET** /bundle/deletepushhistory/{params} | 
[**downloadBundle**](BundleApi.md#downloadBundle) | **GET** /bundle/_download/{bundleId} | 
[**downloadManifest**](BundleApi.md#downloadManifest) | **GET** /bundle/{bundleId}/manifest | 
[**generateBundle**](BundleApi.md#generateBundle) | **POST** /bundle/_generate | 
[**getPublishQueueElements**](BundleApi.md#getPublishQueueElements) | **GET** /bundle/{bundleId}/assets | 
[**getUnsendBundles**](BundleApi.md#getUnsendBundles) | **GET** /bundle/getunsendbundles/{params} | 
[**updateBundle**](BundleApi.md#updateBundle) | **GET** /bundle/updatebundle/{params} | 
[**uploadBundleAsync**](BundleApi.md#uploadBundleAsync) | **POST** /bundle | 
[**uploadBundleSync**](BundleApi.md#uploadBundleSync) | **POST** /bundle/sync | 



## deleteAll

> deleteAll()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.BundleApi();
apiInstance.deleteAll((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteAllFail

> deleteAllFail()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.BundleApi();
apiInstance.deleteAllFail((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteAllSuccess

> deleteAllSuccess()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.BundleApi();
apiInstance.deleteAllSuccess((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteBundlesByIdentifiers

> deleteBundlesByIdentifiers(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.BundleApi();
let opts = {
  'deleteBundlesByIdentifierForm': new DotCmsRestApi.DeleteBundlesByIdentifierForm() // DeleteBundlesByIdentifierForm | 
};
apiInstance.deleteBundlesByIdentifiers(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteBundlesByIdentifierForm** | [**DeleteBundlesByIdentifierForm**](DeleteBundlesByIdentifierForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteBundlesOlderThan

> deleteBundlesOlderThan(olderThan)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.BundleApi();
let olderThan = new Date("2013-10-20T19:20:30+01:00"); // Date | 
apiInstance.deleteBundlesOlderThan(olderThan, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **olderThan** | **Date**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteEnvironmentPushHistory

> deleteEnvironmentPushHistory(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.BundleApi();
let params = "params_example"; // String | 
apiInstance.deleteEnvironmentPushHistory(params, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletePushHistory

> deletePushHistory(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.BundleApi();
let params = "params_example"; // String | 
apiInstance.deletePushHistory(params, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## downloadBundle

> downloadBundle(bundleId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.BundleApi();
let bundleId = "bundleId_example"; // String | 
apiInstance.downloadBundle(bundleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bundleId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream


## downloadManifest

> downloadManifest(bundleId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.BundleApi();
let bundleId = "bundleId_example"; // String | 
apiInstance.downloadManifest(bundleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bundleId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/octet-stream


## generateBundle

> generateBundle(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.BundleApi();
let opts = {
  'generateBundleForm': new DotCmsRestApi.GenerateBundleForm() // GenerateBundleForm | 
};
apiInstance.generateBundle(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateBundleForm** | [**GenerateBundleForm**](GenerateBundleForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/octet-stream


## getPublishQueueElements

> getPublishQueueElements(bundleId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.BundleApi();
let bundleId = "bundleId_example"; // String | 
let opts = {
  'limit': 56 // Number | 
};
apiInstance.getPublishQueueElements(bundleId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bundleId** | **String**|  | 
 **limit** | **Number**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUnsendBundles

> getUnsendBundles(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.BundleApi();
let params = "params_example"; // String | 
apiInstance.getUnsendBundles(params, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateBundle

> updateBundle(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.BundleApi();
let params = "params_example"; // String | 
apiInstance.updateBundle(params, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## uploadBundleAsync

> uploadBundleAsync(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.BundleApi();
let opts = {
  'contentDisposition': new DotCmsRestApi.ContentDisposition(), // ContentDisposition | 
  'entity': {key: null}, // Object | 
  'mediaType': new DotCmsRestApi.BodyPartMediaType(), // BodyPartMediaType | 
  'messageBodyWorkers': {key: null}, // Object | 
  'parent': new DotCmsRestApi.MultiPart(), // MultiPart | 
  'providers': {key: null}, // Object | 
  'bodyParts': [new DotCmsRestApi.BodyPart()] // [BodyPart] | 
};
apiInstance.uploadBundleAsync(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentDisposition** | [**ContentDisposition**](ContentDisposition.md)|  | [optional] 
 **entity** | [**Object**](Object.md)|  | [optional] 
 **mediaType** | [**BodyPartMediaType**](BodyPartMediaType.md)|  | [optional] 
 **messageBodyWorkers** | [**Object**](Object.md)|  | [optional] 
 **parent** | [**MultiPart**](MultiPart.md)|  | [optional] 
 **providers** | [**Object**](Object.md)|  | [optional] 
 **bodyParts** | [**[BodyPart]**](BodyPart.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json, application/xml, text/plain


## uploadBundleSync

> uploadBundleSync(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.BundleApi();
let opts = {
  'contentDisposition': new DotCmsRestApi.ContentDisposition(), // ContentDisposition | 
  'entity': {key: null}, // Object | 
  'mediaType': new DotCmsRestApi.BodyPartMediaType(), // BodyPartMediaType | 
  'messageBodyWorkers': {key: null}, // Object | 
  'parent': new DotCmsRestApi.MultiPart(), // MultiPart | 
  'providers': {key: null}, // Object | 
  'bodyParts': [new DotCmsRestApi.BodyPart()] // [BodyPart] | 
};
apiInstance.uploadBundleSync(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentDisposition** | [**ContentDisposition**](ContentDisposition.md)|  | [optional] 
 **entity** | [**Object**](Object.md)|  | [optional] 
 **mediaType** | [**BodyPartMediaType**](BodyPartMediaType.md)|  | [optional] 
 **messageBodyWorkers** | [**Object**](Object.md)|  | [optional] 
 **parent** | [**MultiPart**](MultiPart.md)|  | [optional] 
 **providers** | [**Object**](Object.md)|  | [optional] 
 **bodyParts** | [**[BodyPart]**](BodyPart.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json, application/xml, text/plain

