# DotCmsRestApi.ExperimentApi

All URIs are relative to *https://demo.dotcms.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addVariant**](ExperimentApi.md#addVariant) | **POST** /v1/experiments/{experimentId}/variants | 
[**archive1**](ExperimentApi.md#archive1) | **PUT** /v1/experiments/{experimentId}/_archive | 
[**create**](ExperimentApi.md#create) | **POST** /v1/experiments | 
[**delete4**](ExperimentApi.md#delete4) | **DELETE** /v1/experiments/{experimentId} | 
[**deleteGoal**](ExperimentApi.md#deleteGoal) | **DELETE** /v1/experiments/{experimentId}/goals/primary | 
[**deleteTargetingCondition**](ExperimentApi.md#deleteTargetingCondition) | **DELETE** /v1/experiments/{experimentId}/targetingConditions/{id} | 
[**deleteVariant**](ExperimentApi.md#deleteVariant) | **DELETE** /v1/experiments/{experimentId}/variants/{name} | 
[**end**](ExperimentApi.md#end) | **POST** /v1/experiments/{experimentId}/_end | 
[**get1**](ExperimentApi.md#get1) | **GET** /v1/experiments/{id} | 
[**isUserIncluded**](ExperimentApi.md#isUserIncluded) | **POST** /v1/experiments/isUserIncluded | 
[**list1**](ExperimentApi.md#list1) | **GET** /v1/experiments | 
[**start**](ExperimentApi.md#start) | **POST** /v1/experiments/{experimentId}/_start | 
[**update1**](ExperimentApi.md#update1) | **PATCH** /v1/experiments/{experimentId} | 
[**updateVariant**](ExperimentApi.md#updateVariant) | **PUT** /v1/experiments/{experimentId}/variants/{name} | 



## addVariant

> ResponseEntitySingleExperimentView addVariant(experimentId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ExperimentApi();
let experimentId = "experimentId_example"; // String | 
let opts = {
  'addVariantForm': new DotCmsRestApi.AddVariantForm() // AddVariantForm | 
};
apiInstance.addVariant(experimentId, opts, (error, data, response) => {
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
 **experimentId** | **String**|  | 
 **addVariantForm** | [**AddVariantForm**](AddVariantForm.md)|  | [optional] 

### Return type

[**ResponseEntitySingleExperimentView**](ResponseEntitySingleExperimentView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript


## archive1

> ResponseEntityExperimentView archive1(experimentId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ExperimentApi();
let experimentId = "experimentId_example"; // String | 
apiInstance.archive1(experimentId, (error, data, response) => {
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
 **experimentId** | **String**|  | 

### Return type

[**ResponseEntityExperimentView**](ResponseEntityExperimentView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## create

> ResponseEntitySingleExperimentView create(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ExperimentApi();
let opts = {
  'experimentForm': new DotCmsRestApi.ExperimentForm() // ExperimentForm | 
};
apiInstance.create(opts, (error, data, response) => {
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
 **experimentForm** | [**ExperimentForm**](ExperimentForm.md)|  | [optional] 

### Return type

[**ResponseEntitySingleExperimentView**](ResponseEntitySingleExperimentView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## delete4

> ResponseEntityViewString delete4(experimentId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ExperimentApi();
let experimentId = "experimentId_example"; // String | 
apiInstance.delete4(experimentId, (error, data, response) => {
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
 **experimentId** | **String**|  | 

### Return type

[**ResponseEntityViewString**](ResponseEntityViewString.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteGoal

> ResponseEntitySingleExperimentView deleteGoal(experimentId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ExperimentApi();
let experimentId = "experimentId_example"; // String | 
apiInstance.deleteGoal(experimentId, (error, data, response) => {
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
 **experimentId** | **String**|  | 

### Return type

[**ResponseEntitySingleExperimentView**](ResponseEntitySingleExperimentView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteTargetingCondition

> ResponseEntitySingleExperimentView deleteTargetingCondition(experimentId, id)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ExperimentApi();
let experimentId = "experimentId_example"; // String | 
let id = "id_example"; // String | 
apiInstance.deleteTargetingCondition(experimentId, id, (error, data, response) => {
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
 **experimentId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**ResponseEntitySingleExperimentView**](ResponseEntitySingleExperimentView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteVariant

> ResponseEntitySingleExperimentView deleteVariant(experimentId, name)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ExperimentApi();
let experimentId = "experimentId_example"; // String | 
let name = "name_example"; // String | 
apiInstance.deleteVariant(experimentId, name, (error, data, response) => {
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
 **experimentId** | **String**|  | 
 **name** | **String**|  | 

### Return type

[**ResponseEntitySingleExperimentView**](ResponseEntitySingleExperimentView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## end

> ResponseEntitySingleExperimentView end(experimentId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ExperimentApi();
let experimentId = "experimentId_example"; // String | 
apiInstance.end(experimentId, (error, data, response) => {
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
 **experimentId** | **String**|  | 

### Return type

[**ResponseEntitySingleExperimentView**](ResponseEntitySingleExperimentView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## get1

> ResponseEntitySingleExperimentView get1(id)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ExperimentApi();
let id = "id_example"; // String | 
apiInstance.get1(id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

[**ResponseEntitySingleExperimentView**](ResponseEntitySingleExperimentView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## isUserIncluded

> ResponseEntityExperimentSelectedView isUserIncluded(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ExperimentApi();
let opts = {
  'excludedExperimentListForm': new DotCmsRestApi.ExcludedExperimentListForm() // ExcludedExperimentListForm | 
};
apiInstance.isUserIncluded(opts, (error, data, response) => {
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
 **excludedExperimentListForm** | [**ExcludedExperimentListForm**](ExcludedExperimentListForm.md)|  | [optional] 

### Return type

[**ResponseEntityExperimentSelectedView**](ResponseEntityExperimentSelectedView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## list1

> ResponseEntityExperimentView list1(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ExperimentApi();
let opts = {
  'pageId': "pageId_example", // String | 
  'name': "name_example", // String | 
  'status': ["null"] // [String] | 
};
apiInstance.list1(opts, (error, data, response) => {
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
 **pageId** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **status** | [**[String]**](String.md)|  | [optional] 

### Return type

[**ResponseEntityExperimentView**](ResponseEntityExperimentView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## start

> ResponseEntitySingleExperimentView start(experimentId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ExperimentApi();
let experimentId = "experimentId_example"; // String | 
apiInstance.start(experimentId, (error, data, response) => {
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
 **experimentId** | **String**|  | 

### Return type

[**ResponseEntitySingleExperimentView**](ResponseEntitySingleExperimentView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## update1

> ResponseEntitySingleExperimentView update1(experimentId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ExperimentApi();
let experimentId = "experimentId_example"; // String | 
let opts = {
  'experimentForm': new DotCmsRestApi.ExperimentForm() // ExperimentForm | 
};
apiInstance.update1(experimentId, opts, (error, data, response) => {
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
 **experimentId** | **String**|  | 
 **experimentForm** | [**ExperimentForm**](ExperimentForm.md)|  | [optional] 

### Return type

[**ResponseEntitySingleExperimentView**](ResponseEntitySingleExperimentView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## updateVariant

> ResponseEntitySingleExperimentView updateVariant(experimentId, name, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.ExperimentApi();
let experimentId = "experimentId_example"; // String | 
let name = "name_example"; // String | 
let opts = {
  'experimentVariantForm': new DotCmsRestApi.ExperimentVariantForm() // ExperimentVariantForm | 
};
apiInstance.updateVariant(experimentId, name, opts, (error, data, response) => {
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
 **experimentId** | **String**|  | 
 **name** | **String**|  | 
 **experimentVariantForm** | [**ExperimentVariantForm**](ExperimentVariantForm.md)|  | [optional] 

### Return type

[**ResponseEntitySingleExperimentView**](ResponseEntitySingleExperimentView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/javascript
- **Accept**: application/json, application/javascript

