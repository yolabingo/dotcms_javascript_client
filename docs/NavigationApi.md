# DotCmsRestApi.NavigationApi

All URIs are relative to *https://demo.dotcms.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loadJson1**](NavigationApi.md#loadJson1) | **GET** /v1/nav/{uri} | 



## loadJson1

> loadJson1(uri, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.NavigationApi();
let uri = "uri_example"; // String | 
let opts = {
  'depth': "depth_example", // String | 
  'languageId': "languageId_example" // String | 
};
apiInstance.loadJson1(uri, opts, (error, data, response) => {
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
 **uri** | **String**|  | 
 **depth** | **String**|  | [optional] 
 **languageId** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript

