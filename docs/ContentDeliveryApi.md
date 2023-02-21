# DotCmsRestApi.ContentDeliveryApi

All URIs are relative to *https://demo.dotcms.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**canLockContent**](ContentDeliveryApi.md#canLockContent) | **PUT** /content/canLock/{params} | 
[**getContent**](ContentDeliveryApi.md#getContent) | **GET** /content/{params} | 
[**indexCount**](ContentDeliveryApi.md#indexCount) | **GET** /content/indexcount/{query} | 
[**indexSearch**](ContentDeliveryApi.md#indexSearch) | **GET** /content/indexsearch/{query}/sortby/{sortby}/limit/{limit}/offset/{offset} | 
[**lockContent**](ContentDeliveryApi.md#lockContent) | **PUT** /content/lock/{params} | 
[**search**](ContentDeliveryApi.md#search) | **POST** /content/_search | 
[**singlePOST**](ContentDeliveryApi.md#singlePOST) | **POST** /content/{params} | 
[**singlePUT**](ContentDeliveryApi.md#singlePUT) | **PUT** /content/{params} | 
[**unlockContent**](ContentDeliveryApi.md#unlockContent) | **PUT** /content/unlock/{params} | 



## canLockContent

> canLockContent(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ContentDeliveryApi();
let params = "params_example"; // String | 
apiInstance.canLockContent(params, (error, data, response) => {
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


## getContent

> getContent(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ContentDeliveryApi();
let params = "params_example"; // String | 
apiInstance.getContent(params, (error, data, response) => {
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


## indexCount

> indexCount(query, type, callback)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ContentDeliveryApi();
let query = "query_example"; // String | 
let type = "type_example"; // String | 
let callback = "callback_example"; // String | 
apiInstance.indexCount(query, type, callback, (error, data, response) => {
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
 **query** | **String**|  | 
 **type** | **String**|  | 
 **callback** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain


## indexSearch

> indexSearch(query, sortby, limit, offset, type, callback)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ContentDeliveryApi();
let query = "query_example"; // String | 
let sortby = "sortby_example"; // String | 
let limit = 56; // Number | 
let offset = 56; // Number | 
let type = "type_example"; // String | 
let callback = "callback_example"; // String | 
apiInstance.indexSearch(query, sortby, limit, offset, type, callback, (error, data, response) => {
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
 **query** | **String**|  | 
 **sortby** | **String**|  | 
 **limit** | **Number**|  | 
 **offset** | **Number**|  | 
 **type** | **String**|  | 
 **callback** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## lockContent

> lockContent(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ContentDeliveryApi();
let params = "params_example"; // String | 
apiInstance.lockContent(params, (error, data, response) => {
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


## search

> search(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ContentDeliveryApi();
let opts = {
  'searchForm': new DotCmsRestApi.SearchForm() // SearchForm | 
};
apiInstance.search(opts, (error, data, response) => {
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
 **searchForm** | [**SearchForm**](SearchForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## singlePOST

> singlePOST(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ContentDeliveryApi();
let params = "params_example"; // String | 
apiInstance.singlePOST(params, (error, data, response) => {
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
- **Accept**: application/json, text/plain


## singlePUT

> singlePUT(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ContentDeliveryApi();
let params = "params_example"; // String | 
apiInstance.singlePUT(params, (error, data, response) => {
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
- **Accept**: application/json, text/plain


## unlockContent

> unlockContent(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ContentDeliveryApi();
let params = "params_example"; // String | 
apiInstance.unlockContent(params, (error, data, response) => {
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

