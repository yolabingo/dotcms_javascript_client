# DotCmsRestApi.DefaultApi

All URIs are relative to *https://demo.dotcms.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateIndex**](DefaultApi.md#activateIndex) | **PUT** /v1/esindex/activate/{params} | 
[**add**](DefaultApi.md#add) | **POST** /v1/sites/{siteId}/ruleengine/rules | 
[**add1**](DefaultApi.md#add1) | **POST** /v1/sites/{siteId}/ruleengine/actions | 
[**add2**](DefaultApi.md#add2) | **POST** /v1/sites/{siteId}/ruleengine/rules/{ruleId}/conditionGroups | 
[**add3**](DefaultApi.md#add3) | **POST** /v1/sites/{siteId}/ruleengine/conditions | 
[**add4**](DefaultApi.md#add4) | **POST** /v1/sites/{siteId}/ruleengine/conditions/{conditionId}/conditionValues | 
[**addContentPortletToLayout**](DefaultApi.md#addContentPortletToLayout) | **PUT** /v1/portlet/custom/{portletId}/_addtolayout/{layoutId} | 
[**addTag**](DefaultApi.md#addTag) | **POST** /v1/tags | 
[**addToolGroupToUser**](DefaultApi.md#addToolGroupToUser) | **PUT** /v1/toolgroups/{layoutId}/_addtouser | 
[**aliveCheck**](DefaultApi.md#aliveCheck) | **GET** /v1/system-status/alive | 
[**applyLicense**](DefaultApi.md#applyLicense) | **POST** /license/applyLicense | 
[**archive**](DefaultApi.md#archive) | **PUT** /v1/containers/_archive | 
[**archive2**](DefaultApi.md#archive2) | **PUT** /v1/templates/_archive | 
[**archiveSite**](DefaultApi.md#archiveSite) | **PUT** /v1/site/{siteId}/_archive | 
[**authentication**](DefaultApi.md#authentication) | **POST** /v1/authentication | 
[**bringBack**](DefaultApi.md#bringBack) | **PUT** /v1/versionables/{versionableInode}/_bringback | 
[**bulkArchive**](DefaultApi.md#bulkArchive) | **PUT** /v1/containers/_bulkarchive | 
[**bulkDelete**](DefaultApi.md#bulkDelete) | **DELETE** /v1/containers/_bulkdelete | 
[**bulkPublish**](DefaultApi.md#bulkPublish) | **PUT** /v1/containers/_bulkpublish | 
[**bulkUnarchive**](DefaultApi.md#bulkUnarchive) | **PUT** /v1/containers/_bulkunarchive | 
[**bulkUnpublish**](DefaultApi.md#bulkUnpublish) | **PUT** /v1/containers/_bulkunpublish | 
[**callDelete**](DefaultApi.md#callDelete) | **DELETE** /license/delete/{params} | 
[**callExport**](DefaultApi.md#callExport) | **GET** /v1/categories/_export | 
[**canLockContent1**](DefaultApi.md#canLockContent1) | **GET** /v1/content/_canlock/{inodeOrIdentifier} | 
[**changeLoggerLevel**](DefaultApi.md#changeLoggerLevel) | **PUT** /v1/logger | 
[**checkIntegrity**](DefaultApi.md#checkIntegrity) | **GET** /integrity/checkintegrity/{params} | 
[**checkIntegrityProcessStatus**](DefaultApi.md#checkIntegrityProcessStatus) | **GET** /integrity/checkIntegrityProcessStatus/{params} | 
[**checkRoles**](DefaultApi.md#checkRoles) | **GET** /v1/roles/checkuserroles/userid/{userId}/roleids/{roleIds} | 
[**clearIndex**](DefaultApi.md#clearIndex) | **PUT** /v1/esindex/clear/{params} | 
[**closeIndex**](DefaultApi.md#closeIndex) | **PUT** /v1/esindex/close/{params} | 
[**containerContent**](DefaultApi.md#containerContent) | **GET** /v1/containers/{containerId}/content/{contentletId} | 
[**containerContentByQueryParam**](DefaultApi.md#containerContentByQueryParam) | **GET** /v1/containers/content/{contentletId} | 
[**containerForm**](DefaultApi.md#containerForm) | **GET** /v1/containers/{containerId}/form/{formId} | 
[**containerFormByQueryParam**](DefaultApi.md#containerFormByQueryParam) | **GET** /v1/containers/form/{formId} | 
[**copy**](DefaultApi.md#copy) | **POST** /v1/containers/{id}/_copy | 
[**copy1**](DefaultApi.md#copy1) | **PUT** /v1/templates/{templateId}/_copy | 
[**copySite**](DefaultApi.md#copySite) | **PUT** /v1/site/_copy | 
[**copyTempFromUrl**](DefaultApi.md#copyTempFromUrl) | **POST** /v1/temp/byUrl | 
[**createApp**](DefaultApi.md#createApp) | **POST** /v1/apps | 
[**createAppSecrets**](DefaultApi.md#createAppSecrets) | **POST** /v1/apps/{key}/{siteId} | 
[**createContentPortlet**](DefaultApi.md#createContentPortlet) | **POST** /v1/portlet/custom | 
[**createContentTypeField**](DefaultApi.md#createContentTypeField) | **POST** /v1/contenttype/{typeId}/fields | 
[**createContentTypeField1**](DefaultApi.md#createContentTypeField1) | **POST** /v2/contenttype/{typeIdOrVarName}/fields | 
[**createFieldVariableByFieldId**](DefaultApi.md#createFieldVariableByFieldId) | **POST** /v1/contenttype/{typeId}/fields/id/{fieldId}/variables | 
[**createFieldVariableByFieldVar**](DefaultApi.md#createFieldVariableByFieldVar) | **POST** /v1/contenttype/{typeId}/fields/var/{fieldVar}/variables | 
[**createFolders**](DefaultApi.md#createFolders) | **POST** /v1/folder/createfolders/{siteName} | 
[**createIndex**](DefaultApi.md#createIndex) | **PUT** /v1/esindex/create/{params} | 
[**createNewSite**](DefaultApi.md#createNewSite) | **POST** /v1/site | 
[**currentSite**](DefaultApi.md#currentSite) | **GET** /v1/site/currentSite | 
[**deactivateIndex**](DefaultApi.md#deactivateIndex) | **PUT** /v1/esindex/deactivate/{params} | 
[**defaultSite**](DefaultApi.md#defaultSite) | **GET** /v1/site/defaultSite | 
[**delete1**](DefaultApi.md#delete1) | **DELETE** /v1/tags/{tagId} | 
[**delete10**](DefaultApi.md#delete10) | **DELETE** /vtl/{folder}/{pathParam} | 
[**delete2**](DefaultApi.md#delete2) | **DELETE** /v1/categories | 
[**delete3**](DefaultApi.md#delete3) | **DELETE** /v1/containers | 
[**delete5**](DefaultApi.md#delete5) | **PUT** /v1/notification/delete | 
[**delete6**](DefaultApi.md#delete6) | **DELETE** /v1/notification/id/{id} | 
[**delete7**](DefaultApi.md#delete7) | **DELETE** /v1/redis/{key} | 
[**delete8**](DefaultApi.md#delete8) | **DELETE** /v1/templates | 
[**delete9**](DefaultApi.md#delete9) | **DELETE** /vtl/{folder} | 
[**deleteAllAppSecrets**](DefaultApi.md#deleteAllAppSecrets) | **DELETE** /v1/apps/{key}/{siteId} | 
[**deleteApiToken**](DefaultApi.md#deleteApiToken) | **DELETE** /v1/apitoken/{tokenId} | 
[**deleteApp**](DefaultApi.md#deleteApp) | **DELETE** /v1/apps/{key} | 
[**deleteAssetsByIdentifiers**](DefaultApi.md#deleteAssetsByIdentifiers) | **DELETE** /v1/publishqueue | 
[**deleteContentTypeFieldById**](DefaultApi.md#deleteContentTypeFieldById) | **DELETE** /v1/contenttype/{typeId}/fields/id/{fieldId} | 
[**deleteContentTypeFieldById1**](DefaultApi.md#deleteContentTypeFieldById1) | **DELETE** /v2/contenttype/{typeIdOrVarName}/fields/id/{fieldId} | 
[**deleteContentTypeFieldByVar**](DefaultApi.md#deleteContentTypeFieldByVar) | **DELETE** /v1/contenttype/{typeId}/fields/var/{fieldVar} | 
[**deleteContentTypeFieldByVar1**](DefaultApi.md#deleteContentTypeFieldByVar1) | **DELETE** /v2/contenttype/{typeIdOrVarName}/fields/var/{fieldVar} | 
[**deleteCustomPortlet**](DefaultApi.md#deleteCustomPortlet) | **DELETE** /v1/portlet/custom/{portletId} | 
[**deleteEndpoint**](DefaultApi.md#deleteEndpoint) | **POST** /config/deleteEndpoint | 
[**deleteEnvironment**](DefaultApi.md#deleteEnvironment) | **POST** /config/deleteEnvironment | 
[**deleteFailedRecords**](DefaultApi.md#deleteFailedRecords) | **DELETE** /v1/esindex/failed | 
[**deleteFieldVariableByFieldId**](DefaultApi.md#deleteFieldVariableByFieldId) | **DELETE** /v1/contenttype/{typeId}/fields/id/{fieldId}/variables/id/{fieldVarId} | 
[**deleteFieldVariableByFieldVar**](DefaultApi.md#deleteFieldVariableByFieldVar) | **DELETE** /v1/contenttype/{typeId}/fields/var/{fieldVar}/variables/id/{fieldVarId} | 
[**deleteFields**](DefaultApi.md#deleteFields) | **DELETE** /v1/contenttype/{typeId}/fields | 
[**deleteFields1**](DefaultApi.md#deleteFields1) | **DELETE** /v2/contenttype/{typeIdOrVarName}/fields | 
[**deleteFields2**](DefaultApi.md#deleteFields2) | **DELETE** /v3/contenttype/{typeIdOrVarName}/fields | 
[**deleteFilter**](DefaultApi.md#deleteFilter) | **DELETE** /v1/pushpublish/filters/{filterKey} | 
[**deleteFolders**](DefaultApi.md#deleteFolders) | **DELETE** /v1/folder/{siteName} | 
[**deleteHash**](DefaultApi.md#deleteHash) | **DELETE** /v1/redis/hash/{key} | 
[**deleteIndex**](DefaultApi.md#deleteIndex) | **DELETE** /v1/esindex/{indexName} | 
[**deleteIndividualAppSecret**](DefaultApi.md#deleteIndividualAppSecret) | **DELETE** /v1/apps | 
[**deleteLanguage**](DefaultApi.md#deleteLanguage) | **DELETE** /v2/languages/{languageId} | 
[**deletePersonalPortlet**](DefaultApi.md#deletePersonalPortlet) | **DELETE** /v1/portlet/portletId/{portletId} | 
[**deletePortletForRole**](DefaultApi.md#deletePortletForRole) | **DELETE** /v1/portlet/portletId/{portletId}/roleId/{roleId} | 
[**deleteRoleLayouts**](DefaultApi.md#deleteRoleLayouts) | **DELETE** /v1/roles/layouts | 
[**deleteSite**](DefaultApi.md#deleteSite) | **DELETE** /v1/site/{siteId} | 
[**deleteTagInodesByInode**](DefaultApi.md#deleteTagInodesByInode) | **DELETE** /v1/tags/inode/{inode} | 
[**deleteToolGroupFromUser**](DefaultApi.md#deleteToolGroupFromUser) | **PUT** /v1/toolgroups/{layoutId}/_removefromuser | 
[**deleteVersion**](DefaultApi.md#deleteVersion) | **DELETE** /v1/versionables/{versionableInode} | 
[**discardConflicts**](DefaultApi.md#discardConflicts) | **GET** /integrity/discardconflicts/{params} | 
[**doLogin**](DefaultApi.md#doLogin) | **GET** /v1/dotsaml/login/{idpConfigId} | 
[**doesUserHaveAccessToPortlet**](DefaultApi.md#doesUserHaveAccessToPortlet) | **GET** /v1/portlet/{portletId}/_doesuserhaveaccess | 
[**downloadAssets**](DefaultApi.md#downloadAssets) | **GET** /v1/maintenance/_downloadAssets | 
[**downloadDb**](DefaultApi.md#downloadDb) | **GET** /v1/maintenance/_downloadDb | 
[**downloadLogFile**](DefaultApi.md#downloadLogFile) | **GET** /v1/maintenance/_downloadLog/{fileName} | 
[**downloadRemainingRecordsAsCsv**](DefaultApi.md#downloadRemainingRecordsAsCsv) | **GET** /v1/esindex/failed | 
[**downloadStarter**](DefaultApi.md#downloadStarter) | **GET** /v1/maintenance/_downloadStarter | 
[**downloadStarterWithAssets**](DefaultApi.md#downloadStarterWithAssets) | **GET** /v1/maintenance/_downloadStarterWithAssets | 
[**dynamicDelete**](DefaultApi.md#dynamicDelete) | **DELETE** /vtl/dynamic/{pathParam} | 
[**dynamicGet**](DefaultApi.md#dynamicGet) | **GET** /vtl/dynamic | 
[**dynamicGet1**](DefaultApi.md#dynamicGet1) | **GET** /vtl/dynamic/{pathParam} | 
[**dynamicPatch**](DefaultApi.md#dynamicPatch) | **PATCH** /vtl/dynamic/{pathParam} | 
[**dynamicPost**](DefaultApi.md#dynamicPost) | **POST** /vtl/dynamic | 
[**dynamicPost1**](DefaultApi.md#dynamicPost1) | **POST** /vtl/dynamic/{pathParam} | 
[**dynamicPut**](DefaultApi.md#dynamicPut) | **PUT** /vtl/dynamic | 
[**dynamicPut1**](DefaultApi.md#dynamicPut1) | **PUT** /vtl/dynamic/{pathParam} | 
[**echo**](DefaultApi.md#echo) | **GET** /v1/redis/echo/{message} | 
[**exportSecrets**](DefaultApi.md#exportSecrets) | **POST** /v1/apps/export | 
[**filter**](DefaultApi.md#filter) | **GET** /v1/users/filter | 
[**findAllSiteThumbnails**](DefaultApi.md#findAllSiteThumbnails) | **GET** /v1/site/thumbnails | 
[**findByInode**](DefaultApi.md#findByInode) | **GET** /v1/content/versions/{inode} | 
[**findFolderById**](DefaultApi.md#findFolderById) | **GET** /v1/folder/{folderId} | 
[**findHostByIdentifier**](DefaultApi.md#findHostByIdentifier) | **GET** /v1/site/{siteId} | 
[**findHostByName**](DefaultApi.md#findHostByName) | **POST** /v1/site/_byname | 
[**findPortlet**](DefaultApi.md#findPortlet) | **GET** /v1/portlet/{portletId} | 
[**findResourceLink**](DefaultApi.md#findResourceLink) | **GET** /v1/content/resourcelinks/field/{field} | 
[**findResourceLink1**](DefaultApi.md#findResourceLink1) | **GET** /v1/content/fileassets/{inode}/resourcelink | 
[**findResourceLinks**](DefaultApi.md#findResourceLinks) | **GET** /v1/content/resourcelinks | 
[**findRoleLayouts**](DefaultApi.md#findRoleLayouts) | **GET** /v1/roles/{roleId}/layouts | 
[**findSubFoldersByPath**](DefaultApi.md#findSubFoldersByPath) | **POST** /v1/folder/byPath | 
[**findTagsByInode**](DefaultApi.md#findTagsByInode) | **GET** /v1/tags/inode/{inode} | 
[**findThemeById**](DefaultApi.md#findThemeById) | **GET** /v1/themes/id/{id} | 
[**findThemes**](DefaultApi.md#findThemes) | **GET** /v1/themes | 
[**findVersionable**](DefaultApi.md#findVersionable) | **GET** /v1/versionables/{versionableInodeOrIdentifier} | 
[**findVersions**](DefaultApi.md#findVersions) | **GET** /v1/content/versions | 
[**fixConflicts**](DefaultApi.md#fixConflicts) | **GET** /integrity/fixconflicts/{params} | 
[**fixConflictsFromRemote**](DefaultApi.md#fixConflictsFromRemote) | **POST** /integrity/_fixconflictsfromremote | 
[**flushAll**](DefaultApi.md#flushAll) | **DELETE** /v1/caches/provider/{provider}/flush | 
[**flushGroup**](DefaultApi.md#flushGroup) | **DELETE** /v1/caches/provider/{provider}/flush/{group} | 
[**flushIndiciesCache**](DefaultApi.md#flushIndiciesCache) | **DELETE** /v1/esindex/cache | 
[**flushObject**](DefaultApi.md#flushObject) | **DELETE** /v1/caches/provider/{provider}/flush/{group}/{id} | 
[**forgotPassword**](DefaultApi.md#forgotPassword) | **POST** /v1/forgotpassword | 
[**freeLicense**](DefaultApi.md#freeLicense) | **POST** /license/free/{params} | 
[**generateIntegrityData**](DefaultApi.md#generateIntegrityData) | **POST** /integrity/_generateintegritydata | 
[**get**](DefaultApi.md#get) | **GET** /auditPublishing/get/{bundleId} | 
[**get2**](DefaultApi.md#get2) | **GET** /v1/redis/{key} | 
[**get3**](DefaultApi.md#get3) | **GET** /vtl/{folder} | 
[**get4**](DefaultApi.md#get4) | **GET** /vtl/{folder}/{pathParam} | 
[**get5**](DefaultApi.md#get5) | **GET** /v2/languages/id/{languageid} | 
[**getActive**](DefaultApi.md#getActive) | **GET** /v1/esindex/active/{params} | 
[**getAll**](DefaultApi.md#getAll) | **GET** /license/all/{params} | 
[**getAllMessages**](DefaultApi.md#getAllMessages) | **GET** /v2/languages/{language}/keys | 
[**getApiToken**](DefaultApi.md#getApiToken) | **POST** /v1/authentication/api-token | 
[**getApiTokens**](DefaultApi.md#getApiTokens) | **GET** /v1/apitoken/{userId}/tokens | 
[**getAppByKey**](DefaultApi.md#getAppByKey) | **GET** /v1/apps/{key} | 
[**getAppDetail**](DefaultApi.md#getAppDetail) | **GET** /v1/apps/{key}/{siteId} | 
[**getByContentlet**](DefaultApi.md#getByContentlet) | **GET** /v1/permissions/_bycontent | Get permission for a Contentlet
[**getCardinality**](DefaultApi.md#getCardinality) | **GET** /v1/relationships/cardinalities | 
[**getCategories**](DefaultApi.md#getCategories) | **GET** /v1/categories | 
[**getCategoryByIdOrKey**](DefaultApi.md#getCategoryByIdOrKey) | **GET** /v1/categories/{idOrKey} | 
[**getChildren**](DefaultApi.md#getChildren) | **GET** /v1/categories/children | 
[**getClusterStats**](DefaultApi.md#getClusterStats) | **GET** /v1/esindex/cluster | 
[**getConfigVariables**](DefaultApi.md#getConfigVariables) | **GET** /v1/configuration/config | 
[**getContainers**](DefaultApi.md#getContainers) | **GET** /v1/containers | 
[**getContent1**](DefaultApi.md#getContent1) | **GET** /v1/contentrelationships/{params} | 
[**getContent2**](DefaultApi.md#getContent2) | **GET** /v1/content/{inodeOrIdentifier} | 
[**getContentTypeFieldById**](DefaultApi.md#getContentTypeFieldById) | **GET** /v1/contenttype/{typeId}/fields/id/{fieldId} | 
[**getContentTypeFieldById1**](DefaultApi.md#getContentTypeFieldById1) | **GET** /v2/contenttype/{typeIdOrVarName}/fields/id/{fieldId} | 
[**getContentTypeFieldByVar**](DefaultApi.md#getContentTypeFieldByVar) | **GET** /v1/contenttype/{typeId}/fields/var/{fieldVar} | 
[**getContentTypeFieldByVar1**](DefaultApi.md#getContentTypeFieldByVar1) | **GET** /v2/contenttype/{typeIdOrVarName}/fields/var/{fieldVar} | 
[**getContentTypeFields**](DefaultApi.md#getContentTypeFields) | **GET** /v1/contenttype/{typeId}/fields | 
[**getContentTypeFields1**](DefaultApi.md#getContentTypeFields1) | **GET** /v2/contenttype/{typeIdOrVarName}/fields | 
[**getContentTypeFields2**](DefaultApi.md#getContentTypeFields2) | **GET** /v3/contenttype/{typeIdOrVarName}/fields | 
[**getCreateContentURL**](DefaultApi.md#getCreateContentURL) | **GET** /v1/portlet/_actionurl/{contentTypeVariable} | 
[**getDocumentCount**](DefaultApi.md#getDocumentCount) | **GET** /testResource/testGet/{params} | 
[**getESConfigProperties**](DefaultApi.md#getESConfigProperties) | **GET** /cluster/getESConfigProperties/{params} | 
[**getEvents**](DefaultApi.md#getEvents) | **GET** /ws/v1/system/events | 
[**getExternalGrammar**](DefaultApi.md#getExternalGrammar) | **GET** /application.wadl/{path} | 
[**getFieldTypes**](DefaultApi.md#getFieldTypes) | **GET** /v1/fieldTypes | 
[**getFieldVariableByFieldId**](DefaultApi.md#getFieldVariableByFieldId) | **GET** /v1/contenttype/{typeId}/fields/id/{fieldId}/variables/id/{fieldVarId} | 
[**getFieldVariableByFieldVar**](DefaultApi.md#getFieldVariableByFieldVar) | **GET** /v1/contenttype/{typeId}/fields/var/{fieldVar}/variables/id/{fieldVarId} | 
[**getFieldVariablesByFieldId**](DefaultApi.md#getFieldVariablesByFieldId) | **GET** /v1/contenttype/{typeId}/fields/id/{fieldId}/variables | 
[**getFieldVariablesByFieldVar**](DefaultApi.md#getFieldVariablesByFieldVar) | **GET** /v1/contenttype/{typeId}/fields/var/{fieldVar}/variables | 
[**getFilter**](DefaultApi.md#getFilter) | **GET** /v1/pushpublish/filters/{filterKey} | 
[**getFilters**](DefaultApi.md#getFilters) | **GET** /v1/pushpublish/filters | 
[**getFolderContent**](DefaultApi.md#getFolderContent) | **POST** /v1/browser | 
[**getFromLanguageTag**](DefaultApi.md#getFromLanguageTag) | **GET** /v2/languages/{languageTag} | 
[**getHash**](DefaultApi.md#getHash) | **GET** /v1/redis/hash/{key} | 
[**getIncrement**](DefaultApi.md#getIncrement) | **GET** /v1/redis/incr/{key} | 
[**getIndexStatus**](DefaultApi.md#getIndexStatus) | **GET** /v1/esindex | 
[**getInstalledBundles**](DefaultApi.md#getInstalledBundles) | **GET** /osgi/getInstalledBundles/{params} | 
[**getIntegrityData**](DefaultApi.md#getIntegrityData) | **GET** /integrity/{requestId}/integrityData | 
[**getIntegrityResult**](DefaultApi.md#getIntegrityResult) | **GET** /integrity/getIntegrityResult/{params} | 
[**getJvmInfo**](DefaultApi.md#getJvmInfo) | **GET** /v1/jvm | 
[**getJwtFromApiToken**](DefaultApi.md#getJwtFromApiToken) | **GET** /v1/apitoken/{tokenId}/jwt | 
[**getKeys**](DefaultApi.md#getKeys) | **GET** /v1/caches/provider/{provider}/keys/{group} | 
[**getLayout**](DefaultApi.md#getLayout) | **GET** /portlet/layout/{params} | 
[**getLayout1**](DefaultApi.md#getLayout1) | **GET** /restexample/layout/{params} | 
[**getLayout2**](DefaultApi.md#getLayout2) | **GET** /rulesengine/layout/{params} | 
[**getLayout3**](DefaultApi.md#getLayout3) | **GET** /es/layout/{params} | 
[**getLayout4**](DefaultApi.md#getLayout4) | **GET** /personas/layout/{params} | 
[**getLicenseRepoStatus**](DefaultApi.md#getLicenseRepoStatus) | **GET** /cluster/licenseRepoStatus | 
[**getLiveById**](DefaultApi.md#getLiveById) | **GET** /v1/containers/live | 
[**getLiveById1**](DefaultApi.md#getLiveById1) | **GET** /v1/templates/{templateId}/live | 
[**getLoggedInUser**](DefaultApi.md#getLoggedInUser) | **GET** /user/getloggedinuser/{params} | 
[**getLoggedInUser1**](DefaultApi.md#getLoggedInUser1) | **GET** /util/encodeQueryParamValue/{params} | 
[**getLogger**](DefaultApi.md#getLogger) | **GET** /v1/logger/{loggerName} | 
[**getLoggers**](DefaultApi.md#getLoggers) | **GET** /v1/logger | 
[**getLoginUser**](DefaultApi.md#getLoginUser) | **GET** /v1/authentication/logInUser | 
[**getMenus**](DefaultApi.md#getMenus) | **GET** /v1/menu | 
[**getMessages**](DefaultApi.md#getMessages) | **POST** /v1/languages/i18n | 
[**getMessages1**](DefaultApi.md#getMessages1) | **POST** /v2/languages/i18n | 
[**getNewNotificationsCount**](DefaultApi.md#getNewNotificationsCount) | **GET** /v1/notification/getNewNotificationsCount | 
[**getNodesInfo**](DefaultApi.md#getNodesInfo) | **GET** /cluster/getNodesStatus/{params} | 
[**getNotifications**](DefaultApi.md#getNotifications) | **GET** /v1/notification/getNotifications/{params} | 
[**getOneSidedRelationships**](DefaultApi.md#getOneSidedRelationships) | **GET** /v1/relationships | 
[**getPermissionsByPermissionType**](DefaultApi.md#getPermissionsByPermissionType) | **GET** /v1/permissions/_bypermissiontype | 
[**getReindexationProgress**](DefaultApi.md#getReindexationProgress) | **GET** /v1/esindex/reindex | 
[**getRemoteToken**](DefaultApi.md#getRemoteToken) | **PUT** /v1/apitoken/remote | 
[**getSelectFolder**](DefaultApi.md#getSelectFolder) | **GET** /v1/browser/selectedfolder | 
[**getSiteSetupProgress**](DefaultApi.md#getSiteSetupProgress) | **GET** /v1/site/{siteId}/setup_progress | 
[**getSiteVariables**](DefaultApi.md#getSiteVariables) | **GET** /v1/site/variable/{siteId} | Retrieve the Site Variables for a site
[**getStructuresWithWYSIWYGFields**](DefaultApi.md#getStructuresWithWYSIWYGFields) | **GET** /structure/{path} | 
[**getSuccessCallbackFunction**](DefaultApi.md#getSuccessCallbackFunction) | **GET** /v1/form/{idOrVar}/successCallback | 
[**getSyncEvents**](DefaultApi.md#getSyncEvents) | **GET** /ws/v1/system/syncevents | 
[**getTagsByNameOrId**](DefaultApi.md#getTagsByNameOrId) | **GET** /v1/tags/{nameOrId} | 
[**getTagsByUserId**](DefaultApi.md#getTagsByUserId) | **GET** /v1/tags/user/{userId} | 
[**getWadl**](DefaultApi.md#getWadl) | **GET** /application.wadl | 
[**getWidget**](DefaultApi.md#getWidget) | **GET** /widget/{params} | 
[**getWorkingById**](DefaultApi.md#getWorkingById) | **GET** /v1/containers/working | 
[**getWorkingById1**](DefaultApi.md#getWorkingById1) | **GET** /v1/templates/{templateId}/working | 
[**importCategories**](DefaultApi.md#importCategories) | **POST** /v1/categories/_import | 
[**importSecrets**](DefaultApi.md#importSecrets) | **POST** /v1/apps/import | 
[**importTags**](DefaultApi.md#importTags) | **POST** /v1/tags/import | 
[**incrementAsync**](DefaultApi.md#incrementAsync) | **PUT** /v1/redis/incr/{key} | 
[**indexList**](DefaultApi.md#indexList) | **GET** /v1/esindex/indexlist/{params} | 
[**isPgDumpAvailable**](DefaultApi.md#isPgDumpAvailable) | **GET** /v1/maintenance/_pgDumpAvailable | 
[**issueApiToken**](DefaultApi.md#issueApiToken) | **POST** /v1/apitoken | 
[**layoutGet**](DefaultApi.md#layoutGet) | **GET** /portlet/{params} | 
[**layoutPost**](DefaultApi.md#layoutPost) | **POST** /portlet/{params} | 
[**linkTagsAndInode**](DefaultApi.md#linkTagsAndInode) | **PUT** /v1/tags/tag/{nameOrId}/inode/{inode} | 
[**list**](DefaultApi.md#list) | **GET** /v1/tags | 
[**list10**](DefaultApi.md#list10) | **GET** /v1/system/ruleengine/actionlets | 
[**list11**](DefaultApi.md#list11) | **GET** /v1/system/ruleengine/conditionlets | 
[**list12**](DefaultApi.md#list12) | **GET** /v1/templates | 
[**list13**](DefaultApi.md#list13) | **GET** /v2/languages | 
[**list14**](DefaultApi.md#list14) | **GET** /personas/sites/{id} | 
[**list2**](DefaultApi.md#list2) | **GET** /v1/languages | 
[**list3**](DefaultApi.md#list3) | **GET** /v1/personas | 
[**list4**](DefaultApi.md#list4) | **GET** /v1/sites/{siteId}/ruleengine/rules | 
[**list5**](DefaultApi.md#list5) | **GET** /v1/sites/{siteId}/ruleengine/rules/{ruleId}/conditionGroups | 
[**list6**](DefaultApi.md#list6) | **GET** /v1/sites/{siteId}/ruleengine/conditions/{conditionId}/conditionValues | 
[**list7**](DefaultApi.md#list7) | **GET** /v1/appconfiguration | 
[**list8**](DefaultApi.md#list8) | **GET** /v1/configuration | 
[**list9**](DefaultApi.md#list9) | **GET** /v1/system/i18n/{lang}/{rsrc} | 
[**listAvailableApps**](DefaultApi.md#listAvailableApps) | **GET** /v1/apps | 
[**loadAssetsUnder**](DefaultApi.md#loadAssetsUnder) | **GET** /v1/browsertree/sitename/{sitename}/uri | 
[**loadAssetsUnder1**](DefaultApi.md#loadAssetsUnder1) | **GET** /v1/browsertree/sitename/{sitename}/uri/{uri} | 
[**loadById**](DefaultApi.md#loadById) | **GET** /role/loadbyid/{params} | 
[**loadByName**](DefaultApi.md#loadByName) | **GET** /role/loadbyname/{params} | 
[**loadChildren**](DefaultApi.md#loadChildren) | **GET** /role/loadchildren/{params} | 
[**loadEnvironments**](DefaultApi.md#loadEnvironments) | **GET** /environment/loadenvironments/{params} | 
[**loadFolderAndSubFoldersByPath**](DefaultApi.md#loadFolderAndSubFoldersByPath) | **GET** /v1/folder/siteId/{siteId}/path/{path} | 
[**loadFolderByURI**](DefaultApi.md#loadFolderByURI) | **GET** /v1/folder/sitename/{siteName}/uri/{uri} | 
[**loadJson**](DefaultApi.md#loadJson) | **GET** /restexample/test/{params} | 
[**loadRoleByRoleId**](DefaultApi.md#loadRoleByRoleId) | **GET** /v1/roles/{roleid} | 
[**loadRootRoles**](DefaultApi.md#loadRootRoles) | **GET** /v1/roles | 
[**loadUsersAndRolesByRoleId**](DefaultApi.md#loadUsersAndRolesByRoleId) | **GET** /v1/roles/{roleid}/rolehierarchyanduserroles | 
[**loginAs**](DefaultApi.md#loginAs) | **POST** /v1/users/loginas | 
[**loginAsData**](DefaultApi.md#loginAsData) | **GET** /v1/users/loginAsData | 
[**loginForm**](DefaultApi.md#loginForm) | **POST** /v1/loginform | 
[**logout**](DefaultApi.md#logout) | **GET** /v1/logout | 
[**logoutAs**](DefaultApi.md#logoutAs) | **PUT** /v1/users/logoutas | 
[**logoutGet**](DefaultApi.md#logoutGet) | **GET** /v1/dotsaml/logout/{idpConfigId} | 
[**logoutPost**](DefaultApi.md#logoutPost) | **POST** /v1/dotsaml/logout/{idpConfigId} | 
[**makeDefault**](DefaultApi.md#makeDefault) | **PUT** /v1/site/{siteId}/_makedefault | 
[**makeDefault1**](DefaultApi.md#makeDefault1) | **PUT** /v2/languages/{language}/_makedefault | 
[**markAsRead**](DefaultApi.md#markAsRead) | **PUT** /v1/notification/markAsRead | 
[**metadata**](DefaultApi.md#metadata) | **GET** /v1/dotsaml/metadata/{idpConfigId} | 
[**modIndex**](DefaultApi.md#modIndex) | **PUT** /v1/esindex/{indexName} | 
[**moveFields**](DefaultApi.md#moveFields) | **PUT** /v3/contenttype/{typeIdOrVarName}/fields/move | 
[**openIndex**](DefaultApi.md#openIndex) | **PUT** /v1/esindex/open/{params} | 
[**optimizeIndices**](DefaultApi.md#optimizeIndices) | **POST** /v1/esindex/optimize | 
[**patchMultipart**](DefaultApi.md#patchMultipart) | **PATCH** /vtl/{folder} | 
[**patchMultipart1**](DefaultApi.md#patchMultipart1) | **PATCH** /vtl/{folder}/{pathParam} | 
[**personalizePageContainers**](DefaultApi.md#personalizePageContainers) | **POST** /v1/personalization/pagepersonas | 
[**personalizePageContainers1**](DefaultApi.md#personalizePageContainers1) | **DELETE** /v1/personalization/pagepersonas/page/{pageId}/personalization/{personalization} | 
[**pickLicense**](DefaultApi.md#pickLicense) | **POST** /license/pick/{params} | 
[**ping**](DefaultApi.md#ping) | **GET** /v1/redis/ping | 
[**postMultipart**](DefaultApi.md#postMultipart) | **POST** /vtl/{folder} | 
[**postMultipart1**](DefaultApi.md#postMultipart1) | **POST** /vtl/{folder}/{pathParam} | 
[**processBundle**](DefaultApi.md#processBundle) | **GET** /osgi/_processExports/{bundle} | 
[**processLogin**](DefaultApi.md#processLogin) | **POST** /v1/dotsaml/login/{idpConfigId} | 
[**publish**](DefaultApi.md#publish) | **POST** /bundlePublisher/publish | 
[**publish1**](DefaultApi.md#publish1) | **PUT** /v1/containers/_publish | 
[**publish2**](DefaultApi.md#publish2) | **PUT** /v1/templates/_publish | 
[**publishSite**](DefaultApi.md#publishSite) | **PUT** /v1/site/{siteId}/_publish | 
[**pullRelated**](DefaultApi.md#pullRelated) | **POST** /v1/content/related | Pull Related Content
[**putMultipart**](DefaultApi.md#putMultipart) | **PUT** /vtl/{folder} | 
[**putMultipart1**](DefaultApi.md#putMultipart1) | **PUT** /vtl/{folder}/{pathParam} | 
[**putZipFile**](DefaultApi.md#putZipFile) | **POST** /license/upload/{params} | 
[**regenerateKey**](DefaultApi.md#regenerateKey) | **POST** /config/regenerateKey | 
[**remove**](DefaultApi.md#remove) | **DELETE** /v1/sites/{siteId}/ruleengine/rules/{ruleId} | 
[**remove1**](DefaultApi.md#remove1) | **DELETE** /v1/sites/{siteId}/ruleengine/actions/{actionId} | 
[**remove2**](DefaultApi.md#remove2) | **DELETE** /v1/sites/{siteId}/ruleengine/rules/{ruleId}/conditionGroups/{conditionGroupId} | 
[**remove3**](DefaultApi.md#remove3) | **DELETE** /v1/sites/{siteId}/ruleengine/conditions/{conditionId} | 
[**remove4**](DefaultApi.md#remove4) | **DELETE** /v1/sites/{siteId}/ruleengine/conditions/{conditionId}/conditionValues/{valueId} | 
[**removeContentletFromContainer**](DefaultApi.md#removeContentletFromContainer) | **DELETE** /v1/containers/delete/{containerId}/content/{contentletId}/uid/{uid} | 
[**removeFromCluster**](DefaultApi.md#removeFromCluster) | **POST** /cluster/remove/{params} | 
[**requestLicense**](DefaultApi.md#requestLicense) | **POST** /license/requestCode/{params} | 
[**resetLicense**](DefaultApi.md#resetLicense) | **POST** /license/resetLicense/{params} | 
[**resetPassword**](DefaultApi.md#resetPassword) | **POST** /v1/changePassword | 
[**revokeApiToken**](DefaultApi.md#revokeApiToken) | **PUT** /v1/apitoken/{tokenId}/revoke | 
[**revokeUserToken**](DefaultApi.md#revokeUserToken) | **PUT** /v1/apitoken/users/{userid}/revoke | 
[**revokeUsersToken**](DefaultApi.md#revokeUsersToken) | **PUT** /v1/apitoken/users/revoke | 
[**save**](DefaultApi.md#save) | **PUT** /v1/categories/_sort | 
[**save1**](DefaultApi.md#save1) | **PUT** /v1/categories | 
[**save2**](DefaultApi.md#save2) | **PUT** /v1/templates | 
[**saveAndPublish**](DefaultApi.md#saveAndPublish) | **PUT** /v1/templates/_savepublish | 
[**saveCompanyAuthTypeInfo**](DefaultApi.md#saveCompanyAuthTypeInfo) | **POST** /config/saveCompanyAuthTypeInfo | 
[**saveCompanyBasicInfo**](DefaultApi.md#saveCompanyBasicInfo) | **POST** /config/saveCompanyBasicInfo | 
[**saveCompanyLocaleInfo**](DefaultApi.md#saveCompanyLocaleInfo) | **POST** /config/saveCompanyLocaleInfo | 
[**saveCompanyLogo**](DefaultApi.md#saveCompanyLogo) | **POST** /config/saveCompanyLogo | 
[**saveDraft**](DefaultApi.md#saveDraft) | **PUT** /v1/templates/draft | 
[**saveFromForm**](DefaultApi.md#saveFromForm) | **POST** /v1/pushpublish/filters | 
[**saveFromLanguageTag**](DefaultApi.md#saveFromLanguageTag) | **POST** /v2/languages/{languageTag} | 
[**saveLanguage**](DefaultApi.md#saveLanguage) | **POST** /v2/languages | 
[**saveNew**](DefaultApi.md#saveNew) | **POST** /v1/categories | 
[**saveNew1**](DefaultApi.md#saveNew1) | **POST** /v1/containers | 
[**saveNew2**](DefaultApi.md#saveNew2) | **POST** /v1/templates | 
[**saveRoleLayouts**](DefaultApi.md#saveRoleLayouts) | **POST** /v1/roles/layouts | 
[**saveSiteVariable**](DefaultApi.md#saveSiteVariable) | **PUT** /v1/site/variable | Save a Site Variable
[**saveTest**](DefaultApi.md#saveTest) | **POST** /testResource/testPost | 
[**search1**](DefaultApi.md#search1) | **GET** /es/search | 
[**searchPost**](DefaultApi.md#searchPost) | **POST** /es/search | 
[**searchRaw**](DefaultApi.md#searchRaw) | **POST** /es/raw | 
[**searchRawGet**](DefaultApi.md#searchRawGet) | **GET** /es/raw | 
[**searchRoles**](DefaultApi.md#searchRoles) | **GET** /v1/roles/_search | Search Roles
[**selectFolder**](DefaultApi.md#selectFolder) | **PUT** /v1/browser/selectedfolder | 
[**selectFolder1**](DefaultApi.md#selectFolder1) | **PUT** /v1/folder/{id}/file-browser-selected | 
[**self**](DefaultApi.md#self) | **GET** /v1/personas/{id} | 
[**self1**](DefaultApi.md#self1) | **GET** /v1/sites/{siteId}/ruleengine/rules/{ruleId} | 
[**self2**](DefaultApi.md#self2) | **GET** /v1/sites/{siteId}/ruleengine/actions/{actionId} | 
[**self3**](DefaultApi.md#self3) | **GET** /v1/sites/{siteId}/ruleengine/rules/{ruleId}/conditionGroups/{groupId} | 
[**self4**](DefaultApi.md#self4) | **GET** /v1/sites/{siteId}/ruleengine/conditions/{conditionId} | 
[**self5**](DefaultApi.md#self5) | **GET** /v1/sites/{siteId}/ruleengine/conditions/{conditionId}/conditionValues/{valueId} | 
[**self6**](DefaultApi.md#self6) | **GET** /v1/users/current | 
[**set**](DefaultApi.md#set) | **PUT** /v1/configuration | 
[**set1**](DefaultApi.md#set1) | **PUT** /v1/redis | 
[**setHash**](DefaultApi.md#setHash) | **PUT** /v1/redis/hash | 
[**showObject**](DefaultApi.md#showObject) | **GET** /v1/caches/provider/{provider}/object/{group}/{id} | 
[**showObjects**](DefaultApi.md#showObjects) | **GET** /v1/caches/provider/{provider}/objects/{group} | 
[**showProviders**](DefaultApi.md#showProviders) | **GET** /v1/caches/providers/{group} | 
[**showProviders1**](DefaultApi.md#showProviders1) | **GET** /v1/caches/provider/{provider}/{group} | 
[**shutdown**](DefaultApi.md#shutdown) | **DELETE** /v1/maintenance/_shutdown | 
[**sites**](DefaultApi.md#sites) | **GET** /v1/site | 
[**startReindex**](DefaultApi.md#startReindex) | **POST** /v1/esindex/reindex | 
[**statusCheck**](DefaultApi.md#statusCheck) | **GET** /v1/system-status | 
[**stopReindexation**](DefaultApi.md#stopReindexation) | **DELETE** /v1/esindex/reindex | 
[**switchSite**](DefaultApi.md#switchSite) | **PUT** /v1/site/switch | 
[**switchSite1**](DefaultApi.md#switchSite1) | **PUT** /v1/site/switch/{id} | 
[**testCluster**](DefaultApi.md#testCluster) | **GET** /cluster/test | 
[**unarchive**](DefaultApi.md#unarchive) | **PUT** /v1/containers/_unarchive | 
[**unarchive1**](DefaultApi.md#unarchive1) | **PUT** /v1/templates/_unarchive | 
[**unarchiveSite**](DefaultApi.md#unarchiveSite) | **PUT** /v1/site/{siteId}/_unarchive | 
[**unpublish**](DefaultApi.md#unpublish) | **PUT** /v1/containers/_unpublish | 
[**unpublish1**](DefaultApi.md#unpublish1) | **PUT** /v1/templates/_unpublish | 
[**unpublishSite**](DefaultApi.md#unpublishSite) | **PUT** /v1/site/{siteId}/_unpublish | 
[**update**](DefaultApi.md#update) | **PUT** /v1/containers | 
[**update2**](DefaultApi.md#update2) | **PUT** /v1/sites/{siteId}/ruleengine/rules/{ruleId} | 
[**update3**](DefaultApi.md#update3) | **PUT** /v1/sites/{siteId}/ruleengine/actions/{actionId} | 
[**update4**](DefaultApi.md#update4) | **PUT** /v1/sites/{siteId}/ruleengine/rules/{ruleId}/conditionGroups/{groupId} | 
[**update5**](DefaultApi.md#update5) | **PUT** /v1/sites/{siteId}/ruleengine/conditions/{conditionId} | 
[**update6**](DefaultApi.md#update6) | **PUT** /v1/sites/{siteId}/ruleengine/conditions/{conditionId}/conditionValues/{valueId} | 
[**update7**](DefaultApi.md#update7) | **PUT** /v1/users/current | 
[**updateAppIndividualSecret**](DefaultApi.md#updateAppIndividualSecret) | **PUT** /v1/apps/{key}/{siteId} | 
[**updateBundles**](DefaultApi.md#updateBundles) | **POST** /osgi | 
[**updateContentTypeFieldById**](DefaultApi.md#updateContentTypeFieldById) | **PUT** /v1/contenttype/{typeId}/fields/id/{fieldId} | 
[**updateContentTypeFieldById1**](DefaultApi.md#updateContentTypeFieldById1) | **PUT** /v2/contenttype/{typeIdOrVarName}/fields/id/{fieldId} | 
[**updateContentTypeFieldByVar**](DefaultApi.md#updateContentTypeFieldByVar) | **PUT** /v1/contenttype/{typeId}/fields/var/{fieldVar} | 
[**updateContentTypeFieldByVar1**](DefaultApi.md#updateContentTypeFieldByVar1) | **PUT** /v2/contenttype/{typeIdOrVarName}/fields/var/{fieldVar} | 
[**updateField**](DefaultApi.md#updateField) | **PUT** /v3/contenttype/{typeIdOrVarName}/fields/{id} | 
[**updateFieldVariableByFieldId**](DefaultApi.md#updateFieldVariableByFieldId) | **PUT** /v1/contenttype/{typeId}/fields/id/{fieldId}/variables/id/{fieldVarId} | 
[**updateFieldVariableByFieldVar**](DefaultApi.md#updateFieldVariableByFieldVar) | **PUT** /v1/contenttype/{typeId}/fields/var/{fieldVar}/variables/id/{fieldVarId} | 
[**updateFields**](DefaultApi.md#updateFields) | **PUT** /v1/contenttype/{typeId}/fields | 
[**updateFields1**](DefaultApi.md#updateFields1) | **PUT** /v2/contenttype/{typeIdOrVarName}/fields | 
[**updateFromForm**](DefaultApi.md#updateFromForm) | **PUT** /v1/pushpublish/filters | 
[**updateLanguage**](DefaultApi.md#updateLanguage) | **PUT** /v2/languages/{languageId} | 
[**updateSite**](DefaultApi.md#updateSite) | **PUT** /v1/site | 
[**updateTag**](DefaultApi.md#updateTag) | **PUT** /v1/tags | 
[**upgrade**](DefaultApi.md#upgrade) | **POST** /v1/upgradetask | 
[**uploadTempResourceMulti**](DefaultApi.md#uploadTempResourceMulti) | **POST** /v1/temp | 
[**userHasLayout**](DefaultApi.md#userHasLayout) | **GET** /v1/toolgroups/{layoutId}/_userHasLayout | 
[**validateEmail**](DefaultApi.md#validateEmail) | **POST** /v1/configuration/_validateCompanyEmail | 



## activateIndex

> activateIndex(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.activateIndex(params, (error, data, response) => {
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
- **Accept**: */*


## add

> add(siteId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
let opts = {
  'restRule': new DotCmsRestApi.RestRule() // RestRule | 
};
apiInstance.add(siteId, opts, (error, data, response) => {
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
 **siteId** | **String**|  | 
 **restRule** | [**RestRule**](RestRule.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript


## add1

> add1(siteId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
let opts = {
  'restRuleAction': new DotCmsRestApi.RestRuleAction() // RestRuleAction | 
};
apiInstance.add1(siteId, opts, (error, data, response) => {
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
 **siteId** | **String**|  | 
 **restRuleAction** | [**RestRuleAction**](RestRuleAction.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## add2

> add2(siteId, ruleId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
let ruleId = "ruleId_example"; // String | 
let opts = {
  'restConditionGroup': new DotCmsRestApi.RestConditionGroup() // RestConditionGroup | 
};
apiInstance.add2(siteId, ruleId, opts, (error, data, response) => {
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
 **siteId** | **String**|  | 
 **ruleId** | **String**|  | 
 **restConditionGroup** | [**RestConditionGroup**](RestConditionGroup.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## add3

> add3(siteId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
let opts = {
  'restCondition': new DotCmsRestApi.RestCondition() // RestCondition | 
};
apiInstance.add3(siteId, opts, (error, data, response) => {
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
 **siteId** | **String**|  | 
 **restCondition** | [**RestCondition**](RestCondition.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## add4

> add4(siteId, conditionId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
let conditionId = "conditionId_example"; // String | 
let opts = {
  'restConditionValue': new DotCmsRestApi.RestConditionValue() // RestConditionValue | 
};
apiInstance.add4(siteId, conditionId, opts, (error, data, response) => {
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
 **siteId** | **String**|  | 
 **conditionId** | **String**|  | 
 **restConditionValue** | [**RestConditionValue**](RestConditionValue.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addContentPortletToLayout

> addContentPortletToLayout(portletId, layoutId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let portletId = "portletId_example"; // String | 
let layoutId = "layoutId_example"; // String | 
apiInstance.addContentPortletToLayout(portletId, layoutId, (error, data, response) => {
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
 **portletId** | **String**|  | 
 **layoutId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## addTag

> addTag(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'tagForm': new DotCmsRestApi.TagForm() // TagForm | 
};
apiInstance.addTag(opts, (error, data, response) => {
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
 **tagForm** | [**TagForm**](TagForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## addToolGroupToUser

> addToolGroupToUser(layoutId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let layoutId = "layoutId_example"; // String | 
let opts = {
  'userid': "userid_example" // String | 
};
apiInstance.addToolGroupToUser(layoutId, opts, (error, data, response) => {
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
 **layoutId** | **String**|  | 
 **userid** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## aliveCheck

> aliveCheck()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.aliveCheck((error, data, response) => {
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
- **Accept**: */*


## applyLicense

> applyLicense(params, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
let opts = {
  'licenseText': "licenseText_example" // String | 
};
apiInstance.applyLicense(params, opts, (error, data, response) => {
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
 **licenseText** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## archive

> archive(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'containerId': "containerId_example" // String | 
};
apiInstance.archive(opts, (error, data, response) => {
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
 **containerId** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## archive2

> archive2(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'requestBody': ["null"] // [String] | 
};
apiInstance.archive2(opts, (error, data, response) => {
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
 **requestBody** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## archiveSite

> archiveSite(siteId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
apiInstance.archiveSite(siteId, (error, data, response) => {
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
 **siteId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## authentication

> authentication(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'authenticationForm': new DotCmsRestApi.AuthenticationForm() // AuthenticationForm | 
};
apiInstance.authentication(opts, (error, data, response) => {
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
 **authenticationForm** | [**AuthenticationForm**](AuthenticationForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## bringBack

> bringBack(versionableInode)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let versionableInode = "versionableInode_example"; // String | 
apiInstance.bringBack(versionableInode, (error, data, response) => {
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
 **versionableInode** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## bulkArchive

> bulkArchive(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'requestBody': ["null"] // [String] | 
};
apiInstance.bulkArchive(opts, (error, data, response) => {
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
 **requestBody** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## bulkDelete

> bulkDelete(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'requestBody': ["null"] // [String] | 
};
apiInstance.bulkDelete(opts, (error, data, response) => {
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
 **requestBody** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## bulkPublish

> bulkPublish(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'requestBody': ["null"] // [String] | 
};
apiInstance.bulkPublish(opts, (error, data, response) => {
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
 **requestBody** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## bulkUnarchive

> bulkUnarchive(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'requestBody': ["null"] // [String] | 
};
apiInstance.bulkUnarchive(opts, (error, data, response) => {
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
 **requestBody** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## bulkUnpublish

> bulkUnpublish(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'requestBody': ["null"] // [String] | 
};
apiInstance.bulkUnpublish(opts, (error, data, response) => {
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
 **requestBody** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## callDelete

> callDelete(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.callDelete(params, (error, data, response) => {
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
- **Accept**: */*


## callExport

> callExport(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'contextInode': "contextInode_example", // String | 
  'filter': "filter_example" // String | 
};
apiInstance.callExport(opts, (error, data, response) => {
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
 **contextInode** | **String**|  | [optional] 
 **filter** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv


## canLockContent1

> canLockContent1(inodeOrIdentifier, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let inodeOrIdentifier = "inodeOrIdentifier_example"; // String | 
let opts = {
  'language': "'-1'" // String | 
};
apiInstance.canLockContent1(inodeOrIdentifier, opts, (error, data, response) => {
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
 **inodeOrIdentifier** | **String**|  | 
 **language** | **String**|  | [optional] [default to &#39;-1&#39;]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## changeLoggerLevel

> changeLoggerLevel(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'changeLoggerForm': new DotCmsRestApi.ChangeLoggerForm() // ChangeLoggerForm | 
};
apiInstance.changeLoggerLevel(opts, (error, data, response) => {
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
 **changeLoggerForm** | [**ChangeLoggerForm**](ChangeLoggerForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## checkIntegrity

> checkIntegrity(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.checkIntegrity(params, (error, data, response) => {
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


## checkIntegrityProcessStatus

> checkIntegrityProcessStatus(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.checkIntegrityProcessStatus(params, (error, data, response) => {
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


## checkRoles

> checkRoles(userId, roleIds)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let userId = "userId_example"; // String | 
let roleIds = "roleIds_example"; // String | 
apiInstance.checkRoles(userId, roleIds, (error, data, response) => {
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
 **userId** | **String**|  | 
 **roleIds** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clearIndex

> clearIndex(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.clearIndex(params, (error, data, response) => {
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
- **Accept**: */*


## closeIndex

> closeIndex(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.closeIndex(params, (error, data, response) => {
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
- **Accept**: */*


## containerContent

> containerContent(containerId, contentletId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let containerId = "containerId_example"; // String | 
let contentletId = "contentletId_example"; // String | 
let opts = {
  'pageInode': "pageInode_example" // String | 
};
apiInstance.containerContent(containerId, contentletId, opts, (error, data, response) => {
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
 **containerId** | **String**|  | 
 **contentletId** | **String**|  | 
 **pageInode** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## containerContentByQueryParam

> containerContentByQueryParam(contentletId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let contentletId = "contentletId_example"; // String | 
let opts = {
  'containerId': "containerId_example", // String | 
  'pageInode': "pageInode_example" // String | 
};
apiInstance.containerContentByQueryParam(contentletId, opts, (error, data, response) => {
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
 **contentletId** | **String**|  | 
 **containerId** | **String**|  | [optional] 
 **pageInode** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## containerForm

> containerForm(containerId, formId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let containerId = "containerId_example"; // String | 
let formId = "formId_example"; // String | 
apiInstance.containerForm(containerId, formId, (error, data, response) => {
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
 **containerId** | **String**|  | 
 **formId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## containerFormByQueryParam

> containerFormByQueryParam(formId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let formId = "formId_example"; // String | 
let opts = {
  'containerId': "containerId_example" // String | 
};
apiInstance.containerFormByQueryParam(formId, opts, (error, data, response) => {
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
 **formId** | **String**|  | 
 **containerId** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## copy

> ResponseEntityContainerView copy(id)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let id = "id_example"; // String | 
apiInstance.copy(id, (error, data, response) => {
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

[**ResponseEntityContainerView**](ResponseEntityContainerView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## copy1

> copy1(templateId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let templateId = "templateId_example"; // String | 
apiInstance.copy1(templateId, (error, data, response) => {
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
 **templateId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## copySite

> copySite(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'copySiteForm': new DotCmsRestApi.CopySiteForm() // CopySiteForm | 
};
apiInstance.copySite(opts, (error, data, response) => {
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
 **copySiteForm** | [**CopySiteForm**](CopySiteForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## copyTempFromUrl

> copyTempFromUrl(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'remoteUrlForm': new DotCmsRestApi.RemoteUrlForm() // RemoteUrlForm | 
};
apiInstance.copyTempFromUrl(opts, (error, data, response) => {
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
 **remoteUrlForm** | [**RemoteUrlForm**](RemoteUrlForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript


## createApp

> createApp(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'contentDisposition': new DotCmsRestApi.ContentDisposition(), // ContentDisposition | 
  'entity': {key: null}, // Object | 
  'mediaType': new DotCmsRestApi.BodyPartMediaType(), // BodyPartMediaType | 
  'messageBodyWorkers': {key: null}, // Object | 
  'parent': new DotCmsRestApi.MultiPart(), // MultiPart | 
  'providers': {key: null}, // Object | 
  'bodyParts': [new DotCmsRestApi.BodyPart()] // [BodyPart] | 
};
apiInstance.createApp(opts, (error, data, response) => {
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
- **Accept**: application/json, application/javascript


## createAppSecrets

> createAppSecrets(key, siteId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let key = "key_example"; // String | 
let siteId = "siteId_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.createAppSecrets(key, siteId, opts, (error, data, response) => {
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
 **key** | **String**|  | 
 **siteId** | **String**|  | 
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## createContentPortlet

> createContentPortlet(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'customPortletForm': new DotCmsRestApi.CustomPortletForm() // CustomPortletForm | 
};
apiInstance.createContentPortlet(opts, (error, data, response) => {
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
 **customPortletForm** | [**CustomPortletForm**](CustomPortletForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript


## createContentTypeField

> createContentTypeField(typeId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeId = "typeId_example"; // String | 
let opts = {
  'body': "body_example" // String | 
};
apiInstance.createContentTypeField(typeId, opts, (error, data, response) => {
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
 **typeId** | **String**|  | 
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript


## createContentTypeField1

> createContentTypeField1(typeIdOrVarName, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeIdOrVarName = "typeIdOrVarName_example"; // String | 
let opts = {
  'body': "body_example" // String | 
};
apiInstance.createContentTypeField1(typeIdOrVarName, opts, (error, data, response) => {
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
 **typeIdOrVarName** | **String**|  | 
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript


## createFieldVariableByFieldId

> createFieldVariableByFieldId(typeId, fieldId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeId = "typeId_example"; // String | 
let fieldId = "fieldId_example"; // String | 
let opts = {
  'body': "body_example" // String | 
};
apiInstance.createFieldVariableByFieldId(typeId, fieldId, opts, (error, data, response) => {
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
 **typeId** | **String**|  | 
 **fieldId** | **String**|  | 
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript


## createFieldVariableByFieldVar

> createFieldVariableByFieldVar(typeId, fieldVar, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeId = "typeId_example"; // String | 
let fieldVar = "fieldVar_example"; // String | 
let opts = {
  'body': "body_example" // String | 
};
apiInstance.createFieldVariableByFieldVar(typeId, fieldVar, opts, (error, data, response) => {
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
 **typeId** | **String**|  | 
 **fieldVar** | **String**|  | 
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript


## createFolders

> createFolders(siteName, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteName = "siteName_example"; // String | 
let opts = {
  'requestBody': ["null"] // [String] | 
};
apiInstance.createFolders(siteName, opts, (error, data, response) => {
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
 **siteName** | **String**|  | 
 **requestBody** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript


## createIndex

> createIndex(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.createIndex(params, (error, data, response) => {
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
- **Accept**: text/plain


## createNewSite

> createNewSite(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'siteForm': new DotCmsRestApi.SiteForm() // SiteForm | 
};
apiInstance.createNewSite(opts, (error, data, response) => {
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
 **siteForm** | [**SiteForm**](SiteForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## currentSite

> currentSite()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.currentSite((error, data, response) => {
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


## deactivateIndex

> deactivateIndex(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.deactivateIndex(params, (error, data, response) => {
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
- **Accept**: */*


## defaultSite

> defaultSite()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.defaultSite((error, data, response) => {
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


## delete1

> delete1(tagId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let tagId = "tagId_example"; // String | 
apiInstance.delete1(tagId, (error, data, response) => {
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
 **tagId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## delete10

> delete10(folder, pathParam, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let folder = "folder_example"; // String | 
let pathParam = "pathParam_example"; // String | 
let opts = {
  'requestBody': {key: null} // {String: Object} | 
};
apiInstance.delete10(folder, pathParam, opts, (error, data, response) => {
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
 **folder** | **String**|  | 
 **pathParam** | **String**|  | 
 **requestBody** | [**{String: Object}**](Object.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml, text/plain


## delete2

> delete2(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'requestBody': ["null"] // [String] | 
};
apiInstance.delete2(opts, (error, data, response) => {
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
 **requestBody** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## delete3

> delete3(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'containerId': "containerId_example" // String | 
};
apiInstance.delete3(opts, (error, data, response) => {
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
 **containerId** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## delete5

> delete5(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'deleteForm': new DotCmsRestApi.DeleteForm() // DeleteForm | 
};
apiInstance.delete5(opts, (error, data, response) => {
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
 **deleteForm** | [**DeleteForm**](DeleteForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## delete6

> delete6(id)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let id = "id_example"; // String | 
apiInstance.delete6(id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## delete7

> delete7(key)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let key = "key_example"; // String | 
apiInstance.delete7(key, (error, data, response) => {
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
 **key** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## delete8

> delete8(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'requestBody': ["null"] // [String] | 
};
apiInstance.delete8(opts, (error, data, response) => {
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
 **requestBody** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## delete9

> delete9(folder, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let folder = "folder_example"; // String | 
let opts = {
  'requestBody': {key: null} // {String: Object} | 
};
apiInstance.delete9(folder, opts, (error, data, response) => {
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
 **folder** | **String**|  | 
 **requestBody** | [**{String: Object}**](Object.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml, text/plain


## deleteAllAppSecrets

> deleteAllAppSecrets(key, siteId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let key = "key_example"; // String | 
let siteId = "siteId_example"; // String | 
apiInstance.deleteAllAppSecrets(key, siteId, (error, data, response) => {
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
 **key** | **String**|  | 
 **siteId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteApiToken

> deleteApiToken(tokenId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let tokenId = "tokenId_example"; // String | 
apiInstance.deleteApiToken(tokenId, (error, data, response) => {
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
 **tokenId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteApp

> deleteApp(key, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let key = "key_example"; // String | 
let opts = {
  'removeDescriptor': true // Boolean | 
};
apiInstance.deleteApp(key, opts, (error, data, response) => {
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
 **key** | **String**|  | 
 **removeDescriptor** | **Boolean**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteAssetsByIdentifiers

> deleteAssetsByIdentifiers(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'deletePPQueueElementsByIdentifierForm': new DotCmsRestApi.DeletePPQueueElementsByIdentifierForm() // DeletePPQueueElementsByIdentifierForm | 
};
apiInstance.deleteAssetsByIdentifiers(opts, (error, data, response) => {
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
 **deletePPQueueElementsByIdentifierForm** | [**DeletePPQueueElementsByIdentifierForm**](DeletePPQueueElementsByIdentifierForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteContentTypeFieldById

> deleteContentTypeFieldById(typeId, fieldId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeId = "typeId_example"; // String | 
let fieldId = "fieldId_example"; // String | 
apiInstance.deleteContentTypeFieldById(typeId, fieldId, (error, data, response) => {
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
 **typeId** | **String**|  | 
 **fieldId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteContentTypeFieldById1

> deleteContentTypeFieldById1(fieldId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let fieldId = "fieldId_example"; // String | 
apiInstance.deleteContentTypeFieldById1(fieldId, (error, data, response) => {
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
 **fieldId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteContentTypeFieldByVar

> deleteContentTypeFieldByVar(typeId, fieldVar)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeId = "typeId_example"; // String | 
let fieldVar = "fieldVar_example"; // String | 
apiInstance.deleteContentTypeFieldByVar(typeId, fieldVar, (error, data, response) => {
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
 **typeId** | **String**|  | 
 **fieldVar** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteContentTypeFieldByVar1

> deleteContentTypeFieldByVar1(typeIdOrVarName, fieldVar)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeIdOrVarName = "typeIdOrVarName_example"; // String | 
let fieldVar = "fieldVar_example"; // String | 
apiInstance.deleteContentTypeFieldByVar1(typeIdOrVarName, fieldVar, (error, data, response) => {
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
 **typeIdOrVarName** | **String**|  | 
 **fieldVar** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteCustomPortlet

> deleteCustomPortlet(portletId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let portletId = "portletId_example"; // String | 
apiInstance.deleteCustomPortlet(portletId, (error, data, response) => {
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
 **portletId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteEndpoint

> deleteEndpoint(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'user': "user_example", // String | 
  'password': "password_example", // String | 
  'endPoint': "endPoint_example", // String | 
  'type': "type_example", // String | 
  'callback': "callback_example" // String | 
};
apiInstance.deleteEndpoint(opts, (error, data, response) => {
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
 **user** | **String**|  | [optional] 
 **password** | **String**|  | [optional] 
 **endPoint** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **callback** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteEnvironment

> deleteEnvironment(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'user': "user_example", // String | 
  'password': "password_example", // String | 
  'environment': "environment_example", // String | 
  'type': "type_example", // String | 
  'callback': "callback_example" // String | 
};
apiInstance.deleteEnvironment(opts, (error, data, response) => {
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
 **user** | **String**|  | [optional] 
 **password** | **String**|  | [optional] 
 **environment** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **callback** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteFailedRecords

> deleteFailedRecords()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.deleteFailedRecords((error, data, response) => {
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


## deleteFieldVariableByFieldId

> deleteFieldVariableByFieldId(typeId, fieldId, fieldVarId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeId = "typeId_example"; // String | 
let fieldId = "fieldId_example"; // String | 
let fieldVarId = "fieldVarId_example"; // String | 
apiInstance.deleteFieldVariableByFieldId(typeId, fieldId, fieldVarId, (error, data, response) => {
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
 **typeId** | **String**|  | 
 **fieldId** | **String**|  | 
 **fieldVarId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteFieldVariableByFieldVar

> deleteFieldVariableByFieldVar(typeId, fieldVar, fieldVarId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeId = "typeId_example"; // String | 
let fieldVar = "fieldVar_example"; // String | 
let fieldVarId = "fieldVarId_example"; // String | 
apiInstance.deleteFieldVariableByFieldVar(typeId, fieldVar, fieldVarId, (error, data, response) => {
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
 **typeId** | **String**|  | 
 **fieldVar** | **String**|  | 
 **fieldVarId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteFields

> deleteFields(typeId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeId = "typeId_example"; // String | 
let opts = {
  'requestBody': ["null"] // [String] | 
};
apiInstance.deleteFields(typeId, opts, (error, data, response) => {
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
 **typeId** | **String**|  | 
 **requestBody** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteFields1

> deleteFields1(typeIdOrVarName, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeIdOrVarName = "typeIdOrVarName_example"; // String | 
let opts = {
  'requestBody': ["null"] // [String] | 
};
apiInstance.deleteFields1(typeIdOrVarName, opts, (error, data, response) => {
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
 **typeIdOrVarName** | **String**|  | 
 **requestBody** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteFields2

> deleteFields2(typeIdOrVarName, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeIdOrVarName = "typeIdOrVarName_example"; // String | 
let opts = {
  'deleteFieldsForm': new DotCmsRestApi.DeleteFieldsForm() // DeleteFieldsForm | 
};
apiInstance.deleteFields2(typeIdOrVarName, opts, (error, data, response) => {
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
 **typeIdOrVarName** | **String**|  | 
 **deleteFieldsForm** | [**DeleteFieldsForm**](DeleteFieldsForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteFilter

> deleteFilter(filterKey)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let filterKey = "filterKey_example"; // String | 
apiInstance.deleteFilter(filterKey, (error, data, response) => {
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
 **filterKey** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteFolders

> deleteFolders(siteName, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteName = "siteName_example"; // String | 
let opts = {
  'requestBody': ["null"] // [String] | 
};
apiInstance.deleteFolders(siteName, opts, (error, data, response) => {
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
 **siteName** | **String**|  | 
 **requestBody** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript


## deleteHash

> deleteHash(key)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let key = "key_example"; // String | 
apiInstance.deleteHash(key, (error, data, response) => {
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
 **key** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteIndex

> deleteIndex(indexName)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let indexName = "indexName_example"; // String | 
apiInstance.deleteIndex(indexName, (error, data, response) => {
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
 **indexName** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteIndividualAppSecret

> deleteIndividualAppSecret(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'deleteSecretForm': new DotCmsRestApi.DeleteSecretForm() // DeleteSecretForm | 
};
apiInstance.deleteIndividualAppSecret(opts, (error, data, response) => {
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
 **deleteSecretForm** | [**DeleteSecretForm**](DeleteSecretForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteLanguage

> deleteLanguage(languageId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let languageId = "languageId_example"; // String | 
apiInstance.deleteLanguage(languageId, (error, data, response) => {
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
 **languageId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deletePersonalPortlet

> deletePersonalPortlet(portletId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let portletId = "portletId_example"; // String | 
apiInstance.deletePersonalPortlet(portletId, (error, data, response) => {
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
 **portletId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deletePortletForRole

> deletePortletForRole(portletId, roleId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let portletId = "portletId_example"; // String | 
let roleId = "roleId_example"; // String | 
apiInstance.deletePortletForRole(portletId, roleId, (error, data, response) => {
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
 **portletId** | **String**|  | 
 **roleId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteRoleLayouts

> deleteRoleLayouts(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'roleLayoutForm': new DotCmsRestApi.RoleLayoutForm() // RoleLayoutForm | 
};
apiInstance.deleteRoleLayouts(opts, (error, data, response) => {
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
 **roleLayoutForm** | [**RoleLayoutForm**](RoleLayoutForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteSite

> deleteSite(siteId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
apiInstance.deleteSite(siteId, (error, data, response) => {
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
 **siteId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteTagInodesByInode

> deleteTagInodesByInode(inode)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let inode = "inode_example"; // String | 
apiInstance.deleteTagInodesByInode(inode, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteToolGroupFromUser

> deleteToolGroupFromUser(layoutId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let layoutId = "layoutId_example"; // String | 
let opts = {
  'userid': "userid_example" // String | 
};
apiInstance.deleteToolGroupFromUser(layoutId, opts, (error, data, response) => {
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
 **layoutId** | **String**|  | 
 **userid** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## deleteVersion

> deleteVersion(versionableInode)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let versionableInode = "versionableInode_example"; // String | 
apiInstance.deleteVersion(versionableInode, (error, data, response) => {
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
 **versionableInode** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## discardConflicts

> discardConflicts(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.discardConflicts(params, (error, data, response) => {
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


## doLogin

> doLogin(idpConfigId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let idpConfigId = "idpConfigId_example"; // String | 
apiInstance.doLogin(idpConfigId, (error, data, response) => {
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
 **idpConfigId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## doesUserHaveAccessToPortlet

> doesUserHaveAccessToPortlet(portletId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let portletId = "portletId_example"; // String | 
apiInstance.doesUserHaveAccessToPortlet(portletId, (error, data, response) => {
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
 **portletId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## downloadAssets

> downloadAssets()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.downloadAssets((error, data, response) => {
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
- **Accept**: application/octet-stream, application/json


## downloadDb

> downloadDb()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.downloadDb((error, data, response) => {
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
- **Accept**: application/octet-stream, application/json


## downloadLogFile

> downloadLogFile(fileName)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let fileName = "fileName_example"; // String | 
apiInstance.downloadLogFile(fileName, (error, data, response) => {
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
 **fileName** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream, application/json


## downloadRemainingRecordsAsCsv

> downloadRemainingRecordsAsCsv()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.downloadRemainingRecordsAsCsv((error, data, response) => {
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


## downloadStarter

> downloadStarter()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.downloadStarter((error, data, response) => {
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
- **Accept**: application/octet-stream, application/json


## downloadStarterWithAssets

> downloadStarterWithAssets()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.downloadStarterWithAssets((error, data, response) => {
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
- **Accept**: application/octet-stream, application/json


## dynamicDelete

> dynamicDelete(pathParam, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let pathParam = "pathParam_example"; // String | 
let opts = {
  'body': "body_example" // String | 
};
apiInstance.dynamicDelete(pathParam, opts, (error, data, response) => {
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
 **pathParam** | **String**|  | 
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json, application/xml, text/plain


## dynamicGet

> dynamicGet(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'body': "body_example" // String | 
};
apiInstance.dynamicGet(opts, (error, data, response) => {
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
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json, application/xml, text/plain


## dynamicGet1

> dynamicGet1(pathParam, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let pathParam = "pathParam_example"; // String | 
let opts = {
  'body': "body_example" // String | 
};
apiInstance.dynamicGet1(pathParam, opts, (error, data, response) => {
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
 **pathParam** | **String**|  | 
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json, application/xml, text/plain


## dynamicPatch

> dynamicPatch(pathParam, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let pathParam = "pathParam_example"; // String | 
let opts = {
  'body': "body_example" // String | 
};
apiInstance.dynamicPatch(pathParam, opts, (error, data, response) => {
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
 **pathParam** | **String**|  | 
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json, application/xml, text/plain


## dynamicPost

> dynamicPost(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'body': "body_example" // String | 
};
apiInstance.dynamicPost(opts, (error, data, response) => {
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
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json, application/xml, text/plain


## dynamicPost1

> dynamicPost1(pathParam, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let pathParam = "pathParam_example"; // String | 
let opts = {
  'body': "body_example" // String | 
};
apiInstance.dynamicPost1(pathParam, opts, (error, data, response) => {
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
 **pathParam** | **String**|  | 
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json, application/xml, text/plain


## dynamicPut

> dynamicPut(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'body': "body_example" // String | 
};
apiInstance.dynamicPut(opts, (error, data, response) => {
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
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json, application/xml, text/plain


## dynamicPut1

> dynamicPut1(pathParam, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let pathParam = "pathParam_example"; // String | 
let opts = {
  'body': "body_example" // String | 
};
apiInstance.dynamicPut1(pathParam, opts, (error, data, response) => {
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
 **pathParam** | **String**|  | 
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json, application/xml, text/plain


## echo

> echo(message)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let message = "message_example"; // String | 
apiInstance.echo(message, (error, data, response) => {
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
 **message** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## exportSecrets

> exportSecrets(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'exportSecretForm': new DotCmsRestApi.ExportSecretForm() // ExportSecretForm | 
};
apiInstance.exportSecrets(opts, (error, data, response) => {
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
 **exportSecretForm** | [**ExportSecretForm**](ExportSecretForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream, application/json


## filter

> filter(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'query': "query_example", // String | 
  'page': 0, // Number | 
  'perPage': 40, // Number | 
  'orderby': "orderby_example", // String | 
  'direction': "'ASC'", // String | 
  'includeanonymous': true, // Boolean | 
  'includedefault': true, // Boolean | 
  'assetinode': "assetinode_example", // String | 
  'permission': 56 // Number | 
};
apiInstance.filter(opts, (error, data, response) => {
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
 **query** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] [default to 0]
 **perPage** | **Number**|  | [optional] [default to 40]
 **orderby** | **String**|  | [optional] 
 **direction** | **String**|  | [optional] [default to &#39;ASC&#39;]
 **includeanonymous** | **Boolean**|  | [optional] 
 **includedefault** | **Boolean**|  | [optional] 
 **assetinode** | **String**|  | [optional] 
 **permission** | **Number**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## findAllSiteThumbnails

> findAllSiteThumbnails()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.findAllSiteThumbnails((error, data, response) => {
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


## findByInode

> findByInode(inode)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let inode = "inode_example"; // String | 
apiInstance.findByInode(inode, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## findFolderById

> findFolderById(folderId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let folderId = "folderId_example"; // String | 
apiInstance.findFolderById(folderId, (error, data, response) => {
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
 **folderId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findHostByIdentifier

> findHostByIdentifier(siteId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
apiInstance.findHostByIdentifier(siteId, (error, data, response) => {
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
 **siteId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## findHostByName

> findHostByName(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'searchSiteByNameForm': new DotCmsRestApi.SearchSiteByNameForm() // SearchSiteByNameForm | 
};
apiInstance.findHostByName(opts, (error, data, response) => {
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
 **searchSiteByNameForm** | [**SearchSiteByNameForm**](SearchSiteByNameForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## findPortlet

> findPortlet(portletId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let portletId = "portletId_example"; // String | 
apiInstance.findPortlet(portletId, (error, data, response) => {
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
 **portletId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## findResourceLink

> findResourceLink(field, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let field = "field_example"; // String | 
let opts = {
  'inode': "inode_example", // String | 
  'identifier': "identifier_example", // String | 
  'language': "'-1'" // String | 
};
apiInstance.findResourceLink(field, opts, (error, data, response) => {
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
 **field** | **String**|  | 
 **inode** | **String**|  | [optional] 
 **identifier** | **String**|  | [optional] 
 **language** | **String**|  | [optional] [default to &#39;-1&#39;]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## findResourceLink1

> findResourceLink1(inode)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let inode = "inode_example"; // String | 
apiInstance.findResourceLink1(inode, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## findResourceLinks

> findResourceLinks(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'inode': "inode_example", // String | 
  'identifier': "identifier_example", // String | 
  'language': "'-1'" // String | 
};
apiInstance.findResourceLinks(opts, (error, data, response) => {
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
 **inode** | **String**|  | [optional] 
 **identifier** | **String**|  | [optional] 
 **language** | **String**|  | [optional] [default to &#39;-1&#39;]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## findRoleLayouts

> findRoleLayouts(roleId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let roleId = "roleId_example"; // String | 
apiInstance.findRoleLayouts(roleId, (error, data, response) => {
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
 **roleId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findSubFoldersByPath

> findSubFoldersByPath(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'searchByPathForm': new DotCmsRestApi.SearchByPathForm() // SearchByPathForm | 
};
apiInstance.findSubFoldersByPath(opts, (error, data, response) => {
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
 **searchByPathForm** | [**SearchByPathForm**](SearchByPathForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findTagsByInode

> findTagsByInode(inode)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let inode = "inode_example"; // String | 
apiInstance.findTagsByInode(inode, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## findThemeById

> findThemeById(id)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let id = "id_example"; // String | 
apiInstance.findThemeById(id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## findThemes

> findThemes(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'hostId': "hostId_example", // String | 
  'page': 56, // Number | 
  'perPage': -1, // Number | 
  'direction': "'ASC'", // String | 
  'searchParam': "searchParam_example" // String | 
};
apiInstance.findThemes(opts, (error, data, response) => {
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
 **hostId** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] [default to -1]
 **direction** | **String**|  | [optional] [default to &#39;ASC&#39;]
 **searchParam** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## findVersionable

> findVersionable(versionableInodeOrIdentifier)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let versionableInodeOrIdentifier = "versionableInodeOrIdentifier_example"; // String | 
apiInstance.findVersionable(versionableInodeOrIdentifier, (error, data, response) => {
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
 **versionableInodeOrIdentifier** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## findVersions

> findVersions(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'inodes': "inodes_example", // String | 
  'identifier': "identifier_example", // String | 
  'groupByLang': "groupByLang_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.findVersions(opts, (error, data, response) => {
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
 **inodes** | **String**|  | [optional] 
 **identifier** | **String**|  | [optional] 
 **groupByLang** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## fixConflicts

> fixConflicts(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.fixConflicts(params, (error, data, response) => {
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


## fixConflictsFromRemote

> fixConflictsFromRemote(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'DATA_TO_FIX': {key: null}, // Object | 
  'TYPE': "TYPE_example" // String | 
};
apiInstance.fixConflictsFromRemote(opts, (error, data, response) => {
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
 **DATA_TO_FIX** | [**Object**](Object.md)|  | [optional] 
 **TYPE** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: text/plain


## flushAll

> flushAll(provider)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let provider = "provider_example"; // String | 
apiInstance.flushAll(provider, (error, data, response) => {
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
 **provider** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## flushGroup

> flushGroup(provider, group)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let provider = "provider_example"; // String | 
let group = "group_example"; // String | 
apiInstance.flushGroup(provider, group, (error, data, response) => {
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
 **provider** | **String**|  | 
 **group** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## flushIndiciesCache

> flushIndiciesCache()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.flushIndiciesCache((error, data, response) => {
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


## flushObject

> flushObject(provider, group, id)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let provider = "provider_example"; // String | 
let group = "group_example"; // String | 
let id = "id_example"; // String | 
apiInstance.flushObject(provider, group, id, (error, data, response) => {
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
 **provider** | **String**|  | 
 **group** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## forgotPassword

> forgotPassword(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'forgotPasswordForm': new DotCmsRestApi.ForgotPasswordForm() // ForgotPasswordForm | 
};
apiInstance.forgotPassword(opts, (error, data, response) => {
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
 **forgotPasswordForm** | [**ForgotPasswordForm**](ForgotPasswordForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## freeLicense

> freeLicense(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.freeLicense(params, (error, data, response) => {
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
- **Accept**: */*


## generateIntegrityData

> generateIntegrityData()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.generateIntegrityData((error, data, response) => {
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
- **Accept**: text/plain


## get

> get(bundleId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let bundleId = "bundleId_example"; // String | 
apiInstance.get(bundleId, (error, data, response) => {
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
- **Accept**: text/xml


## get2

> get2(key)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let key = "key_example"; // String | 
apiInstance.get2(key, (error, data, response) => {
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
 **key** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## get3

> get3(folder, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let folder = "folder_example"; // String | 
let opts = {
  'requestBody': {key: null} // {String: Object} | 
};
apiInstance.get3(folder, opts, (error, data, response) => {
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
 **folder** | **String**|  | 
 **requestBody** | [**{String: Object}**](Object.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml, text/plain


## get4

> get4(folder, pathParam, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let folder = "folder_example"; // String | 
let pathParam = "pathParam_example"; // String | 
let opts = {
  'requestBody': {key: null} // {String: Object} | 
};
apiInstance.get4(folder, pathParam, opts, (error, data, response) => {
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
 **folder** | **String**|  | 
 **pathParam** | **String**|  | 
 **requestBody** | [**{String: Object}**](Object.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml, text/plain


## get5

> get5(languageid)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let languageid = 789; // Number | 
apiInstance.get5(languageid, (error, data, response) => {
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
 **languageid** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getActive

> getActive(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.getActive(params, (error, data, response) => {
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
- **Accept**: text/plain


## getAll

> getAll(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.getAll(params, (error, data, response) => {
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


## getAllMessages

> getAllMessages(language)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let language = "language_example"; // String | 
apiInstance.getAllMessages(language, (error, data, response) => {
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
 **language** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getApiToken

> getApiToken(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'createTokenForm': new DotCmsRestApi.CreateTokenForm() // CreateTokenForm | 
};
apiInstance.getApiToken(opts, (error, data, response) => {
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
 **createTokenForm** | [**CreateTokenForm**](CreateTokenForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getApiTokens

> getApiTokens(userId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let userId = "userId_example"; // String | 
let opts = {
  'showRevoked': true // Boolean | 
};
apiInstance.getApiTokens(userId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **showRevoked** | **Boolean**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getAppByKey

> getAppByKey(key)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let key = "key_example"; // String | 
apiInstance.getAppByKey(key, (error, data, response) => {
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
 **key** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getAppDetail

> getAppDetail(key, siteId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let key = "key_example"; // String | 
let siteId = "siteId_example"; // String | 
apiInstance.getAppDetail(key, siteId, (error, data, response) => {
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
 **key** | **String**|  | 
 **siteId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getByContentlet

> ResponseEntityPermissionView getByContentlet(opts)

Get permission for a Contentlet

### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'contentletId': "contentletId_example", // String | 
  'type': "'READ'" // String | 
};
apiInstance.getByContentlet(opts, (error, data, response) => {
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
 **contentletId** | **String**|  | [optional] 
 **type** | **String**|  | [optional] [default to &#39;READ&#39;]

### Return type

[**ResponseEntityPermissionView**](ResponseEntityPermissionView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCardinality

> getCardinality()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.getCardinality((error, data, response) => {
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


## getCategories

> getCategories(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'filter': "filter_example", // String | 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderby': "'category_name'", // String | 
  'direction': "'ASC'", // String | 
  'showChildrenCount': true // Boolean | 
};
apiInstance.getCategories(opts, (error, data, response) => {
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
 **orderby** | **String**|  | [optional] [default to &#39;category_name&#39;]
 **direction** | **String**|  | [optional] [default to &#39;ASC&#39;]
 **showChildrenCount** | **Boolean**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getCategoryByIdOrKey

> CategoryView getCategoryByIdOrKey(idOrKey)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let idOrKey = "idOrKey_example"; // String | 
apiInstance.getCategoryByIdOrKey(idOrKey, (error, data, response) => {
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
 **idOrKey** | **String**|  | 

### Return type

[**CategoryView**](CategoryView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getChildren

> getChildren(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'filter': "filter_example", // String | 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderby': "'category_name'", // String | 
  'direction': "'ASC'", // String | 
  'inode': "inode_example", // String | 
  'showChildrenCount': true // Boolean | 
};
apiInstance.getChildren(opts, (error, data, response) => {
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
 **orderby** | **String**|  | [optional] [default to &#39;category_name&#39;]
 **direction** | **String**|  | [optional] [default to &#39;ASC&#39;]
 **inode** | **String**|  | [optional] 
 **showChildrenCount** | **Boolean**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getClusterStats

> getClusterStats()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.getClusterStats((error, data, response) => {
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


## getConfigVariables

> getConfigVariables(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'keys': "keys_example" // String | 
};
apiInstance.getConfigVariables(opts, (error, data, response) => {
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
 **keys** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getContainers

> getContainers(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'filter': "filter_example", // String | 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderby': "'title'", // String | 
  'direction': "'ASC'", // String | 
  'host': "host_example", // String | 
  'system': true, // Boolean | 
  'archive': true, // Boolean | 
  'contentTypeIdOrVar': "contentTypeIdOrVar_example" // String | 
};
apiInstance.getContainers(opts, (error, data, response) => {
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
 **orderby** | **String**|  | [optional] [default to &#39;title&#39;]
 **direction** | **String**|  | [optional] [default to &#39;ASC&#39;]
 **host** | **String**|  | [optional] 
 **system** | **Boolean**|  | [optional] 
 **archive** | **Boolean**|  | [optional] 
 **contentTypeIdOrVar** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getContent1

> getContent1(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.getContent1(params, (error, data, response) => {
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
- **Accept**: */*


## getContent2

> getContent2(inodeOrIdentifier, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let inodeOrIdentifier = "inodeOrIdentifier_example"; // String | 
let opts = {
  'language': "'-1'" // String | 
};
apiInstance.getContent2(inodeOrIdentifier, opts, (error, data, response) => {
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
 **inodeOrIdentifier** | **String**|  | 
 **language** | **String**|  | [optional] [default to &#39;-1&#39;]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContentTypeFieldById

> getContentTypeFieldById(typeId, fieldId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeId = "typeId_example"; // String | 
let fieldId = "fieldId_example"; // String | 
apiInstance.getContentTypeFieldById(typeId, fieldId, (error, data, response) => {
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
 **typeId** | **String**|  | 
 **fieldId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getContentTypeFieldById1

> getContentTypeFieldById1(fieldId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let fieldId = "fieldId_example"; // String | 
apiInstance.getContentTypeFieldById1(fieldId, (error, data, response) => {
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
 **fieldId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getContentTypeFieldByVar

> getContentTypeFieldByVar(typeId, fieldVar)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeId = "typeId_example"; // String | 
let fieldVar = "fieldVar_example"; // String | 
apiInstance.getContentTypeFieldByVar(typeId, fieldVar, (error, data, response) => {
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
 **typeId** | **String**|  | 
 **fieldVar** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getContentTypeFieldByVar1

> getContentTypeFieldByVar1(typeIdOrVarName, fieldVar)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeIdOrVarName = "typeIdOrVarName_example"; // String | 
let fieldVar = "fieldVar_example"; // String | 
apiInstance.getContentTypeFieldByVar1(typeIdOrVarName, fieldVar, (error, data, response) => {
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
 **typeIdOrVarName** | **String**|  | 
 **fieldVar** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getContentTypeFields

> getContentTypeFields(typeId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeId = "typeId_example"; // String | 
apiInstance.getContentTypeFields(typeId, (error, data, response) => {
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
 **typeId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getContentTypeFields1

> getContentTypeFields1(typeIdOrVarName)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeIdOrVarName = "typeIdOrVarName_example"; // String | 
apiInstance.getContentTypeFields1(typeIdOrVarName, (error, data, response) => {
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
 **typeIdOrVarName** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getContentTypeFields2

> getContentTypeFields2(typeIdOrVarName)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeIdOrVarName = "typeIdOrVarName_example"; // String | 
apiInstance.getContentTypeFields2(typeIdOrVarName, (error, data, response) => {
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
 **typeIdOrVarName** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getCreateContentURL

> getCreateContentURL(contentTypeVariable)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let contentTypeVariable = "contentTypeVariable_example"; // String | 
apiInstance.getCreateContentURL(contentTypeVariable, (error, data, response) => {
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
 **contentTypeVariable** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getDocumentCount

> getDocumentCount(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.getDocumentCount(params, (error, data, response) => {
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


## getESConfigProperties

> getESConfigProperties(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.getESConfigProperties(params, (error, data, response) => {
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


## getEvents

> getEvents(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'lastcallback': 789 // Number | 
};
apiInstance.getEvents(opts, (error, data, response) => {
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
 **lastcallback** | **Number**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getExternalGrammar

> getExternalGrammar(path)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let path = "path_example"; // String | 
apiInstance.getExternalGrammar(path, (error, data, response) => {
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
 **path** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml


## getFieldTypes

> getFieldTypes()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.getFieldTypes((error, data, response) => {
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


## getFieldVariableByFieldId

> getFieldVariableByFieldId(typeId, fieldId, fieldVarId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeId = "typeId_example"; // String | 
let fieldId = "fieldId_example"; // String | 
let fieldVarId = "fieldVarId_example"; // String | 
apiInstance.getFieldVariableByFieldId(typeId, fieldId, fieldVarId, (error, data, response) => {
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
 **typeId** | **String**|  | 
 **fieldId** | **String**|  | 
 **fieldVarId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getFieldVariableByFieldVar

> getFieldVariableByFieldVar(typeId, fieldVar, fieldVarId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeId = "typeId_example"; // String | 
let fieldVar = "fieldVar_example"; // String | 
let fieldVarId = "fieldVarId_example"; // String | 
apiInstance.getFieldVariableByFieldVar(typeId, fieldVar, fieldVarId, (error, data, response) => {
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
 **typeId** | **String**|  | 
 **fieldVar** | **String**|  | 
 **fieldVarId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getFieldVariablesByFieldId

> getFieldVariablesByFieldId(typeId, fieldId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeId = "typeId_example"; // String | 
let fieldId = "fieldId_example"; // String | 
apiInstance.getFieldVariablesByFieldId(typeId, fieldId, (error, data, response) => {
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
 **typeId** | **String**|  | 
 **fieldId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getFieldVariablesByFieldVar

> getFieldVariablesByFieldVar(typeId, fieldVar)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeId = "typeId_example"; // String | 
let fieldVar = "fieldVar_example"; // String | 
apiInstance.getFieldVariablesByFieldVar(typeId, fieldVar, (error, data, response) => {
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
 **typeId** | **String**|  | 
 **fieldVar** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getFilter

> getFilter(filterKey)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let filterKey = "filterKey_example"; // String | 
apiInstance.getFilter(filterKey, (error, data, response) => {
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
 **filterKey** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getFilters

> getFilters()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.getFilters((error, data, response) => {
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


## getFolderContent

> getFolderContent(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'browserQueryForm': new DotCmsRestApi.BrowserQueryForm() // BrowserQueryForm | 
};
apiInstance.getFolderContent(opts, (error, data, response) => {
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
 **browserQueryForm** | [**BrowserQueryForm**](BrowserQueryForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getFromLanguageTag

> getFromLanguageTag(languageTag)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let languageTag = "languageTag_example"; // String | 
apiInstance.getFromLanguageTag(languageTag, (error, data, response) => {
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
 **languageTag** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getHash

> getHash(key)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let key = "key_example"; // String | 
apiInstance.getHash(key, (error, data, response) => {
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
 **key** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getIncrement

> getIncrement(key)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let key = "key_example"; // String | 
apiInstance.getIncrement(key, (error, data, response) => {
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
 **key** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getIndexStatus

> getIndexStatus()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.getIndexStatus((error, data, response) => {
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


## getInstalledBundles

> getInstalledBundles(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.getInstalledBundles(params, (error, data, response) => {
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


## getIntegrityData

> getIntegrityData(requestId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let requestId = "requestId_example"; // String | 
apiInstance.getIntegrityData(requestId, (error, data, response) => {
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
 **requestId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/zip


## getIntegrityResult

> getIntegrityResult(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.getIntegrityResult(params, (error, data, response) => {
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


## getJvmInfo

> getJvmInfo()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.getJvmInfo((error, data, response) => {
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
- **Accept**: application/octet-stream, application/json


## getJwtFromApiToken

> getJwtFromApiToken(tokenId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let tokenId = "tokenId_example"; // String | 
apiInstance.getJwtFromApiToken(tokenId, (error, data, response) => {
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
 **tokenId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getKeys

> getKeys(provider, group)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let provider = "provider_example"; // String | 
let group = "group_example"; // String | 
apiInstance.getKeys(provider, group, (error, data, response) => {
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
 **provider** | **String**|  | 
 **group** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getLayout

> getLayout(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.getLayout(params, (error, data, response) => {
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
- **Accept**: text/html


## getLayout1

> getLayout1(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.getLayout1(params, (error, data, response) => {
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
- **Accept**: text/html


## getLayout2

> getLayout2(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.getLayout2(params, (error, data, response) => {
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
- **Accept**: text/html


## getLayout3

> getLayout3(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.getLayout3(params, (error, data, response) => {
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
- **Accept**: text/html


## getLayout4

> getLayout4(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.getLayout4(params, (error, data, response) => {
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
- **Accept**: text/html


## getLicenseRepoStatus

> getLicenseRepoStatus(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.getLicenseRepoStatus(params, (error, data, response) => {
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


## getLiveById

> getLiveById(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'containerId': "containerId_example", // String | 
  'includeContentType': true // Boolean | 
};
apiInstance.getLiveById(opts, (error, data, response) => {
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
 **containerId** | **String**|  | [optional] 
 **includeContentType** | **Boolean**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getLiveById1

> getLiveById1(templateId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let templateId = "templateId_example"; // String | 
apiInstance.getLiveById1(templateId, (error, data, response) => {
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
 **templateId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getLoggedInUser

> getLoggedInUser(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.getLoggedInUser(params, (error, data, response) => {
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


## getLoggedInUser1

> getLoggedInUser1(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.getLoggedInUser1(params, (error, data, response) => {
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


## getLogger

> getLogger(loggerName)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let loggerName = "loggerName_example"; // String | 
apiInstance.getLogger(loggerName, (error, data, response) => {
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
 **loggerName** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getLoggers

> getLoggers()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.getLoggers((error, data, response) => {
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


## getLoginUser

> getLoginUser()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.getLoginUser((error, data, response) => {
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


## getMenus

> getMenus()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.getMenus((error, data, response) => {
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


## getMessages

> getMessages(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'i18NForm': new DotCmsRestApi.I18NForm() // I18NForm | 
};
apiInstance.getMessages(opts, (error, data, response) => {
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
 **i18NForm** | [**I18NForm**](I18NForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getMessages1

> getMessages1(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'i18NForm': new DotCmsRestApi.I18NForm() // I18NForm | 
};
apiInstance.getMessages1(opts, (error, data, response) => {
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
 **i18NForm** | [**I18NForm**](I18NForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getNewNotificationsCount

> getNewNotificationsCount(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.getNewNotificationsCount(params, (error, data, response) => {
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


## getNodesInfo

> getNodesInfo(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.getNodesInfo(params, (error, data, response) => {
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


## getNotifications

> getNotifications(params, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
let opts = {
  'range': "range_example" // String | 
};
apiInstance.getNotifications(params, opts, (error, data, response) => {
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
 **range** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOneSidedRelationships

> getOneSidedRelationships(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'contentTypeId': "contentTypeId_example", // String | 
  'page': 56, // Number | 
  'perPage': 0 // Number | 
};
apiInstance.getOneSidedRelationships(opts, (error, data, response) => {
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
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] [default to 0]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getPermissionsByPermissionType

> getPermissionsByPermissionType(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'userid': "userid_example", // String | 
  'permission': "permission_example", // String | 
  'permissiontype': "permissiontype_example" // String | 
};
apiInstance.getPermissionsByPermissionType(opts, (error, data, response) => {
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
 **userid** | **String**|  | [optional] 
 **permission** | **String**|  | [optional] 
 **permissiontype** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getReindexationProgress

> getReindexationProgress()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.getReindexationProgress((error, data, response) => {
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


## getRemoteToken

> getRemoteToken(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'remoteAPITokenForm': new DotCmsRestApi.RemoteAPITokenForm() // RemoteAPITokenForm | 
};
apiInstance.getRemoteToken(opts, (error, data, response) => {
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
 **remoteAPITokenForm** | [**RemoteAPITokenForm**](RemoteAPITokenForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript


## getSelectFolder

> getSelectFolder()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.getSelectFolder((error, data, response) => {
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


## getSiteSetupProgress

> getSiteSetupProgress(siteId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
apiInstance.getSiteSetupProgress(siteId, (error, data, response) => {
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
 **siteId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getSiteVariables

> ResponseSiteVariablesEntityView getSiteVariables(siteId)

Retrieve the Site Variables for a site

### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
apiInstance.getSiteVariables(siteId, (error, data, response) => {
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
 **siteId** | **String**|  | 

### Return type

[**ResponseSiteVariablesEntityView**](ResponseSiteVariablesEntityView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStructuresWithWYSIWYGFields

> getStructuresWithWYSIWYGFields(path, type, callback, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let path = "path_example"; // String | 
let type = "type_example"; // String | 
let callback = "callback_example"; // String | 
let opts = {
  'name': "name_example" // String | 
};
apiInstance.getStructuresWithWYSIWYGFields(path, type, callback, opts, (error, data, response) => {
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
 **path** | **String**|  | 
 **type** | **String**|  | 
 **callback** | **String**|  | 
 **name** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSuccessCallbackFunction

> getSuccessCallbackFunction(idOrVar)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let idOrVar = "idOrVar_example"; // String | 
apiInstance.getSuccessCallbackFunction(idOrVar, (error, data, response) => {
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
- **Accept**: application/javascript


## getSyncEvents

> getSyncEvents(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'lastcallback': 789 // Number | 
};
apiInstance.getSyncEvents(opts, (error, data, response) => {
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
 **lastcallback** | **Number**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getTagsByNameOrId

> getTagsByNameOrId(nameOrId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let nameOrId = "nameOrId_example"; // String | 
apiInstance.getTagsByNameOrId(nameOrId, (error, data, response) => {
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
 **nameOrId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getTagsByUserId

> getTagsByUserId(userId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let userId = "userId_example"; // String | 
apiInstance.getTagsByUserId(userId, (error, data, response) => {
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
 **userId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getWadl

> getWadl()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.getWadl((error, data, response) => {
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
- **Accept**: application/vnd.sun.wadl+xml, application/xml


## getWidget

> getWidget(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.getWidget(params, (error, data, response) => {
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
- **Accept**: text/plain; charset=UTF-8


## getWorkingById

> getWorkingById(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'containerId': "containerId_example", // String | 
  'includeContentType': true // Boolean | 
};
apiInstance.getWorkingById(opts, (error, data, response) => {
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
 **containerId** | **String**|  | [optional] 
 **includeContentType** | **Boolean**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## getWorkingById1

> getWorkingById1(templateId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let templateId = "templateId_example"; // String | 
apiInstance.getWorkingById1(templateId, (error, data, response) => {
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
 **templateId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## importCategories

> importCategories(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'contentDisposition': new DotCmsRestApi.ContentDisposition(), // ContentDisposition | 
  'entity': {key: null}, // Object | 
  'mediaType': new DotCmsRestApi.BodyPartMediaType(), // BodyPartMediaType | 
  'messageBodyWorkers': {key: null}, // Object | 
  'parent': new DotCmsRestApi.MultiPart(), // MultiPart | 
  'providers': {key: null}, // Object | 
  'bodyParts': [new DotCmsRestApi.BodyPart()] // [BodyPart] | 
};
apiInstance.importCategories(opts, (error, data, response) => {
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
- **Accept**: application/json, application/javascript


## importSecrets

> importSecrets(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'contentDisposition': new DotCmsRestApi.ContentDisposition(), // ContentDisposition | 
  'entity': {key: null}, // Object | 
  'mediaType': new DotCmsRestApi.BodyPartMediaType(), // BodyPartMediaType | 
  'messageBodyWorkers': {key: null}, // Object | 
  'parent': new DotCmsRestApi.MultiPart(), // MultiPart | 
  'providers': {key: null}, // Object | 
  'bodyParts': [new DotCmsRestApi.BodyPart()] // [BodyPart] | 
};
apiInstance.importSecrets(opts, (error, data, response) => {
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
- **Accept**: application/json


## importTags

> importTags(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'contentDisposition': new DotCmsRestApi.ContentDisposition(), // ContentDisposition | 
  'entity': {key: null}, // Object | 
  'mediaType': new DotCmsRestApi.BodyPartMediaType(), // BodyPartMediaType | 
  'messageBodyWorkers': {key: null}, // Object | 
  'parent': new DotCmsRestApi.MultiPart(), // MultiPart | 
  'providers': {key: null}, // Object | 
  'bodyParts': [new DotCmsRestApi.BodyPart()] // [BodyPart] | 
};
apiInstance.importTags(opts, (error, data, response) => {
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
- **Accept**: application/json


## incrementAsync

> incrementAsync(key)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let key = "key_example"; // String | 
apiInstance.incrementAsync(key, (error, data, response) => {
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
 **key** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## indexList

> indexList(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.indexList(params, (error, data, response) => {
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


## isPgDumpAvailable

> isPgDumpAvailable()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.isPgDumpAvailable((error, data, response) => {
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
- **Accept**: text/plain


## issueApiToken

> issueApiToken(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'apiTokenForm': new DotCmsRestApi.ApiTokenForm() // ApiTokenForm | 
};
apiInstance.issueApiToken(opts, (error, data, response) => {
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
 **apiTokenForm** | [**ApiTokenForm**](ApiTokenForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript


## layoutGet

> layoutGet(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.layoutGet(params, (error, data, response) => {
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
- **Accept**: text/html


## layoutPost

> layoutPost(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.layoutPost(params, (error, data, response) => {
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
- **Accept**: text/html


## linkTagsAndInode

> linkTagsAndInode(nameOrId, inode)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let nameOrId = "nameOrId_example"; // String | 
let inode = "inode_example"; // String | 
apiInstance.linkTagsAndInode(nameOrId, inode, (error, data, response) => {
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
 **nameOrId** | **String**|  | 
 **inode** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## list

> {String: RestTag} list(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'name': "name_example", // String | 
  'siteId': "siteId_example" // String | 
};
apiInstance.list(opts, (error, data, response) => {
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
 **name** | **String**|  | [optional] 
 **siteId** | **String**|  | [optional] 

### Return type

[**{String: RestTag}**](RestTag.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## list10

> list10()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.list10((error, data, response) => {
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


## list11

> list11()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.list11((error, data, response) => {
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


## list12

> list12(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'filter': "filter_example", // String | 
  'page': 56, // Number | 
  'perPage': 40, // Number | 
  'orderby': "'mod_date'", // String | 
  'direction': "'DESC'", // String | 
  'host': "host_example", // String | 
  'archive': true // Boolean | 
};
apiInstance.list12(opts, (error, data, response) => {
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
 **perPage** | **Number**|  | [optional] [default to 40]
 **orderby** | **String**|  | [optional] [default to &#39;mod_date&#39;]
 **direction** | **String**|  | [optional] [default to &#39;DESC&#39;]
 **host** | **String**|  | [optional] 
 **archive** | **Boolean**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## list13

> list13(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'contentInode': "contentInode_example" // String | 
};
apiInstance.list13(opts, (error, data, response) => {
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
 **contentInode** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## list14

> {String: Persona} list14(id)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let id = "id_example"; // String | 
apiInstance.list14(id, (error, data, response) => {
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

[**{String: Persona}**](Persona.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## list2

> {String: RestLanguage} list2()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.list2((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**{String: RestLanguage}**](RestLanguage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## list3

> {String: RestPersona} list3()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.list3((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**{String: RestPersona}**](RestPersona.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## list4

> {String: RestRule} list4(siteId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
apiInstance.list4(siteId, (error, data, response) => {
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
 **siteId** | **String**|  | 

### Return type

[**{String: RestRule}**](RestRule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## list5

> list5(siteId, ruleId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
let ruleId = "ruleId_example"; // String | 
apiInstance.list5(siteId, ruleId, (error, data, response) => {
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
 **siteId** | **String**|  | 
 **ruleId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## list6

> list6(siteId, conditionId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
let conditionId = "conditionId_example"; // String | 
apiInstance.list6(siteId, conditionId, (error, data, response) => {
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
 **siteId** | **String**|  | 
 **conditionId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## list7

> list7()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.list7((error, data, response) => {
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


## list8

> list8()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.list8((error, data, response) => {
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


## list9

> list9(lang, rsrc)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let lang = "lang_example"; // String | 
let rsrc = "rsrc_example"; // String | 
apiInstance.list9(lang, rsrc, (error, data, response) => {
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
 **lang** | **String**|  | 
 **rsrc** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAvailableApps

> listAvailableApps(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'filter': "filter_example" // String | 
};
apiInstance.listAvailableApps(opts, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## loadAssetsUnder

> loadAssetsUnder(sitename)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let sitename = "sitename_example"; // String | 
apiInstance.loadAssetsUnder(sitename, (error, data, response) => {
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
 **sitename** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## loadAssetsUnder1

> loadAssetsUnder1(sitename, uri)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let sitename = "sitename_example"; // String | 
let uri = "uri_example"; // String | 
apiInstance.loadAssetsUnder1(sitename, uri, (error, data, response) => {
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
 **sitename** | **String**|  | 
 **uri** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## loadById

> loadById(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.loadById(params, (error, data, response) => {
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


## loadByName

> loadByName(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.loadByName(params, (error, data, response) => {
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


## loadChildren

> loadChildren(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.loadChildren(params, (error, data, response) => {
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


## loadEnvironments

> loadEnvironments(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.loadEnvironments(params, (error, data, response) => {
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


## loadFolderAndSubFoldersByPath

> loadFolderAndSubFoldersByPath(siteId, path)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
let path = "path_example"; // String | 
apiInstance.loadFolderAndSubFoldersByPath(siteId, path, (error, data, response) => {
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
 **siteId** | **String**|  | 
 **path** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## loadFolderByURI

> loadFolderByURI(siteName, uri)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteName = "siteName_example"; // String | 
let uri = "uri_example"; // String | 
apiInstance.loadFolderByURI(siteName, uri, (error, data, response) => {
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
 **siteName** | **String**|  | 
 **uri** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## loadJson

> loadJson(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.loadJson(params, (error, data, response) => {
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


## loadRoleByRoleId

> loadRoleByRoleId(roleid, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let roleid = "roleid_example"; // String | 
let opts = {
  'loadChildrenRoles': true // Boolean | 
};
apiInstance.loadRoleByRoleId(roleid, opts, (error, data, response) => {
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
 **roleid** | **String**|  | 
 **loadChildrenRoles** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## loadRootRoles

> loadRootRoles(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'loadChildrenRoles': true // Boolean | 
};
apiInstance.loadRootRoles(opts, (error, data, response) => {
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
 **loadChildrenRoles** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## loadUsersAndRolesByRoleId

> loadUsersAndRolesByRoleId(roleid, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let roleid = "roleid_example"; // String | 
let opts = {
  'roleHierarchyForAssign': false, // Boolean | 
  'name': "name_example" // String | 
};
apiInstance.loadUsersAndRolesByRoleId(roleid, opts, (error, data, response) => {
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
 **roleid** | **String**|  | 
 **roleHierarchyForAssign** | **Boolean**|  | [optional] [default to false]
 **name** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## loginAs

> loginAs(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'loginAsForm': new DotCmsRestApi.LoginAsForm() // LoginAsForm | 
};
apiInstance.loginAs(opts, (error, data, response) => {
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
 **loginAsForm** | [**LoginAsForm**](LoginAsForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## loginAsData

> loginAsData(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'filter': "filter_example", // String | 
  'page': 56, // Number | 
  'perPage': 56 // Number | 
};
apiInstance.loginAsData(opts, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## loginForm

> loginForm(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'i18NForm': new DotCmsRestApi.I18NForm() // I18NForm | 
};
apiInstance.loginForm(opts, (error, data, response) => {
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
 **i18NForm** | [**I18NForm**](I18NForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## logout

> logout()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.logout((error, data, response) => {
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


## logoutAs

> logoutAs()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.logoutAs((error, data, response) => {
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


## logoutGet

> logoutGet(idpConfigId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let idpConfigId = "idpConfigId_example"; // String | 
apiInstance.logoutGet(idpConfigId, (error, data, response) => {
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
 **idpConfigId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/html, application/xhtml+xml


## logoutPost

> logoutPost(idpConfigId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let idpConfigId = "idpConfigId_example"; // String | 
apiInstance.logoutPost(idpConfigId, (error, data, response) => {
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
 **idpConfigId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/html, application/xhtml+xml


## makeDefault

> makeDefault(siteId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
apiInstance.makeDefault(siteId, (error, data, response) => {
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
 **siteId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## makeDefault1

> makeDefault1(language, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let language = 789; // Number | 
let opts = {
  'makeDefaultLangForm': new DotCmsRestApi.MakeDefaultLangForm() // MakeDefaultLangForm | 
};
apiInstance.makeDefault1(language, opts, (error, data, response) => {
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
 **language** | **Number**|  | 
 **makeDefaultLangForm** | [**MakeDefaultLangForm**](MakeDefaultLangForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## markAsRead

> markAsRead()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.markAsRead((error, data, response) => {
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


## metadata

> metadata(idpConfigId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let idpConfigId = "idpConfigId_example"; // String | 
apiInstance.metadata(idpConfigId, (error, data, response) => {
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
 **idpConfigId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml


## modIndex

> modIndex(indexName, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let indexName = "indexName_example"; // String | 
let opts = {
  'action': "action_example" // String | 
};
apiInstance.modIndex(indexName, opts, (error, data, response) => {
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
 **indexName** | **String**|  | 
 **action** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## moveFields

> moveFields(typeIdOrVarName, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeIdOrVarName = "typeIdOrVarName_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.moveFields(typeIdOrVarName, opts, (error, data, response) => {
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
 **typeIdOrVarName** | **String**|  | 
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript


## openIndex

> openIndex(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.openIndex(params, (error, data, response) => {
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
- **Accept**: */*


## optimizeIndices

> optimizeIndices()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.optimizeIndices((error, data, response) => {
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


## patchMultipart

> patchMultipart(folder, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let folder = "folder_example"; // String | 
let opts = {
  'contentDisposition': new DotCmsRestApi.ContentDisposition(), // ContentDisposition | 
  'entity': {key: null}, // Object | 
  'mediaType': new DotCmsRestApi.BodyPartMediaType(), // BodyPartMediaType | 
  'messageBodyWorkers': {key: null}, // Object | 
  'parent': new DotCmsRestApi.MultiPart(), // MultiPart | 
  'providers': {key: null}, // Object | 
  'bodyParts': [new DotCmsRestApi.BodyPart()] // [BodyPart] | 
};
apiInstance.patchMultipart(folder, opts, (error, data, response) => {
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
 **folder** | **String**|  | 
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


## patchMultipart1

> patchMultipart1(pathParam, folder, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let pathParam = "pathParam_example"; // String | 
let folder = "folder_example"; // String | 
let opts = {
  'contentDisposition': new DotCmsRestApi.ContentDisposition(), // ContentDisposition | 
  'entity': {key: null}, // Object | 
  'mediaType': new DotCmsRestApi.BodyPartMediaType(), // BodyPartMediaType | 
  'messageBodyWorkers': {key: null}, // Object | 
  'parent': new DotCmsRestApi.MultiPart(), // MultiPart | 
  'providers': {key: null}, // Object | 
  'bodyParts': [new DotCmsRestApi.BodyPart()] // [BodyPart] | 
};
apiInstance.patchMultipart1(pathParam, folder, opts, (error, data, response) => {
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
 **pathParam** | **String**|  | 
 **folder** | **String**|  | 
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


## personalizePageContainers

> personalizePageContainers(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'personalizationPersonaPageForm': new DotCmsRestApi.PersonalizationPersonaPageForm() // PersonalizationPersonaPageForm | 
};
apiInstance.personalizePageContainers(opts, (error, data, response) => {
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
 **personalizationPersonaPageForm** | [**PersonalizationPersonaPageForm**](PersonalizationPersonaPageForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## personalizePageContainers1

> personalizePageContainers1(pageId, personalization)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let pageId = "pageId_example"; // String | 
let personalization = "personalization_example"; // String | 
apiInstance.personalizePageContainers1(pageId, personalization, (error, data, response) => {
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
 **personalization** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## pickLicense

> pickLicense(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.pickLicense(params, (error, data, response) => {
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
- **Accept**: */*


## ping

> ping()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.ping((error, data, response) => {
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


## postMultipart

> postMultipart(folder, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let folder = "folder_example"; // String | 
let opts = {
  'contentDisposition': new DotCmsRestApi.ContentDisposition(), // ContentDisposition | 
  'entity': {key: null}, // Object | 
  'mediaType': new DotCmsRestApi.BodyPartMediaType(), // BodyPartMediaType | 
  'messageBodyWorkers': {key: null}, // Object | 
  'parent': new DotCmsRestApi.MultiPart(), // MultiPart | 
  'providers': {key: null}, // Object | 
  'bodyParts': [new DotCmsRestApi.BodyPart()] // [BodyPart] | 
};
apiInstance.postMultipart(folder, opts, (error, data, response) => {
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
 **folder** | **String**|  | 
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


## postMultipart1

> postMultipart1(pathParam, folder, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let pathParam = "pathParam_example"; // String | 
let folder = "folder_example"; // String | 
let opts = {
  'contentDisposition': new DotCmsRestApi.ContentDisposition(), // ContentDisposition | 
  'entity': {key: null}, // Object | 
  'mediaType': new DotCmsRestApi.BodyPartMediaType(), // BodyPartMediaType | 
  'messageBodyWorkers': {key: null}, // Object | 
  'parent': new DotCmsRestApi.MultiPart(), // MultiPart | 
  'providers': {key: null}, // Object | 
  'bodyParts': [new DotCmsRestApi.BodyPart()] // [BodyPart] | 
};
apiInstance.postMultipart1(pathParam, folder, opts, (error, data, response) => {
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
 **pathParam** | **String**|  | 
 **folder** | **String**|  | 
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


## processBundle

> processBundle(bundle)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let bundle = "bundle_example"; // String | 
apiInstance.processBundle(bundle, (error, data, response) => {
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
 **bundle** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## processLogin

> processLogin(idpConfigId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let idpConfigId = "idpConfigId_example"; // String | 
apiInstance.processLogin(idpConfigId, (error, data, response) => {
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
 **idpConfigId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, text/html


## publish

> publish(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'type': "type_example", // String | 
  'callback': "callback_example", // String | 
  'FORCE_PUSH': true // Boolean | 
};
apiInstance.publish(opts, (error, data, response) => {
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
 **type** | **String**|  | [optional] 
 **callback** | **String**|  | [optional] 
 **FORCE_PUSH** | **Boolean**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## publish1

> publish1(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'containerId': "containerId_example" // String | 
};
apiInstance.publish1(opts, (error, data, response) => {
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
 **containerId** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## publish2

> publish2(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'requestBody': ["null"] // [String] | 
};
apiInstance.publish2(opts, (error, data, response) => {
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
 **requestBody** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## publishSite

> publishSite(siteId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
apiInstance.publishSite(siteId, (error, data, response) => {
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
 **siteId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## pullRelated

> ResponseEntityView pullRelated(opts)

Pull Related Content

### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'pullRelatedForm': new DotCmsRestApi.PullRelatedForm() // PullRelatedForm | 
};
apiInstance.pullRelated(opts, (error, data, response) => {
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
 **pullRelatedForm** | [**PullRelatedForm**](PullRelatedForm.md)|  | [optional] 

### Return type

[**ResponseEntityView**](ResponseEntityView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putMultipart

> putMultipart(folder, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let folder = "folder_example"; // String | 
let opts = {
  'contentDisposition': new DotCmsRestApi.ContentDisposition(), // ContentDisposition | 
  'entity': {key: null}, // Object | 
  'mediaType': new DotCmsRestApi.BodyPartMediaType(), // BodyPartMediaType | 
  'messageBodyWorkers': {key: null}, // Object | 
  'parent': new DotCmsRestApi.MultiPart(), // MultiPart | 
  'providers': {key: null}, // Object | 
  'bodyParts': [new DotCmsRestApi.BodyPart()] // [BodyPart] | 
};
apiInstance.putMultipart(folder, opts, (error, data, response) => {
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
 **folder** | **String**|  | 
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


## putMultipart1

> putMultipart1(pathParam, folder, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let pathParam = "pathParam_example"; // String | 
let folder = "folder_example"; // String | 
let opts = {
  'contentDisposition': new DotCmsRestApi.ContentDisposition(), // ContentDisposition | 
  'entity': {key: null}, // Object | 
  'mediaType': new DotCmsRestApi.BodyPartMediaType(), // BodyPartMediaType | 
  'messageBodyWorkers': {key: null}, // Object | 
  'parent': new DotCmsRestApi.MultiPart(), // MultiPart | 
  'providers': {key: null}, // Object | 
  'bodyParts': [new DotCmsRestApi.BodyPart()] // [BodyPart] | 
};
apiInstance.putMultipart1(pathParam, folder, opts, (error, data, response) => {
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
 **pathParam** | **String**|  | 
 **folder** | **String**|  | 
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


## putZipFile

> putZipFile(params, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
let opts = {
  'file': new DotCmsRestApi.FormDataContentDisposition(), // FormDataContentDisposition | 
  '_return': "_return_example" // String | 
};
apiInstance.putZipFile(params, opts, (error, data, response) => {
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
 **file** | [**FormDataContentDisposition**](FormDataContentDisposition.md)|  | [optional] 
 **_return** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: */*


## regenerateKey

> regenerateKey()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.regenerateKey((error, data, response) => {
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


## remove

> remove(siteId, ruleId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
let ruleId = "ruleId_example"; // String | 
apiInstance.remove(siteId, ruleId, (error, data, response) => {
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
 **siteId** | **String**|  | 
 **ruleId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## remove1

> remove1(siteId, actionId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
let actionId = "actionId_example"; // String | 
apiInstance.remove1(siteId, actionId, (error, data, response) => {
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
 **siteId** | **String**|  | 
 **actionId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## remove2

> remove2(siteId, ruleId, conditionGroupId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
let ruleId = "ruleId_example"; // String | 
let conditionGroupId = "conditionGroupId_example"; // String | 
apiInstance.remove2(siteId, ruleId, conditionGroupId, (error, data, response) => {
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
 **siteId** | **String**|  | 
 **ruleId** | **String**|  | 
 **conditionGroupId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## remove3

> remove3(siteId, conditionId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
let conditionId = "conditionId_example"; // String | 
apiInstance.remove3(siteId, conditionId, (error, data, response) => {
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
 **siteId** | **String**|  | 
 **conditionId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## remove4

> remove4(siteId, conditionId, valueId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
let conditionId = "conditionId_example"; // String | 
let valueId = "valueId_example"; // String | 
apiInstance.remove4(siteId, conditionId, valueId, (error, data, response) => {
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
 **siteId** | **String**|  | 
 **conditionId** | **String**|  | 
 **valueId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## removeContentletFromContainer

> removeContentletFromContainer(containerId, contentletId, uid, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let containerId = "containerId_example"; // String | 
let contentletId = "contentletId_example"; // String | 
let uid = "uid_example"; // String | 
let opts = {
  'order': 789 // Number | 
};
apiInstance.removeContentletFromContainer(containerId, contentletId, uid, opts, (error, data, response) => {
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
 **containerId** | **String**|  | 
 **contentletId** | **String**|  | 
 **uid** | **String**|  | 
 **order** | **Number**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## removeFromCluster

> removeFromCluster(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.removeFromCluster(params, (error, data, response) => {
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
- **Accept**: */*


## requestLicense

> requestLicense(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.requestLicense(params, (error, data, response) => {
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
- **Accept**: */*


## resetLicense

> resetLicense(params)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let params = "params_example"; // String | 
apiInstance.resetLicense(params, (error, data, response) => {
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
- **Accept**: */*


## resetPassword

> resetPassword(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'resetPasswordForm': new DotCmsRestApi.ResetPasswordForm() // ResetPasswordForm | 
};
apiInstance.resetPassword(opts, (error, data, response) => {
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
 **resetPasswordForm** | [**ResetPasswordForm**](ResetPasswordForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## revokeApiToken

> revokeApiToken(tokenId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let tokenId = "tokenId_example"; // String | 
apiInstance.revokeApiToken(tokenId, (error, data, response) => {
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
 **tokenId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## revokeUserToken

> revokeUserToken(userid)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let userid = "userid_example"; // String | 
apiInstance.revokeUserToken(userid, (error, data, response) => {
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
 **userid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## revokeUsersToken

> revokeUsersToken()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.revokeUsersToken((error, data, response) => {
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


## save

> save(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'categoryEditForm': new DotCmsRestApi.CategoryEditForm() // CategoryEditForm | 
};
apiInstance.save(opts, (error, data, response) => {
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
 **categoryEditForm** | [**CategoryEditForm**](CategoryEditForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## save1

> CategoryView save1(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'categoryForm': new DotCmsRestApi.CategoryForm() // CategoryForm | 
};
apiInstance.save1(opts, (error, data, response) => {
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
 **categoryForm** | [**CategoryForm**](CategoryForm.md)|  | [optional] 

### Return type

[**CategoryView**](CategoryView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## save2

> save2(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'templateForm': new DotCmsRestApi.TemplateForm() // TemplateForm | 
};
apiInstance.save2(opts, (error, data, response) => {
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
 **templateForm** | [**TemplateForm**](TemplateForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## saveAndPublish

> saveAndPublish(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'templateForm': new DotCmsRestApi.TemplateForm() // TemplateForm | 
};
apiInstance.saveAndPublish(opts, (error, data, response) => {
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
 **templateForm** | [**TemplateForm**](TemplateForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## saveCompanyAuthTypeInfo

> saveCompanyAuthTypeInfo(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'user': "user_example", // String | 
  'password': "password_example", // String | 
  'authType': "authType_example" // String | 
};
apiInstance.saveCompanyAuthTypeInfo(opts, (error, data, response) => {
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
 **user** | **String**|  | [optional] 
 **password** | **String**|  | [optional] 
 **authType** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## saveCompanyBasicInfo

> saveCompanyBasicInfo(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'user': "user_example", // String | 
  'password': "password_example", // String | 
  'portalURL': "portalURL_example", // String | 
  'mx': "mx_example", // String | 
  'emailAddress': "emailAddress_example", // String | 
  'size': "size_example", // String | 
  'type': "type_example", // String | 
  'street': "street_example", // String | 
  'homeURL': "homeURL_example", // String | 
  'city': "city_example", // String | 
  'state': "state_example" // String | 
};
apiInstance.saveCompanyBasicInfo(opts, (error, data, response) => {
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
 **user** | **String**|  | [optional] 
 **password** | **String**|  | [optional] 
 **portalURL** | **String**|  | [optional] 
 **mx** | **String**|  | [optional] 
 **emailAddress** | **String**|  | [optional] 
 **size** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **street** | **String**|  | [optional] 
 **homeURL** | **String**|  | [optional] 
 **city** | **String**|  | [optional] 
 **state** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## saveCompanyLocaleInfo

> saveCompanyLocaleInfo(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'user': "user_example", // String | 
  'password': "password_example", // String | 
  'languageId': "languageId_example", // String | 
  'timeZoneId': "timeZoneId_example" // String | 
};
apiInstance.saveCompanyLocaleInfo(opts, (error, data, response) => {
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
 **user** | **String**|  | [optional] 
 **password** | **String**|  | [optional] 
 **languageId** | **String**|  | [optional] 
 **timeZoneId** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## saveCompanyLogo

> saveCompanyLogo(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'user': "user_example", // String | 
  'password': "password_example", // String | 
  'logoFile': new DotCmsRestApi.FormDataContentDisposition() // FormDataContentDisposition | 
};
apiInstance.saveCompanyLogo(opts, (error, data, response) => {
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
 **user** | **String**|  | [optional] 
 **password** | **String**|  | [optional] 
 **logoFile** | [**FormDataContentDisposition**](FormDataContentDisposition.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: text/html


## saveDraft

> saveDraft(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'templateForm': new DotCmsRestApi.TemplateForm() // TemplateForm | 
};
apiInstance.saveDraft(opts, (error, data, response) => {
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
 **templateForm** | [**TemplateForm**](TemplateForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## saveFromForm

> saveFromForm(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'filterDescriptorForm': new DotCmsRestApi.FilterDescriptorForm() // FilterDescriptorForm | 
};
apiInstance.saveFromForm(opts, (error, data, response) => {
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
 **filterDescriptorForm** | [**FilterDescriptorForm**](FilterDescriptorForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## saveFromLanguageTag

> saveFromLanguageTag(languageTag)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let languageTag = "languageTag_example"; // String | 
apiInstance.saveFromLanguageTag(languageTag, (error, data, response) => {
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
 **languageTag** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## saveLanguage

> saveLanguage(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'languageForm': new DotCmsRestApi.LanguageForm() // LanguageForm | 
};
apiInstance.saveLanguage(opts, (error, data, response) => {
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
 **languageForm** | [**LanguageForm**](LanguageForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## saveNew

> CategoryView saveNew(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'categoryForm': new DotCmsRestApi.CategoryForm() // CategoryForm | 
};
apiInstance.saveNew(opts, (error, data, response) => {
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
 **categoryForm** | [**CategoryForm**](CategoryForm.md)|  | [optional] 

### Return type

[**CategoryView**](CategoryView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## saveNew1

> saveNew1(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'containerForm': new DotCmsRestApi.ContainerForm() // ContainerForm | 
};
apiInstance.saveNew1(opts, (error, data, response) => {
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
 **containerForm** | [**ContainerForm**](ContainerForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## saveNew2

> saveNew2(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'templateForm': new DotCmsRestApi.TemplateForm() // TemplateForm | 
};
apiInstance.saveNew2(opts, (error, data, response) => {
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
 **templateForm** | [**TemplateForm**](TemplateForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## saveRoleLayouts

> saveRoleLayouts(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'roleLayoutForm': new DotCmsRestApi.RoleLayoutForm() // RoleLayoutForm | 
};
apiInstance.saveRoleLayouts(opts, (error, data, response) => {
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
 **roleLayoutForm** | [**RoleLayoutForm**](RoleLayoutForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## saveSiteVariable

> ResponseHostVariableEntityView saveSiteVariable(opts)

Save a Site Variable

### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'siteVariableForm': new DotCmsRestApi.SiteVariableForm() // SiteVariableForm | 
};
apiInstance.saveSiteVariable(opts, (error, data, response) => {
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
 **siteVariableForm** | [**SiteVariableForm**](SiteVariableForm.md)|  | [optional] 

### Return type

[**ResponseHostVariableEntityView**](ResponseHostVariableEntityView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## saveTest

> saveTest(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'user': "user_example", // String | 
  'password': "password_example", // String | 
  'param1': "param1_example", // String | 
  'param2': "param2_example", // String | 
  'type': "type_example", // String | 
  'callback': "callback_example" // String | 
};
apiInstance.saveTest(opts, (error, data, response) => {
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
 **user** | **String**|  | [optional] 
 **password** | **String**|  | [optional] 
 **param1** | **String**|  | [optional] 
 **param2** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **callback** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## search1

> search1(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'depth': "depth_example", // String | 
  'live': true, // Boolean | 
  'allCategoriesInfo': true, // Boolean | 
  'body': "body_example" // String | 
};
apiInstance.search1(opts, (error, data, response) => {
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
 **depth** | **String**|  | [optional] 
 **live** | **Boolean**|  | [optional] 
 **allCategoriesInfo** | **Boolean**|  | [optional] 
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchPost

> searchPost(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'depth': "depth_example", // String | 
  'live': true, // Boolean | 
  'allCategoriesInfo': true, // Boolean | 
  'body': "body_example" // String | 
};
apiInstance.searchPost(opts, (error, data, response) => {
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
 **depth** | **String**|  | [optional] 
 **live** | **Boolean**|  | [optional] 
 **allCategoriesInfo** | **Boolean**|  | [optional] 
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchRaw

> searchRaw()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.searchRaw((error, data, response) => {
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


## searchRawGet

> searchRawGet()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.searchRawGet((error, data, response) => {
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


## searchRoles

> ResponseEntitySmallRoleView searchRoles(opts)

Search Roles

### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'searchName': "''", // String | Value to filter by role name
  'searchKey': "''", // String | Value to filter by role key
  'roleId': "''", // String | Value for specific role id
  'start': 0, // Number | Offset on pagination
  'count': 20, // Number | Size on pagination
  'includeUserRoles': true, // Boolean | Set false if do not want to include user rules
  'includeWorkflowRoles': false // Boolean | Set to true if want to include the workflow roles
};
apiInstance.searchRoles(opts, (error, data, response) => {
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
 **searchName** | **String**| Value to filter by role name | [optional] [default to &#39;&#39;]
 **searchKey** | **String**| Value to filter by role key | [optional] [default to &#39;&#39;]
 **roleId** | **String**| Value for specific role id | [optional] [default to &#39;&#39;]
 **start** | **Number**| Offset on pagination | [optional] [default to 0]
 **count** | **Number**| Size on pagination | [optional] [default to 20]
 **includeUserRoles** | **Boolean**| Set false if do not want to include user rules | [optional] [default to true]
 **includeWorkflowRoles** | **Boolean**| Set to true if want to include the workflow roles | [optional] [default to false]

### Return type

[**ResponseEntitySmallRoleView**](ResponseEntitySmallRoleView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## selectFolder

> selectFolder(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'openFolderForm': new DotCmsRestApi.OpenFolderForm() // OpenFolderForm | 
};
apiInstance.selectFolder(opts, (error, data, response) => {
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
 **openFolderForm** | [**OpenFolderForm**](OpenFolderForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## selectFolder1

> selectFolder1(id)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let id = "id_example"; // String | 
apiInstance.selectFolder1(id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## self

> RestPersona self(siteId, id)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
let id = "id_example"; // String | 
apiInstance.self(siteId, id, (error, data, response) => {
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
 **siteId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**RestPersona**](RestPersona.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## self1

> RestRule self1(siteId, ruleId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
let ruleId = "ruleId_example"; // String | 
apiInstance.self1(siteId, ruleId, (error, data, response) => {
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
 **siteId** | **String**|  | 
 **ruleId** | **String**|  | 

### Return type

[**RestRule**](RestRule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## self2

> RestRuleAction self2(siteId, actionId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
let actionId = "actionId_example"; // String | 
apiInstance.self2(siteId, actionId, (error, data, response) => {
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
 **siteId** | **String**|  | 
 **actionId** | **String**|  | 

### Return type

[**RestRuleAction**](RestRuleAction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## self3

> RestConditionGroup self3(siteId, ruleId, groupId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
let ruleId = "ruleId_example"; // String | 
let groupId = "groupId_example"; // String | 
apiInstance.self3(siteId, ruleId, groupId, (error, data, response) => {
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
 **siteId** | **String**|  | 
 **ruleId** | **String**|  | 
 **groupId** | **String**|  | 

### Return type

[**RestConditionGroup**](RestConditionGroup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## self4

> self4(siteId, conditionId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
let conditionId = "conditionId_example"; // String | 
apiInstance.self4(siteId, conditionId, (error, data, response) => {
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
 **siteId** | **String**|  | 
 **conditionId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## self5

> self5(siteId, conditionId, valueId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
let conditionId = "conditionId_example"; // String | 
let valueId = "valueId_example"; // String | 
apiInstance.self5(siteId, conditionId, valueId, (error, data, response) => {
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
 **siteId** | **String**|  | 
 **conditionId** | **String**|  | 
 **valueId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## self6

> RestUser self6()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.self6((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestUser**](RestUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## set

> set(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'requestBody': {key: "null"} // {String: String} | 
};
apiInstance.set(opts, (error, data, response) => {
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
 **requestBody** | [**{String: String}**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## set1

> set1(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'setForm': new DotCmsRestApi.SetForm() // SetForm | 
};
apiInstance.set1(opts, (error, data, response) => {
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
 **setForm** | [**SetForm**](SetForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## setHash

> setHash(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'setHashForm': new DotCmsRestApi.SetHashForm() // SetHashForm | 
};
apiInstance.setHash(opts, (error, data, response) => {
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
 **setHashForm** | [**SetHashForm**](SetHashForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## showObject

> showObject(provider, group, id)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let provider = "provider_example"; // String | 
let group = "group_example"; // String | 
let id = "id_example"; // String | 
apiInstance.showObject(provider, group, id, (error, data, response) => {
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
 **provider** | **String**|  | 
 **group** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## showObjects

> showObjects(provider, group)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let provider = "provider_example"; // String | 
let group = "group_example"; // String | 
apiInstance.showObjects(provider, group, (error, data, response) => {
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
 **provider** | **String**|  | 
 **group** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## showProviders

> showProviders(group)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let group = "group_example"; // String | 
apiInstance.showProviders(group, (error, data, response) => {
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
 **group** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## showProviders1

> showProviders1(provider, group)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let provider = "provider_example"; // String | 
let group = "group_example"; // String | 
apiInstance.showProviders1(provider, group, (error, data, response) => {
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
 **provider** | **String**|  | 
 **group** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## shutdown

> shutdown()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.shutdown((error, data, response) => {
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


## sites

> sites(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'filter': "filter_example", // String | 
  'archive': true, // Boolean | 
  'live': true, // Boolean | 
  'system': true, // Boolean | 
  'page': 56, // Number | 
  'perPage': 56 // Number | 
};
apiInstance.sites(opts, (error, data, response) => {
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
 **archive** | **Boolean**|  | [optional] 
 **live** | **Boolean**|  | [optional] 
 **system** | **Boolean**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## startReindex

> startReindex(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'shards': 56, // Number | 
  'contentType': "'DOTALL'" // String | 
};
apiInstance.startReindex(opts, (error, data, response) => {
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
 **shards** | **Number**|  | [optional] 
 **contentType** | **String**|  | [optional] [default to &#39;DOTALL&#39;]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statusCheck

> statusCheck()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.statusCheck((error, data, response) => {
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


## stopReindexation

> stopReindexation(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  '_switch': true // Boolean | 
};
apiInstance.stopReindexation(opts, (error, data, response) => {
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
 **_switch** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## switchSite

> switchSite()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.switchSite((error, data, response) => {
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


## switchSite1

> switchSite1(id)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let id = "id_example"; // String | 
apiInstance.switchSite1(id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## testCluster

> testCluster()



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
apiInstance.testCluster((error, data, response) => {
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
- **Accept**: */*


## unarchive

> unarchive(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'containerId': "containerId_example" // String | 
};
apiInstance.unarchive(opts, (error, data, response) => {
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
 **containerId** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## unarchive1

> unarchive1(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'requestBody': ["null"] // [String] | 
};
apiInstance.unarchive1(opts, (error, data, response) => {
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
 **requestBody** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## unarchiveSite

> unarchiveSite(siteId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
apiInstance.unarchiveSite(siteId, (error, data, response) => {
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
 **siteId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## unpublish

> unpublish(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'containerId': "containerId_example" // String | 
};
apiInstance.unpublish(opts, (error, data, response) => {
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
 **containerId** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## unpublish1

> unpublish1(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'requestBody': ["null"] // [String] | 
};
apiInstance.unpublish1(opts, (error, data, response) => {
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
 **requestBody** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## unpublishSite

> unpublishSite(siteId)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
apiInstance.unpublishSite(siteId, (error, data, response) => {
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
 **siteId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## update

> update(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'containerForm': new DotCmsRestApi.ContainerForm() // ContainerForm | 
};
apiInstance.update(opts, (error, data, response) => {
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
 **containerForm** | [**ContainerForm**](ContainerForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## update2

> RestRule update2(siteId, ruleId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
let ruleId = "ruleId_example"; // String | 
let opts = {
  'restRule': new DotCmsRestApi.RestRule() // RestRule | 
};
apiInstance.update2(siteId, ruleId, opts, (error, data, response) => {
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
 **siteId** | **String**|  | 
 **ruleId** | **String**|  | 
 **restRule** | [**RestRule**](RestRule.md)|  | [optional] 

### Return type

[**RestRule**](RestRule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript


## update3

> RestRuleAction update3(siteId, actionId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
let actionId = "actionId_example"; // String | 
let opts = {
  'restRuleAction': new DotCmsRestApi.RestRuleAction() // RestRuleAction | 
};
apiInstance.update3(siteId, actionId, opts, (error, data, response) => {
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
 **siteId** | **String**|  | 
 **actionId** | **String**|  | 
 **restRuleAction** | [**RestRuleAction**](RestRuleAction.md)|  | [optional] 

### Return type

[**RestRuleAction**](RestRuleAction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## update4

> RestConditionGroup update4(siteId, ruleId, groupId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
let ruleId = "ruleId_example"; // String | 
let groupId = "groupId_example"; // String | 
let opts = {
  'restConditionGroup': new DotCmsRestApi.RestConditionGroup() // RestConditionGroup | 
};
apiInstance.update4(siteId, ruleId, groupId, opts, (error, data, response) => {
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
 **siteId** | **String**|  | 
 **ruleId** | **String**|  | 
 **groupId** | **String**|  | 
 **restConditionGroup** | [**RestConditionGroup**](RestConditionGroup.md)|  | [optional] 

### Return type

[**RestConditionGroup**](RestConditionGroup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## update5

> RestCondition update5(siteId, conditionId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
let conditionId = "conditionId_example"; // String | 
let opts = {
  'restCondition': new DotCmsRestApi.RestCondition() // RestCondition | 
};
apiInstance.update5(siteId, conditionId, opts, (error, data, response) => {
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
 **siteId** | **String**|  | 
 **conditionId** | **String**|  | 
 **restCondition** | [**RestCondition**](RestCondition.md)|  | [optional] 

### Return type

[**RestCondition**](RestCondition.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## update6

> RestConditionValue update6(siteId, conditionId, valueId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let siteId = "siteId_example"; // String | 
let conditionId = "conditionId_example"; // String | 
let valueId = "valueId_example"; // String | 
let opts = {
  'restConditionValue': new DotCmsRestApi.RestConditionValue() // RestConditionValue | 
};
apiInstance.update6(siteId, conditionId, valueId, opts, (error, data, response) => {
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
 **siteId** | **String**|  | 
 **conditionId** | **String**|  | 
 **valueId** | **String**|  | 
 **restConditionValue** | [**RestConditionValue**](RestConditionValue.md)|  | [optional] 

### Return type

[**RestConditionValue**](RestConditionValue.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## update7

> update7(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'updateUserForm': new DotCmsRestApi.UpdateUserForm() // UpdateUserForm | 
};
apiInstance.update7(opts, (error, data, response) => {
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
 **updateUserForm** | [**UpdateUserForm**](UpdateUserForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## updateAppIndividualSecret

> updateAppIndividualSecret(key, siteId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let key = "key_example"; // String | 
let siteId = "siteId_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.updateAppIndividualSecret(key, siteId, opts, (error, data, response) => {
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
 **key** | **String**|  | 
 **siteId** | **String**|  | 
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## updateBundles

> updateBundles(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'contentDisposition': new DotCmsRestApi.ContentDisposition(), // ContentDisposition | 
  'entity': {key: null}, // Object | 
  'mediaType': new DotCmsRestApi.BodyPartMediaType(), // BodyPartMediaType | 
  'messageBodyWorkers': {key: null}, // Object | 
  'parent': new DotCmsRestApi.MultiPart(), // MultiPart | 
  'providers': {key: null}, // Object | 
  'bodyParts': [new DotCmsRestApi.BodyPart()] // [BodyPart] | 
};
apiInstance.updateBundles(opts, (error, data, response) => {
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
- **Accept**: application/json, application/javascript


## updateContentTypeFieldById

> updateContentTypeFieldById(typeId, fieldId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeId = "typeId_example"; // String | 
let fieldId = "fieldId_example"; // String | 
let opts = {
  'body': "body_example" // String | 
};
apiInstance.updateContentTypeFieldById(typeId, fieldId, opts, (error, data, response) => {
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
 **typeId** | **String**|  | 
 **fieldId** | **String**|  | 
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript


## updateContentTypeFieldById1

> updateContentTypeFieldById1(fieldId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let fieldId = "fieldId_example"; // String | 
let opts = {
  'body': "body_example" // String | 
};
apiInstance.updateContentTypeFieldById1(fieldId, opts, (error, data, response) => {
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
 **fieldId** | **String**|  | 
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript


## updateContentTypeFieldByVar

> updateContentTypeFieldByVar(typeId, fieldVar, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeId = "typeId_example"; // String | 
let fieldVar = "fieldVar_example"; // String | 
let opts = {
  'body': "body_example" // String | 
};
apiInstance.updateContentTypeFieldByVar(typeId, fieldVar, opts, (error, data, response) => {
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
 **typeId** | **String**|  | 
 **fieldVar** | **String**|  | 
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript


## updateContentTypeFieldByVar1

> updateContentTypeFieldByVar1(typeIdOrVarName, fieldVar, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeIdOrVarName = "typeIdOrVarName_example"; // String | 
let fieldVar = "fieldVar_example"; // String | 
let opts = {
  'body': "body_example" // String | 
};
apiInstance.updateContentTypeFieldByVar1(typeIdOrVarName, fieldVar, opts, (error, data, response) => {
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
 **typeIdOrVarName** | **String**|  | 
 **fieldVar** | **String**|  | 
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript


## updateField

> updateField(typeIdOrVarName, id, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeIdOrVarName = "typeIdOrVarName_example"; // String | 
let id = "id_example"; // String | 
let opts = {
  'updateFieldForm': new DotCmsRestApi.UpdateFieldForm() // UpdateFieldForm | 
};
apiInstance.updateField(typeIdOrVarName, id, opts, (error, data, response) => {
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
 **typeIdOrVarName** | **String**|  | 
 **id** | **String**|  | 
 **updateFieldForm** | [**UpdateFieldForm**](UpdateFieldForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript


## updateFieldVariableByFieldId

> updateFieldVariableByFieldId(typeId, fieldId, fieldVarId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeId = "typeId_example"; // String | 
let fieldId = "fieldId_example"; // String | 
let fieldVarId = "fieldVarId_example"; // String | 
let opts = {
  'body': "body_example" // String | 
};
apiInstance.updateFieldVariableByFieldId(typeId, fieldId, fieldVarId, opts, (error, data, response) => {
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
 **typeId** | **String**|  | 
 **fieldId** | **String**|  | 
 **fieldVarId** | **String**|  | 
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript


## updateFieldVariableByFieldVar

> updateFieldVariableByFieldVar(typeId, fieldVar, fieldVarId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeId = "typeId_example"; // String | 
let fieldVar = "fieldVar_example"; // String | 
let fieldVarId = "fieldVarId_example"; // String | 
let opts = {
  'body': "body_example" // String | 
};
apiInstance.updateFieldVariableByFieldVar(typeId, fieldVar, fieldVarId, opts, (error, data, response) => {
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
 **typeId** | **String**|  | 
 **fieldVar** | **String**|  | 
 **fieldVarId** | **String**|  | 
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript


## updateFields

> updateFields(typeId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeId = "typeId_example"; // String | 
let opts = {
  'body': "body_example" // String | 
};
apiInstance.updateFields(typeId, opts, (error, data, response) => {
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
 **typeId** | **String**|  | 
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript


## updateFields1

> updateFields1(typeIdOrVarName, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let typeIdOrVarName = "typeIdOrVarName_example"; // String | 
let opts = {
  'body': "body_example" // String | 
};
apiInstance.updateFields1(typeIdOrVarName, opts, (error, data, response) => {
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
 **typeIdOrVarName** | **String**|  | 
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/javascript


## updateFromForm

> updateFromForm(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'filterDescriptorForm': new DotCmsRestApi.FilterDescriptorForm() // FilterDescriptorForm | 
};
apiInstance.updateFromForm(opts, (error, data, response) => {
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
 **filterDescriptorForm** | [**FilterDescriptorForm**](FilterDescriptorForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## updateLanguage

> updateLanguage(languageId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let languageId = "languageId_example"; // String | 
let opts = {
  'languageForm': new DotCmsRestApi.LanguageForm() // LanguageForm | 
};
apiInstance.updateLanguage(languageId, opts, (error, data, response) => {
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
 **languageId** | **String**|  | 
 **languageForm** | [**LanguageForm**](LanguageForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## updateSite

> updateSite(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'id': "id_example", // String | 
  'siteForm': new DotCmsRestApi.SiteForm() // SiteForm | 
};
apiInstance.updateSite(opts, (error, data, response) => {
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
 **id** | **String**|  | [optional] 
 **siteForm** | [**SiteForm**](SiteForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## updateTag

> updateTag(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'updateTagForm': new DotCmsRestApi.UpdateTagForm() // UpdateTagForm | 
};
apiInstance.updateTag(opts, (error, data, response) => {
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
 **updateTagForm** | [**UpdateTagForm**](UpdateTagForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## upgrade

> upgrade(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'upgradeTaskForm': new DotCmsRestApi.UpgradeTaskForm() // UpgradeTaskForm | 
};
apiInstance.upgrade(opts, (error, data, response) => {
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
 **upgradeTaskForm** | [**UpgradeTaskForm**](UpgradeTaskForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## uploadTempResourceMulti

> uploadTempResourceMulti(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'maxFileLength': "'-1'", // String | 
  'contentDisposition': new DotCmsRestApi.ContentDisposition(), // ContentDisposition | 
  'entity': {key: null}, // Object | 
  'mediaType': new DotCmsRestApi.BodyPartMediaType(), // BodyPartMediaType | 
  'messageBodyWorkers': {key: null}, // Object | 
  'parent': new DotCmsRestApi.MultiPart(), // MultiPart | 
  'providers': {key: null}, // Object | 
  'bodyParts': [new DotCmsRestApi.BodyPart()] // [BodyPart] | 
};
apiInstance.uploadTempResourceMulti(opts, (error, data, response) => {
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
 **maxFileLength** | **String**|  | [optional] [default to &#39;-1&#39;]
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
- **Accept**: application/octet-stream


## userHasLayout

> userHasLayout(layoutId, opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let layoutId = "layoutId_example"; // String | 
let opts = {
  'userid': "userid_example" // String | 
};
apiInstance.userHasLayout(layoutId, opts, (error, data, response) => {
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
 **layoutId** | **String**|  | 
 **userid** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript


## validateEmail

> validateEmail(opts)



### Example

```javascript
import DotCmsRestApi from 'dot_cms_rest_api';

let apiInstance = new DotCmsRestApi.DefaultApi();
let opts = {
  'companyEmailForm': new DotCmsRestApi.CompanyEmailForm() // CompanyEmailForm | 
};
apiInstance.validateEmail(opts, (error, data, response) => {
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
 **companyEmailForm** | [**CompanyEmailForm**](CompanyEmailForm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/javascript

