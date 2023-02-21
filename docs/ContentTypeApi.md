# DotCmsRestApi.ContentTypeApi

All URIs are relative to *https://demo.dotcms.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copyType**](ContentTypeApi.md#copyType) | **POST** /v1/contenttype/{baseVariableName}/_copy | 
[**createType**](ContentTypeApi.md#createType) | **POST** /v1/contenttype | 
[**deleteType**](ContentTypeApi.md#deleteType) | **DELETE** /v1/contenttype/id/{idOrVar} | 
[**filteredContentTypes**](ContentTypeApi.md#filteredContentTypes) | **POST** /v1/contenttype/_filter | 
[**getContentTypes**](ContentTypeApi.md#getContentTypes) | **GET** /v1/contenttype | 
[**getRecentBaseTypes**](ContentTypeApi.md#getRecentBaseTypes) | **GET** /v1/contenttype/basetypes | 
[**getType**](ContentTypeApi.md#getType) | **GET** /v1/contenttype/id/{idOrVar} | 
[**updateType**](ContentTypeApi.md#updateType) | **PUT** /v1/contenttype/id/{idOrVar} | 



## copyType

> copyType(baseVariableName, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ContentTypeApi();
let baseVariableName = "baseVariableName_example"; // String | 
let opts = {
  'copyContentTypeForm': new DotCmsRestApi.CopyContentTypeForm() // CopyContentTypeForm | 
};
apiInstance.copyType(baseVariableName, opts, (error, data, response) => {
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
 **baseVariableName** | **String**|  | 
 **copyContentTypeForm** | [**CopyContentTypeForm**](CopyContentTypeForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript


## createType

> createType(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ContentTypeApi();
let opts = {
  'contentTypeForm': new DotCmsRestApi.ContentTypeForm() // ContentTypeForm | 
};
apiInstance.createType(opts, (error, data, response) => {
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
 **contentTypeForm** | [**ContentTypeForm**](ContentTypeForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript


## deleteType

> deleteType(idOrVar)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ContentTypeApi();
let idOrVar = "idOrVar_example"; // String | 
apiInstance.deleteType(idOrVar, (error, data, response) => {
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
 **idOrVar** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## filteredContentTypes

> filteredContentTypes(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ContentTypeApi();
let opts = {
  'filteredContentTypesForm': new DotCmsRestApi.FilteredContentTypesForm() // FilteredContentTypesForm | 
};
apiInstance.filteredContentTypes(opts, (error, data, response) => {
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
 **filteredContentTypesForm** | [**FilteredContentTypesForm**](FilteredContentTypesForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript


## getContentTypes

> getContentTypes(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ContentTypeApi();
let opts = {
  'filter': "filter_example", // String | 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderby': "'upper(name)'", // String | 
  'direction': "'ASC'", // String | 
  'type': "type_example", // String | 
  'host': "host_example" // String | 
};
apiInstance.getContentTypes(opts, (error, data, response) => {
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
 **filter** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderby** | **String**|  | [optional] [default to &#39;upper(name)&#39;]
 **direction** | **String**|  | [optional] [default to &#39;ASC&#39;]
 **type** | **String**|  | [optional] 
 **host** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getRecentBaseTypes

> getRecentBaseTypes()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ContentTypeApi();
apiInstance.getRecentBaseTypes((error, data, response) => {
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
- **Accept**: application/json, application/javascript


## getType

> getType(idOrVar, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ContentTypeApi();
let idOrVar = "idOrVar_example"; // String | 
let opts = {
  'languageId': 789, // Number | 
  'live': true // Boolean | 
};
apiInstance.getType(idOrVar, opts, (error, data, response) => {
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
 **idOrVar** | **String**|  | 
 **languageId** | **Number**|  | [optional] 
 **live** | **Boolean**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## updateType

> updateType(idOrVar, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ContentTypeApi();
let idOrVar = "idOrVar_example"; // String | 
let opts = {
  'contentTypeForm': new DotCmsRestApi.ContentTypeForm() // ContentTypeForm | 
};
apiInstance.updateType(idOrVar, opts, (error, data, response) => {
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
 **idOrVar** | **String**|  | 
 **contentTypeForm** | [**ContentTypeForm**](ContentTypeForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript

