var PhonePe =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExternalConstants;
(function (ExternalConstants) {
    let Permission;
    (function (Permission) {
        Permission["READ_SMS"] = "READ_SMS";
        Permission["LOCATION"] = "LOCATION";
    })(Permission = ExternalConstants.Permission || (ExternalConstants.Permission = {}));
    let Species;
    (function (Species) {
        Species["web"] = "web";
        Species["native"] = "native";
    })(Species = ExternalConstants.Species || (ExternalConstants.Species = {}));
    let OS;
    (function (OS) {
        OS["ios"] = "ios";
        OS["android"] = "android";
    })(OS = ExternalConstants.OS || (ExternalConstants.OS = {}));
    let UserDetail;
    (function (UserDetail) {
        UserDetail["email"] = "email";
        UserDetail["name"] = "name";
        UserDetail["phoneNumber"] = "phoneNumber";
        UserDetail["isEmailVerified"] = "isEmailVerified";
    })(UserDetail = ExternalConstants.UserDetail || (ExternalConstants.UserDetail = {}));
})(ExternalConstants = exports.ExternalConstants || (exports.ExternalConstants = {}));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InternalConstants;
(function (InternalConstants) {
    InternalConstants.sdkVersion = '0.1';
    InternalConstants.PhonePeSDKRNMajorVersion = 0;
    InternalConstants.PhonePeSDKRNMinorVersion = 53;
    InternalConstants.data_preferences = 'database_versions';
    InternalConstants.PhonePeSDKVersion = 4;
    let ErrorCode;
    (function (ErrorCode) {
        ErrorCode.invalidParams = 'PARAMS_INVALID_OR_INSUFFICIENT';
    })(ErrorCode = InternalConstants.ErrorCode || (InternalConstants.ErrorCode = {}));
    let ActivityID;
    (function (ActivityID) {
        ActivityID.payments = 103;
        ActivityID.transactionDetails = 105;
    })(ActivityID = InternalConstants.ActivityID || (InternalConstants.ActivityID = {}));
    let PermissionsBridge;
    (function (PermissionsBridge) {
        PermissionsBridge.name = 'PermissionsBridge';
        PermissionsBridge.seekPermission = 'seekPermission';
        PermissionsBridge.openSettingsPage = 'openSettingsPageForPermission';
        PermissionsBridge.androidPrefix = 'android.permission.';
        PermissionsBridge.locationPermissionName = 'ACCESS_FINE_LOCATION';
        PermissionsBridge.kPermission = 'permission';
    })(PermissionsBridge = InternalConstants.PermissionsBridge || (InternalConstants.PermissionsBridge = {}));
    let AnalyticsBridge;
    (function (AnalyticsBridge) {
        AnalyticsBridge.bridgeName = 'AnalyticsBridge';
        AnalyticsBridge.methodName = 'logMerchantEvent';
        AnalyticsBridge.kName = 'name';
        AnalyticsBridge.kMetadata = 'metadata';
        AnalyticsBridge.kGroupingKey = 'groupingKey';
    })(AnalyticsBridge = InternalConstants.AnalyticsBridge || (InternalConstants.AnalyticsBridge = {}));
    let AuthBridge;
    (function (AuthBridge) {
        AuthBridge.bridgeName = 'AuthBridge';
        AuthBridge.methodName = 'fetchGrantToken';
    })(AuthBridge = InternalConstants.AuthBridge || (InternalConstants.AuthBridge = {}));
})(InternalConstants = exports.InternalConstants || (exports.InternalConstants = {}));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PhonePeSDKWebConstants;
(function (PhonePeSDKWebConstants) {
    let General;
    (function (General) {
        General.reject = 'reject';
        General.resolve = 'resolve';
        General.callbackId = 'callbackId';
        General.prefName = 'prefName';
        General.key = 'key';
        General.defaultValue = 'defaultValue';
        General.value = 'value';
        General.min = 'min';
        General.max = 'max';
    })(General = PhonePeSDKWebConstants.General || (PhonePeSDKWebConstants.General = {}));
    let Preferences;
    (function (Preferences) {
        Preferences.androidBridgeName = 'PreferencesBridge';
        Preferences.getItem = 'getItem';
        Preferences.setItem = 'setItem';
        Preferences.removeItem = 'removeItem';
        Preferences.removeItemAndroid = 'removeKey';
    })(Preferences = PhonePeSDKWebConstants.Preferences || (PhonePeSDKWebConstants.Preferences = {}));
    let Metadata;
    (function (Metadata) {
        Metadata.supportedVersion = 'getSupportedWebSDKVersion';
        Metadata.androidBridgeName = 'MetadataBridge';
    })(Metadata = PhonePeSDKWebConstants.Metadata || (PhonePeSDKWebConstants.Metadata = {}));
    let Location;
    (function (Location) {
        Location.androidBridgeName = 'LocationBridge';
        Location.startUpdatingLocation = 'startUpdatingLocation';
        Location.stopUpdatingLocation = 'stopUpdatingLocation';
        Location.getCurrentLocation = 'getCurrentLocation';
        Location.locationSuccessEventKey = 'locationUpdated';
        Location.locationFailureEventKey = 'failedToUpdateLocation';
        Location.forceNewLocation = 'forceNew';
        Location.getAddress = 'getAddress';
    })(Location = PhonePeSDKWebConstants.Location || (PhonePeSDKWebConstants.Location = {}));
    let Navigation;
    (function (Navigation) {
        Navigation.androidBridgeName = 'NavigationBridge';
        Navigation.processRequest = 'processRequest';
        Navigation.navigateToPath = 'navigateToPath';
        Navigation.navigateToPathForResult = 'navigateToPathForResult';
    })(Navigation = PhonePeSDKWebConstants.Navigation || (PhonePeSDKWebConstants.Navigation = {}));
    let NavigationIOS;
    (function (NavigationIOS) {
        NavigationIOS.navigateToPaymentsView = 'openPaymentsPage';
        NavigationIOS.navigateToTransactionDetail = 'openTransactionDetailsPage';
        NavigationIOS.navigateToHelpPage = 'openHelpPage';
        NavigationIOS.navigateToReactView = 'openReactView';
    })(NavigationIOS = PhonePeSDKWebConstants.NavigationIOS || (PhonePeSDKWebConstants.NavigationIOS = {}));
    let Payments;
    (function (Payments) {
        Payments.merchantId = 'merchantId';
        Payments.discoveryMode = 'mode';
        Payments.discoveryModeValue = 'PEER_TO_MERCHANT';
        Payments.title = 'Pay';
        Payments.transactionType = 'SENT_PAYMENT';
        Payments.timeoutTitle = 'Payment Expired';
        Payments.timeoutMessage = 'Sorry! Your payment request timed out. Please try again.';
        Payments.timeoutActionButtonTitle = 'OK';
        Payments.dismissTitle = 'Are you sure?';
        Payments.dismissMessage = 'Going back will cancel the payment. Are you sure you want to proceed?';
        Payments.dismissPositiveButtonTitle = 'I\'m sure';
        Payments.dismissNegativeButtonTitle = 'Dismiss';
    })(Payments = PhonePeSDKWebConstants.Payments || (PhonePeSDKWebConstants.Payments = {}));
    let User;
    (function (User) {
        User.getUserDetails = 'getUserDetails';
        User.androidBridgeName = 'UserBridge';
        User.attributes = 'attributes';
    })(User = PhonePeSDKWebConstants.User || (PhonePeSDKWebConstants.User = {}));
})(PhonePeSDKWebConstants = exports.PhonePeSDKWebConstants || (exports.PhonePeSDKWebConstants = {}));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = __webpack_require__(5);
const PhonePeSDKWebConstants_1 = __webpack_require__(2);
const MethodVersioningHandler_1 = __webpack_require__(10);
const PhonePeUtils_1 = __webpack_require__(4);
class MessagingHandler {
    static callback(callbackName, resolved, data, error) {
        Logger_1.Logger.logd('PhonePe', 'phonepeCallback called! with callbackName = ' + callbackName);
        let promise = MessagingHandler.promiseMapping[callbackName];
        if (promise) {
            if (resolved === '1') {
                promise[PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.General.resolve](data);
            }
            else {
                promise[PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.General.reject](error);
            }
            delete MessagingHandler.promiseMapping[callbackName];
        }
    }
    static callNative(methodName, androidBridgeName, obj) {
        if (!MethodVersioningHandler_1.MethodVersioningHandler.isMethodSupported(methodName)) {
            Logger_1.Logger.logd('PhonePe', 'Sorry! This method is not supported with PhonePe app\'s version');
            return;
        }
        Logger_1.Logger.logd('PhonePe', 'Trying to call methodName = ' + methodName);
        let localWebkit = window.webkit;
        if (localWebkit && localWebkit.messageHandlers && localWebkit.messageHandlers[methodName] &&
            typeof localWebkit.messageHandlers[methodName].postMessage === 'function') {
            localWebkit.messageHandlers[methodName].postMessage(obj);
        }
        else {
            let androidBridge = window[androidBridgeName];
            androidBridge[methodName](JSON.stringify(obj));
        }
    }
    static storePromiseAndCallNative(methodName, androidBridgeName, obj) {
        let promise = new Promise((resolve, reject) => {
            let uuid = PhonePeUtils_1.PhonePeUtils.createuuid();
            obj[PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.General.callbackId] = uuid;
            this.callNative(methodName, androidBridgeName, obj);
            this.promiseMapping[uuid] = {
                'resolve': resolve,
                'reject': reject
            };
        });
        return promise;
    }
}
MessagingHandler.promiseMapping = {};
exports.MessagingHandler = MessagingHandler;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PhonePeSDKExternalConstants_1 = __webpack_require__(0);
const PhonePeSDKInternalConstants_1 = __webpack_require__(1);
var Permission = PhonePeSDKExternalConstants_1.ExternalConstants.Permission;
class PhonePeUtils {
    static assert(condition, message) {
        if (!condition) {
            throw new Error(message);
        }
    }
    static assertString(param, allowUndefined) {
        PhonePeUtils.assertType(param, 'string', allowUndefined);
    }
    static assertNumber(param, allowUndefined) {
        PhonePeUtils.assertType(param, 'number', allowUndefined);
    }
    static assertBoolean(param, allowUndefined) {
        PhonePeUtils.assertType(param, 'boolean', allowUndefined);
    }
    static assertFunction(param, allowUndefined) {
        PhonePeUtils.assertType(param, 'function', allowUndefined);
    }
    static assertArray(param, allowUndefined) {
        if ((allowUndefined && !param) || param.constructor === Array) {
            return;
        }
        throw new TypeError(PhonePeSDKInternalConstants_1.InternalConstants.ErrorCode.invalidParams);
    }
    static assertObject(param, allowUndefined) {
        PhonePeUtils.assertType(param, 'object', allowUndefined);
    }
    static assertType(param, type, allowUndefined) {
        if ((allowUndefined && !param) || typeof param === type) {
            return;
        }
        throw new TypeError(PhonePeSDKInternalConstants_1.InternalConstants.ErrorCode.invalidParams);
    }
    static returnResolution(data) {
        return new Promise((resolve, reject) => {
            resolve(data);
        });
    }
    static returnRejection(reason) {
        return new Promise((resolve, reject) => {
            reject(reason);
        });
    }
    static isValidSpecies(species) {
        return species === PhonePeSDKExternalConstants_1.ExternalConstants.Species.web || species === PhonePeSDKExternalConstants_1.ExternalConstants.Species.native;
    }
    static isValidOS(os) {
        return os === PhonePeSDKExternalConstants_1.ExternalConstants.OS.ios || os === PhonePeSDKExternalConstants_1.ExternalConstants.OS.android;
    }
    static createuuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    static osSpecificPermissionNames(listOfPermissions, os) {
        let res = [];
        for (let name of listOfPermissions) {
            if (os === PhonePeSDKExternalConstants_1.ExternalConstants.OS.ios) {
                res.push(Permission[name]);
            }
            else {
                let androidName = '';
                if (name === Permission.LOCATION) {
                    androidName = PhonePeSDKInternalConstants_1.InternalConstants.PermissionsBridge.androidPrefix + PhonePeSDKInternalConstants_1.InternalConstants.PermissionsBridge.locationPermissionName;
                }
                else {
                    androidName = PhonePeSDKInternalConstants_1.InternalConstants.PermissionsBridge.androidPrefix + Permission[name];
                }
                res.push(androidName);
            }
        }
        return res;
    }
    static strippedPermissionName(permission, os) {
        if (os === PhonePeSDKExternalConstants_1.ExternalConstants.OS.ios) {
            return permission;
        }
        let prefix = PhonePeSDKInternalConstants_1.InternalConstants.PermissionsBridge.androidPrefix;
        let strippedPermission = permission.replace(new RegExp('^' + prefix), '');
        if (strippedPermission === PhonePeSDKInternalConstants_1.InternalConstants.PermissionsBridge.locationPermissionName) {
            strippedPermission = Permission.LOCATION;
        }
        return strippedPermission;
    }
}
exports.PhonePeUtils = PhonePeUtils;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PhonePe_1 = __webpack_require__(6);
class Logger {
    static isLoggingEnabled() {
        return PhonePe_1.PhonePe.loggingEnabled;
    }
    static logd(tag, message) {
        if (Logger.isLoggingEnabled()) {
            console.log('[' + tag + '] ' + message);
        }
    }
    constructor(tag) {
        this.tag = tag;
    }
    logd(message) {
        Logger.logd(this.tag, message);
    }
    logAnything(message) {
        console.log(message);
    }
    logError(error) {
        if (false) {}
    }
}
exports.Logger = Logger;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const NavigationRequest_1 = __webpack_require__(7);
const NativeOAuthBridgeFactory_1 = __webpack_require__(33);
const NativeAnalyticsBridgeFactory_1 = __webpack_require__(31);
const NativePermissionsBridgeFactory_1 = __webpack_require__(29);
const MethodVersioningHandler_1 = __webpack_require__(10);
const PhonePeUtils_1 = __webpack_require__(4);
const ExternalNavigationFactory_1 = __webpack_require__(27);
const LocationBridgeFactory_1 = __webpack_require__(22);
const NativeNavigationFactory_1 = __webpack_require__(19);
const NativePreferenceBridgeFactory_1 = __webpack_require__(14);
const NativeDeviceInfoBridgeFactory_1 = __webpack_require__(12);
const MessagingHandler_1 = __webpack_require__(3);
const EventHandler_1 = __webpack_require__(8);
const PhonePeSDKInternalConstants_1 = __webpack_require__(1);
const PhonePeSDKExternalConstants_1 = __webpack_require__(0);
const models_1 = __webpack_require__(9);
var Permission = PhonePeSDKExternalConstants_1.ExternalConstants.Permission;
exports.MessagingHandler = MessagingHandler_1.MessagingHandler;
exports.EventHandler = EventHandler_1.EventHandler;
exports.Constants = PhonePeSDKExternalConstants_1.ExternalConstants;
class PhonePe {
    constructor(species, operatingSystem) {
        this.preferencesModule = NativePreferenceBridgeFactory_1.NativePreferenceBridgeFactory.getNativePreferenceBridge(species, operatingSystem);
        this.locationModule = LocationBridgeFactory_1.LocationBridgeFactory.getNativeLocationBridge(species, operatingSystem);
        this.navigationModule = NativeNavigationFactory_1.NativeNavigationFactory.repository(species, operatingSystem);
        this.permissionsBridge = NativePermissionsBridgeFactory_1.NativePermissionsBridgeFactory.getPermissionsBridge(species, operatingSystem);
        this.analyticsBridge = NativeAnalyticsBridgeFactory_1.NativeAnalyticsBridgeFactory.getNativeAnalyticsBridge(species, operatingSystem);
        this.authBridge = NativeOAuthBridgeFactory_1.NativeOAuthBridgeFactory.bridge(species);
        this.deviceInfoBridge = NativeDeviceInfoBridgeFactory_1.NativeDeviceInfoBridgeFactory.bridge(species);
        this.species = species;
    }
    static build(species, operatingSystem) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!PhonePeUtils_1.PhonePeUtils.isValidSpecies(species) ||
                !PhonePeUtils_1.PhonePeUtils.isValidOS(operatingSystem)) {
                throw new Error(PhonePeSDKInternalConstants_1.InternalConstants.ErrorCode.invalidParams);
            }
            let sdk = new PhonePe(species, operatingSystem);
            if (species === PhonePeSDKExternalConstants_1.ExternalConstants.Species.web) {
                yield MethodVersioningHandler_1.MethodVersioningHandler.initSupportedVersionFromNative();
            }
            return sdk;
        });
    }
    getItem(preferenceName, key, defaultValue) {
        try {
            PhonePeUtils_1.PhonePeUtils.assertString(preferenceName);
            PhonePeUtils_1.PhonePeUtils.assertString(key);
            PhonePeUtils_1.PhonePeUtils.assertString(defaultValue, true);
        }
        catch (err) {
            return PhonePeUtils_1.PhonePeUtils.returnRejection(err);
        }
        return this.preferencesModule.getString(preferenceName, key, defaultValue);
    }
    setItem(preferenceName, key, value) {
        try {
            PhonePeUtils_1.PhonePeUtils.assertString(preferenceName);
            PhonePeUtils_1.PhonePeUtils.assertString(key);
            PhonePeUtils_1.PhonePeUtils.assertString(value);
        }
        catch (err) {
            return PhonePeUtils_1.PhonePeUtils.returnRejection(err);
        }
        this.preferencesModule.saveString(preferenceName, key, value);
        return PhonePeUtils_1.PhonePeUtils.returnResolution(undefined);
    }
    removeItem(preferenceName, key) {
        try {
            PhonePeUtils_1.PhonePeUtils.assertString(preferenceName);
            PhonePeUtils_1.PhonePeUtils.assertString(key);
        }
        catch (err) {
            return PhonePeUtils_1.PhonePeUtils.returnRejection(err);
        }
        this.preferencesModule.removeItem(preferenceName, key);
        return PhonePeUtils_1.PhonePeUtils.returnResolution(undefined);
    }
    startUpdatingLocation() {
        this.locationModule.startUpdatingLocation();
    }
    stopUpdatingLocation() {
        this.locationModule.stopUpdatingLocation();
    }
    getCurrentLocation() {
        return this.locationModule.getCurrentLocation(true);
    }
    registerLocationUpdateSuccessCallback(callbackName, callback) {
        try {
            PhonePeUtils_1.PhonePeUtils.assertString(callbackName);
            PhonePeUtils_1.PhonePeUtils.assertFunction(callback);
        }
        catch (err) {
            return PhonePeUtils_1.PhonePeUtils.returnRejection(err);
        }
        let subscription = this.locationModule.onLocationUpdateSuccess(callbackName, callback);
        return PhonePeUtils_1.PhonePeUtils.returnResolution(subscription);
    }
    registerLocationUpdateFailureCallback(callbackName, callback) {
        try {
            PhonePeUtils_1.PhonePeUtils.assertString(callbackName);
            PhonePeUtils_1.PhonePeUtils.assertFunction(callback);
        }
        catch (err) {
            return PhonePeUtils_1.PhonePeUtils.returnRejection(err);
        }
        let subscription = this.locationModule.onLocationUpdateFailure(callbackName, callback);
        return PhonePeUtils_1.PhonePeUtils.returnResolution(subscription);
    }
    openPaymentsPage(merchantName, context, fallbackURL, imageURL, orderedMetaData, confirmationActionButtonProperties) {
        try {
            PhonePeUtils_1.PhonePeUtils.assertString(merchantName);
            PhonePeUtils_1.PhonePeUtils.assertObject(context);
            if (this.species === PhonePeSDKExternalConstants_1.ExternalConstants.Species.web) {
                PhonePeUtils_1.PhonePeUtils.assertString(fallbackURL);
            }
            PhonePeUtils_1.PhonePeUtils.assertString(imageURL, true);
            PhonePeUtils_1.PhonePeUtils.assertArray(orderedMetaData, true);
        }
        catch (err) {
            return PhonePeUtils_1.PhonePeUtils.returnRejection(err);
        }
        let amount = context[models_1.ExternalPaymentsNamespace.Constant.kPayableAmount];
        let meta = {};
        if (amount) {
            meta = { 'amount': amount };
        }
        this.logMerchantEvent('CATEGORY_PAYMENT_INIT', meta);
        let request = ExternalNavigationFactory_1.ExternalNavigationFactory.paymentNavigationRequest(merchantName, context, fallbackURL, imageURL, orderedMetaData, confirmationActionButtonProperties);
        return this.navigationModule.processNavigationRequestForResultAsync(request);
    }
    openTransactionDetailsPage(transactionId) {
        try {
            PhonePeUtils_1.PhonePeUtils.assertString(transactionId);
        }
        catch (err) {
            return PhonePeUtils_1.PhonePeUtils.returnRejection(err);
        }
        let request = ExternalNavigationFactory_1.ExternalNavigationFactory.transactionDetailRequest(transactionId);
        return this.navigationModule.processNavigationRequestForResultAsync(request);
    }
    seekPermission(listOfPermissions) {
        try {
            PhonePeUtils_1.PhonePeUtils.assertArray(listOfPermissions);
            for (let name of listOfPermissions) {
                PhonePeUtils_1.PhonePeUtils.assertString(name);
                PhonePeUtils_1.PhonePeUtils.assert(Permission[name] !== undefined, PhonePeSDKInternalConstants_1.InternalConstants.ErrorCode.invalidParams);
            }
        }
        catch (err) {
            return PhonePeUtils_1.PhonePeUtils.returnRejection(err);
        }
        return this.permissionsBridge.seekPermission(listOfPermissions);
    }
    openSettingsPageForPermission() {
        return this.permissionsBridge.openSettingsPageForPermission();
    }
    loadFont(name, base64FontString, type) {
        if (this.species === PhonePeSDKExternalConstants_1.ExternalConstants.Species.web) {
            return PhonePeUtils_1.PhonePeUtils.returnRejection(PhonePeSDKInternalConstants_1.InternalConstants.ErrorCode.invalidParams);
        }
        if (false) {}
        throw new Error('Wrong species sent');
    }
    logMerchantEvent(name, metadata) {
        try {
            PhonePeUtils_1.PhonePeUtils.assertString(name);
            PhonePeUtils_1.PhonePeUtils.assertObject(metadata, true);
        }
        catch (err) {
            return PhonePeUtils_1.PhonePeUtils.returnRejection(err);
        }
        return this.analyticsBridge.logMerchantEvent(name, metadata);
    }
    fetchGrantToken() {
        return this.authBridge.fetchGrantToken();
    }
    getDeviceInfo() {
        return this.deviceInfoBridge.getDeviceInfo();
    }
    closeApp() {
        let request = new NavigationRequest_1.CloseAppNavRequest('');
        this.navigationModule.closeAppRequest(request);
    }
    isMethodSupported(methodName) {
        return MethodVersioningHandler_1.MethodVersioningHandler.isMethodSupported(methodName);
    }
}
PhonePe.loggingEnabled = false;
exports.PhonePe = PhonePe;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NavigationScreenType;
(function (NavigationScreenType) {
    NavigationScreenType["WebView"] = "WebView";
    NavigationScreenType["ReactView"] = "ReactView";
    NavigationScreenType["PaymentsView"] = "PaymentView";
    NavigationScreenType["AppScreen"] = "AppScreen";
    NavigationScreenType["ContactPicker"] = "ContactPicker";
    NavigationScreenType["TransactionDetail"] = "TransactionDetail";
    NavigationScreenType["Profile"] = "Profile";
    NavigationScreenType["HelpPage"] = "HelpPage";
    NavigationScreenType["MandateSetup"] = "MandateSetup";
    NavigationScreenType["AddToWallet"] = "AddToWallet";
    NavigationScreenType["MicroApp"] = "MicroApp";
})(NavigationScreenType = exports.NavigationScreenType || (exports.NavigationScreenType = {}));
class BaseNavigationRequest {
    constructor(screenType, title, animated, showModally) {
        this.screenType = screenType;
        this.title = title;
        this.animated = animated;
        this.showModally = showModally;
        this.isNewTask = false;
    }
}
exports.BaseNavigationRequest = BaseNavigationRequest;
class ReactViewNavigationRequest extends BaseNavigationRequest {
    constructor(bundleName, componentName, showToolbar, title, animated, showModally, initialProperties, category, merchantId, merchantName, tAndCUrl) {
        super(NavigationScreenType.ReactView, title, animated, showModally);
        this.bundleName = bundleName;
        this.componentName = componentName;
        this.shouldShowToolbar = showToolbar;
        this.toolBarText = title;
        this.animated = animated;
        this.showModally = showModally;
        this.initialProperties = initialProperties;
        this.category = category;
        this.merchantId = merchantId;
        this.merchantName = merchantName;
        this.tAndCUrl = tAndCUrl;
    }
}
exports.ReactViewNavigationRequest = ReactViewNavigationRequest;
class WebViewNavigationRequest extends BaseNavigationRequest {
    constructor(url, title, shouldShowToolBar, shouldShowBackButton, screenName, shouldAllowWebViewBack, shouldShowProgressWhileLoading, animated, showModally) {
        super(NavigationScreenType.WebView, title, animated, showModally);
        this.url = url;
        this.title = title;
        this.shouldShowToolBar = shouldShowToolBar;
        this.shouldShowBackButton = shouldShowBackButton;
        this.screenName = screenName;
        this.shouldAllowWebViewBack = shouldAllowWebViewBack;
        this.shouldShowProgressWhileLoading = shouldShowProgressWhileLoading;
    }
}
exports.WebViewNavigationRequest = WebViewNavigationRequest;
class AppScreenNavigationRequest extends BaseNavigationRequest {
    constructor(screenName, url, params, title, animated, showModally) {
        super(NavigationScreenType.AppScreen, title, animated, showModally);
        this.screenName = screenName;
        this.url = url;
        this.params = params;
    }
}
exports.AppScreenNavigationRequest = AppScreenNavigationRequest;
class PaymentMetaData {
    constructor(details) {
        this.details = details;
    }
}
exports.PaymentMetaData = PaymentMetaData;
class PaymentNavigationRequest extends BaseNavigationRequest {
    constructor(_screenName, title, animated, showModally, mode, payRequest, uiConfig, transactionType, metaData, originInfo) {
        super(NavigationScreenType.PaymentsView, title, animated, showModally);
        this.mode = mode;
        this.microPayRequest = payRequest;
        this.internalPaymentUiConfig = uiConfig;
        this.transactionType = transactionType;
        this.metaData = metaData;
        this.originInfo = originInfo;
    }
}
exports.PaymentNavigationRequest = PaymentNavigationRequest;
class MandateSetupNavigationRequest extends BaseNavigationRequest {
    constructor(mandateContext, mandateUiConfig, title, animated, showModally, mandateType) {
        super(NavigationScreenType.MandateSetup, title, animated, showModally);
        this.mandateContext = mandateContext;
        this.mandateUiConfig = mandateUiConfig;
        this.mandateType = mandateType || 'MERCHANT';
    }
}
exports.MandateSetupNavigationRequest = MandateSetupNavigationRequest;
class AddToWalletNavigationRequest extends BaseNavigationRequest {
    constructor(addToWalletUiContext, title, animated, showModally) {
        super(NavigationScreenType.AddToWallet, title, animated, showModally);
        this.addToWalletUiContext = addToWalletUiContext;
    }
}
exports.AddToWalletNavigationRequest = AddToWalletNavigationRequest;
class TransactionDetailsNavigationRequest extends BaseNavigationRequest {
    constructor(_screenName, title, animated, showModally, transactionId, transactionType, originInfo) {
        super(NavigationScreenType.TransactionDetail, title, animated, showModally);
        this.transactionId = transactionId;
        this.transactionType = transactionType;
        this.info = originInfo;
    }
}
exports.TransactionDetailsNavigationRequest = TransactionDetailsNavigationRequest;
class ContactNavigationRequest extends BaseNavigationRequest {
    constructor(_screenName, title, animated, showModally, contactPickerMode, contactPickerType, initialContacts, transactionType, isVpaEnable, isSelfEnable, phoneContact, vpaContact, accountContact, _originInfo) {
        super(NavigationScreenType.ContactPicker, title, animated, showModally);
        this.contactPickerMode = contactPickerMode;
        this.contactPickerType = contactPickerType;
        this.initialContacts = initialContacts;
        this.transactionType = transactionType;
        this.isVpaEnable = isVpaEnable;
        this.isSelfEnable = isSelfEnable;
        this.phoneContact = phoneContact;
        this.vpaContact = vpaContact;
        this.accountContact = accountContact;
    }
}
exports.ContactNavigationRequest = ContactNavigationRequest;
class ProfileNavRequest extends BaseNavigationRequest {
    constructor(screenType, title, animated, showModally) {
        super(screenType, title, animated, showModally);
    }
}
exports.ProfileNavRequest = ProfileNavRequest;
class HelpPageNavRequest extends BaseNavigationRequest {
    constructor(transactionId, title, animated, showModally, shouldShowToolBar, shouldAllowWebViewBack, screen, url, freshBotIntentData) {
        super(NavigationScreenType.HelpPage, title, animated, showModally);
        this.transactionId = transactionId;
        this.screen = screen;
        this.url = url;
        this.shouldShowToolBar = shouldShowToolBar;
        this.shouldAllowWebViewBack = shouldAllowWebViewBack;
        this.freshBotIntentData = freshBotIntentData;
    }
}
exports.HelpPageNavRequest = HelpPageNavRequest;
class FreshBotIntentData {
    constructor(freshBotScreens) {
        this.freshBotScreens = freshBotScreens;
        this.queryParams = {};
    }
}
exports.FreshBotIntentData = FreshBotIntentData;
class CloseAppNavRequest {
    constructor(appIdentifier) {
        this.appIdentifier = appIdentifier;
    }
}
exports.CloseAppNavRequest = CloseAppNavRequest;
class MicroAppNavigationRequest extends BaseNavigationRequest {
    constructor(appId, initialProperties, title, animated, showModally) {
        super(NavigationScreenType.MicroApp, title, animated, showModally);
        this.appId = appId;
        this.initialProperties = initialProperties;
    }
}
exports.MicroAppNavigationRequest = MicroAppNavigationRequest;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = __webpack_require__(5);
class EventHandler {
    static addSubscription(subscription) {
        let existingSubscriptionsArray = this.eventNameToSubscriptionMapping[subscription.eventName];
        if (existingSubscriptionsArray) {
            existingSubscriptionsArray.push(subscription);
        }
        else {
            existingSubscriptionsArray = [];
            existingSubscriptionsArray.push(subscription);
        }
        this.eventNameToSubscriptionMapping[subscription.eventName] = existingSubscriptionsArray;
    }
    static removeSubscription(subscription) {
        let receivedEventName = subscription.eventName;
        let receivedCallbackName = subscription.callbackName;
        let existingSubscriptionsArray = this.eventNameToSubscriptionMapping[receivedEventName];
        if (existingSubscriptionsArray) {
            let callbackIndexesToRemove = [];
            let index = 0;
            for (let existingSubscription of existingSubscriptionsArray) {
                if (existingSubscription.callbackName === receivedCallbackName) {
                    callbackIndexesToRemove.push(index);
                    index++;
                }
            }
            while (callbackIndexesToRemove.length) {
                let num = callbackIndexesToRemove.pop();
                if (num) {
                    existingSubscriptionsArray.splice(num, 1);
                }
            }
        }
    }
    static removeAllSubscriptions(eventName) {
        if (this.eventNameToSubscriptionMapping.hasOwnProperty(eventName)) {
            delete this.eventNameToSubscriptionMapping[eventName];
        }
    }
    static sendEvent(eventName, data) {
        let existingSubscriptionsArray = this.eventNameToSubscriptionMapping[eventName];
        if (existingSubscriptionsArray) {
            for (let existingSubscription of existingSubscriptionsArray) {
                existingSubscription.listener(data);
            }
        }
        else {
            Logger_1.Logger.logd('PhonePe', '[Error] No subscribers for eventName = ' + eventName);
        }
    }
}
EventHandler.eventNameToSubscriptionMapping = {};
exports.EventHandler = EventHandler;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ExternalPaymentModels_1 = __webpack_require__(24);
var ExternalPaymentsNamespace;
(function (ExternalPaymentsNamespace) {
    let Constant;
    (function (Constant) {
        Constant.discoveryModeValue = 'PEER_TO_MERCHANT';
        Constant.title = 'Pay';
        Constant.transactionType = 'SENT_PAYMENT';
        Constant.timeoutTitle = 'Payment Expired';
        Constant.timeoutMessage = 'Sorry! Your payment request timed out. Please try again.';
        Constant.timeoutActionButtonTitle = 'OK';
        Constant.dismissTitle = 'Are you sure?';
        Constant.dismissMessage = 'Going back will cancel the payment. Are you sure you want to proceed?';
        Constant.dismissPositiveButtonTitle = 'I\'m sure';
        Constant.dismissNegativeButtonTitle = 'Dismiss';
        Constant.PAYMENT_TIMEOUT = 'PAYMENT_TIMEOUT';
        Constant.PAYMENT_DISMISS = 'PAYMENT_DISMISS';
        Constant.kMerchantId = 'merchantId';
        Constant.kSellingPrice = 'sellingPrice';
        Constant.kPayableAmount = 'payableAmount';
        Constant.kServiceType = 'serviceType';
        Constant.kServiceTypeValue = 'WEBAPP';
        Constant.kReservationId = 'reservationId';
        Constant.kServiceCategory = 'serviceCategory';
        Constant.kServiceCategoryValue = 'WEB';
        Constant.kServiceContext = 'serviceContext';
        Constant.kQuantity = 'quantity';
        Constant.kValidFor = 'validFor';
        Constant.kKey = 'key';
        Constant.kValue = 'value';
    })(Constant = ExternalPaymentsNamespace.Constant || (ExternalPaymentsNamespace.Constant = {}));
    let CONTACT_TYPE;
    (function (CONTACT_TYPE) {
        CONTACT_TYPE[CONTACT_TYPE["CONTACT_TYPE_VPA"] = 1] = "CONTACT_TYPE_VPA";
        CONTACT_TYPE[CONTACT_TYPE["CONTACT_TYPE_PHONE"] = 2] = "CONTACT_TYPE_PHONE";
        CONTACT_TYPE[CONTACT_TYPE["CONTACT_TYPE_MERCHANT"] = 3] = "CONTACT_TYPE_MERCHANT";
        CONTACT_TYPE[CONTACT_TYPE["CONTACT_TYPE_USER_DATA"] = 4] = "CONTACT_TYPE_USER_DATA";
        CONTACT_TYPE[CONTACT_TYPE["CONTACT_TYPE_EXTERNAL_UPI_MERCHANT"] = 5] = "CONTACT_TYPE_EXTERNAL_UPI_MERCHANT";
        CONTACT_TYPE[CONTACT_TYPE["CONTACT_TYPE_RETAIL_MERCHANT"] = 6] = "CONTACT_TYPE_RETAIL_MERCHANT";
        CONTACT_TYPE[CONTACT_TYPE["CONTACT_TYPE_BANK_ACCOUNT"] = 7] = "CONTACT_TYPE_BANK_ACCOUNT";
        CONTACT_TYPE[CONTACT_TYPE["CONTACT_TYPE_WALLET"] = 8] = "CONTACT_TYPE_WALLET";
        CONTACT_TYPE[CONTACT_TYPE["CONTACT_TYPE_MY_ACCOUNT"] = 9] = "CONTACT_TYPE_MY_ACCOUNT";
    })(CONTACT_TYPE = ExternalPaymentsNamespace.CONTACT_TYPE || (ExternalPaymentsNamespace.CONTACT_TYPE = {}));
    let PAYMENT_MODE;
    (function (PAYMENT_MODE) {
        PAYMENT_MODE[PAYMENT_MODE["MODE_SEND_MONEY"] = 1] = "MODE_SEND_MONEY";
        PAYMENT_MODE[PAYMENT_MODE["MODE_SPLIT_MONEY"] = 2] = "MODE_SPLIT_MONEY";
        PAYMENT_MODE[PAYMENT_MODE["REQUEST_MONEY"] = 3] = "REQUEST_MONEY";
        PAYMENT_MODE[PAYMENT_MODE["MODE_RECHARGE_MOBILE"] = 4] = "MODE_RECHARGE_MOBILE";
        PAYMENT_MODE[PAYMENT_MODE["MODE_WALLET_TOP_UP"] = 5] = "MODE_WALLET_TOP_UP";
        PAYMENT_MODE[PAYMENT_MODE["MODE_BLE_PAYMENT"] = 6] = "MODE_BLE_PAYMENT";
    })(PAYMENT_MODE = ExternalPaymentsNamespace.PAYMENT_MODE || (ExternalPaymentsNamespace.PAYMENT_MODE = {}));
    let TRANSACTION_TYPE;
    (function (TRANSACTION_TYPE) {
        TRANSACTION_TYPE["SENT_PAYMENT"] = "SENT_PAYMENT";
        TRANSACTION_TYPE["RECEIVED_PAYMENT"] = "RECEIVED_PAYMENT";
        TRANSACTION_TYPE["USER_TO_USER_SENT_REQUEST"] = "USER_TO_USER_SENT_REQUEST";
        TRANSACTION_TYPE["USER_TO_USER_RECEIVED_REQUEST"] = "USER_TO_USER_RECEIVED_REQUEST";
        TRANSACTION_TYPE["ENSEMBLE_SENT_PAYMENT"] = "ENSEMBLE_SENT_PAYMENT";
        TRANSACTION_TYPE["MISSED_PAYMENT"] = "MISSED_PAYMENT";
        TRANSACTION_TYPE["PHONE_RECHARGE"] = "PHONE_RECHARGE";
        TRANSACTION_TYPE["BILL_PAYMENT"] = "BILL_PAYMENT";
        TRANSACTION_TYPE["TICKETING"] = "TICKETING";
        TRANSACTION_TYPE["COMMUTE"] = "COMMUTE";
        TRANSACTION_TYPE["UNKNOWN"] = "UNKNOWN";
    })(TRANSACTION_TYPE = ExternalPaymentsNamespace.TRANSACTION_TYPE || (ExternalPaymentsNamespace.TRANSACTION_TYPE = {}));
    let TRANSFER_MODE;
    (function (TRANSFER_MODE) {
        TRANSFER_MODE["MERCHANT_REVERSAL"] = "MERCHANT_REVERSAL";
        TRANSFER_MODE["MERCHANT_CASHBACK"] = "MERCHANT_CASHBACK";
    })(TRANSFER_MODE = ExternalPaymentsNamespace.TRANSFER_MODE || (ExternalPaymentsNamespace.TRANSFER_MODE = {}));
    class Contact {
        constructor(contactType, name, displayImageUrl) {
            this.type = contactType;
            this.name = name;
            this.displayImageUrl = displayImageUrl;
        }
    }
    ExternalPaymentsNamespace.Contact = Contact;
    class InternalPaymentUiConfig {
        constructor(title, initialAmount, initialContactList, confirmationScreenDuration, confirmationActionButtonProperties) {
            this.isAmountEditable = false;
            this.isInitialContactEditable = false;
            this.isNoteEditable = false;
            this.showRateMeDialog = false;
            this.title = title;
            this.initialAmount = initialAmount;
            this.initialContactList = initialContactList;
            this.confirmationScreenDuration = confirmationScreenDuration;
            if (confirmationActionButtonProperties) {
                this.confirmationActionButtonProperties = confirmationActionButtonProperties;
            }
            else {
                let dummyProperties = {
                    'PENDING': new ExternalPaymentModels_1.ActionButtonProp('DONE'),
                    'COMPLETED': new ExternalPaymentModels_1.ActionButtonProp('VIEW BOOKING'),
                    'ERRORED': new ExternalPaymentModels_1.ActionButtonProp('DONE'),
                    'DEFAULT': new ExternalPaymentModels_1.ActionButtonProp('DONE')
                };
                this.confirmationActionButtonProperties = dummyProperties;
            }
        }
    }
    ExternalPaymentsNamespace.InternalPaymentUiConfig = InternalPaymentUiConfig;
    class PayRequest {
        constructor(allowedInstruments) {
            this.allowedInstruments = allowedInstruments;
            this.supportedInstruments = allowedInstruments;
        }
    }
    ExternalPaymentsNamespace.PayRequest = PayRequest;
    class MicroPayRequest extends PayRequest {
        constructor(merchantId, allowedInstruments, fallbackURL) {
            super(allowedInstruments);
            this.merchantId = merchantId;
            this.fallbackURL = fallbackURL;
        }
    }
    ExternalPaymentsNamespace.MicroPayRequest = MicroPayRequest;
    class PaymentTimeOutModel {
        constructor(time, showDialog, title, message, actionButtonName, errorCode) {
            this.time = time;
            this.showDialog = showDialog;
            this.title = title;
            this.message = message;
            this.actionButtonName = actionButtonName;
            this.errorCode = errorCode;
        }
    }
    ExternalPaymentsNamespace.PaymentTimeOutModel = PaymentTimeOutModel;
    class DismissBehaviourModel {
        constructor(showDialog, title, message, positiveButton, negativeButton, errorCode) {
            this.showDialog = showDialog;
            this.title = title;
            this.message = message;
            this.positiveButton = positiveButton;
            this.negativeButton = negativeButton;
            this.errorCode = errorCode;
        }
    }
    ExternalPaymentsNamespace.DismissBehaviourModel = DismissBehaviourModel;
    class TopUpConsentContext {
        constructor(showDialog, title, message) {
            this.showDialog = showDialog;
            this.title = title;
            this.message = message;
        }
    }
    ExternalPaymentsNamespace.TopUpConsentContext = TopUpConsentContext;
    class AddToWalletUiContext {
        constructor(walletPageTitle, suggestedAmount, showCloseWalletOption, hideWalletWithdrawal, minAmount, showRateMeDialog, isAmountEditable, confirmationScreenDuration, showTopupConsent, topUpConsentContext, paymentDismiss) {
            this.walletPageTitle = walletPageTitle;
            this.suggestedAmount = suggestedAmount;
            this.showCloseWalletOption = showCloseWalletOption;
            this.hideWalletWithdrawal = hideWalletWithdrawal;
            this.minAmount = minAmount;
            this.showRateMeDialog = showRateMeDialog;
            this.isAmountEditable = isAmountEditable;
            this.confirmationScreenDuration = confirmationScreenDuration;
            this.showTopupConsent = showTopupConsent;
            this.topUpConsentContext = topUpConsentContext;
            this.paymentDismiss = paymentDismiss;
        }
    }
    ExternalPaymentsNamespace.AddToWalletUiContext = AddToWalletUiContext;
    class MandateConfig {
        constructor(type, merchantId, serviceProviderIds, serviceType, serviceCategory, entityType) {
            this.type = type;
            this.merchantId = merchantId;
            this.serviceProviderIds = serviceProviderIds;
            this.serviceType = serviceType;
            this.serviceCategory = serviceCategory;
            this.entityType = entityType;
        }
    }
    ExternalPaymentsNamespace.MandateConfig = MandateConfig;
    class MandateVisibleProperties {
        constructor(amount, frequency, autoPayDay, payeeWidget, toolbar) {
            this.amount = amount;
            this.frequency = frequency;
            this.autoPayDay = autoPayDay;
            this.payeeWidget = payeeWidget;
            this.toolbar = toolbar;
        }
    }
    ExternalPaymentsNamespace.MandateVisibleProperties = MandateVisibleProperties;
    class MandateUiConfig {
        constructor(visibilityProperty, analyticsInfo, successMessage, actionButtonText, title, merchantName, merchantMandateDescription, merchantBannerImageId, merchantBannerImageSection, merchantImageId, merchantImageSection, mandateInfoLink, confirmationScreenDuration, dismissButtonDisplayTimeout, contactId) {
            this.visibilityProperty = visibilityProperty;
            this.analyticsInfo = analyticsInfo;
            this.successMessage = successMessage;
            this.actionButtonText = actionButtonText;
            this.title = title;
            this.merchantName = merchantName;
            this.merchantMandateDescription = merchantMandateDescription;
            this.merchantBannerImageId = merchantBannerImageId;
            this.merchantBannerImageSection = merchantBannerImageSection;
            this.merchantImageId = merchantImageId;
            this.merchantImageSection = merchantImageSection;
            this.mandateInfoLink = mandateInfoLink;
            this.confirmationScreenDuration = confirmationScreenDuration;
            this.dismissButtonDisplayTimeout = dismissButtonDisplayTimeout;
            this.contactId = contactId;
        }
    }
    ExternalPaymentsNamespace.MandateUiConfig = MandateUiConfig;
})(ExternalPaymentsNamespace = exports.ExternalPaymentsNamespace || (exports.ExternalPaymentsNamespace = {}));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = __webpack_require__(5);
const MessagingHandler_1 = __webpack_require__(3);
const PhonePeSDKWebConstants_1 = __webpack_require__(2);
const PhonePeSDKInternalConstants_1 = __webpack_require__(1);
class MethodVersioningHandler {
    static initSupportedVersionFromNative() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fetchNativeSupportedSDKVersion().then((version) => {
                Logger_1.Logger.logd('PhonePe', 'Version received from native side = ' + version);
                MethodVersioningHandler.version = Number(version);
            }).catch((err) => {
                Logger_1.Logger.logd('PhonePe', 'Error found when trying to fetch version = ' + err);
                throw Error('Something is really wrong here! We should be able to fetch version always.');
            });
            this.populateMethodToVersionMapping();
        });
    }
    static isMethodSupported(methodName) {
        if (methodName === PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.Metadata.supportedVersion) {
            return true;
        }
        if (!MethodVersioningHandler.version) {
            Logger_1.Logger.logd('PhonePe', '[Error] Can\'t call isMethodSupported before native has returned the version');
            throw Error('Can\'t call isMethodSupported before native has returned the version');
        }
        let mapping = MethodVersioningHandler.methodToVersionMapping[methodName];
        if (mapping) {
            let min = mapping[PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.General.min];
            let max = mapping[PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.General.max];
            let nativeSDKSupportVersion = MethodVersioningHandler.version;
            Logger_1.Logger.logd('PhonePe', 'Comparing minVersion = ' + min + ' maxVersion = ' + max + ' nativeSDKSupportVersion = ' + nativeSDKSupportVersion);
            if (nativeSDKSupportVersion < min) {
                return false;
            }
            if (max !== -1 && nativeSDKSupportVersion > max) {
                return false;
            }
        }
        else {
            Logger_1.Logger.logd('PhonePe', '[Error] Could not find this method in mapping. This should never happen!');
            throw Error('Could not find this method in mapping. This should never happen!');
        }
        return true;
    }
    static fetchNativeSupportedSDKVersion() {
        Logger_1.Logger.logd('PhonePe', 'Trying to call supportedVersion method in fetchNativeSupportedSDKVersion');
        return MessagingHandler_1.MessagingHandler.storePromiseAndCallNative(PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.Metadata.supportedVersion, PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.Metadata.androidBridgeName, {});
    }
    static populateMethodToVersionMapping() {
        let obj = { min: 1, max: -1 };
        this.methodToVersionMapping[PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.Preferences.getItem] = obj;
        this.methodToVersionMapping[PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.Preferences.setItem] = obj;
        this.methodToVersionMapping[PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.Preferences.removeItem] = obj;
        this.methodToVersionMapping[PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.Preferences.removeItemAndroid] = obj;
        this.methodToVersionMapping[PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.Location.startUpdatingLocation] = obj;
        this.methodToVersionMapping[PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.Location.stopUpdatingLocation] = obj;
        this.methodToVersionMapping[PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.Location.getCurrentLocation] = obj;
        this.methodToVersionMapping[PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.Navigation.navigateToPath] = obj;
        this.methodToVersionMapping[PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.Navigation.navigateToPathForResult] = obj;
        this.methodToVersionMapping[PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.NavigationIOS.navigateToPaymentsView] = obj;
        this.methodToVersionMapping[PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.NavigationIOS.navigateToHelpPage] = obj;
        this.methodToVersionMapping[PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.NavigationIOS.navigateToTransactionDetail] = obj;
        this.methodToVersionMapping[PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.User.getUserDetails] = obj;
        this.methodToVersionMapping[PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.Metadata.supportedVersion] = obj;
        this.methodToVersionMapping[PhonePeSDKInternalConstants_1.InternalConstants.PermissionsBridge.openSettingsPage] = obj;
        this.methodToVersionMapping[PhonePeSDKInternalConstants_1.InternalConstants.PermissionsBridge.seekPermission] = obj;
        this.methodToVersionMapping[PhonePeSDKInternalConstants_1.InternalConstants.AnalyticsBridge.methodName] = obj;
        this.methodToVersionMapping[PhonePeSDKInternalConstants_1.InternalConstants.AuthBridge.methodName] = obj;
    }
}
MethodVersioningHandler.methodToVersionMapping = {};
exports.MethodVersioningHandler = MethodVersioningHandler;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class WebNativeDeviceInfoBridge {
    getDeviceInfo() {
        return Promise.resolve();
    }
}
exports.WebNativeDeviceInfoBridge = WebNativeDeviceInfoBridge;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const NativeDeviceInfoBridge_web_1 = __webpack_require__(11);
const PhonePeSDKExternalConstants_1 = __webpack_require__(0);
class NativeDeviceInfoBridgeFactory {
    static bridge(species) {
        if (species === PhonePeSDKExternalConstants_1.ExternalConstants.Species.web) {
            return new NativeDeviceInfoBridge_web_1.WebNativeDeviceInfoBridge();
        }
        else {
            if (false) {}
            throw new Error('Wrong species sent');
        }
    }
}
exports.NativeDeviceInfoBridgeFactory = NativeDeviceInfoBridgeFactory;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = __webpack_require__(5);
const MessagingHandler_1 = __webpack_require__(3);
const PhonePeSDKExternalConstants_1 = __webpack_require__(0);
const PhonePeSDKWebConstants_1 = __webpack_require__(2);
var Const = PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.Preferences;
class WebNativePreferenceBridge {
    constructor(operatingSystem) {
        this.operatingSystem = operatingSystem;
    }
    getString(preferenceName, key, defaultValue) {
        let obj = this.prefObject(preferenceName, key, undefined, defaultValue);
        return MessagingHandler_1.MessagingHandler.storePromiseAndCallNative(Const.getItem, Const.androidBridgeName, obj);
    }
    getNumber(preferenceName, key, defaultValue) {
        return new Promise((resolve, reject) => {
            reject('This should not be called in case of web pref bridge');
        });
    }
    getDecryptedUserId() {
        return new Promise((resolve, reject) => {
            reject('This should not be called in case of web pref bridge');
        });
    }
    saveNumber(preferenceName, key, value) {
        Logger_1.Logger.logd('PhonePe', '[Error] his should not be called in case of web pref bridge');
    }
    saveString(preferenceName, key, value) {
        let obj = this.prefObject(preferenceName, key, value, undefined);
        MessagingHandler_1.MessagingHandler.callNative(Const.setItem, Const.androidBridgeName, obj);
    }
    removeItem(preferenceName, key) {
        let obj = this.prefObject(preferenceName, key, undefined, undefined);
        let methodName = Const.removeItem;
        if (this.operatingSystem === PhonePeSDKExternalConstants_1.ExternalConstants.OS.android) {
            methodName = Const.removeItemAndroid;
        }
        MessagingHandler_1.MessagingHandler.callNative(methodName, PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.Preferences.androidBridgeName, obj);
    }
    prefObject(prefName, key, value, defaultValue) {
        let obj = {};
        if (prefName) {
            obj[PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.General.prefName] = prefName;
        }
        if (key) {
            obj[PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.General.key] = key;
        }
        if (defaultValue) {
            obj[PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.General.defaultValue] = defaultValue;
        }
        if (value) {
            obj[PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.General.value] = value;
        }
        return obj;
    }
}
exports.WebNativePreferenceBridge = WebNativePreferenceBridge;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const NativePreferenceBridge_web_1 = __webpack_require__(13);
const PhonePeSDKExternalConstants_1 = __webpack_require__(0);
class NativePreferenceBridgeFactory {
    static getNativePreferenceBridge(species, operatingSystem) {
        if (species === PhonePeSDKExternalConstants_1.ExternalConstants.Species.web) {
            return new NativePreferenceBridge_web_1.WebNativePreferenceBridge(operatingSystem);
        }
        else {
            if (false) {}
            throw new Error('Wrong species sent');
        }
    }
}
exports.NativePreferenceBridgeFactory = NativePreferenceBridgeFactory;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const PhonePeUtils_1 = __webpack_require__(4);
const NavigationRequest_1 = __webpack_require__(7);
const MessagingHandler_1 = __webpack_require__(3);
const PhonePeSDKWebConstants_1 = __webpack_require__(2);
class IOSWebNavigationHandler {
    processNavigationRequestAsync(request, forResult) {
        return __awaiter(this, void 0, void 0, function* () {
            if (request.screenType === NavigationRequest_1.NavigationScreenType.PaymentsView) {
                let reactViewRequest = request;
                return this.navigateToPayment(reactViewRequest, request.isNewTask, forResult);
            }
            else if (request.screenType === NavigationRequest_1.NavigationScreenType.TransactionDetail) {
                let navDetailRequest = request;
                return this.navigateToTransactionDetail(navDetailRequest, request.isNewTask, forResult);
            }
            else {
                return PhonePeUtils_1.PhonePeUtils.returnRejection('Unhandled request type');
            }
        });
    }
    processNavigationRequestForResultAsync(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.processNavigationRequestAsync(request, true);
        });
    }
    navigateToPayment(paymentNavigation, isNewTask, forResult) {
        let obj = paymentNavigation;
        let methodName = PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.NavigationIOS.navigateToPaymentsView;
        return MessagingHandler_1.MessagingHandler.storePromiseAndCallNative(methodName, '', obj);
    }
    navigateToTransactionDetail(detailsNavigation, isNewTask, forResult) {
        return __awaiter(this, void 0, void 0, function* () {
            let obj = detailsNavigation;
            let methodName = PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.NavigationIOS.navigateToTransactionDetail;
            return MessagingHandler_1.MessagingHandler.storePromiseAndCallNative(methodName, '', obj);
        });
    }
    closeAppRequest(request) {
    }
}
exports.IOSWebNavigationHandler = IOSWebNavigationHandler;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(name, screenType, data) {
        this.name = name;
        this.screenType = screenType;
        this.data = data;
    }
}
exports.Node = Node;
class Path {
    constructor(nodes) {
        this.node = nodes;
    }
}
exports.Path = Path;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const NavigationModels_android_1 = __webpack_require__(16);
class NativeNavigationRequestFactory {
    static pathFromPaymentRequest(paymentNavigation, isNewTask) {
        let nodes = [];
        let node1 = new NavigationModels_android_1.Node('payment_activity', 'ACTIVITY', {});
        let nodeData2 = {};
        nodeData2.mode = JSON.stringify(paymentNavigation.mode);
        nodeData2.internalPaymentUiConfig = JSON.stringify(paymentNavigation.internalPaymentUiConfig);
        nodeData2.microPayRequest = JSON.stringify(paymentNavigation.microPayRequest);
        nodeData2.transactionType = JSON.stringify(paymentNavigation.transactionType);
        nodeData2.info = JSON.stringify(paymentNavigation.originInfo);
        nodeData2.metaData = JSON.stringify(paymentNavigation.metaData);
        let node2 = new NavigationModels_android_1.Node('micro_app_payment', 'FRAGMENT', nodeData2);
        nodes.push(node1);
        nodes.push(node2);
        let path = new NavigationModels_android_1.Path(nodes);
        return path;
    }
    static pathFromTransactionDetailsRequest(detailsNavigation, isNewTask) {
        let nodes = [];
        let node1 = new NavigationModels_android_1.Node('transaction_details_activity', 'ACTIVITY', {});
        let nodeData2 = {};
        nodeData2.transactionId = JSON.stringify(detailsNavigation.transactionId);
        nodeData2.transactionType = JSON.stringify('TICKETING');
        nodeData2.info = JSON.stringify(detailsNavigation.info);
        let node2 = new NavigationModels_android_1.Node('transaction_details_fragment', 'FRAGMENT', nodeData2);
        nodes.push(node1);
        nodes.push(node2);
        let path = new NavigationModels_android_1.Path(nodes);
        return path;
    }
}
exports.NativeNavigationRequestFactory = NativeNavigationRequestFactory;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const PhonePeUtils_1 = __webpack_require__(4);
const MessagingHandler_1 = __webpack_require__(3);
const NativeNavigationRequestFactory_1 = __webpack_require__(17);
const NavigationRequest_1 = __webpack_require__(7);
const PhonePeSDKWebConstants_1 = __webpack_require__(2);
const PhonePeSDKInternalConstants_1 = __webpack_require__(1);
var Const = PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.Navigation;
var Activity = PhonePeSDKInternalConstants_1.InternalConstants.ActivityID;
class AndroidWebNavigationHandler {
    processNavigationRequestAsync(request, forResult) {
        return __awaiter(this, void 0, void 0, function* () {
            if (request.screenType === NavigationRequest_1.NavigationScreenType.PaymentsView) {
                let reactViewRequest = request;
                return this.navigateToPayment(reactViewRequest, request.isNewTask, forResult);
            }
            else if (request.screenType === NavigationRequest_1.NavigationScreenType.TransactionDetail) {
                let navDetailRequest = request;
                return this.navigateToTransactionDetail(navDetailRequest, request.isNewTask, forResult);
            }
            else {
                return PhonePeUtils_1.PhonePeUtils.returnRejection('Unhandled request type');
            }
        });
    }
    processNavigationRequestForResultAsync(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.processNavigationRequestAsync(request, true);
        });
    }
    navigateToPayment(paymentNavigation, isNewTask, forResult) {
        let path = NativeNavigationRequestFactory_1.NativeNavigationRequestFactory.pathFromPaymentRequest(paymentNavigation, isNewTask);
        let obj = this.objectForNavigation(path, Activity.payments, isNewTask);
        if (forResult) {
            return MessagingHandler_1.MessagingHandler.storePromiseAndCallNative(Const.navigateToPathForResult, Const.androidBridgeName, obj);
        }
        else {
            return MessagingHandler_1.MessagingHandler.callNative(Const.navigateToPath, Const.androidBridgeName, obj);
        }
    }
    navigateToTransactionDetail(detailsNavigation, isNewTask, forResult) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = NativeNavigationRequestFactory_1.NativeNavigationRequestFactory.pathFromTransactionDetailsRequest(detailsNavigation, isNewTask);
            let obj = this.objectForNavigation(path, Activity.transactionDetails, isNewTask);
            if (forResult) {
                return MessagingHandler_1.MessagingHandler.storePromiseAndCallNative(Const.navigateToPathForResult, Const.androidBridgeName, obj);
            }
            else {
                return MessagingHandler_1.MessagingHandler.callNative(Const.navigateToPath, Const.androidBridgeName, obj);
            }
        });
    }
    objectForNavigation(path, activityId, isNewTask) {
        let obj = {};
        obj[AndroidWebNavigationHandler.pathKey] = JSON.stringify(path);
        obj[AndroidWebNavigationHandler.activityIdKey] = activityId;
        obj[AndroidWebNavigationHandler.isNewTaskKey] = isNewTask ? 0x10000000 : 0;
        return obj;
    }
    closeAppRequest(request) {
    }
}
AndroidWebNavigationHandler.pathKey = 'path';
AndroidWebNavigationHandler.activityIdKey = 'activityId';
AndroidWebNavigationHandler.isNewTaskKey = 'isNewTask';
exports.AndroidWebNavigationHandler = AndroidWebNavigationHandler;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const NativeAndroidNavigationHandler_web_1 = __webpack_require__(18);
const NativeIOSNavigationHandler_web_1 = __webpack_require__(15);
const PhonePeSDKExternalConstants_1 = __webpack_require__(0);
class NativeNavigationFactory {
    static repository(species, operatingSystem) {
        if (species === PhonePeSDKExternalConstants_1.ExternalConstants.Species.web) {
            if (operatingSystem === PhonePeSDKExternalConstants_1.ExternalConstants.OS.ios) {
                return new NativeIOSNavigationHandler_web_1.IOSWebNavigationHandler();
            }
            else {
                return new NativeAndroidNavigationHandler_web_1.AndroidWebNavigationHandler();
            }
        }
        else {
            if (false) {}
            throw new Error('Wrong species sent');
        }
    }
}
exports.NativeNavigationFactory = NativeNavigationFactory;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventHandler_1 = __webpack_require__(8);
class PhonePeWebSubscription {
    constructor(callbackName, eventName, listener) {
        this.eventName = eventName;
        this.listener = listener;
        this.callbackName = callbackName;
    }
    remove() {
        EventHandler_1.EventHandler.removeSubscription(this);
    }
}
exports.PhonePeWebSubscription = PhonePeWebSubscription;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PhonePeWebSubscription_1 = __webpack_require__(20);
const PhonePeSDKWebConstants_1 = __webpack_require__(2);
const MessagingHandler_1 = __webpack_require__(3);
const EventHandler_1 = __webpack_require__(8);
var Const = PhonePeSDKWebConstants_1.PhonePeSDKWebConstants.Location;
class WebLocationBridge {
    getAddress(latitude, longitude) {
        return Promise.resolve();
    }
    startUpdatingLocation() {
        MessagingHandler_1.MessagingHandler.callNative(Const.startUpdatingLocation, Const.androidBridgeName, {});
    }
    stopUpdatingLocation() {
        MessagingHandler_1.MessagingHandler.callNative(Const.stopUpdatingLocation, Const.androidBridgeName, {});
        EventHandler_1.EventHandler.removeAllSubscriptions(Const.locationSuccessEventKey);
        EventHandler_1.EventHandler.removeAllSubscriptions(Const.locationFailureEventKey);
    }
    getCurrentLocation() {
        let obj = {};
        obj[Const.forceNewLocation] = true;
        return MessagingHandler_1.MessagingHandler.storePromiseAndCallNative(Const.getCurrentLocation, Const.androidBridgeName, obj);
    }
    onLocationUpdateSuccess(callbackName, callback) {
        let subscription = new PhonePeWebSubscription_1.PhonePeWebSubscription(callbackName, Const.locationSuccessEventKey, callback);
        EventHandler_1.EventHandler.addSubscription(subscription);
        return subscription;
    }
    onLocationUpdateFailure(callbackName, callback) {
        let subscription = new PhonePeWebSubscription_1.PhonePeWebSubscription(callbackName, Const.locationFailureEventKey, callback);
        EventHandler_1.EventHandler.addSubscription(subscription);
        return subscription;
    }
    isLocationTurnedOn() {
        return Promise.resolve();
    }
    turnOnLocation() {
        return Promise.resolve();
    }
    setLocationPriority(locationPriority) {
    }
}
exports.WebLocationBridge = WebLocationBridge;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LocationBridge_web_1 = __webpack_require__(21);
const PhonePeSDKExternalConstants_1 = __webpack_require__(0);
class LocationBridgeFactory {
    static getNativeLocationBridge(species, operatingSystem) {
        if (species === PhonePeSDKExternalConstants_1.ExternalConstants.Species.web) {
            return new LocationBridge_web_1.WebLocationBridge();
        }
        else {
            if (false) {}
            throw new Error('Wrong species sent');
        }
    }
}
exports.LocationBridgeFactory = LocationBridgeFactory;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class AnalyticsInfo {
    constructor(cat, action, groupingkey) {
        this.category = cat;
        this.action = action;
        this.groupingKey = groupingkey;
        this.startTimeStamp = new Date().getTime();
        this.lastTimeStamp = this.startTimeStamp;
        this.customDimens = {};
        this.isTransactionalEvent = false;
        this.value = 0;
        this.isFirstTime = true;
    }
    setValue(value) {
        this.value = value;
    }
    setTransactionalEvent(value) {
        this.isTransactionalEvent = true;
        this.value = value;
    }
    setCustomDimension(dimen) {
        this.customDimens = dimen;
    }
    setLastTimeStamp(lastTimeStamp) {
        this.lastTimeStamp = lastTimeStamp;
    }
}
exports.AnalyticsInfo = AnalyticsInfo;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ActionButtonProp {
    constructor(name, shouldHide) {
        this.name = name;
        this.shouldHide = shouldHide;
    }
}
exports.ActionButtonProp = ActionButtonProp;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __webpack_require__(9);
var Constant = models_1.ExternalPaymentsNamespace.Constant;
var MicroPayRequest = models_1.ExternalPaymentsNamespace.MicroPayRequest;
var PaymentTimeOutModel = models_1.ExternalPaymentsNamespace.PaymentTimeOutModel;
var DismissBehaviourModel = models_1.ExternalPaymentsNamespace.DismissBehaviourModel;
var InternalPaymentUiConfig = models_1.ExternalPaymentsNamespace.InternalPaymentUiConfig;
var Contact = models_1.ExternalPaymentsNamespace.Contact;
var CONTACT_TYPE = models_1.ExternalPaymentsNamespace.CONTACT_TYPE;
class ExternalPaymentsRequestFactory {
    static microPayRequest(context, fallbackURL) {
        let payRequest = new MicroPayRequest(context[Constant.kMerchantId], 191, fallbackURL);
        payRequest.serviceProviderId = payRequest.merchantId;
        let fulfillContext = {};
        fulfillContext[Constant.kSellingPrice] = context[Constant.kPayableAmount];
        fulfillContext[Constant.kServiceType] = Constant.kServiceTypeValue;
        fulfillContext[Constant.kReservationId] = context[Constant.kReservationId];
        let serviceContext = {};
        serviceContext[Constant.kServiceCategory] = context[Constant.kServiceCategory];
        fulfillContext[Constant.kServiceContext] = serviceContext;
        let quantity = context[Constant.kQuantity];
        if (quantity) {
            fulfillContext[Constant.kQuantity] = context[Constant.kQuantity];
        }
        payRequest.fulFillContext = JSON.stringify(fulfillContext);
        payRequest.discoveryContext = JSON.stringify(this.discoveryContext(payRequest.merchantId));
        return payRequest;
    }
    static discoveryContext(merchantId) {
        return { 'merchantId': merchantId, 'mode': 'PEER_TO_MERCHANT' };
    }
    static internalPaymentUIConfig(initialAmount, contactName, timeoutInterval, imageURL, confirmationActionButtonProperties) {
        let contactList = [new Contact(CONTACT_TYPE.CONTACT_TYPE_MERCHANT, contactName, imageURL)];
        let config = new InternalPaymentUiConfig('PAY', initialAmount, contactList, 0, confirmationActionButtonProperties);
        if (timeoutInterval !== undefined && timeoutInterval !== null) {
            config.paymentTimeout = this.paymentTimeoutModel(timeoutInterval);
        }
        config.paymentDismiss = this.paymentDismissModel();
        return config;
    }
    static paymentTimeoutModel(timeoutInterval) {
        let paymentTimeoutModel = new PaymentTimeOutModel(timeoutInterval, true, Constant.timeoutTitle, Constant.timeoutMessage, Constant.timeoutActionButtonTitle, Constant.PAYMENT_TIMEOUT);
        return paymentTimeoutModel;
    }
    static paymentDismissModel() {
        let paymentDismissModel = new DismissBehaviourModel(true, Constant.dismissTitle, Constant.dismissMessage, Constant.dismissPositiveButtonTitle, Constant.dismissNegativeButtonTitle, Constant.PAYMENT_DISMISS);
        return paymentDismissModel;
    }
}
exports.ExternalPaymentsRequestFactory = ExternalPaymentsRequestFactory;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class OriginInfo {
    constructor(analyticsInfo) {
        this.analyticsInfo = analyticsInfo;
    }
}
exports.OriginInfo = OriginInfo;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const OriginInfo_1 = __webpack_require__(26);
const ExternalPaymentsRequestFactory_1 = __webpack_require__(25);
const NavigationRequest_1 = __webpack_require__(7);
const models_1 = __webpack_require__(9);
const AnalyticsInfo_1 = __webpack_require__(23);
var Constant = models_1.ExternalPaymentsNamespace.Constant;
class ExternalNavigationFactory {
    static paymentNavigationRequest(merchantName, context, fallbackURL, imageURL, orderedMetaData, confirmationActionButtonProperties) {
        let amount = context[models_1.ExternalPaymentsNamespace.Constant.kPayableAmount];
        let timeoutInterval = context[models_1.ExternalPaymentsNamespace.Constant.kValidFor];
        if (timeoutInterval) {
            timeoutInterval *= 1000;
        }
        let uiConfig = ExternalPaymentsRequestFactory_1.ExternalPaymentsRequestFactory.internalPaymentUIConfig(amount, merchantName, timeoutInterval, imageURL);
        let microPayRequest = ExternalPaymentsRequestFactory_1.ExternalPaymentsRequestFactory.microPayRequest(context, fallbackURL);
        let paymentMetadata = new NavigationRequest_1.PaymentMetaData([{}]);
        if (orderedMetaData !== undefined) {
            let data = [];
            for (let singleMetaMap of orderedMetaData) {
                for (let k in singleMetaMap) {
                    if (singleMetaMap.hasOwnProperty(k)) {
                        let key = k;
                        let value = singleMetaMap[k];
                        let localMap = {};
                        localMap[Constant.kKey] = key;
                        localMap[Constant.kValue] = value;
                        data.push(localMap);
                    }
                }
            }
            paymentMetadata.details = data;
        }
        let serviceCategory = context[Constant.kServiceCategory];
        if (!serviceCategory) {
            serviceCategory = 'JSSDK';
        }
        let originInfo = new OriginInfo_1.OriginInfo(new AnalyticsInfo_1.AnalyticsInfo(serviceCategory, serviceCategory + '_NAVIGATE_TO_PAYMENTS', Math.random().toString(36).substring(7)));
        let paymentRequest = new NavigationRequest_1.PaymentNavigationRequest('Pay', 'Pay', true, false, models_1.ExternalPaymentsNamespace.PAYMENT_MODE.MODE_SEND_MONEY, microPayRequest, uiConfig, models_1.ExternalPaymentsNamespace.TRANSACTION_TYPE.SENT_PAYMENT, paymentMetadata, originInfo);
        return paymentRequest;
    }
    static transactionDetailRequest(transactionId) {
        let category = 'JSSDK';
        let originInfo = new OriginInfo_1.OriginInfo(new AnalyticsInfo_1.AnalyticsInfo(category, category + '_NAVIGATE_TO_TRANSACTION_DETAILS', Math.random().toString(36).substring(7)));
        let request = new NavigationRequest_1.TransactionDetailsNavigationRequest('Details', 'Details', true, false, transactionId, models_1.ExternalPaymentsNamespace.TRANSACTION_TYPE.SENT_PAYMENT, originInfo);
        return request;
    }
}
exports.ExternalNavigationFactory = ExternalNavigationFactory;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = __webpack_require__(5);
const PhonePeUtils_1 = __webpack_require__(4);
const PhonePe_1 = __webpack_require__(6);
const PhonePeSDKInternalConstants_1 = __webpack_require__(1);
var Const = PhonePeSDKInternalConstants_1.InternalConstants.PermissionsBridge;
class WebPermissionsBridge {
    constructor(operatingSystem) {
        this.operatingSystem = operatingSystem;
    }
    seekPermission(listOfPermissions) {
        let permissions = PhonePeUtils_1.PhonePeUtils.osSpecificPermissionNames(listOfPermissions, this.operatingSystem);
        return new Promise((resolve, reject) => {
            PhonePe_1.MessagingHandler.storePromiseAndCallNative(Const.seekPermission, Const.name, { 'permissions': permissions }).then((res) => {
                Logger_1.Logger.logd('PhonePe', 'Unstripped response = ' + JSON.stringify(res));
                if (typeof res === 'string') {
                    let jsonRes = JSON.parse(res);
                    jsonRes.forEach((dict) => {
                        let permissionName = PhonePeUtils_1.PhonePeUtils.strippedPermissionName(dict[Const.kPermission], this.operatingSystem);
                        dict[Const.kPermission] = permissionName;
                    });
                    Logger_1.Logger.logd('PhonePe', 'Stripped response = ' + JSON.stringify(jsonRes));
                    resolve(jsonRes);
                }
                else {
                    reject('Wrong response sent by PhonePe');
                }
            }).catch((err) => {
                reject(err);
            });
        });
    }
    openSettingsPageForPermission() {
        return PhonePe_1.MessagingHandler.storePromiseAndCallNative(Const.openSettingsPage, Const.name, {});
    }
}
exports.WebPermissionsBridge = WebPermissionsBridge;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const NativePermissionsBridge_web_1 = __webpack_require__(28);
const PhonePeSDKExternalConstants_1 = __webpack_require__(0);
class NativePermissionsBridgeFactory {
    static getPermissionsBridge(species, operatingSystem) {
        if (species === PhonePeSDKExternalConstants_1.ExternalConstants.Species.web) {
            return new NativePermissionsBridge_web_1.WebPermissionsBridge(operatingSystem);
        }
        else {
            if (false) {}
            throw new Error('Wrong species sent');
        }
    }
}
exports.NativePermissionsBridgeFactory = NativePermissionsBridgeFactory;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PhonePe_1 = __webpack_require__(6);
const PhonePeSDKInternalConstants_1 = __webpack_require__(1);
var Const = PhonePeSDKInternalConstants_1.InternalConstants.AnalyticsBridge;
class WebNativeAnalyticsBridge {
    logMerchantEvent(name, metadata) {
        return PhonePe_1.MessagingHandler.storePromiseAndCallNative(Const.methodName, Const.bridgeName, this.objectForAnalytics(name, metadata));
    }
    objectForAnalytics(name, metadata) {
        let obj = {};
        obj[PhonePeSDKInternalConstants_1.InternalConstants.AnalyticsBridge.kName] = name;
        if (metadata) {
            obj[PhonePeSDKInternalConstants_1.InternalConstants.AnalyticsBridge.kMetadata] = metadata;
        }
        return obj;
    }
}
exports.WebNativeAnalyticsBridge = WebNativeAnalyticsBridge;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const NativeAnalyticsBridge_web_1 = __webpack_require__(30);
const PhonePeSDKExternalConstants_1 = __webpack_require__(0);
class NativeAnalyticsBridgeFactory {
    static getNativeAnalyticsBridge(species, operatingSystem) {
        if (species === PhonePeSDKExternalConstants_1.ExternalConstants.Species.web) {
            return new NativeAnalyticsBridge_web_1.WebNativeAnalyticsBridge();
        }
        else {
            if (false) {}
            throw new Error('Wrong species sent');
        }
    }
}
exports.NativeAnalyticsBridgeFactory = NativeAnalyticsBridgeFactory;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PhonePe_1 = __webpack_require__(6);
const PhonePeSDKInternalConstants_1 = __webpack_require__(1);
const Const = PhonePeSDKInternalConstants_1.InternalConstants.AuthBridge;
class WebNativeOAuthBridge {
    fetchGrantToken() {
        return new Promise((resolve, reject) => {
            PhonePe_1.MessagingHandler.storePromiseAndCallNative(Const.methodName, Const.bridgeName, {}).then((res) => {
                resolve(JSON.parse(res));
            }).catch((err) => {
                reject(err);
            });
        });
    }
}
exports.WebNativeOAuthBridge = WebNativeOAuthBridge;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const NativeOAuthBridge_web_1 = __webpack_require__(32);
const PhonePeSDKExternalConstants_1 = __webpack_require__(0);
class NativeOAuthBridgeFactory {
    static bridge(species) {
        if (species === PhonePeSDKExternalConstants_1.ExternalConstants.Species.web) {
            return new NativeOAuthBridge_web_1.WebNativeOAuthBridge();
        }
        else {
            if (false) {}
            throw new Error('Wrong species sent');
        }
    }
}
exports.NativeOAuthBridgeFactory = NativeOAuthBridgeFactory;


/***/ })
/******/ ]);
