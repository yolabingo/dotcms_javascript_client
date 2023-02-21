# DotCmsRestApi.TailLogApi

All URIs are relative to *https://demo.dotcms.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLogs**](TailLogApi.md#getLogs) | **GET** /v1/logs/{fileName}/_tail | 



## getLogs

> EventOutput getLogs(fileName, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.TailLogApi();
let fileName = "fileName_example"; // String | 
let opts = {
  'linesBack': 56 // Number | 
};
apiInstance.getLogs(fileName, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileName** | **String**|  | 
 **linesBack** | **Number**|  | [optional] 

### Return type

[**EventOutput**](EventOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/event-stream

