# DotCmsRestApi.PageApi

All URIs are relative to *https://demo.dotcms.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addContent**](PageApi.md#addContent) | **POST** /v1/page/{pageId}/content | 
[**copyContent**](PageApi.md#copyContent) | **PUT** /v1/page/copyContent | 
[**deepCopyPage**](PageApi.md#deepCopyPage) | **PUT** /v1/page/{pageId}/_deepcopy | 
[**getContentTree**](PageApi.md#getContentTree) | **GET** /v1/page/{pageId}/content/tree | 
[**getHtmlVersionsPage**](PageApi.md#getHtmlVersionsPage) | **GET** /v1/page/{pageId}/render/versions | 
[**getPersonalizedPersonasOnPage**](PageApi.md#getPersonalizedPersonasOnPage) | **GET** /v1/page/{pageId}/personas | 
[**loadJson2**](PageApi.md#loadJson2) | **GET** /v1/page/json/{uri} | 
[**render**](PageApi.md#render) | **GET** /v1/page/render/{uri} | 
[**renderHTMLOnly**](PageApi.md#renderHTMLOnly) | **GET** /v1/page/renderHTML/{uri} | 
[**saveLayout**](PageApi.md#saveLayout) | **POST** /v1/page/layout | 
[**saveLayout1**](PageApi.md#saveLayout1) | **POST** /v1/page/{pageId}/layout | 
[**searchPage**](PageApi.md#searchPage) | **GET** /v1/page/search | 



## addContent

> addContent(pageId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.PageApi();
let pageId = "pageId_example"; // String | 
let opts = {
  'variantName': "variantName_example", // String | 
  'pageContainerForm': new DotCmsRestApi.PageContainerForm() // PageContainerForm | 
};
apiInstance.addContent(pageId, opts, (error, data, response) => {
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
 **pageId** | **String**|  | 
 **variantName** | **String**|  | [optional] 
 **pageContainerForm** | [**PageContainerForm**](PageContainerForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## copyContent

> ResponseEntityViewMapStringObject copyContent(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.PageApi();
let opts = {
  'copyContentletForm': new DotCmsRestApi.CopyContentletForm() // CopyContentletForm | 
};
apiInstance.copyContent(opts, (error, data, response) => {
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
 **copyContentletForm** | [**CopyContentletForm**](CopyContentletForm.md)|  | [optional] 

### Return type

[**ResponseEntityViewMapStringObject**](ResponseEntityViewMapStringObject.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deepCopyPage

> ResponseEntityViewMapStringObject deepCopyPage(pageId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.PageApi();
let pageId = "pageId_example"; // String | 
apiInstance.deepCopyPage(pageId, (error, data, response) => {
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
 **pageId** | **String**|  | 

### Return type

[**ResponseEntityViewMapStringObject**](ResponseEntityViewMapStringObject.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContentTree

> ResponseEntityViewListMulitreeView getContentTree(pageId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.PageApi();
let pageId = "pageId_example"; // String | 
apiInstance.getContentTree(pageId, (error, data, response) => {
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
 **pageId** | **String**|  | 

### Return type

[**ResponseEntityViewListMulitreeView**](ResponseEntityViewListMulitreeView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getHtmlVersionsPage

> getHtmlVersionsPage(pageId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.PageApi();
let pageId = "pageId_example"; // String | 
let opts = {
  'langId': "langId_example" // String | 
};
apiInstance.getHtmlVersionsPage(pageId, opts, (error, data, response) => {
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
 **pageId** | **String**|  | 
 **langId** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getPersonalizedPersonasOnPage

> getPersonalizedPersonasOnPage(pageId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.PageApi();
let pageId = "pageId_example"; // String | 
let opts = {
  'filter': "filter_example", // String | 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderby': "'title'", // String | 
  'direction': "'ASC'", // String | 
  'hostId': "hostId_example", // String | 
  'respectFrontEndRoles': true // Boolean | 
};
apiInstance.getPersonalizedPersonasOnPage(pageId, opts, (error, data, response) => {
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
 **pageId** | **String**|  | 
 **filter** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderby** | **String**|  | [optional] [default to &#39;title&#39;]
 **direction** | **String**|  | [optional] [default to &#39;ASC&#39;]
 **hostId** | **String**|  | [optional] 
 **respectFrontEndRoles** | **Boolean**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## loadJson2

> loadJson2(uri, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.PageApi();
let uri = "uri_example"; // String | 
let opts = {
  'mode': "mode_example", // String | 
  'comDotmarketingPersonaId': "comDotmarketingPersonaId_example", // String | 
  'languageId': "languageId_example", // String | 
  'deviceInode': "deviceInode_example" // String | 
};
apiInstance.loadJson2(uri, opts, (error, data, response) => {
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
 **mode** | **String**|  | [optional] 
 **comDotmarketingPersonaId** | **String**|  | [optional] 
 **languageId** | **String**|  | [optional] 
 **deviceInode** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## render

> render(uri, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.PageApi();
let uri = "uri_example"; // String | 
let opts = {
  'mode': "mode_example", // String | 
  'comDotmarketingPersonaId': "comDotmarketingPersonaId_example", // String | 
  'languageId': "languageId_example", // String | 
  'deviceInode': "deviceInode_example" // String | 
};
apiInstance.render(uri, opts, (error, data, response) => {
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
 **mode** | **String**|  | [optional] 
 **comDotmarketingPersonaId** | **String**|  | [optional] 
 **languageId** | **String**|  | [optional] 
 **deviceInode** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## renderHTMLOnly

> renderHTMLOnly(uri, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.PageApi();
let uri = "uri_example"; // String | 
let opts = {
  'mode': "'LIVE_ADMIN'" // String | 
};
apiInstance.renderHTMLOnly(uri, opts, (error, data, response) => {
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
 **mode** | **String**|  | [optional] [default to &#39;LIVE_ADMIN&#39;]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/html, application/javascript


## saveLayout

> saveLayout(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.PageApi();
let opts = {
  'pageForm': new DotCmsRestApi.PageForm() // PageForm | 
};
apiInstance.saveLayout(opts, (error, data, response) => {
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
 **pageForm** | [**PageForm**](PageForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## saveLayout1

> saveLayout1(pageId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.PageApi();
let pageId = "pageId_example"; // String | 
let opts = {
  'variantName': "variantName_example", // String | 
  'pageForm': new DotCmsRestApi.PageForm() // PageForm | 
};
apiInstance.saveLayout1(pageId, opts, (error, data, response) => {
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
 **pageId** | **String**|  | 
 **variantName** | **String**|  | [optional] 
 **pageForm** | [**PageForm**](PageForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## searchPage

> searchPage(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.PageApi();
let opts = {
  'path': "path_example", // String | 
  'live': true, // Boolean | 
  'onlyLiveSites': true // Boolean | 
};
apiInstance.searchPage(opts, (error, data, response) => {
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
 **path** | **String**|  | [optional] 
 **live** | **Boolean**|  | [optional] 
 **onlyLiveSites** | **Boolean**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/html, application/javascript

