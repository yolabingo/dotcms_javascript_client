# DotCmsRestApi.WorkflowApi

All URIs are relative to *https://demo.dotcms.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addStep**](WorkflowApi.md#addStep) | **POST** /v1/workflow/steps | 
[**copyScheme**](WorkflowApi.md#copyScheme) | **POST** /v1/workflow/schemes/{schemeId}/copy | 
[**deleteAction**](WorkflowApi.md#deleteAction) | **DELETE** /v1/workflow/actions/{actionId} | 
[**deleteAction1**](WorkflowApi.md#deleteAction1) | **DELETE** /v1/workflow/steps/{stepId}/actions/{actionId} | 
[**deleteActionlet**](WorkflowApi.md#deleteActionlet) | **DELETE** /v1/workflow/actionlets/{actionletId} | 
[**deleteScheme**](WorkflowApi.md#deleteScheme) | **DELETE** /v1/workflow/schemes/{schemeId} | 
[**deleteStep**](WorkflowApi.md#deleteStep) | **DELETE** /v1/workflow/steps/{stepId} | 
[**deletesSystemAction**](WorkflowApi.md#deletesSystemAction) | **DELETE** /v1/workflow/system/actions/{identifier} | 
[**evaluateActionCondition**](WorkflowApi.md#evaluateActionCondition) | **GET** /v1/workflow/actions/{actionId}/condition | 
[**exportScheme**](WorkflowApi.md#exportScheme) | **GET** /v1/workflow/schemes/{schemeId}/export | 
[**findAction**](WorkflowApi.md#findAction) | **GET** /v1/workflow/actions/{actionId} | 
[**findActionByStep**](WorkflowApi.md#findActionByStep) | **GET** /v1/workflow/steps/{stepId}/actions/{actionId} | 
[**findActionlets**](WorkflowApi.md#findActionlets) | **GET** /v1/workflow/actionlets | 
[**findActionletsByAction**](WorkflowApi.md#findActionletsByAction) | **GET** /v1/workflow/actions/{actionId}/actionlets | 
[**findActionsByScheme**](WorkflowApi.md#findActionsByScheme) | **GET** /v1/workflow/schemes/{schemeId}/actions | 
[**findActionsBySchemesAndSystemAction**](WorkflowApi.md#findActionsBySchemesAndSystemAction) | **POST** /v1/workflow/schemes/actions/{systemAction} | 
[**findActionsByStep**](WorkflowApi.md#findActionsByStep) | **GET** /v1/workflow/steps/{stepId}/actions | 
[**findAllSchemesAndSchemesByContentType**](WorkflowApi.md#findAllSchemesAndSchemesByContentType) | **GET** /v1/workflow/schemes/schemescontenttypes/{contentTypeId} | 
[**findAvailableActions**](WorkflowApi.md#findAvailableActions) | **GET** /v1/workflow/contentlet/{inode}/actions | 
[**findAvailableDefaultActionsByContentType**](WorkflowApi.md#findAvailableDefaultActionsByContentType) | **GET** /v1/workflow/defaultactions/contenttype/{contentTypeId} | 
[**findAvailableDefaultActionsBySchemes**](WorkflowApi.md#findAvailableDefaultActionsBySchemes) | **GET** /v1/workflow/defaultactions/schemes | 
[**findInitialAvailableActionsByContentType**](WorkflowApi.md#findInitialAvailableActionsByContentType) | **GET** /v1/workflow/initialactions/contenttype/{contentTypeId} | 
[**findSchemes**](WorkflowApi.md#findSchemes) | **GET** /v1/workflow/schemes | 
[**findStepById**](WorkflowApi.md#findStepById) | **GET** /v1/workflow/steps/{stepId} | 
[**findStepsByScheme**](WorkflowApi.md#findStepsByScheme) | **GET** /v1/workflow/schemes/{schemeId}/steps | 
[**findSystemActionsByContentType**](WorkflowApi.md#findSystemActionsByContentType) | **GET** /v1/workflow/contenttypes/{contentTypeVarOrId}/system/actions | 
[**findSystemActionsByScheme**](WorkflowApi.md#findSystemActionsByScheme) | **GET** /v1/workflow/schemes/{schemeId}/system/actions | 
[**fireActionByNameSinglePart**](WorkflowApi.md#fireActionByNameSinglePart) | **PUT** /v1/workflow/actions/fire | Fire action by name
[**fireActionDefaultMultipartNewPath**](WorkflowApi.md#fireActionDefaultMultipartNewPath) | **PUT** /v1/workflow/actions/default/firemultipart/{systemAction} | Fire default action by name multipart
[**fireActionDefaultSinglePart**](WorkflowApi.md#fireActionDefaultSinglePart) | **PUT** /v1/workflow/actions/default/fire/{systemAction} | Fire default action by name
[**fireActionMultipartNewPath**](WorkflowApi.md#fireActionMultipartNewPath) | **PUT** /v1/workflow/actions/{actionId}/firemultipart | Fire action by ID multipart
[**fireActionSinglePart**](WorkflowApi.md#fireActionSinglePart) | **PUT** /v1/workflow/actions/{actionId}/fire | Fire action by ID
[**fireBulkActions**](WorkflowApi.md#fireBulkActions) | **POST** /v1/workflow/contentlet/actions/_bulkfire | 
[**fireBulkActions1**](WorkflowApi.md#fireBulkActions1) | **PUT** /v1/workflow/contentlet/actions/bulk/fire | 
[**fireMergeActionDefault**](WorkflowApi.md#fireMergeActionDefault) | **PATCH** /v1/workflow/actions/default/fire/{systemAction} | 
[**fireMultipleActionDefault**](WorkflowApi.md#fireMultipleActionDefault) | **POST** /v1/workflow/actions/default/fire/{systemAction} | Fire default action by name on multiple contents
[**getBulkActions**](WorkflowApi.md#getBulkActions) | **POST** /v1/workflow/contentlet/actions/bulk | 
[**getSystemActionsReferredByWorkflowAction**](WorkflowApi.md#getSystemActionsReferredByWorkflowAction) | **GET** /v1/workflow/system/actions/{workflowActionId} | 
[**importScheme**](WorkflowApi.md#importScheme) | **POST** /v1/workflow/schemes/import | 
[**reorderAction**](WorkflowApi.md#reorderAction) | **PUT** /v1/workflow/reorder/steps/{stepId}/actions/{actionId} | 
[**reorderStep**](WorkflowApi.md#reorderStep) | **PUT** /v1/workflow/reorder/step/{stepId}/order/{order} | 
[**saveAction**](WorkflowApi.md#saveAction) | **POST** /v1/workflow/actions | 
[**saveActionToStep**](WorkflowApi.md#saveActionToStep) | **POST** /v1/workflow/steps/{stepId}/actions | 
[**saveActionletToAction**](WorkflowApi.md#saveActionletToAction) | **POST** /v1/workflow/actions/{actionId}/actionlets | 
[**saveScheme**](WorkflowApi.md#saveScheme) | **POST** /v1/workflow/schemes | 
[**saveSystemAction**](WorkflowApi.md#saveSystemAction) | **PUT** /v1/workflow/system/actions | 
[**updateAction**](WorkflowApi.md#updateAction) | **PUT** /v1/workflow/actions/{actionId} | 
[**updateScheme**](WorkflowApi.md#updateScheme) | **PUT** /v1/workflow/schemes/{schemeId} | 
[**updateStep**](WorkflowApi.md#updateStep) | **PUT** /v1/workflow/steps/{stepId} | 



## addStep

> addStep(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let opts = {
  'workflowStepAddForm': new DotCmsRestApi.WorkflowStepAddForm() // WorkflowStepAddForm | 
};
apiInstance.addStep(opts, (error, data, response) => {
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
 **workflowStepAddForm** | [**WorkflowStepAddForm**](WorkflowStepAddForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## copyScheme

> copyScheme(schemeId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let schemeId = "schemeId_example"; // String | 
let opts = {
  'name': "name_example", // String | 
  'workflowCopyForm': new DotCmsRestApi.WorkflowCopyForm() // WorkflowCopyForm | 
};
apiInstance.copyScheme(schemeId, opts, (error, data, response) => {
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
 **schemeId** | **String**|  | 
 **name** | **String**|  | [optional] 
 **workflowCopyForm** | [**WorkflowCopyForm**](WorkflowCopyForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteAction

> deleteAction(actionId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let actionId = "actionId_example"; // String | 
apiInstance.deleteAction(actionId, (error, data, response) => {
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
 **actionId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteAction1

> deleteAction1(actionId, stepId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let actionId = "actionId_example"; // String | 
let stepId = "stepId_example"; // String | 
apiInstance.deleteAction1(actionId, stepId, (error, data, response) => {
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
 **actionId** | **String**|  | 
 **stepId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteActionlet

> deleteActionlet(actionletId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let actionletId = "actionletId_example"; // String | 
apiInstance.deleteActionlet(actionletId, (error, data, response) => {
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
 **actionletId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteScheme

> deleteScheme(schemeId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let schemeId = "schemeId_example"; // String | 
apiInstance.deleteScheme(schemeId, (error, data, response) => {
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
 **schemeId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteStep

> deleteStep(stepId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let stepId = "stepId_example"; // String | 
apiInstance.deleteStep(stepId, (error, data, response) => {
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
 **stepId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deletesSystemAction

> deletesSystemAction(identifier)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let identifier = "identifier_example"; // String | 
apiInstance.deletesSystemAction(identifier, (error, data, response) => {
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
 **identifier** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## evaluateActionCondition

> evaluateActionCondition(actionId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let actionId = "actionId_example"; // String | 
apiInstance.evaluateActionCondition(actionId, (error, data, response) => {
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
 **actionId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## exportScheme

> exportScheme(schemeId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let schemeId = "schemeId_example"; // String | 
apiInstance.exportScheme(schemeId, (error, data, response) => {
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
 **schemeId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## findAction

> findAction(actionId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let actionId = "actionId_example"; // String | 
apiInstance.findAction(actionId, (error, data, response) => {
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
 **actionId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## findActionByStep

> findActionByStep(stepId, actionId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let stepId = "stepId_example"; // String | 
let actionId = "actionId_example"; // String | 
apiInstance.findActionByStep(stepId, actionId, (error, data, response) => {
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
 **stepId** | **String**|  | 
 **actionId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## findActionlets

> findActionlets()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
apiInstance.findActionlets((error, data, response) => {
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


## findActionletsByAction

> findActionletsByAction(actionId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let actionId = "actionId_example"; // String | 
apiInstance.findActionletsByAction(actionId, (error, data, response) => {
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
 **actionId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## findActionsByScheme

> findActionsByScheme(schemeId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let schemeId = "schemeId_example"; // String | 
apiInstance.findActionsByScheme(schemeId, (error, data, response) => {
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
 **schemeId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## findActionsBySchemesAndSystemAction

> findActionsBySchemesAndSystemAction(systemAction, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let systemAction = "systemAction_example"; // String | 
let opts = {
  'workflowSchemesForm': new DotCmsRestApi.WorkflowSchemesForm() // WorkflowSchemesForm | 
};
apiInstance.findActionsBySchemesAndSystemAction(systemAction, opts, (error, data, response) => {
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
 **systemAction** | **String**|  | 
 **workflowSchemesForm** | [**WorkflowSchemesForm**](WorkflowSchemesForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## findActionsByStep

> findActionsByStep(stepId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let stepId = "stepId_example"; // String | 
apiInstance.findActionsByStep(stepId, (error, data, response) => {
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
 **stepId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## findAllSchemesAndSchemesByContentType

> findAllSchemesAndSchemesByContentType(contentTypeId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let contentTypeId = "contentTypeId_example"; // String | 
apiInstance.findAllSchemesAndSchemesByContentType(contentTypeId, (error, data, response) => {
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
 **contentTypeId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## findAvailableActions

> findAvailableActions(inode, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let inode = "inode_example"; // String | 
let opts = {
  'renderMode': "renderMode_example" // String | 
};
apiInstance.findAvailableActions(inode, opts, (error, data, response) => {
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
 **inode** | **String**|  | 
 **renderMode** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## findAvailableDefaultActionsByContentType

> findAvailableDefaultActionsByContentType(contentTypeId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let contentTypeId = "contentTypeId_example"; // String | 
apiInstance.findAvailableDefaultActionsByContentType(contentTypeId, (error, data, response) => {
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
 **contentTypeId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## findAvailableDefaultActionsBySchemes

> findAvailableDefaultActionsBySchemes(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let opts = {
  'ids': "ids_example" // String | 
};
apiInstance.findAvailableDefaultActionsBySchemes(opts, (error, data, response) => {
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
 **ids** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## findInitialAvailableActionsByContentType

> findInitialAvailableActionsByContentType(contentTypeId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let contentTypeId = "contentTypeId_example"; // String | 
apiInstance.findInitialAvailableActionsByContentType(contentTypeId, (error, data, response) => {
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
 **contentTypeId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## findSchemes

> findSchemes(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let opts = {
  'contentTypeId': "contentTypeId_example", // String | 
  'showArchive': true // Boolean | 
};
apiInstance.findSchemes(opts, (error, data, response) => {
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
 **contentTypeId** | **String**|  | [optional] 
 **showArchive** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## findStepById

> findStepById(stepId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let stepId = "stepId_example"; // String | 
apiInstance.findStepById(stepId, (error, data, response) => {
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
 **stepId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## findStepsByScheme

> findStepsByScheme(schemeId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let schemeId = "schemeId_example"; // String | 
apiInstance.findStepsByScheme(schemeId, (error, data, response) => {
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
 **schemeId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## findSystemActionsByContentType

> findSystemActionsByContentType(contentTypeVarOrId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let contentTypeVarOrId = "contentTypeVarOrId_example"; // String | 
apiInstance.findSystemActionsByContentType(contentTypeVarOrId, (error, data, response) => {
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
 **contentTypeVarOrId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## findSystemActionsByScheme

> findSystemActionsByScheme(schemeId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let schemeId = "schemeId_example"; // String | 
apiInstance.findSystemActionsByScheme(schemeId, (error, data, response) => {
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
 **schemeId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## fireActionByNameSinglePart

> ResponseEntityView fireActionByNameSinglePart(opts)

Fire action by name

### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let opts = {
  'inode': "inode_example", // String | 
  'identifier': "identifier_example", // String | 
  'indexPolicy': "indexPolicy_example", // String | 
  'language': "'-1'", // String | 
  'fireActionByNameForm': new DotCmsRestApi.FireActionByNameForm() // FireActionByNameForm | 
};
apiInstance.fireActionByNameSinglePart(opts, (error, data, response) => {
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
 **inode** | **String**|  | [optional] 
 **identifier** | **String**|  | [optional] 
 **indexPolicy** | **String**|  | [optional] 
 **language** | **String**|  | [optional] [default to &#39;-1&#39;]
 **fireActionByNameForm** | [**FireActionByNameForm**](FireActionByNameForm.md)|  | [optional] 

### Return type

[**ResponseEntityView**](ResponseEntityView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fireActionDefaultMultipartNewPath

> ResponseEntityView fireActionDefaultMultipartNewPath(systemAction, opts)

Fire default action by name multipart

### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let systemAction = "systemAction_example"; // String | 
let opts = {
  'inode': "inode_example", // String | 
  'identifier': "identifier_example", // String | 
  'indexPolicy': "indexPolicy_example", // String | 
  'language': "'-1'", // String | 
  'contentDisposition': new DotCmsRestApi.ContentDisposition(), // ContentDisposition | 
  'entity': {key: null}, // Object | 
  'mediaType': new DotCmsRestApi.BodyPartMediaType(), // BodyPartMediaType | 
  'messageBodyWorkers': {key: null}, // Object | 
  'parent': new DotCmsRestApi.MultiPart(), // MultiPart | 
  'providers': {key: null}, // Object | 
  'bodyParts': [new DotCmsRestApi.BodyPart()] // [BodyPart] | 
};
apiInstance.fireActionDefaultMultipartNewPath(systemAction, opts, (error, data, response) => {
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
 **systemAction** | **String**|  | 
 **inode** | **String**|  | [optional] 
 **identifier** | **String**|  | [optional] 
 **indexPolicy** | **String**|  | [optional] 
 **language** | **String**|  | [optional] [default to &#39;-1&#39;]
 **contentDisposition** | [**ContentDisposition**](ContentDisposition.md)|  | [optional] 
 **entity** | [**Object**](Object.md)|  | [optional] 
 **mediaType** | [**BodyPartMediaType**](BodyPartMediaType.md)|  | [optional] 
 **messageBodyWorkers** | [**Object**](Object.md)|  | [optional] 
 **parent** | [**MultiPart**](MultiPart.md)|  | [optional] 
 **providers** | [**Object**](Object.md)|  | [optional] 
 **bodyParts** | [**[BodyPart]**](BodyPart.md)|  | [optional] 

### Return type

[**ResponseEntityView**](ResponseEntityView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## fireActionDefaultSinglePart

> ResponseEntityView fireActionDefaultSinglePart(systemAction, opts)

Fire default action by name

### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let systemAction = "systemAction_example"; // String | 
let opts = {
  'inode': "inode_example", // String | 
  'identifier': "identifier_example", // String | 
  'indexPolicy': "indexPolicy_example", // String | 
  'language': "'-1'", // String | 
  'fireActionForm': new DotCmsRestApi.FireActionForm() // FireActionForm | 
};
apiInstance.fireActionDefaultSinglePart(systemAction, opts, (error, data, response) => {
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
 **systemAction** | **String**|  | 
 **inode** | **String**|  | [optional] 
 **identifier** | **String**|  | [optional] 
 **indexPolicy** | **String**|  | [optional] 
 **language** | **String**|  | [optional] [default to &#39;-1&#39;]
 **fireActionForm** | [**FireActionForm**](FireActionForm.md)|  | [optional] 

### Return type

[**ResponseEntityView**](ResponseEntityView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fireActionMultipartNewPath

> ResponseEntityView fireActionMultipartNewPath(actionId, opts)

Fire action by ID multipart

### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let actionId = "actionId_example"; // String | 
let opts = {
  'inode': "inode_example", // String | 
  'identifier': "identifier_example", // String | 
  'indexPolicy': "indexPolicy_example", // String | 
  'language': "'-1'", // String | 
  'contentDisposition': new DotCmsRestApi.ContentDisposition(), // ContentDisposition | 
  'entity': {key: null}, // Object | 
  'mediaType': new DotCmsRestApi.BodyPartMediaType(), // BodyPartMediaType | 
  'messageBodyWorkers': {key: null}, // Object | 
  'parent': new DotCmsRestApi.MultiPart(), // MultiPart | 
  'providers': {key: null}, // Object | 
  'bodyParts': [new DotCmsRestApi.BodyPart()] // [BodyPart] | 
};
apiInstance.fireActionMultipartNewPath(actionId, opts, (error, data, response) => {
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
 **actionId** | **String**|  | 
 **inode** | **String**|  | [optional] 
 **identifier** | **String**|  | [optional] 
 **indexPolicy** | **String**|  | [optional] 
 **language** | **String**|  | [optional] [default to &#39;-1&#39;]
 **contentDisposition** | [**ContentDisposition**](ContentDisposition.md)|  | [optional] 
 **entity** | [**Object**](Object.md)|  | [optional] 
 **mediaType** | [**BodyPartMediaType**](BodyPartMediaType.md)|  | [optional] 
 **messageBodyWorkers** | [**Object**](Object.md)|  | [optional] 
 **parent** | [**MultiPart**](MultiPart.md)|  | [optional] 
 **providers** | [**Object**](Object.md)|  | [optional] 
 **bodyParts** | [**[BodyPart]**](BodyPart.md)|  | [optional] 

### Return type

[**ResponseEntityView**](ResponseEntityView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## fireActionSinglePart

> ResponseEntityView fireActionSinglePart(actionId, opts)

Fire action by ID

### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let actionId = "actionId_example"; // String | 
let opts = {
  'inode': "inode_example", // String | 
  'identifier': "identifier_example", // String | 
  'indexPolicy': "indexPolicy_example", // String | 
  'language': "'-1'", // String | 
  'fireActionForm': new DotCmsRestApi.FireActionForm() // FireActionForm | 
};
apiInstance.fireActionSinglePart(actionId, opts, (error, data, response) => {
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
 **actionId** | **String**|  | 
 **inode** | **String**|  | [optional] 
 **identifier** | **String**|  | [optional] 
 **indexPolicy** | **String**|  | [optional] 
 **language** | **String**|  | [optional] [default to &#39;-1&#39;]
 **fireActionForm** | [**FireActionForm**](FireActionForm.md)|  | [optional] 

### Return type

[**ResponseEntityView**](ResponseEntityView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fireBulkActions

> EventOutput fireBulkActions(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let opts = {
  'fireBulkActionsForm': new DotCmsRestApi.FireBulkActionsForm() // FireBulkActionsForm | 
};
apiInstance.fireBulkActions(opts, (error, data, response) => {
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
 **fireBulkActionsForm** | [**FireBulkActionsForm**](FireBulkActionsForm.md)|  | [optional] 

### Return type

[**EventOutput**](EventOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/event-stream


## fireBulkActions1

> fireBulkActions1(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let opts = {
  'fireBulkActionsForm': new DotCmsRestApi.FireBulkActionsForm() // FireBulkActionsForm | 
};
apiInstance.fireBulkActions1(opts, (error, data, response) => {
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
 **fireBulkActionsForm** | [**FireBulkActionsForm**](FireBulkActionsForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## fireMergeActionDefault

> fireMergeActionDefault(systemAction, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let systemAction = "systemAction_example"; // String | 
let opts = {
  'inode': "inode_example", // String | 
  'identifier': "identifier_example", // String | 
  'language': "'-1'", // String | 
  'offset': 56, // Number | 
  'fireActionForm': new DotCmsRestApi.FireActionForm() // FireActionForm | 
};
apiInstance.fireMergeActionDefault(systemAction, opts, (error, data, response) => {
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
 **systemAction** | **String**|  | 
 **inode** | **String**|  | [optional] 
 **identifier** | **String**|  | [optional] 
 **language** | **String**|  | [optional] [default to &#39;-1&#39;]
 **offset** | **Number**|  | [optional] 
 **fireActionForm** | [**FireActionForm**](FireActionForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream


## fireMultipleActionDefault

> ResponseEntityView fireMultipleActionDefault(systemAction, opts)

Fire default action by name on multiple contents

### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let systemAction = "systemAction_example"; // String | 
let opts = {
  'fireMultipleActionForm': new DotCmsRestApi.FireMultipleActionForm() // FireMultipleActionForm | 
};
apiInstance.fireMultipleActionDefault(systemAction, opts, (error, data, response) => {
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
 **systemAction** | **String**|  | 
 **fireMultipleActionForm** | [**FireMultipleActionForm**](FireMultipleActionForm.md)|  | [optional] 

### Return type

[**ResponseEntityView**](ResponseEntityView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getBulkActions

> getBulkActions(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let opts = {
  'bulkActionForm': new DotCmsRestApi.BulkActionForm() // BulkActionForm | 
};
apiInstance.getBulkActions(opts, (error, data, response) => {
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
 **bulkActionForm** | [**BulkActionForm**](BulkActionForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getSystemActionsReferredByWorkflowAction

> getSystemActionsReferredByWorkflowAction(workflowActionId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let workflowActionId = "workflowActionId_example"; // String | 
apiInstance.getSystemActionsReferredByWorkflowAction(workflowActionId, (error, data, response) => {
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
 **workflowActionId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## importScheme

> importScheme(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let opts = {
  'workflowSchemeImportObjectForm': new DotCmsRestApi.WorkflowSchemeImportObjectForm() // WorkflowSchemeImportObjectForm | 
};
apiInstance.importScheme(opts, (error, data, response) => {
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
 **workflowSchemeImportObjectForm** | [**WorkflowSchemeImportObjectForm**](WorkflowSchemeImportObjectForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## reorderAction

> reorderAction(stepId, actionId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let stepId = "stepId_example"; // String | 
let actionId = "actionId_example"; // String | 
let opts = {
  'workflowReorderWorkflowActionStepForm': new DotCmsRestApi.WorkflowReorderWorkflowActionStepForm() // WorkflowReorderWorkflowActionStepForm | 
};
apiInstance.reorderAction(stepId, actionId, opts, (error, data, response) => {
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
 **stepId** | **String**|  | 
 **actionId** | **String**|  | 
 **workflowReorderWorkflowActionStepForm** | [**WorkflowReorderWorkflowActionStepForm**](WorkflowReorderWorkflowActionStepForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## reorderStep

> reorderStep(stepId, order)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let stepId = "stepId_example"; // String | 
let order = 56; // Number | 
apiInstance.reorderStep(stepId, order, (error, data, response) => {
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
 **stepId** | **String**|  | 
 **order** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## saveAction

> saveAction(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let opts = {
  'workflowActionForm': new DotCmsRestApi.WorkflowActionForm() // WorkflowActionForm | 
};
apiInstance.saveAction(opts, (error, data, response) => {
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
 **workflowActionForm** | [**WorkflowActionForm**](WorkflowActionForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript


## saveActionToStep

> saveActionToStep(stepId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let stepId = "stepId_example"; // String | 
let opts = {
  'workflowActionStepForm': new DotCmsRestApi.WorkflowActionStepForm() // WorkflowActionStepForm | 
};
apiInstance.saveActionToStep(stepId, opts, (error, data, response) => {
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
 **stepId** | **String**|  | 
 **workflowActionStepForm** | [**WorkflowActionStepForm**](WorkflowActionStepForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## saveActionletToAction

> saveActionletToAction(actionId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let actionId = "actionId_example"; // String | 
let opts = {
  'workflowActionletActionForm': new DotCmsRestApi.WorkflowActionletActionForm() // WorkflowActionletActionForm | 
};
apiInstance.saveActionletToAction(actionId, opts, (error, data, response) => {
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
 **actionId** | **String**|  | 
 **workflowActionletActionForm** | [**WorkflowActionletActionForm**](WorkflowActionletActionForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## saveScheme

> saveScheme(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let opts = {
  'workflowSchemeForm': new DotCmsRestApi.WorkflowSchemeForm() // WorkflowSchemeForm | 
};
apiInstance.saveScheme(opts, (error, data, response) => {
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
 **workflowSchemeForm** | [**WorkflowSchemeForm**](WorkflowSchemeForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## saveSystemAction

> saveSystemAction(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let opts = {
  'workflowSystemActionForm': new DotCmsRestApi.WorkflowSystemActionForm() // WorkflowSystemActionForm | 
};
apiInstance.saveSystemAction(opts, (error, data, response) => {
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
 **workflowSystemActionForm** | [**WorkflowSystemActionForm**](WorkflowSystemActionForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## updateAction

> updateAction(actionId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let actionId = "actionId_example"; // String | 
let opts = {
  'workflowActionForm': new DotCmsRestApi.WorkflowActionForm() // WorkflowActionForm | 
};
apiInstance.updateAction(actionId, opts, (error, data, response) => {
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
 **actionId** | **String**|  | 
 **workflowActionForm** | [**WorkflowActionForm**](WorkflowActionForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## updateScheme

> updateScheme(schemeId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let schemeId = "schemeId_example"; // String | 
let opts = {
  'workflowSchemeForm': new DotCmsRestApi.WorkflowSchemeForm() // WorkflowSchemeForm | 
};
apiInstance.updateScheme(schemeId, opts, (error, data, response) => {
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
 **schemeId** | **String**|  | 
 **workflowSchemeForm** | [**WorkflowSchemeForm**](WorkflowSchemeForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## updateStep

> updateStep(stepId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.WorkflowApi();
let stepId = "stepId_example"; // String | 
let opts = {
  'workflowStepUpdateForm': new DotCmsRestApi.WorkflowStepUpdateForm() // WorkflowStepUpdateForm | 
};
apiInstance.updateStep(stepId, opts, (error, data, response) => {
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
 **stepId** | **String**|  | 
 **workflowStepUpdateForm** | [**WorkflowStepUpdateForm**](WorkflowStepUpdateForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript

