module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__(/*! url */ "url");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "url");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, IndexLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LandingPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexLink", function() { return IndexLink; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_constants_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/constants/routes */ "./src/constants/routes.js");
/* harmony import */ var _src_components_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/App */ "./src/components/App/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Procheta Bhattachary\\nextjs-redux-firebase-authentication\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function LandingPage() {
  return __jsx(_src_components_App__WEBPACK_IMPORTED_MODULE_5__["AppWithAuthentication"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "jsx-2928148672" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("meta", {
    charset: "UTF-8",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }), __jsx("title", {
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "DSC NSEC blogs!"), __jsx("link", {
    rel: "icon",
    href: "https://raw.githubusercontent.com/procheta1999/DSC-NSEC-Blogs/master/public/favicon.ico",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx("script", {
    src: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 3
    }
  }), __jsx("script", {
    src: "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })), __jsx("main", {
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-2928148672" + " " + "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/dsc.png?raw=true",
    alt: "dsc Logo",
    className: "jsx-2928148672" + " " + "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx("b", {
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "DSC NSEC BLOGS-", __jsx("i", {
    id: "s",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 29
    }
  }, "Write Your Own Story!"))), __jsx("br", {
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx("img", {
    src: "https://media.giphy.com/media/pOZhmE42D1WrCWATLK/giphy.gif",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx("br", {
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx("p", {
    className: "jsx-2928148672" + " " + "description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "We, at DSC NSEC, believe that everyone has a unique story to tell to the world- a story about them,how they reached success, how they never gave up, what challenges did they face, what was the final outcome. So we came up with our blog platform ", __jsx("i", {
    id: "pro",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 256
    }
  }, "DSC NSEC blogs!"), " to help reach your stories to the world, to encourage more people in their journey. So, let's start writing !"), __jsx("br", {
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), __jsx("div", {
    id: "myCarousel",
    class: "carousel slide",
    "data-ride": "carousel",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 3
    }
  }, __jsx("ol", {
    class: "carousel-indicators",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx("li", {
    "data-target": "#myCarousel",
    "data-slide-to": "0",
    class: "active",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx("li", {
    "data-target": "#myCarousel",
    "data-slide-to": "1",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), __jsx("li", {
    "data-target": "#myCarousel",
    "data-slide-to": "2",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  })), __jsx("div", {
    class: "carousel-inner",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("div", {
    class: "item active",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "pr24",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "pr2",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 8
    }
  }, " ", __jsx("i", {
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 23
    }
  }, "Start writing, no matter what. The water does not flow until the faucet is turned on.")), "-Louis L\u2019Amour")), __jsx("div", {
    class: "item",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "pr1",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "pr2",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 8
    }
  }, " ", __jsx("i", {
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 23
    }
  }, "Write what should not be forgotten")), "-Isabel Allende")), __jsx("div", {
    class: "item",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "pr34",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "pr2",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 8
    }
  }, " ", __jsx("i", {
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 23
    }
  }, "The first draft is just you telling yourself the story.")), "-Terry Pratchett"))), __jsx("a", {
    class: "left carousel-control",
    href: "#myCarousel",
    "data-slide": "prev",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx("span", {
    class: "glyphicon glyphicon-chevron-left",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }), __jsx("span", {
    class: "sr-only",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, "Previous")), __jsx("a", {
    class: "right carousel-control",
    href: "#myCarousel",
    "data-slide": "next",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx("span", {
    class: "glyphicon glyphicon-chevron-right",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }), __jsx("span", {
    class: "sr-only",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, "Next"))), __jsx("br", {
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-2928148672" + " " + "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/dsc.png?raw=true",
    alt: "blog",
    id: "book1",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }), __jsx("a", {
    href: "https://dscnsec.com/",
    className: "jsx-2928148672" + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "About us \u2192"), __jsx("p", {
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, "We are Developer Student Club of Netaji Subhash Engineering College, New Garia, Kolkata.")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/signin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "jsx-2928148672" + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 32
    }
  }, __jsx("h3", {
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, "Log In \u2192"), __jsx("p", {
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, "Start your Blog Journey today!"))), __jsx("img", {
    src: "https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/book.jpg?raw=true",
    alt: "blog",
    id: "book",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }), __jsx("br", {
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/create.jpg?raw=true",
    alt: "blog",
    id: "book",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }), __jsx("a", {
    href: "/four-post",
    className: "jsx-2928148672" + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, "Contributors' Section \u2192"), __jsx("p", {
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, "The people without whom this page would have been impossible"))), __jsx("br", {
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }), __jsx("div", {
    id: "pr",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "h3",
    gutterBottom: true,
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, "Follow us:"), __jsx("a", {
    href: "https://www.facebook.com/dscnsec",
    target: "_blank",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: "fa fa-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 68
    }
  })), __jsx("a", {
    href: "https://twitter.com/dscnsec",
    target: "_blank",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: "fa fa-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 63
    }
  })), __jsx("a", {
    href: "https://ig.me/dscnsec",
    target: "_blank",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: "fa fa-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 57
    }
  })), __jsx("a", {
    href: "https://github.com/dscnsec",
    target: "_blank",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: "fa fa-github",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 62
    }
  }))), __jsx("br", {
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }), __jsx("br", {
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  })), __jsx("footer", {
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://dscnsec.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-2928148672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/dsc.png?raw=true",
    alt: "dsc Logo",
    height: "300px",
    width: "100px",
    className: "jsx-2928148672" + " " + "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2928148672",
    __self: this
  }, "#book1.jsx-2928148672{float:left;height:50%;width:50%;}#pr34.jsx-2928148672{padding:2em 2em 2em 2em;font-size:20px;font-family:Optimus Princeps;background-image:url(\"https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/light.jpg?raw=true\");background-width:25%;background-height:25%;color:white;}#pr24.jsx-2928148672{padding:2em 2em 2em 2em;font-size:20px;font-family:Optimus Princeps;background-image:url(\"https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/bulb.jpg?raw=true\");background-width:25%;background-height:25%;color:black;}#pr2.jsx-2928148672{padding:1em 1em 1em 1em;font-size:40px;}#pr1.jsx-2928148672{padding:2em 2em 2em 2em;font-size:20px;font-family:Optimus Princeps;background-image:url(\"https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/book.jpg?raw=true\");background-width:50%;background-height:50%;color:white;}#pr.jsx-2928148672{padding:1em 1em 1em 1em;}#pr.jsx-2928148672 a.jsx-2928148672{margin-right:30px;}#create.jsx-2928148672{display:block;margin-left:auto;margin-right:auto;height:300px;width:600px;}#book.jsx-2928148672{float:right;height:50%;width:50%;}.container.jsx-2928148672{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}main.jsx-2928148672{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-2928148672{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-2928148672 img.jsx-2928148672{margin-left:0.5rem;}footer.jsx-2928148672 a.jsx-2928148672{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-2928148672{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-2928148672{margin:0;line-height:1.15;font-size:4rem;}.title.jsx-2928148672 a.jsx-2928148672{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-2928148672 a.jsx-2928148672:hover,.title.jsx-2928148672 a.jsx-2928148672:focus,.title.jsx-2928148672 a.jsx-2928148672:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-2928148672,.description.jsx-2928148672{text-align:center;}.description.jsx-2928148672{line-height:1.5;font-size:3rem;}code.jsx-2928148672{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}.grid.jsx-2928148672{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem;}.card.jsx-2928148672{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}.card.jsx-2928148672:hover,.card.jsx-2928148672:focus,.card.jsx-2928148672:active{color:#0070f3;border-color:#0070f3;}.card.jsx-2928148672 h3.jsx-2928148672{margin:0 0 1rem 0;font-size:2rem;}.card.jsx-2928148672 p.jsx-2928148672{margin:0;font-size:2rem;line-height:1.5;}.logo.jsx-2928148672{height:1.5em;float:left;margin-right:1em;}@media (max-width:600px){.grid.jsx-2928148672{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}#s.jsx-2928148672{-webkit-animation:pulse-jsx-2928148672 5s infinite;animation:pulse-jsx-2928148672 5s infinite;}@-webkit-keyframes pulse-jsx-2928148672{20%{color:red;}30%{color:blue;}40%{color:green;}100%{color:yellow;}}@keyframes pulse-jsx-2928148672{20%{color:red;}30%{color:blue;}40%{color:green;}100%{color:yellow;}}#pro.jsx-2928148672{color:blue;}html.jsx-2928148672,body.jsx-2928148672{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*.jsx-2928148672{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUHJvY2hldGEgQmhhdHRhY2hhcnlcXG5leHRqcy1yZWR1eC1maXJlYmFzZS1hdXRoZW50aWNhdGlvblxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJIa0IsQUFHbUIsQUFLYSxBQVNBLEFBU0EsQUFLQSxBQVNBLEFBR0wsQUFHSixBQU9ILEFBS1EsQUFTRixBQVNKLEFBU1EsQUFJTixBQU1DLEFBSUwsQUFNSyxBQU9ZLEFBS1IsQUFJRixBQUtHLEFBU04sQUFVRCxBQWNFLEFBS0ksQUFLVCxBQU1JLEFBT0EsQUFLZSxBQUloQixBQUdFLEFBR0MsQUFHQSxBQUlMLEFBSUEsQUFRWSxTQXBITCxBQXNFRixDQXNCZixBQWlCUyxDQTdNTCxBQXlFUyxBQTBHVyxBQVl4QixBQVVGLENBdkpNLEFBNEZXLEFBb0RmLENBdEJVLEFBeUJWLENBMUpXLEFBaURVLEFBVUEsQUFzREEsQ0E1RmQsQ0FzRFEsQ0EvREUsQ0FmdEIsQUEwRUcsQUErQ2lCLENBL0VqQixBQXlDb0IsQUFxRk4sR0EvTVQsQUFvTkwsQ0FsS0ssQ0E5Q1MsQUFTQSxBQVNBLEFBS0EsQUFTbEIsQUFxQ21DLEFBNkZiLEFBT25CLEVBN0VrQixLQXJERixBQTJFZixDQXJIRixDQWtEQSxBQThHRSxDQTFHZSxDQXFHZixFQWpDa0IsRUF0SFcsQUFTQSxBQVVqQyxBQUlpQyxDQTJJN0IsQ0F0RUEsQUE0RUEsT0E3R2UsQ0FwQlAsSUE4Qk8sQUFrREksT0FoQm5CLEVBL0RPLEVBK0NQLEFBVUEsSUFoRzRHLEFBU0QsQUFjQSxFQWlHckMsSUFoRnhFLEFBdUMyQixBQThDSixJQVdKLFdBcUNmLElBcENnQixDQXdDbEIsY0EvSHdCLENBd0ZSLGFBL0VRLENBZ0ZELElBdEVFLDBCQXFJekIsY0E1RXlCLE1BOUNKLEFBNERNLEdBbElQLEFBY0EsQ0F2QkEsU0FrREssS0FzRXpCLE1BOUdxQixBQWNBLENBdkJBLEFBMklBLEVBakZJLGlCQWtGOEIsRUFsSTVDLEFBY0EsQ0F2QkEsTUFtRVUsS0F6RHpCLEFBY0EsQ0F2QkEsa0NBNkVJLEFBOENpQixtQkEzRUksY0FTQSxvQkFVckIsSUEwRGtCLE1BY2xCLFVBYmtCLGdCQUNsQix1QkE5RUEsY0FTQSIsImZpbGUiOiJDOlxcVXNlcnNcXFByb2NoZXRhIEJoYXR0YWNoYXJ5XFxuZXh0anMtcmVkdXgtZmlyZWJhc2UtYXV0aGVudGljYXRpb25cXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0ICogYXMgcm91dGVzIGZyb20gXCIuLi9zcmMvY29uc3RhbnRzL3JvdXRlc1wiXHJcbmltcG9ydCB7IEFwcFdpdGhBdXRoZW50aWNhdGlvbiB9IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9BcHBcIjtcclxuaW1wb3J0IEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYW5kaW5nUGFnZSgpe1xyXG4gIHJldHVybiAoXHJcbiAgPEFwcFdpdGhBdXRoZW50aWNhdGlvbj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIj48L21ldGE+XHJcbiAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiPjwvbWV0YT5cclxuICAgICAgICA8dGl0bGU+RFNDIE5TRUMgYmxvZ3MhPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9wcm9jaGV0YTE5OTkvRFNDLU5TRUMtQmxvZ3MvbWFzdGVyL3B1YmxpYy9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjQuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIj48L2xpbms+XHJcbiAgPHNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8zLjUuMS9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgPHNjcmlwdCBzcmM9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjQuMS9qcy9ib290c3RyYXAubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCI+PC9saW5rPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICBcclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vcHJvY2hldGExOTk5L0RTQy1OU0VDLUJsb2dzL2Jsb2IvbWFzdGVyL3B1YmxpYy9kc2MucG5nP3Jhdz10cnVlXCIgYWx0PVwiZHNjIExvZ29cIiBjbGFzc05hbWU9XCJsb2dvXCIvPlxyXG4gICAgICAgICAgPGI+RFNDIE5TRUMgQkxPR1MtPGkgaWQ9XCJzXCI+V3JpdGUgWW91ciBPd24gU3RvcnkhPC9pPjwvYj5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvcE9aaG1FNDJEMVdyQ1dBVExLL2dpcGh5LmdpZlwiPjwvaW1nPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICBXZSwgYXQgRFNDIE5TRUMsIGJlbGlldmUgdGhhdCBldmVyeW9uZSBoYXMgYSB1bmlxdWUgc3RvcnkgdG8gdGVsbCB0byB0aGUgd29ybGQtIGEgc3RvcnkgYWJvdXQgdGhlbSxob3cgdGhleSByZWFjaGVkIHN1Y2Nlc3MsIGhvdyB0aGV5IG5ldmVyIGdhdmUgdXAsIHdoYXQgY2hhbGxlbmdlcyBkaWQgdGhleSBmYWNlLCB3aGF0IHdhcyB0aGUgZmluYWwgb3V0Y29tZS4gU28gd2UgY2FtZSB1cCB3aXRoIG91ciBibG9nIHBsYXRmb3JtIDxpIGlkPVwicHJvXCI+RFNDIE5TRUMgYmxvZ3MhPC9pPiB0byBoZWxwIHJlYWNoIHlvdXIgc3RvcmllcyB0byB0aGUgd29ybGQsIHRvIGVuY291cmFnZSBtb3JlIHBlb3BsZSBpbiB0aGVpciBqb3VybmV5LiBTbywgbGV0J3Mgc3RhcnQgd3JpdGluZyAhXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gIDxkaXYgaWQ9XCJteUNhcm91c2VsXCIgY2xhc3M9XCJjYXJvdXNlbCBzbGlkZVwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCI+XHJcbiAgICA8b2wgY2xhc3M9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+XHJcbiAgICAgIDxsaSBkYXRhLXRhcmdldD1cIiNteUNhcm91c2VsXCIgZGF0YS1zbGlkZS10bz1cIjBcIiBjbGFzcz1cImFjdGl2ZVwiPjwvbGk+XHJcbiAgICAgIDxsaSBkYXRhLXRhcmdldD1cIiNteUNhcm91c2VsXCIgZGF0YS1zbGlkZS10bz1cIjFcIj48L2xpPlxyXG4gICAgICA8bGkgZGF0YS10YXJnZXQ9XCIjbXlDYXJvdXNlbFwiIGRhdGEtc2xpZGUtdG89XCIyXCI+PC9saT5cclxuICAgIDwvb2w+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaW5uZXJcIj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIGFjdGl2ZVwiPlxyXG4gICAgICA8ZGl2IGlkPVwicHIyNFwiPlxyXG4gICAgICAgPGRpdiBpZD1cInByMlwiPiA8aT5TdGFydCB3cml0aW5nLCBubyBtYXR0ZXIgd2hhdC4gVGhlIHdhdGVyIGRvZXMgbm90IGZsb3cgdW50aWwgdGhlIGZhdWNldCBpcyB0dXJuZWQgb24uPC9pPjwvZGl2PlxyXG4gICAgICAgIC1Mb3VpcyBM4oCZQW1vdXJcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICA8ZGl2IGlkPVwicHIxXCI+XHJcbiAgICAgICA8ZGl2IGlkPVwicHIyXCI+IDxpPldyaXRlIHdoYXQgc2hvdWxkIG5vdCBiZSBmb3Jnb3R0ZW48L2k+PC9kaXY+XHJcbiAgICAgICAgLUlzYWJlbCBBbGxlbmRlXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgIDxkaXYgaWQ9XCJwcjM0XCI+XHJcbiAgICAgICA8ZGl2IGlkPVwicHIyXCI+IDxpPlRoZSBmaXJzdCBkcmFmdCBpcyBqdXN0IHlvdSB0ZWxsaW5nIHlvdXJzZWxmIHRoZSBzdG9yeS48L2k+PC9kaXY+XHJcbiAgICAgICAgLVRlcnJ5IFByYXRjaGV0dFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICBcclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxhIGNsYXNzPVwibGVmdCBjYXJvdXNlbC1jb250cm9sXCIgaHJlZj1cIiNteUNhcm91c2VsXCIgZGF0YS1zbGlkZT1cInByZXZcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tbGVmdFwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgICA8YSBjbGFzcz1cInJpZ2h0IGNhcm91c2VsLWNvbnRyb2xcIiBocmVmPVwiI215Q2Fyb3VzZWxcIiBkYXRhLXNsaWRlPVwibmV4dFwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1yaWdodFwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj5cclxuICAgIDwvYT5cclxuICA8L2Rpdj5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9wcm9jaGV0YTE5OTkvRFNDLU5TRUMtQmxvZ3MvYmxvYi9tYXN0ZXIvcHVibGljL2RzYy5wbmc/cmF3PXRydWVcIiBhbHQ9XCJibG9nXCIgaWQ9XCJib29rMVwiIC8+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9kc2Nuc2VjLmNvbS9cIiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxoMz5BYm91dCB1cyAmcmFycjs8L2gzPlxyXG4gICAgICAgICAgICA8cD5XZSBhcmUgRGV2ZWxvcGVyIFN0dWRlbnQgQ2x1YiBvZiBOZXRhamkgU3ViaGFzaCBFbmdpbmVlcmluZyBDb2xsZWdlLCBOZXcgR2FyaWEsIEtvbGthdGEuPC9wPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduaW5cIj48YSBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxoMz5Mb2cgSW4gJnJhcnI7PC9oMz5cclxuICAgICAgICAgICAgPHA+U3RhcnQgeW91ciBCbG9nIEpvdXJuZXkgdG9kYXkhPC9wPlxyXG4gICAgICAgICAgPC9hPjwvTGluaz5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL3Byb2NoZXRhMTk5OS9EU0MtTlNFQy1CbG9ncy9ibG9iL21hc3Rlci9wdWJsaWMvYm9vay5qcGc/cmF3PXRydWVcIiBhbHQ9XCJibG9nXCIgaWQ9XCJib29rXCIgLz5cclxuICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vcHJvY2hldGExOTk5L0RTQy1OU0VDLUJsb2dzL2Jsb2IvbWFzdGVyL3B1YmxpYy9jcmVhdGUuanBnP3Jhdz10cnVlXCIgYWx0PVwiYmxvZ1wiIGlkPVwiYm9va1wiIC8+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL2ZvdXItcG9zdFwiIGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGgzPkNvbnRyaWJ1dG9ycycgU2VjdGlvbiAmcmFycjs8L2gzPlxyXG4gICAgICAgICAgICA8cD5UaGUgcGVvcGxlIHdpdGhvdXQgd2hvbSB0aGlzIHBhZ2Ugd291bGQgaGF2ZSBiZWVuIGltcG9zc2libGU8L3A+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgPGRpdiBpZD1cInByXCI+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgZ3V0dGVyQm90dG9tIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICBGb2xsb3cgdXM6XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vZHNjbnNlY1wiIHRhcmdldD1cIl9ibGFua1wiPjxJY29uIGNsYXNzTmFtZT1cImZhIGZhLWZhY2Vib29rLWZcIiAvPjwvYT5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9kc2Nuc2VjXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PEljb24gY2xhc3NOYW1lPVwiZmEgZmEtdHdpdHRlclwiIC8+PC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2lnLm1lL2RzY25zZWNcIiB0YXJnZXQ9XCJfYmxhbmtcIj48SWNvbiBjbGFzc05hbWU9XCJmYSBmYS1pbnN0YWdyYW1cIiAvPjwvYT5cclxuICAgICAgICA8YSAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kc2Nuc2VjXCJ0YXJnZXQ9XCJfYmxhbmtcIj48SWNvbiBjbGFzc05hbWU9XCJmYSBmYS1naXRodWJcIiAvPjwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgPGZvb3Rlcj5cclxuICAgICAgXHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2RzY25zZWMuY29tL1wiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vcHJvY2hldGExOTk5L0RTQy1OU0VDLUJsb2dzL2Jsb2IvbWFzdGVyL3B1YmxpYy9kc2MucG5nP3Jhdz10cnVlXCIgYWx0PVwiZHNjIExvZ29cIiBjbGFzc05hbWU9XCJsb2dvXCIgIGhlaWdodD1cIjMwMHB4XCIgd2lkdGg9XCIxMDBweFwiLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgI2Jvb2sxe1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBoZWlnaHQ6NTAlO1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gICAgICB9XHJcbiAgICAgICNwcjM0e1xyXG4gICAgICAgIHBhZGRpbmc6MmVtIDJlbSAyZW0gMmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBPcHRpbXVzIFByaW5jZXBzO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiaHR0cHM6Ly9naXRodWIuY29tL3Byb2NoZXRhMTk5OS9EU0MtTlNFQy1CbG9ncy9ibG9iL21hc3Rlci9wdWJsaWMvbGlnaHQuanBnP3Jhdz10cnVlXCIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtd2lkdGg6MjUlO1xyXG4gICAgICAgIGJhY2tncm91bmQtaGVpZ2h0OjI1JTtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgIH1cclxuICAgICAgI3ByMjR7XHJcbiAgICAgICAgcGFkZGluZzoyZW0gMmVtIDJlbSAyZW07XHJcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE9wdGltdXMgUHJpbmNlcHM7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCJodHRwczovL2dpdGh1Yi5jb20vcHJvY2hldGExOTk5L0RTQy1OU0VDLUJsb2dzL2Jsb2IvbWFzdGVyL3B1YmxpYy9idWxiLmpwZz9yYXc9dHJ1ZVwiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXdpZHRoOjI1JTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWhlaWdodDoyNSU7XHJcbiAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICB9XHJcbiAgICAgICNwcjJ7XHJcbiAgICAgICAgcGFkZGluZzoxZW0gMWVtIDFlbSAxZW07XHJcbiAgICAgICAgZm9udC1zaXplOjQwcHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAgICNwcjF7XHJcbiAgICAgICAgcGFkZGluZzoyZW0gMmVtIDJlbSAyZW07XHJcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE9wdGltdXMgUHJpbmNlcHM7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCJodHRwczovL2dpdGh1Yi5jb20vcHJvY2hldGExOTk5L0RTQy1OU0VDLUJsb2dzL2Jsb2IvbWFzdGVyL3B1YmxpYy9ib29rLmpwZz9yYXc9dHJ1ZVwiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXdpZHRoOjUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWhlaWdodDo1MCU7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICB9XHJcbiAgICAgICNwcntcclxuICAgICAgICBwYWRkaW5nOjFlbSAxZW0gMWVtIDFlbTtcclxuICAgIH1cclxuICAgICAgI3ByIGEge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICB9IFxyXG4gICAgICAjY3JlYXRle1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gO1xyXG4gICAgaGVpZ2h0OjMwMHB4O1xyXG4gICAgd2lkdGg6NjAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgI2Jvb2t7XHJcbiAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICBoZWlnaHQ6NTAlO1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYWluIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDVyZW0gMDtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb290ZXIgaW1nIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb290ZXIgYSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIGEge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUgYTpob3ZlcixcclxuICAgICAgICAudGl0bGUgYTpmb2N1cyxcclxuICAgICAgICAudGl0bGUgYTphY3RpdmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUsXHJcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29kZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMC43NXJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXHJcbiAgICAgICAgICAgIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ncmlkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgICBmbGV4LWJhc2lzOiA0NSU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQ6aG92ZXIsXHJcbiAgICAgICAgLmNhcmQ6Zm9jdXMsXHJcbiAgICAgICAgLmNhcmQ6YWN0aXZlIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQgaDMge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQgcCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxLjVlbTtcclxuICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6MWVtXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgIC5ncmlkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNze1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSA1cyBpbmZpbml0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgICAgICAgICAyMCUge1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMzAle1xyXG4gICAgICAgICAgICAgIGNvbG9yOmJsdWU7IFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgNDAle1xyXG4gICAgICAgICAgICAgIGNvbG9yOmdyZWVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB5ZWxsb3c7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNwcm97XHJcbiAgICAgICAgICBjb2xvcjpibHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBodG1sLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICA8L0FwcFdpdGhBdXRoZW50aWNhdGlvbj5cclxuKTtcclxuICB9XHJcbiAgY29uc3QgSW5kZXhMaW5rID0gKCkgPT4gKFxyXG4gICAgPHA+XHJcbiAgICAgIDxMaW5rIGhyZWY9e3JvdXRlcy5JTkRFWH0+XHJcbiAgICAgICAgPGE+SG9tZVBhZ2Ug8J+PoDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9wPlxyXG4gICk7XHJcbiAgZXhwb3J0eyBJbmRleExpbmt9XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Procheta Bhattachary\\\\nextjs-redux-firebase-authentication\\\\pages\\\\index.js */")));
}

const IndexLink = () => __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 347,
    columnNumber: 5
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: _src_constants_routes__WEBPACK_IMPORTED_MODULE_4__["INDEX"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 348,
    columnNumber: 7
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 349,
    columnNumber: 9
  }
}, "HomePage \uD83C\uDFE0")));



/***/ }),

/***/ "./pages/pw-forget.js":
/*!****************************!*\
  !*** ./pages/pw-forget.js ***!
  \****************************/
/*! exports provided: default, PasswordForgetForm, PasswordForgetLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordForgetForm", function() { return PasswordForgetForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordForgetLink", function() { return PasswordForgetLink; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/App */ "./src/components/App/index.js");
/* harmony import */ var _src_constants_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/constants/routes */ "./src/constants/routes.js");
/* harmony import */ var _src_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/firebase */ "./src/firebase/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index */ "./pages/index.js");
var _jsxFileName = "C:\\Users\\Procheta Bhattachary\\nextjs-redux-firebase-authentication\\pages\\pw-forget.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const PasswordForgetPage = () => __jsx(_src_components_App__WEBPACK_IMPORTED_MODULE_3__["AppWithAuthentication"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
}, __jsx("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}, "Forgot Your Password?"), __jsx(PasswordForgetForm, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}));

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  error: null
};

class PasswordForgetForm extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "onSubmit", event => {
      const {
        email
      } = this.state;
      _src_firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].doPasswordReset(email).then(() => {
        this.setState(() => _objectSpread({}, INITIAL_STATE));
      }).catch(error => {
        this.setState(updateByPropertyName("error", error));
      });
      event.preventDefault();
    });

    this.state = _objectSpread({}, INITIAL_STATE);
  }

  render() {
    const {
      email,
      error
    } = this.state;
    const isInvalid = email === "";
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("center", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 7
      }
    }, __jsx("form", {
      onSubmit: this.onSubmit,
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "jsx-1330015200" + " " + "grid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "jsx-1330015200" + " " + "card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 7
      }
    }, "Your Email Address:", __jsx("input", {
      value: this.state.email,
      onChange: event => this.setState(updateByPropertyName("email", event.target.value)),
      type: "text",
      placeholder: "Email Address",
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 28
      }
    }), __jsx("br", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    }), __jsx("br", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }
    }), __jsx("center", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }
    }, __jsx("button", {
      disabled: isInvalid,
      type: "submit",
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }, "Reset My Password")), __jsx("br", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }
    }), __jsx("center", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 5
      }
    }, __jsx("button", {
      variant: "contained",
      color: "primary",
      type: "submit",
      style: {
        marginTop: "20px",
        width: "200px"
      },
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }, __jsx(_index__WEBPACK_IMPORTED_MODULE_6__["IndexLink"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }
    }))), error && __jsx("p", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 19
      }
    }, error.message))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2428873762",
      __self: this
    }, "footer.jsx-1330015200{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1330015200 img.jsx-1330015200{margin-left:0.5rem;}footer.jsx-1330015200 a.jsx-1330015200{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.grid.jsx-1330015200{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:1000px;margin-top:4rem;}.card.jsx-1330015200{margin:2rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:3rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid black;border-radius:20px;-moz-box-shadow:inset 0 0 10px #000000;-webkit-box-shadow:inset 0 0 10px #000000;box-shadow:inset 0 0 10px #000000;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}.card.jsx-1330015200:hover,.card.jsx-1330015200:focus,.card.jsx-1330015200:active{color:#0070f3;border-color:#0070f3;}.card.jsx-1330015200 h3.jsx-1330015200{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-1330015200 p.jsx-1330015200{margin:0;font-size:1.25rem;line-height:1.5;}#l.jsx-1330015200{text-align:center;}.logo.jsx-1330015200{height:1em;float:left;}.title.jsx-1330015200{margin:0;line-height:1.15;font-size:4rem;padding:5rem 0;}#s.jsx-1330015200{-webkit-animation:pulse-jsx-1330015200 5s infinite;animation:pulse-jsx-1330015200 5s infinite;}@-webkit-keyframes pulse-jsx-1330015200{20%{color:red;}30%{color:blue;}40%{color:green;}100%{color:yellow;}}@keyframes pulse-jsx-1330015200{20%{color:red;}30%{color:blue;}40%{color:green;}100%{color:yellow;}}#pro.jsx-1330015200{color:blue;}form.jsx-1330015200{font-size:30px;padding:0.00010rem 5em 5em 5em;margin:100px 100px 100px 100px;}Button.jsx-1330015200{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#new.jsx-1330015200{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUHJvY2hldGEgQmhhdHRhY2hhcnlcXG5leHRqcy1yZWR1eC1maXJlYmFzZS1hdXRoZW50aWNhdGlvblxccGFnZXNcXHB3LWZvcmdldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRmtCLEFBR29CLEFBU1EsQUFJTixBQUtBLEFBVUQsQUFpQkUsQUFLSSxBQUtULEFBS1UsQUFHUixBQUlGLEFBTW1CLEFBSWhCLEFBR0UsQUFHQyxBQUdBLEFBSUwsQUFHSSxBQUtJLEFBR0QsU0E3Q0MsQUFZRCxDQVVqQixDQTdFYSxBQStESCxBQWlCVixBQVVGLENBOURpQixBQXVEZixDQUdBLENBekNxQixDQWdESyxHQTNDVCxBQVVuQixBQXlDQSxDQTVGQSxHQXVEQSxFQS9EK0IsRUFtRWQsQ0FaQyxRQVZsQixBQUtBLE1Ba0JpQixFQVpqQixHQXFDNkIsT0E1RmQsR0FvRWYsa0JBekR5QixBQUtKLEdBNkVyQixDQWxFZSxhQUNHLEVBb0VsQixDQXpCQSxhQTFDZ0IsY0FDTyxNQTdCRSx3Q0FnQkEsSUFjQSxFQW5CSixxQkFvQkEsbUJBQ3dCLGFBL0J4QiwwQkFnQ2tCLGNBckJ2QyxBQUtpQiw0QkFpQnNCLHlCQWhDdkMsSUFpQm1CLEtBZ0JvQyxZQWZyQyxnQkFDbEIsb0ZBZUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxQcm9jaGV0YSBCaGF0dGFjaGFyeVxcbmV4dGpzLXJlZHV4LWZpcmViYXNlLWF1dGhlbnRpY2F0aW9uXFxwYWdlc1xccHctZm9yZ2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBXaXRoQXV0aGVudGljYXRpb24gfSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQXBwXCI7XHJcbmltcG9ydCAqIGFzIHJvdXRlcyBmcm9tIFwiLi4vc3JjL2NvbnN0YW50cy9yb3V0ZXNcIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9zcmMvZmlyZWJhc2VcIjtcclxuaW1wb3J0IHtJbmRleExpbmt9IGZyb20gXCIuL2luZGV4XCI7XHJcbmNvbnN0IFBhc3N3b3JkRm9yZ2V0UGFnZSA9ICgpID0+IChcclxuICA8QXBwV2l0aEF1dGhlbnRpY2F0aW9uPlxyXG4gICAgPGgxPkZvcmdvdCBZb3VyIFBhc3N3b3JkPzwvaDE+XHJcbiAgICA8UGFzc3dvcmRGb3JnZXRGb3JtIC8+XHJcbiAgPC9BcHBXaXRoQXV0aGVudGljYXRpb24+XHJcbik7XHJcblxyXG5jb25zdCB1cGRhdGVCeVByb3BlcnR5TmFtZSA9IChwcm9wZXJ0eU5hbWUsIHZhbHVlKSA9PiAoKSA9PiAoe1xyXG4gIFtwcm9wZXJ0eU5hbWVdOiB2YWx1ZVxyXG59KTtcclxuXHJcbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XHJcbiAgZW1haWw6IFwiXCIsXHJcbiAgZXJyb3I6IG51bGxcclxufTtcclxuXHJcbmNsYXNzIFBhc3N3b3JkRm9yZ2V0Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0geyAuLi5JTklUSUFMX1NUQVRFIH07XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCA9IGV2ZW50ID0+IHtcclxuICAgIGNvbnN0IHsgZW1haWwgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgYXV0aFxyXG4gICAgICAuZG9QYXNzd29yZFJlc2V0KGVtYWlsKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyAuLi5JTklUSUFMX1NUQVRFIH0pKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHVwZGF0ZUJ5UHJvcGVydHlOYW1lKFwiZXJyb3JcIiwgZXJyb3IpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGVtYWlsLCBlcnJvciB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBjb25zdCBpc0ludmFsaWQgPSBlbWFpbCA9PT0gXCJcIjtcclxuXHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICAgIDxjZW50ZXI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgIFlvdXIgRW1haWwgQWRkcmVzczo8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodXBkYXRlQnlQcm9wZXJ0eU5hbWUoXCJlbWFpbFwiLCBldmVudC50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAvPjxicj48L2JyPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxjZW50ZXI+PGJ1dHRvbiBkaXNhYmxlZD17aXNJbnZhbGlkfSB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICBSZXNldCBNeSBQYXNzd29yZFxyXG4gICAgICAgIDwvYnV0dG9uPjwvY2VudGVyPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgPGNlbnRlcj48YnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiwgd2lkdGg6IFwiMjAwcHhcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW5kZXhMaW5rLz5cclxuICAgICAgICAgIDwvYnV0dG9uPjwvY2VudGVyPlxyXG4gICAgICAgIHtlcnJvciAmJiA8cD57ZXJyb3IubWVzc2FnZX08L3A+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvY2VudGVyPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvb3RlciBpbWcge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvb3RlciBhIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmdyaWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXJkIHtcclxuICAgICAgICBtYXJnaW46IDJyZW07XHJcbiAgICAgICAgZmxleC1iYXNpczogNDUlO1xyXG4gICAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAgICBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xyXG4gICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XHJcbiAgIGJveC1zaGFkb3c6ICAgICAgICAgaW5zZXQgMCAwIDEwcHggIzAwMDAwMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQ6aG92ZXIsXHJcbiAgICAgIC5jYXJkOmZvY3VzLFxyXG4gICAgICAuY2FyZDphY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwNzBmMztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQgaDMge1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICB9XHJcbiAgICAgICNse1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmxvZ28ge1xyXG4gICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDVyZW0gMDtcclxuICAgICAgfVxyXG4gICAgICAjc3tcclxuICAgICAgICBhbmltYXRpb246IHB1bHNlIDVzIGluZmluaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIEBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gICAgICAgIDIwJSB7XHJcbiAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAzMCV7XHJcbiAgICAgICAgICAgIGNvbG9yOmJsdWU7IFxyXG4gICAgICAgIH1cclxuICAgICAgICA0MCV7XHJcbiAgICAgICAgICAgIGNvbG9yOmdyZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgIGNvbG9yOiB5ZWxsb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICNwcm97XHJcbiAgICAgICAgY29sb3I6Ymx1ZTtcclxuICAgICAgfVxyXG4gICAgICBmb3Jte1xyXG4gICAgICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgcGFkZGluZzowLjAwMDEwcmVtIDVlbSA1ZW0gNWVtOyAgICAgICAgIFxyXG4gICAgbWFyZ2luOiAxMDBweCAxMDBweCAxMDBweCAxMDBweDtcclxuICAgICAgfVxyXG4gICAgICBCdXR0b257XHJcbiAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgICNuZXd7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgUGFzc3dvcmRGb3JnZXRMaW5rID0gKCkgPT4gKFxyXG4gIDxwPlxyXG4gICAgPExpbmsgaHJlZj17cm91dGVzLlBBU1NXT1JEX0ZPUkdFVH0+XHJcbiAgICAgIDxhPkZvcmdvdCBQYXNzd29yZD88L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgPC9wPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmRGb3JnZXRQYWdlO1xyXG5cclxuZXhwb3J0IHsgUGFzc3dvcmRGb3JnZXRGb3JtLCBQYXNzd29yZEZvcmdldExpbmsgfTtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Procheta Bhattachary\\\\nextjs-redux-firebase-authentication\\\\pages\\\\pw-forget.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3379920139",
      __self: this
    }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUHJvY2hldGEgQmhhdHRhY2hhcnlcXG5leHRqcy1yZWR1eC1maXJlYmFzZS1hdXRoZW50aWNhdGlvblxccGFnZXNcXHB3LWZvcmdldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyTHlCLEFBSXFCLEFBUVksVUFQYixTQUdHLEdBS2QsbUlBSkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxQcm9jaGV0YSBCaGF0dGFjaGFyeVxcbmV4dGpzLXJlZHV4LWZpcmViYXNlLWF1dGhlbnRpY2F0aW9uXFxwYWdlc1xccHctZm9yZ2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBXaXRoQXV0aGVudGljYXRpb24gfSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQXBwXCI7XHJcbmltcG9ydCAqIGFzIHJvdXRlcyBmcm9tIFwiLi4vc3JjL2NvbnN0YW50cy9yb3V0ZXNcIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9zcmMvZmlyZWJhc2VcIjtcclxuaW1wb3J0IHtJbmRleExpbmt9IGZyb20gXCIuL2luZGV4XCI7XHJcbmNvbnN0IFBhc3N3b3JkRm9yZ2V0UGFnZSA9ICgpID0+IChcclxuICA8QXBwV2l0aEF1dGhlbnRpY2F0aW9uPlxyXG4gICAgPGgxPkZvcmdvdCBZb3VyIFBhc3N3b3JkPzwvaDE+XHJcbiAgICA8UGFzc3dvcmRGb3JnZXRGb3JtIC8+XHJcbiAgPC9BcHBXaXRoQXV0aGVudGljYXRpb24+XHJcbik7XHJcblxyXG5jb25zdCB1cGRhdGVCeVByb3BlcnR5TmFtZSA9IChwcm9wZXJ0eU5hbWUsIHZhbHVlKSA9PiAoKSA9PiAoe1xyXG4gIFtwcm9wZXJ0eU5hbWVdOiB2YWx1ZVxyXG59KTtcclxuXHJcbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XHJcbiAgZW1haWw6IFwiXCIsXHJcbiAgZXJyb3I6IG51bGxcclxufTtcclxuXHJcbmNsYXNzIFBhc3N3b3JkRm9yZ2V0Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0geyAuLi5JTklUSUFMX1NUQVRFIH07XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCA9IGV2ZW50ID0+IHtcclxuICAgIGNvbnN0IHsgZW1haWwgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgYXV0aFxyXG4gICAgICAuZG9QYXNzd29yZFJlc2V0KGVtYWlsKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyAuLi5JTklUSUFMX1NUQVRFIH0pKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHVwZGF0ZUJ5UHJvcGVydHlOYW1lKFwiZXJyb3JcIiwgZXJyb3IpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGVtYWlsLCBlcnJvciB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBjb25zdCBpc0ludmFsaWQgPSBlbWFpbCA9PT0gXCJcIjtcclxuXHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICAgIDxjZW50ZXI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgIFlvdXIgRW1haWwgQWRkcmVzczo8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodXBkYXRlQnlQcm9wZXJ0eU5hbWUoXCJlbWFpbFwiLCBldmVudC50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAvPjxicj48L2JyPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxjZW50ZXI+PGJ1dHRvbiBkaXNhYmxlZD17aXNJbnZhbGlkfSB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICBSZXNldCBNeSBQYXNzd29yZFxyXG4gICAgICAgIDwvYnV0dG9uPjwvY2VudGVyPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgPGNlbnRlcj48YnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiwgd2lkdGg6IFwiMjAwcHhcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW5kZXhMaW5rLz5cclxuICAgICAgICAgIDwvYnV0dG9uPjwvY2VudGVyPlxyXG4gICAgICAgIHtlcnJvciAmJiA8cD57ZXJyb3IubWVzc2FnZX08L3A+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvY2VudGVyPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvb3RlciBpbWcge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvb3RlciBhIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmdyaWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXJkIHtcclxuICAgICAgICBtYXJnaW46IDJyZW07XHJcbiAgICAgICAgZmxleC1iYXNpczogNDUlO1xyXG4gICAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAgICBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xyXG4gICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XHJcbiAgIGJveC1zaGFkb3c6ICAgICAgICAgaW5zZXQgMCAwIDEwcHggIzAwMDAwMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQ6aG92ZXIsXHJcbiAgICAgIC5jYXJkOmZvY3VzLFxyXG4gICAgICAuY2FyZDphY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwNzBmMztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQgaDMge1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICB9XHJcbiAgICAgICNse1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmxvZ28ge1xyXG4gICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDVyZW0gMDtcclxuICAgICAgfVxyXG4gICAgICAjc3tcclxuICAgICAgICBhbmltYXRpb246IHB1bHNlIDVzIGluZmluaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIEBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gICAgICAgIDIwJSB7XHJcbiAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAzMCV7XHJcbiAgICAgICAgICAgIGNvbG9yOmJsdWU7IFxyXG4gICAgICAgIH1cclxuICAgICAgICA0MCV7XHJcbiAgICAgICAgICAgIGNvbG9yOmdyZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgIGNvbG9yOiB5ZWxsb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICNwcm97XHJcbiAgICAgICAgY29sb3I6Ymx1ZTtcclxuICAgICAgfVxyXG4gICAgICBmb3Jte1xyXG4gICAgICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgcGFkZGluZzowLjAwMDEwcmVtIDVlbSA1ZW0gNWVtOyAgICAgICAgIFxyXG4gICAgbWFyZ2luOiAxMDBweCAxMDBweCAxMDBweCAxMDBweDtcclxuICAgICAgfVxyXG4gICAgICBCdXR0b257XHJcbiAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgICNuZXd7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgUGFzc3dvcmRGb3JnZXRMaW5rID0gKCkgPT4gKFxyXG4gIDxwPlxyXG4gICAgPExpbmsgaHJlZj17cm91dGVzLlBBU1NXT1JEX0ZPUkdFVH0+XHJcbiAgICAgIDxhPkZvcmdvdCBQYXNzd29yZD88L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgPC9wPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmRGb3JnZXRQYWdlO1xyXG5cclxuZXhwb3J0IHsgUGFzc3dvcmRGb3JnZXRGb3JtLCBQYXNzd29yZEZvcmdldExpbmsgfTtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Procheta Bhattachary\\\\nextjs-redux-firebase-authentication\\\\pages\\\\pw-forget.js */"));
  }

}

const PasswordForgetLink = () => __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 208,
    columnNumber: 3
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: _src_constants_routes__WEBPACK_IMPORTED_MODULE_4__["PASSWORD_FORGET"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 209,
    columnNumber: 5
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 210,
    columnNumber: 7
  }
}, "Forgot Password?")));

/* harmony default export */ __webpack_exports__["default"] = (PasswordForgetPage);


/***/ }),

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/*! exports provided: default, SignInForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInForm", function() { return SignInForm; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup */ "./pages/signup.js");
/* harmony import */ var _pw_forget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pw-forget */ "./pages/pw-forget.js");
/* harmony import */ var _src_components_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/App */ "./src/components/App/index.js");
/* harmony import */ var _src_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/firebase */ "./src/firebase/index.js");
/* harmony import */ var _src_constants_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/constants/routes */ "./src/constants/routes.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index */ "./pages/index.js");
var _jsxFileName = "C:\\Users\\Procheta Bhattachary\\nextjs-redux-firebase-authentication\\pages\\signin.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const SignInPage = () => __jsx(_src_components_App__WEBPACK_IMPORTED_MODULE_5__["AppWithAuthentication"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }
}, __jsx(SignInForm, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
}));

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInForm extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "onSubmit", event => {
      const {
        email,
        password
      } = this.state;
      _src_firebase__WEBPACK_IMPORTED_MODULE_6__["auth"].doSignInWithEmailAndPassword(email, password).then(() => {
        this.setState(() => _objectSpread({}, INITIAL_STATE));
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(_src_constants_routes__WEBPACK_IMPORTED_MODULE_7__["HOME"]);
      }).catch(error => {
        this.setState(updateByPropertyName("error", error));
      });
      event.preventDefault();
    });

    this.state = _objectSpread({}, INITIAL_STATE);
  }

  render() {
    const {
      email,
      password,
      error
    } = this.state;
    const isInvalid = password === "" || email === "";
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 7
      }
    }, __jsx("meta", {
      charset: "UTF-8",
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 7
      }
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 4
      }
    }), __jsx("title", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 8
      }
    }, "Log In"), __jsx("link", {
      rel: "icon",
      href: "https://raw.githubusercontent.com/procheta1999/DSC-NSEC-Blogs/master/public/favicon.ico",
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 8
      }
    })), __jsx("main", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 6
      }
    }, __jsx("h1", {
      className: "jsx-1330015200" + " " + "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 6
      }
    }, __jsx("img", {
      src: "https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/dsc.png?raw=true",
      alt: "dsc Logo",
      className: "jsx-1330015200" + " " + "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }
    }), __jsx("b", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }
    }, "DSC NSEC BLOGS-", __jsx("i", {
      id: "s",
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 29
      }
    }, "Write Your Own Story!"))), __jsx("br", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }
    }), __jsx("center", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }
    }, __jsx("h1", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }
    }, "Log In To Start Your Journey Today!")), __jsx("center", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }
    }, __jsx("img", {
      src: "https://media.giphy.com/media/1O2BRZcDgIfDsKMTbG/giphy.gif",
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }
    })), __jsx("center", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }
    }, __jsx("form", {
      onSubmit: this.onSubmit,
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "jsx-1330015200" + " " + "grid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "jsx-1330015200" + " " + "card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 7
      }
    }, "Username:", __jsx("input", {
      value: email,
      onChange: event => this.setState(updateByPropertyName("email", event.target.value)),
      type: "text",
      placeholder: "someone@example.com",
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 18
      }
    }), __jsx("br", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }
    }), __jsx("br", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }
    }), "Password:", __jsx("input", {
      value: password,
      onChange: event => this.setState(updateByPropertyName("password", event.target.value)),
      type: "password",
      placeholder: "Password",
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 18
      }
    }), __jsx("br", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }
    }), __jsx("center", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }
    }, __jsx("button", {
      disabled: isInvalid,
      type: "submit",
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }
    }, "Sign In")), error && __jsx("p", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 19
      }
    }, error.message), __jsx("br", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }
    }), __jsx("center", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }
    }, __jsx(_pw_forget__WEBPACK_IMPORTED_MODULE_4__["PasswordForgetLink"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }
    })), __jsx("br", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }
    }), __jsx("center", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 5
      }
    }, __jsx(_signup__WEBPACK_IMPORTED_MODULE_3__["SignUpLink"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }
    })), __jsx("br", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 5
      }
    }), __jsx("center", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 5
      }
    }, __jsx("button", {
      variant: "contained",
      color: "primary",
      type: "submit",
      style: {
        marginTop: "20px",
        width: "200px"
      },
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 13
      }
    }, __jsx(_index__WEBPACK_IMPORTED_MODULE_10__["IndexLink"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 13
      }
    })))))))), __jsx("footer", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 7
      }
    }, __jsx("a", {
      href: "https://dscnsec.com/",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }
    }, __jsx("img", {
      src: "https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/dsc.png?raw=true",
      alt: "DSC Logo",
      className: "jsx-1330015200" + " " + "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 11
      }
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2428873762",
      __self: this
    }, "footer.jsx-1330015200{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1330015200 img.jsx-1330015200{margin-left:0.5rem;}footer.jsx-1330015200 a.jsx-1330015200{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.grid.jsx-1330015200{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:1000px;margin-top:4rem;}.card.jsx-1330015200{margin:2rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:3rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid black;border-radius:20px;-moz-box-shadow:inset 0 0 10px #000000;-webkit-box-shadow:inset 0 0 10px #000000;box-shadow:inset 0 0 10px #000000;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}.card.jsx-1330015200:hover,.card.jsx-1330015200:focus,.card.jsx-1330015200:active{color:#0070f3;border-color:#0070f3;}.card.jsx-1330015200 h3.jsx-1330015200{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-1330015200 p.jsx-1330015200{margin:0;font-size:1.25rem;line-height:1.5;}#l.jsx-1330015200{text-align:center;}.logo.jsx-1330015200{height:1em;float:left;}.title.jsx-1330015200{margin:0;line-height:1.15;font-size:4rem;padding:5rem 0;}#s.jsx-1330015200{-webkit-animation:pulse-jsx-1330015200 5s infinite;animation:pulse-jsx-1330015200 5s infinite;}@-webkit-keyframes pulse-jsx-1330015200{20%{color:red;}30%{color:blue;}40%{color:green;}100%{color:yellow;}}@keyframes pulse-jsx-1330015200{20%{color:red;}30%{color:blue;}40%{color:green;}100%{color:yellow;}}#pro.jsx-1330015200{color:blue;}form.jsx-1330015200{font-size:30px;padding:0.00010rem 5em 5em 5em;margin:100px 100px 100px 100px;}Button.jsx-1330015200{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#new.jsx-1330015200{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUHJvY2hldGEgQmhhdHRhY2hhcnlcXG5leHRqcy1yZWR1eC1maXJlYmFzZS1hdXRoZW50aWNhdGlvblxccGFnZXNcXHNpZ25pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvSWtCLEFBR29CLEFBU1EsQUFJTixBQUtBLEFBVUQsQUFpQkUsQUFLSSxBQUtULEFBS1UsQUFHUixBQUlGLEFBTW1CLEFBSWhCLEFBR0UsQUFHQyxBQUdBLEFBSUwsQUFHSSxBQUtJLEFBR0QsU0E3Q0MsQUFZRCxDQVVqQixDQTdFYSxBQStESCxBQWlCVixBQVVGLENBOURpQixBQXVEZixDQUdBLENBekNxQixDQWdESyxHQTNDVCxBQVVuQixBQXlDQSxDQTVGQSxHQXVEQSxFQS9EK0IsRUFtRWQsQ0FaQyxRQVZsQixBQUtBLE1Ba0JpQixFQVpqQixHQXFDNkIsT0E1RmQsR0FvRWYsa0JBekR5QixBQUtKLEdBNkVyQixDQWxFZSxhQUNHLEVBb0VsQixDQXpCQSxhQTFDZ0IsY0FDTyxNQTdCRSx3Q0FnQkEsSUFjQSxFQW5CSixxQkFvQkEsbUJBQ3dCLGFBL0J4QiwwQkFnQ2tCLGNBckJ2QyxBQUtpQiw0QkFpQnNCLHlCQWhDdkMsSUFpQm1CLEtBZ0JvQyxZQWZyQyxnQkFDbEIsb0ZBZUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxQcm9jaGV0YSBCaGF0dGFjaGFyeVxcbmV4dGpzLXJlZHV4LWZpcmViYXNlLWF1dGhlbnRpY2F0aW9uXFxwYWdlc1xcc2lnbmluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTaWduVXBMaW5rIH0gZnJvbSBcIi4vc2lnbnVwXCI7XHJcbmltcG9ydCB7IFBhc3N3b3JkRm9yZ2V0TGluayB9IGZyb20gXCIuL3B3LWZvcmdldFwiO1xyXG5pbXBvcnQgeyBBcHBXaXRoQXV0aGVudGljYXRpb24gfSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQXBwXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vc3JjL2ZpcmViYXNlXCI7XHJcbmltcG9ydCAqIGFzIHJvdXRlcyBmcm9tIFwiLi4vc3JjL2NvbnN0YW50cy9yb3V0ZXNcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtJbmRleExpbmt9IGZyb20gXCIuL2luZGV4XCI7XHJcbmNvbnN0IFNpZ25JblBhZ2UgPSAoKSA9PiAoXHJcbiAgPEFwcFdpdGhBdXRoZW50aWNhdGlvbj5cclxuICAgIDxTaWduSW5Gb3JtIC8+XHJcbiAgICBcclxuICAgIFxyXG4gIDwvQXBwV2l0aEF1dGhlbnRpY2F0aW9uPlxyXG4pO1xyXG5cclxuY29uc3QgdXBkYXRlQnlQcm9wZXJ0eU5hbWUgPSAocHJvcGVydHlOYW1lLCB2YWx1ZSkgPT4gKCkgPT4gKHtcclxuICBbcHJvcGVydHlOYW1lXTogdmFsdWVcclxufSk7XHJcblxyXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xyXG4gIGVtYWlsOiBcIlwiLFxyXG4gIHBhc3N3b3JkOiBcIlwiLFxyXG4gIGVycm9yOiBudWxsXHJcbn07XHJcblxyXG5jbGFzcyBTaWduSW5Gb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7IC4uLklOSVRJQUxfU1RBVEUgfTtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0ID0gZXZlbnQgPT4ge1xyXG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgYXV0aFxyXG4gICAgICAuZG9TaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IC4uLklOSVRJQUxfU1RBVEUgfSkpO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKHJvdXRlcy5IT01FKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHVwZGF0ZUJ5UHJvcGVydHlOYW1lKFwiZXJyb3JcIiwgZXJyb3IpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCwgZXJyb3IgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgY29uc3QgaXNJbnZhbGlkID0gcGFzc3dvcmQgPT09IFwiXCIgfHwgZW1haWwgPT09IFwiXCI7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPjwvbWV0YT5cclxuICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIj48L21ldGE+XHJcbiAgICAgICA8dGl0bGU+TG9nIEluPC90aXRsZT5cclxuICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3Byb2NoZXRhMTk5OS9EU0MtTlNFQy1CbG9ncy9tYXN0ZXIvcHVibGljL2Zhdmljb24uaWNvXCIgPjwvbGluaz5cclxuICAgICA8L0hlYWQ+XHJcbiAgICAgPG1haW4+XHJcbiAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vcHJvY2hldGExOTk5L0RTQy1OU0VDLUJsb2dzL2Jsb2IvbWFzdGVyL3B1YmxpYy9kc2MucG5nP3Jhdz10cnVlXCIgYWx0PVwiZHNjIExvZ29cIiBjbGFzc05hbWU9XCJsb2dvXCI+PC9pbWc+XHJcbiAgICAgICAgICA8Yj5EU0MgTlNFQyBCTE9HUy08aSBpZD1cInNcIj5Xcml0ZSBZb3VyIE93biBTdG9yeSE8L2k+PC9iPlxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGNlbnRlcj48aDE+XHJcbiAgICAgICAgTG9nIEluIFRvIFN0YXJ0IFlvdXIgSm91cm5leSBUb2RheSFcclxuICAgICAgICA8L2gxPjwvY2VudGVyPlxyXG4gICAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS8xTzJCUlpjRGdJZkRzS01UYkcvZ2lwaHkuZ2lmXCI+PC9pbWc+PC9jZW50ZXI+XHJcbiAgICAgICAgPGNlbnRlcj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgVXNlcm5hbWU6PGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVCeVByb3BlcnR5TmFtZShcImVtYWlsXCIsIGV2ZW50LnRhcmdldC52YWx1ZSkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInNvbWVvbmVAZXhhbXBsZS5jb21cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgUGFzc3dvcmQ6PGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVCeVByb3BlcnR5TmFtZShcInBhc3N3b3JkXCIsIGV2ZW50LnRhcmdldC52YWx1ZSkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8Y2VudGVyPjxidXR0b24gZGlzYWJsZWQ9e2lzSW52YWxpZH0gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgU2lnbiBJblxyXG4gICAgICAgIDwvYnV0dG9uPjwvY2VudGVyPlxyXG5cclxuICAgICAgICB7ZXJyb3IgJiYgPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPn1cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8Y2VudGVyPjxQYXNzd29yZEZvcmdldExpbmsgLz48L2NlbnRlcj5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgIDxjZW50ZXI+PFNpZ25VcExpbmsgLz48L2NlbnRlcj5cclxuICAgIDxicj48L2JyPlxyXG4gICAgPGNlbnRlcj48YnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiwgd2lkdGg6IFwiMjAwcHhcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW5kZXhMaW5rLz5cclxuICAgICAgICAgIDwvYnV0dG9uPjwvY2VudGVyPlxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICAgICBcclxuICAgICAgPC9jZW50ZXI+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPGZvb3Rlcj5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZHNjbnNlYy5jb20vXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9wcm9jaGV0YTE5OTkvRFNDLU5TRUMtQmxvZ3MvYmxvYi9tYXN0ZXIvcHVibGljL2RzYy5wbmc/cmF3PXRydWVcIiBhbHQ9XCJEU0MgTG9nb1wiIGNsYXNzTmFtZT1cImxvZ29cIiAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgZm9vdGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9vdGVyIGltZyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9vdGVyIGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuZ3JpZCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQge1xyXG4gICAgICAgIG1hcmdpbjogMnJlbTtcclxuICAgICAgICBmbGV4LWJhc2lzOiA0NSU7XHJcbiAgICAgICAgcGFkZGluZzogM3JlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAtbW96LWJveC1zaGFkb3c6ICAgIGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XHJcbiAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggIzAwMDAwMDtcclxuICAgYm94LXNoYWRvdzogICAgICAgICBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZDpob3ZlcixcclxuICAgICAgLmNhcmQ6Zm9jdXMsXHJcbiAgICAgIC5jYXJkOmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZCBoMyB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZCBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgIH1cclxuICAgICAgI2x7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgfVxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcclxuICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgcGFkZGluZzogNXJlbSAwO1xyXG4gICAgICB9XHJcbiAgICAgICNze1xyXG4gICAgICAgIGFuaW1hdGlvbjogcHVsc2UgNXMgaW5maW5pdGU7XHJcbiAgICAgIH1cclxuICAgICAgQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgICAgICAgMjAlIHtcclxuICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDMwJXtcclxuICAgICAgICAgICAgY29sb3I6Ymx1ZTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDQwJXtcclxuICAgICAgICAgICAgY29sb3I6Z3JlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgY29sb3I6IHllbGxvdztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgI3Byb3tcclxuICAgICAgICBjb2xvcjpibHVlO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm17XHJcbiAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICBwYWRkaW5nOjAuMDAwMTByZW0gNWVtIDVlbSA1ZW07ICAgICAgICAgXHJcbiAgICBtYXJnaW46IDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIEJ1dHRvbntcclxuICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgI25ld3tcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgaHRtbCxcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxyXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25JblBhZ2U7XHJcblxyXG5leHBvcnQgeyBTaWduSW5Gb3JtIH07XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Procheta Bhattachary\\\\nextjs-redux-firebase-authentication\\\\pages\\\\signin.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3379920139",
      __self: this
    }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUHJvY2hldGEgQmhhdHRhY2hhcnlcXG5leHRqcy1yZWR1eC1maXJlYmFzZS1hdXRoZW50aWNhdGlvblxccGFnZXNcXHNpZ25pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4T3lCLEFBSXFCLEFBUVksVUFQYixTQUdHLEdBS2QsbUlBSkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxQcm9jaGV0YSBCaGF0dGFjaGFyeVxcbmV4dGpzLXJlZHV4LWZpcmViYXNlLWF1dGhlbnRpY2F0aW9uXFxwYWdlc1xcc2lnbmluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTaWduVXBMaW5rIH0gZnJvbSBcIi4vc2lnbnVwXCI7XHJcbmltcG9ydCB7IFBhc3N3b3JkRm9yZ2V0TGluayB9IGZyb20gXCIuL3B3LWZvcmdldFwiO1xyXG5pbXBvcnQgeyBBcHBXaXRoQXV0aGVudGljYXRpb24gfSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQXBwXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vc3JjL2ZpcmViYXNlXCI7XHJcbmltcG9ydCAqIGFzIHJvdXRlcyBmcm9tIFwiLi4vc3JjL2NvbnN0YW50cy9yb3V0ZXNcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtJbmRleExpbmt9IGZyb20gXCIuL2luZGV4XCI7XHJcbmNvbnN0IFNpZ25JblBhZ2UgPSAoKSA9PiAoXHJcbiAgPEFwcFdpdGhBdXRoZW50aWNhdGlvbj5cclxuICAgIDxTaWduSW5Gb3JtIC8+XHJcbiAgICBcclxuICAgIFxyXG4gIDwvQXBwV2l0aEF1dGhlbnRpY2F0aW9uPlxyXG4pO1xyXG5cclxuY29uc3QgdXBkYXRlQnlQcm9wZXJ0eU5hbWUgPSAocHJvcGVydHlOYW1lLCB2YWx1ZSkgPT4gKCkgPT4gKHtcclxuICBbcHJvcGVydHlOYW1lXTogdmFsdWVcclxufSk7XHJcblxyXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xyXG4gIGVtYWlsOiBcIlwiLFxyXG4gIHBhc3N3b3JkOiBcIlwiLFxyXG4gIGVycm9yOiBudWxsXHJcbn07XHJcblxyXG5jbGFzcyBTaWduSW5Gb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7IC4uLklOSVRJQUxfU1RBVEUgfTtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0ID0gZXZlbnQgPT4ge1xyXG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgYXV0aFxyXG4gICAgICAuZG9TaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IC4uLklOSVRJQUxfU1RBVEUgfSkpO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKHJvdXRlcy5IT01FKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHVwZGF0ZUJ5UHJvcGVydHlOYW1lKFwiZXJyb3JcIiwgZXJyb3IpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCwgZXJyb3IgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgY29uc3QgaXNJbnZhbGlkID0gcGFzc3dvcmQgPT09IFwiXCIgfHwgZW1haWwgPT09IFwiXCI7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPjwvbWV0YT5cclxuICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIj48L21ldGE+XHJcbiAgICAgICA8dGl0bGU+TG9nIEluPC90aXRsZT5cclxuICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3Byb2NoZXRhMTk5OS9EU0MtTlNFQy1CbG9ncy9tYXN0ZXIvcHVibGljL2Zhdmljb24uaWNvXCIgPjwvbGluaz5cclxuICAgICA8L0hlYWQ+XHJcbiAgICAgPG1haW4+XHJcbiAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vcHJvY2hldGExOTk5L0RTQy1OU0VDLUJsb2dzL2Jsb2IvbWFzdGVyL3B1YmxpYy9kc2MucG5nP3Jhdz10cnVlXCIgYWx0PVwiZHNjIExvZ29cIiBjbGFzc05hbWU9XCJsb2dvXCI+PC9pbWc+XHJcbiAgICAgICAgICA8Yj5EU0MgTlNFQyBCTE9HUy08aSBpZD1cInNcIj5Xcml0ZSBZb3VyIE93biBTdG9yeSE8L2k+PC9iPlxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGNlbnRlcj48aDE+XHJcbiAgICAgICAgTG9nIEluIFRvIFN0YXJ0IFlvdXIgSm91cm5leSBUb2RheSFcclxuICAgICAgICA8L2gxPjwvY2VudGVyPlxyXG4gICAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS8xTzJCUlpjRGdJZkRzS01UYkcvZ2lwaHkuZ2lmXCI+PC9pbWc+PC9jZW50ZXI+XHJcbiAgICAgICAgPGNlbnRlcj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgVXNlcm5hbWU6PGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVCeVByb3BlcnR5TmFtZShcImVtYWlsXCIsIGV2ZW50LnRhcmdldC52YWx1ZSkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInNvbWVvbmVAZXhhbXBsZS5jb21cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgUGFzc3dvcmQ6PGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVCeVByb3BlcnR5TmFtZShcInBhc3N3b3JkXCIsIGV2ZW50LnRhcmdldC52YWx1ZSkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8Y2VudGVyPjxidXR0b24gZGlzYWJsZWQ9e2lzSW52YWxpZH0gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgU2lnbiBJblxyXG4gICAgICAgIDwvYnV0dG9uPjwvY2VudGVyPlxyXG5cclxuICAgICAgICB7ZXJyb3IgJiYgPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPn1cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8Y2VudGVyPjxQYXNzd29yZEZvcmdldExpbmsgLz48L2NlbnRlcj5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgIDxjZW50ZXI+PFNpZ25VcExpbmsgLz48L2NlbnRlcj5cclxuICAgIDxicj48L2JyPlxyXG4gICAgPGNlbnRlcj48YnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiwgd2lkdGg6IFwiMjAwcHhcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW5kZXhMaW5rLz5cclxuICAgICAgICAgIDwvYnV0dG9uPjwvY2VudGVyPlxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICAgICBcclxuICAgICAgPC9jZW50ZXI+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPGZvb3Rlcj5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZHNjbnNlYy5jb20vXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9wcm9jaGV0YTE5OTkvRFNDLU5TRUMtQmxvZ3MvYmxvYi9tYXN0ZXIvcHVibGljL2RzYy5wbmc/cmF3PXRydWVcIiBhbHQ9XCJEU0MgTG9nb1wiIGNsYXNzTmFtZT1cImxvZ29cIiAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgZm9vdGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9vdGVyIGltZyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9vdGVyIGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuZ3JpZCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQge1xyXG4gICAgICAgIG1hcmdpbjogMnJlbTtcclxuICAgICAgICBmbGV4LWJhc2lzOiA0NSU7XHJcbiAgICAgICAgcGFkZGluZzogM3JlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAtbW96LWJveC1zaGFkb3c6ICAgIGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XHJcbiAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggIzAwMDAwMDtcclxuICAgYm94LXNoYWRvdzogICAgICAgICBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZDpob3ZlcixcclxuICAgICAgLmNhcmQ6Zm9jdXMsXHJcbiAgICAgIC5jYXJkOmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZCBoMyB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZCBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgIH1cclxuICAgICAgI2x7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgfVxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcclxuICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgcGFkZGluZzogNXJlbSAwO1xyXG4gICAgICB9XHJcbiAgICAgICNze1xyXG4gICAgICAgIGFuaW1hdGlvbjogcHVsc2UgNXMgaW5maW5pdGU7XHJcbiAgICAgIH1cclxuICAgICAgQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgICAgICAgMjAlIHtcclxuICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDMwJXtcclxuICAgICAgICAgICAgY29sb3I6Ymx1ZTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDQwJXtcclxuICAgICAgICAgICAgY29sb3I6Z3JlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgY29sb3I6IHllbGxvdztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgI3Byb3tcclxuICAgICAgICBjb2xvcjpibHVlO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm17XHJcbiAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICBwYWRkaW5nOjAuMDAwMTByZW0gNWVtIDVlbSA1ZW07ICAgICAgICAgXHJcbiAgICBtYXJnaW46IDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIEJ1dHRvbntcclxuICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgI25ld3tcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgaHRtbCxcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxyXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25JblBhZ2U7XHJcblxyXG5leHBvcnQgeyBTaWduSW5Gb3JtIH07XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Procheta Bhattachary\\\\nextjs-redux-firebase-authentication\\\\pages\\\\signin.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SignInPage);


/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default, SignUpForm, SignUpLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpForm", function() { return SignUpForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpLink", function() { return SignUpLink; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/App */ "./src/components/App/index.js");
/* harmony import */ var _src_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/firebase */ "./src/firebase/index.js");
/* harmony import */ var _src_constants_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/constants/routes */ "./src/constants/routes.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index */ "./pages/index.js");
var _jsxFileName = "C:\\Users\\Procheta Bhattachary\\nextjs-redux-firebase-authentication\\pages\\signup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const SignUpPage = () => __jsx(_src_components_App__WEBPACK_IMPORTED_MODULE_4__["AppWithAuthentication"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }
}, __jsx(SignUpForm, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}));

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class SignUpForm extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "onSubmit", event => {
      const {
        username,
        email,
        passwordOne
      } = this.state;
      _src_firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].doCreateUserWithEmailAndPassword(email, passwordOne).then(authUser => {
        // Create a user in your own accessible Firebase Database too
        _src_firebase__WEBPACK_IMPORTED_MODULE_5__["db"].doCreateUser(authUser.user.uid, username, email).then(() => {
          this.setState(() => _objectSpread({}, INITIAL_STATE));
          next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(_src_constants_routes__WEBPACK_IMPORTED_MODULE_6__["HOME"]);
        }).catch(error => {
          this.setState(updateByPropertyName("error", error));
        });
      }).catch(error => {
        this.setState(updateByPropertyName("error", error));
      });
      event.preventDefault();
    });

    this.state = _objectSpread({}, INITIAL_STATE);
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === "" || username === "";
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 7
      }
    }, __jsx("meta", {
      charset: "UTF-8",
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 7
      }
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 4
      }
    }), __jsx("title", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 8
      }
    }, "Sign Up"), __jsx("link", {
      rel: "icon",
      href: "https://raw.githubusercontent.com/procheta1999/DSC-NSEC-Blogs/master/public/favicon.ico",
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 8
      }
    })), __jsx("main", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 6
      }
    }, __jsx("h1", {
      className: "jsx-1330015200" + " " + "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 6
      }
    }, __jsx("img", {
      src: "https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/dsc.png?raw=true",
      alt: "dsc Logo",
      className: "jsx-1330015200" + " " + "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }
    }), __jsx("b", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }
    }, "DSC NSEC BLOGS-", __jsx("i", {
      id: "s",
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 29
      }
    }, "Write Your Own Story!"))), __jsx("center", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }
    }, __jsx("h1", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    }, "Sign Up To Start Your Journey Today!")), __jsx("center", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }
    }, __jsx("img", {
      src: "https://media.giphy.com/media/MTjM7okzpQu88/giphy.gif",
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }
    })), __jsx("center", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }
    }, __jsx("form", {
      onSubmit: this.onSubmit,
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "jsx-1330015200" + " " + "grid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "jsx-1330015200" + " " + "card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 7
      }
    }, "Full Name:", __jsx("input", {
      value: username,
      onChange: event => this.setState(updateByPropertyName("username", event.target.value)),
      type: "text",
      placeholder: "Full Name",
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 19
      }
    }), __jsx("br", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }
    }), __jsx("br", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }
    }), "Email:", __jsx("input", {
      value: email,
      onChange: event => this.setState(updateByPropertyName("email", event.target.value)),
      type: "text",
      placeholder: "Email Address",
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 15
      }
    }), __jsx("br", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 11
      }
    }), __jsx("br", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }
    }), "Password:", __jsx("input", {
      value: passwordOne,
      onChange: event => this.setState(updateByPropertyName("passwordOne", event.target.value)),
      type: "password",
      placeholder: "Password",
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 18
      }
    }), __jsx("br", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 11
      }
    }), __jsx("br", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }
    }), "Confirm Password:", __jsx("input", {
      value: passwordTwo,
      onChange: event => this.setState(updateByPropertyName("passwordTwo", event.target.value)),
      type: "password",
      placeholder: "Confirm Password",
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 26
      }
    }), __jsx("br", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 11
      }
    }), __jsx("br", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }
    }), __jsx("center", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }
    }, __jsx("button", {
      disabled: isInvalid,
      type: "submit",
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }
    }, "Sign Up")), __jsx("center", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }
    }, "Ater creating account, go back to Login Page."), __jsx("br", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 5
      }
    }), __jsx("center", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 5
      }
    }, __jsx("button", {
      variant: "contained",
      color: "primary",
      type: "submit",
      style: {
        marginTop: "20px",
        width: "200px"
      },
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }
    }, __jsx(_index__WEBPACK_IMPORTED_MODULE_8__["IndexLink"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 13
      }
    }))), error && __jsx("p", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 19
      }
    }, error.message)))))), __jsx("footer", {
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 7
      }
    }, __jsx("a", {
      href: "https://dscnsec.com/",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "jsx-1330015200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }
    }, __jsx("img", {
      src: "https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/dsc.png?raw=true",
      alt: "DSC Logo",
      className: "jsx-1330015200" + " " + "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 11
      }
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2428873762",
      __self: this
    }, "footer.jsx-1330015200{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1330015200 img.jsx-1330015200{margin-left:0.5rem;}footer.jsx-1330015200 a.jsx-1330015200{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.grid.jsx-1330015200{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:1000px;margin-top:4rem;}.card.jsx-1330015200{margin:2rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:3rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid black;border-radius:20px;-moz-box-shadow:inset 0 0 10px #000000;-webkit-box-shadow:inset 0 0 10px #000000;box-shadow:inset 0 0 10px #000000;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}.card.jsx-1330015200:hover,.card.jsx-1330015200:focus,.card.jsx-1330015200:active{color:#0070f3;border-color:#0070f3;}.card.jsx-1330015200 h3.jsx-1330015200{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-1330015200 p.jsx-1330015200{margin:0;font-size:1.25rem;line-height:1.5;}#l.jsx-1330015200{text-align:center;}.logo.jsx-1330015200{height:1em;float:left;}.title.jsx-1330015200{margin:0;line-height:1.15;font-size:4rem;padding:5rem 0;}#s.jsx-1330015200{-webkit-animation:pulse-jsx-1330015200 5s infinite;animation:pulse-jsx-1330015200 5s infinite;}@-webkit-keyframes pulse-jsx-1330015200{20%{color:red;}30%{color:blue;}40%{color:green;}100%{color:yellow;}}@keyframes pulse-jsx-1330015200{20%{color:red;}30%{color:blue;}40%{color:green;}100%{color:yellow;}}#pro.jsx-1330015200{color:blue;}form.jsx-1330015200{font-size:30px;padding:0.00010rem 5em 5em 5em;margin:100px 100px 100px 100px;}Button.jsx-1330015200{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#new.jsx-1330015200{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUHJvY2hldGEgQmhhdHRhY2hhcnlcXG5leHRqcy1yZWR1eC1maXJlYmFzZS1hdXRoZW50aWNhdGlvblxccGFnZXNcXHNpZ251cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SmtCLEFBR29CLEFBU1EsQUFJTixBQUtBLEFBVUQsQUFpQkUsQUFLSSxBQUtULEFBS1UsQUFHUixBQUlGLEFBTW1CLEFBSWhCLEFBR0UsQUFHQyxBQUdBLEFBSUwsQUFHSSxBQUtJLEFBR0QsU0E3Q0MsQUFZRCxDQVVqQixDQTdFYSxBQStESCxBQWlCVixBQVVGLENBOURpQixBQXVEZixDQUdBLENBekNxQixDQWdESyxHQTNDVCxBQVVuQixBQXlDQSxDQTVGQSxHQXVEQSxFQS9EK0IsRUFtRWQsQ0FaQyxRQVZsQixBQUtBLE1Ba0JpQixFQVpqQixHQXFDNkIsT0E1RmQsR0FvRWYsa0JBekR5QixBQUtKLEdBNkVyQixDQWxFZSxhQUNHLEVBb0VsQixDQXpCQSxhQTFDZ0IsY0FDTyxNQTdCRSx3Q0FnQkEsSUFjQSxFQW5CSixxQkFvQkEsbUJBQ3dCLGFBL0J4QiwwQkFnQ2tCLGNBckJ2QyxBQUtpQiw0QkFpQnNCLHlCQWhDdkMsSUFpQm1CLEtBZ0JvQyxZQWZyQyxnQkFDbEIsb0ZBZUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxQcm9jaGV0YSBCaGF0dGFjaGFyeVxcbmV4dGpzLXJlZHV4LWZpcmViYXNlLWF1dGhlbnRpY2F0aW9uXFxwYWdlc1xcc2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBXaXRoQXV0aGVudGljYXRpb24gfSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQXBwXCI7XHJcbmltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSBcIi4uL3NyYy9maXJlYmFzZVwiO1xyXG5pbXBvcnQgKiBhcyByb3V0ZXMgZnJvbSBcIi4uL3NyYy9jb25zdGFudHMvcm91dGVzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQge0luZGV4TGlua30gZnJvbSBcIi4vaW5kZXhcIjtcclxuY29uc3QgU2lnblVwUGFnZSA9ICgpID0+IChcclxuICA8QXBwV2l0aEF1dGhlbnRpY2F0aW9uPlxyXG4gICAgPFNpZ25VcEZvcm0gLz5cclxuICA8L0FwcFdpdGhBdXRoZW50aWNhdGlvbj5cclxuKTtcclxuXHJcbmNvbnN0IHVwZGF0ZUJ5UHJvcGVydHlOYW1lID0gKHByb3BlcnR5TmFtZSwgdmFsdWUpID0+ICgpID0+ICh7XHJcbiAgW3Byb3BlcnR5TmFtZV06IHZhbHVlXHJcbn0pO1xyXG5cclxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcclxuICB1c2VybmFtZTogXCJcIixcclxuICBlbWFpbDogXCJcIixcclxuICBwYXNzd29yZE9uZTogXCJcIixcclxuICBwYXNzd29yZFR3bzogXCJcIixcclxuICBlcnJvcjogbnVsbFxyXG59O1xyXG5cclxuY2xhc3MgU2lnblVwRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0geyAuLi5JTklUSUFMX1NUQVRFIH07XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCA9IGV2ZW50ID0+IHtcclxuICAgIGNvbnN0IHsgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZE9uZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBhdXRoXHJcbiAgICAgIC5kb0NyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmRPbmUpXHJcbiAgICAgIC50aGVuKGF1dGhVc2VyID0+IHtcclxuICAgICAgICAvLyBDcmVhdGUgYSB1c2VyIGluIHlvdXIgb3duIGFjY2Vzc2libGUgRmlyZWJhc2UgRGF0YWJhc2UgdG9vXHJcbiAgICAgICAgZGIuZG9DcmVhdGVVc2VyKGF1dGhVc2VyLnVzZXIudWlkLCB1c2VybmFtZSwgZW1haWwpXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgLi4uSU5JVElBTF9TVEFURSB9KSk7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKHJvdXRlcy5IT01FKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHVwZGF0ZUJ5UHJvcGVydHlOYW1lKFwiZXJyb3JcIiwgZXJyb3IpKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodXBkYXRlQnlQcm9wZXJ0eU5hbWUoXCJlcnJvclwiLCBlcnJvcikpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZE9uZSwgcGFzc3dvcmRUd28sIGVycm9yIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGNvbnN0IGlzSW52YWxpZCA9XHJcbiAgICAgIHBhc3N3b3JkT25lICE9PSBwYXNzd29yZFR3byB8fCBwYXNzd29yZE9uZSA9PT0gXCJcIiB8fCB1c2VybmFtZSA9PT0gXCJcIjtcclxuXHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIj48L21ldGE+XHJcbiAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+PC9tZXRhPlxyXG4gICAgICAgPHRpdGxlPlNpZ24gVXA8L3RpdGxlPlxyXG4gICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vcHJvY2hldGExOTk5L0RTQy1OU0VDLUJsb2dzL21hc3Rlci9wdWJsaWMvZmF2aWNvbi5pY29cIiA+PC9saW5rPlxyXG4gICAgIDwvSGVhZD5cclxuICAgICA8bWFpbj5cclxuICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9wcm9jaGV0YTE5OTkvRFNDLU5TRUMtQmxvZ3MvYmxvYi9tYXN0ZXIvcHVibGljL2RzYy5wbmc/cmF3PXRydWVcIiBhbHQ9XCJkc2MgTG9nb1wiIGNsYXNzTmFtZT1cImxvZ29cIj48L2ltZz5cclxuICAgICAgICAgIDxiPkRTQyBOU0VDIEJMT0dTLTxpIGlkPVwic1wiPldyaXRlIFlvdXIgT3duIFN0b3J5ITwvaT48L2I+XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8Y2VudGVyPjxoMT5cclxuICAgICAgICBTaWduIFVwIFRvIFN0YXJ0IFlvdXIgSm91cm5leSBUb2RheSFcclxuICAgICAgICA8L2gxPjwvY2VudGVyPlxyXG4gICAgICAgIDxjZW50ZXI+PGltZyBzcmM9XCJodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS9NVGpNN29renBRdTg4L2dpcGh5LmdpZlwiPjwvaW1nPjwvY2VudGVyPlxyXG4gICAgICAgIDxjZW50ZXI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgIEZ1bGwgTmFtZTo8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PlxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHVwZGF0ZUJ5UHJvcGVydHlOYW1lKFwidXNlcm5hbWVcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRnVsbCBOYW1lXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIEVtYWlsOjxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodXBkYXRlQnlQcm9wZXJ0eU5hbWUoXCJlbWFpbFwiLCBldmVudC50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAvPjxicj48L2JyPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIFBhc3N3b3JkOjxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkT25lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgdXBkYXRlQnlQcm9wZXJ0eU5hbWUoXCJwYXNzd29yZE9uZVwiLCBldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAvPjxicj48L2JyPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIENvbmZpcm0gUGFzc3dvcmQ6PGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmRUd299XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICB1cGRhdGVCeVByb3BlcnR5TmFtZShcInBhc3N3b3JkVHdvXCIsIGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiXHJcbiAgICAgICAgLz48YnI+PC9icj5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8Y2VudGVyPjxidXR0b24gZGlzYWJsZWQ9e2lzSW52YWxpZH0gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgIDwvYnV0dG9uPjwvY2VudGVyPlxyXG4gICAgICAgIDxjZW50ZXI+QXRlciBjcmVhdGluZyBhY2NvdW50LCBnbyBiYWNrIHRvIExvZ2luIFBhZ2UuPC9jZW50ZXI+XHJcbiAgICA8YnI+PC9icj5cclxuICAgIDxjZW50ZXI+PGJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwMHB4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEluZGV4TGluay8+XHJcbiAgICAgICAgICA8L2J1dHRvbj48L2NlbnRlcj5cclxuXHJcbiAgICAgICAge2Vycm9yICYmIDxwPntlcnJvci5tZXNzYWdlfTwvcD59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPC9jZW50ZXI+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPGZvb3Rlcj5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZHNjbnNlYy5jb20vXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9wcm9jaGV0YTE5OTkvRFNDLU5TRUMtQmxvZ3MvYmxvYi9tYXN0ZXIvcHVibGljL2RzYy5wbmc/cmF3PXRydWVcIiBhbHQ9XCJEU0MgTG9nb1wiIGNsYXNzTmFtZT1cImxvZ29cIiAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgZm9vdGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9vdGVyIGltZyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9vdGVyIGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuZ3JpZCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQge1xyXG4gICAgICAgIG1hcmdpbjogMnJlbTtcclxuICAgICAgICBmbGV4LWJhc2lzOiA0NSU7XHJcbiAgICAgICAgcGFkZGluZzogM3JlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAtbW96LWJveC1zaGFkb3c6ICAgIGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XHJcbiAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggIzAwMDAwMDtcclxuICAgYm94LXNoYWRvdzogICAgICAgICBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZDpob3ZlcixcclxuICAgICAgLmNhcmQ6Zm9jdXMsXHJcbiAgICAgIC5jYXJkOmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZCBoMyB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZCBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgIH1cclxuICAgICAgI2x7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgfVxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcclxuICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgcGFkZGluZzogNXJlbSAwO1xyXG4gICAgICB9XHJcbiAgICAgICNze1xyXG4gICAgICAgIGFuaW1hdGlvbjogcHVsc2UgNXMgaW5maW5pdGU7XHJcbiAgICAgIH1cclxuICAgICAgQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgICAgICAgMjAlIHtcclxuICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDMwJXtcclxuICAgICAgICAgICAgY29sb3I6Ymx1ZTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDQwJXtcclxuICAgICAgICAgICAgY29sb3I6Z3JlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgY29sb3I6IHllbGxvdztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgI3Byb3tcclxuICAgICAgICBjb2xvcjpibHVlO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm17XHJcbiAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICBwYWRkaW5nOjAuMDAwMTByZW0gNWVtIDVlbSA1ZW07ICAgICAgICAgXHJcbiAgICBtYXJnaW46IDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIEJ1dHRvbntcclxuICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgI25ld3tcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgaHRtbCxcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxyXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBTaWduVXBMaW5rID0gKCkgPT4gKFxyXG4gIDxwPlxyXG4gICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50P3tcIiBcIn1cclxuICAgIDxMaW5rIGhyZWY9e3JvdXRlcy5TSUdOX1VQfT5cclxuICAgICAgPGE+U2lnbiBVcDwvYT5cclxuICAgIDwvTGluaz5cclxuICA8L3A+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25VcFBhZ2U7XHJcbmV4cG9ydCB7IFNpZ25VcEZvcm0sIFNpZ25VcExpbmsgfTtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Procheta Bhattachary\\\\nextjs-redux-firebase-authentication\\\\pages\\\\signup.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3379920139",
      __self: this
    }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUHJvY2hldGEgQmhhdHRhY2hhcnlcXG5leHRqcy1yZWR1eC1maXJlYmFzZS1hdXRoZW50aWNhdGlvblxccGFnZXNcXHNpZ251cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtUXlCLEFBSXFCLEFBUVksVUFQYixTQUdHLEdBS2QsbUlBSkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxQcm9jaGV0YSBCaGF0dGFjaGFyeVxcbmV4dGpzLXJlZHV4LWZpcmViYXNlLWF1dGhlbnRpY2F0aW9uXFxwYWdlc1xcc2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBXaXRoQXV0aGVudGljYXRpb24gfSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQXBwXCI7XHJcbmltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSBcIi4uL3NyYy9maXJlYmFzZVwiO1xyXG5pbXBvcnQgKiBhcyByb3V0ZXMgZnJvbSBcIi4uL3NyYy9jb25zdGFudHMvcm91dGVzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQge0luZGV4TGlua30gZnJvbSBcIi4vaW5kZXhcIjtcclxuY29uc3QgU2lnblVwUGFnZSA9ICgpID0+IChcclxuICA8QXBwV2l0aEF1dGhlbnRpY2F0aW9uPlxyXG4gICAgPFNpZ25VcEZvcm0gLz5cclxuICA8L0FwcFdpdGhBdXRoZW50aWNhdGlvbj5cclxuKTtcclxuXHJcbmNvbnN0IHVwZGF0ZUJ5UHJvcGVydHlOYW1lID0gKHByb3BlcnR5TmFtZSwgdmFsdWUpID0+ICgpID0+ICh7XHJcbiAgW3Byb3BlcnR5TmFtZV06IHZhbHVlXHJcbn0pO1xyXG5cclxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcclxuICB1c2VybmFtZTogXCJcIixcclxuICBlbWFpbDogXCJcIixcclxuICBwYXNzd29yZE9uZTogXCJcIixcclxuICBwYXNzd29yZFR3bzogXCJcIixcclxuICBlcnJvcjogbnVsbFxyXG59O1xyXG5cclxuY2xhc3MgU2lnblVwRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0geyAuLi5JTklUSUFMX1NUQVRFIH07XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCA9IGV2ZW50ID0+IHtcclxuICAgIGNvbnN0IHsgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZE9uZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBhdXRoXHJcbiAgICAgIC5kb0NyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmRPbmUpXHJcbiAgICAgIC50aGVuKGF1dGhVc2VyID0+IHtcclxuICAgICAgICAvLyBDcmVhdGUgYSB1c2VyIGluIHlvdXIgb3duIGFjY2Vzc2libGUgRmlyZWJhc2UgRGF0YWJhc2UgdG9vXHJcbiAgICAgICAgZGIuZG9DcmVhdGVVc2VyKGF1dGhVc2VyLnVzZXIudWlkLCB1c2VybmFtZSwgZW1haWwpXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgLi4uSU5JVElBTF9TVEFURSB9KSk7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKHJvdXRlcy5IT01FKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHVwZGF0ZUJ5UHJvcGVydHlOYW1lKFwiZXJyb3JcIiwgZXJyb3IpKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodXBkYXRlQnlQcm9wZXJ0eU5hbWUoXCJlcnJvclwiLCBlcnJvcikpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZE9uZSwgcGFzc3dvcmRUd28sIGVycm9yIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGNvbnN0IGlzSW52YWxpZCA9XHJcbiAgICAgIHBhc3N3b3JkT25lICE9PSBwYXNzd29yZFR3byB8fCBwYXNzd29yZE9uZSA9PT0gXCJcIiB8fCB1c2VybmFtZSA9PT0gXCJcIjtcclxuXHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIj48L21ldGE+XHJcbiAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+PC9tZXRhPlxyXG4gICAgICAgPHRpdGxlPlNpZ24gVXA8L3RpdGxlPlxyXG4gICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vcHJvY2hldGExOTk5L0RTQy1OU0VDLUJsb2dzL21hc3Rlci9wdWJsaWMvZmF2aWNvbi5pY29cIiA+PC9saW5rPlxyXG4gICAgIDwvSGVhZD5cclxuICAgICA8bWFpbj5cclxuICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9wcm9jaGV0YTE5OTkvRFNDLU5TRUMtQmxvZ3MvYmxvYi9tYXN0ZXIvcHVibGljL2RzYy5wbmc/cmF3PXRydWVcIiBhbHQ9XCJkc2MgTG9nb1wiIGNsYXNzTmFtZT1cImxvZ29cIj48L2ltZz5cclxuICAgICAgICAgIDxiPkRTQyBOU0VDIEJMT0dTLTxpIGlkPVwic1wiPldyaXRlIFlvdXIgT3duIFN0b3J5ITwvaT48L2I+XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8Y2VudGVyPjxoMT5cclxuICAgICAgICBTaWduIFVwIFRvIFN0YXJ0IFlvdXIgSm91cm5leSBUb2RheSFcclxuICAgICAgICA8L2gxPjwvY2VudGVyPlxyXG4gICAgICAgIDxjZW50ZXI+PGltZyBzcmM9XCJodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS9NVGpNN29renBRdTg4L2dpcGh5LmdpZlwiPjwvaW1nPjwvY2VudGVyPlxyXG4gICAgICAgIDxjZW50ZXI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgIEZ1bGwgTmFtZTo8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PlxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHVwZGF0ZUJ5UHJvcGVydHlOYW1lKFwidXNlcm5hbWVcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRnVsbCBOYW1lXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIEVtYWlsOjxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodXBkYXRlQnlQcm9wZXJ0eU5hbWUoXCJlbWFpbFwiLCBldmVudC50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAvPjxicj48L2JyPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIFBhc3N3b3JkOjxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkT25lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgdXBkYXRlQnlQcm9wZXJ0eU5hbWUoXCJwYXNzd29yZE9uZVwiLCBldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAvPjxicj48L2JyPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIENvbmZpcm0gUGFzc3dvcmQ6PGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmRUd299XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICB1cGRhdGVCeVByb3BlcnR5TmFtZShcInBhc3N3b3JkVHdvXCIsIGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiXHJcbiAgICAgICAgLz48YnI+PC9icj5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8Y2VudGVyPjxidXR0b24gZGlzYWJsZWQ9e2lzSW52YWxpZH0gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgIDwvYnV0dG9uPjwvY2VudGVyPlxyXG4gICAgICAgIDxjZW50ZXI+QXRlciBjcmVhdGluZyBhY2NvdW50LCBnbyBiYWNrIHRvIExvZ2luIFBhZ2UuPC9jZW50ZXI+XHJcbiAgICA8YnI+PC9icj5cclxuICAgIDxjZW50ZXI+PGJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwMHB4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEluZGV4TGluay8+XHJcbiAgICAgICAgICA8L2J1dHRvbj48L2NlbnRlcj5cclxuXHJcbiAgICAgICAge2Vycm9yICYmIDxwPntlcnJvci5tZXNzYWdlfTwvcD59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPC9jZW50ZXI+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPGZvb3Rlcj5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZHNjbnNlYy5jb20vXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9wcm9jaGV0YTE5OTkvRFNDLU5TRUMtQmxvZ3MvYmxvYi9tYXN0ZXIvcHVibGljL2RzYy5wbmc/cmF3PXRydWVcIiBhbHQ9XCJEU0MgTG9nb1wiIGNsYXNzTmFtZT1cImxvZ29cIiAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgZm9vdGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9vdGVyIGltZyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9vdGVyIGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuZ3JpZCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQge1xyXG4gICAgICAgIG1hcmdpbjogMnJlbTtcclxuICAgICAgICBmbGV4LWJhc2lzOiA0NSU7XHJcbiAgICAgICAgcGFkZGluZzogM3JlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAtbW96LWJveC1zaGFkb3c6ICAgIGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XHJcbiAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggIzAwMDAwMDtcclxuICAgYm94LXNoYWRvdzogICAgICAgICBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZDpob3ZlcixcclxuICAgICAgLmNhcmQ6Zm9jdXMsXHJcbiAgICAgIC5jYXJkOmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZCBoMyB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZCBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgIH1cclxuICAgICAgI2x7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgfVxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcclxuICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgcGFkZGluZzogNXJlbSAwO1xyXG4gICAgICB9XHJcbiAgICAgICNze1xyXG4gICAgICAgIGFuaW1hdGlvbjogcHVsc2UgNXMgaW5maW5pdGU7XHJcbiAgICAgIH1cclxuICAgICAgQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgICAgICAgMjAlIHtcclxuICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDMwJXtcclxuICAgICAgICAgICAgY29sb3I6Ymx1ZTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDQwJXtcclxuICAgICAgICAgICAgY29sb3I6Z3JlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgY29sb3I6IHllbGxvdztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgI3Byb3tcclxuICAgICAgICBjb2xvcjpibHVlO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm17XHJcbiAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICBwYWRkaW5nOjAuMDAwMTByZW0gNWVtIDVlbSA1ZW07ICAgICAgICAgXHJcbiAgICBtYXJnaW46IDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIEJ1dHRvbntcclxuICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgI25ld3tcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgaHRtbCxcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxyXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBTaWduVXBMaW5rID0gKCkgPT4gKFxyXG4gIDxwPlxyXG4gICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50P3tcIiBcIn1cclxuICAgIDxMaW5rIGhyZWY9e3JvdXRlcy5TSUdOX1VQfT5cclxuICAgICAgPGE+U2lnbiBVcDwvYT5cclxuICAgIDwvTGluaz5cclxuICA8L3A+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25VcFBhZ2U7XHJcbmV4cG9ydCB7IFNpZ25VcEZvcm0sIFNpZ25VcExpbmsgfTtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Procheta Bhattachary\\\\nextjs-redux-firebase-authentication\\\\pages\\\\signup.js */"));
  }

}

const SignUpLink = () => __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 280,
    columnNumber: 3
  }
}, "Don't have an account?", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: _src_constants_routes__WEBPACK_IMPORTED_MODULE_6__["SIGN_UP"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 282,
    columnNumber: 5
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 283,
    columnNumber: 7
  }
}, "Sign Up")));

/* harmony default export */ __webpack_exports__["default"] = (SignUpPage);


/***/ }),

/***/ "./src/components/App/index.js":
/*!*************************************!*\
  !*** ./src/components/App/index.js ***!
  \*************************************/
/*! exports provided: AppWithAuthentication, AppWithAuthorization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppWithAuthentication", function() { return AppWithAuthentication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppWithAuthorization", function() { return AppWithAuthorization; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Navigation */ "./src/components/Navigation/index.js");
/* harmony import */ var _Session_withAuthentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Session/withAuthentication */ "./src/components/Session/withAuthentication.js");
/* harmony import */ var _Session_withAuthorization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Session/withAuthorization */ "./src/components/Session/withAuthorization.js");
var _jsxFileName = "C:\\Users\\Procheta Bhattachary\\nextjs-redux-firebase-authentication\\src\\components\\App\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const App = ({
  children
}) => __jsx("div", {
  className: "app",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
}, children);

const AppWithAuthentication = Object(recompose__WEBPACK_IMPORTED_MODULE_1__["compose"])(_Session_withAuthentication__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_Session_withAuthorization__WEBPACK_IMPORTED_MODULE_4__["default"])(false))(App);
const AppWithAuthorization = Object(recompose__WEBPACK_IMPORTED_MODULE_1__["compose"])(_Session_withAuthentication__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_Session_withAuthorization__WEBPACK_IMPORTED_MODULE_4__["default"])(true))(App);


/***/ }),

/***/ "./src/components/Navigation/index.js":
/*!********************************************!*\
  !*** ./src/components/Navigation/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/routes */ "./src/constants/routes.js");
/* harmony import */ var _SignOut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SignOut */ "./src/components/SignOut/index.js");
var _jsxFileName = "C:\\Users\\Procheta Bhattachary\\nextjs-redux-firebase-authentication\\src\\components\\Navigation\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Navigation = ({
  authUser
}) => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
}, authUser ? __jsx(NavigationAuth, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 11
  }
}) : __jsx(NavigationNonAuth, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 11
  }
}));

const NavigationAuth = () => __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 3
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: _constants_routes__WEBPACK_IMPORTED_MODULE_3__["LANDING"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 37
  }
}, "Landing"))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: _constants_routes__WEBPACK_IMPORTED_MODULE_3__["HOME"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 34
  }
}, "Home"))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: _constants_routes__WEBPACK_IMPORTED_MODULE_3__["ACCOUNT"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 37
  }
}, "Account"))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }
}, __jsx(_SignOut__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }
})));

const NavigationNonAuth = () => __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 3
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: _constants_routes__WEBPACK_IMPORTED_MODULE_3__["LANDING"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 37
  }
}, "Landing"))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: _constants_routes__WEBPACK_IMPORTED_MODULE_3__["SIGN_IN"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 37
  }
}, "Sign In"))));

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Navigation));

/***/ }),

/***/ "./src/components/Session/withAuthentication.js":
/*!******************************************************!*\
  !*** ./src/components/Session/withAuthentication.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../firebase */ "./src/firebase/index.js");
var _jsxFileName = "C:\\Users\\Procheta Bhattachary\\nextjs-redux-firebase-authentication\\src\\components\\Session\\withAuthentication.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const withAuthentication = Component => {
  class WithAuthentication extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    componentDidMount() {
      const {
        onSetAuthUser
      } = this.props;
      _firebase__WEBPACK_IMPORTED_MODULE_2__["firebase"].auth.onAuthStateChanged(authUser => {
        authUser ? onSetAuthUser(authUser) : onSetAuthUser(null);
      });
    }

    render() {
      return __jsx(Component, _extends({}, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }
      }));
    }

  }

  const mapDispatchToProps = dispatch => ({
    onSetAuthUser: authUser => dispatch({
      type: 'AUTH_USER_SET',
      authUser
    })
  });

  return Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(WithAuthentication);
};

/* harmony default export */ __webpack_exports__["default"] = (withAuthentication);

/***/ }),

/***/ "./src/components/Session/withAuthorization.js":
/*!*****************************************************!*\
  !*** ./src/components/Session/withAuthorization.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../firebase */ "./src/firebase/index.js");
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/routes */ "./src/constants/routes.js");
var _jsxFileName = "C:\\Users\\Procheta Bhattachary\\nextjs-redux-firebase-authentication\\src\\components\\Session\\withAuthorization.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const withAuthorization = needsAuthorization => Component => {
  class WithAuthorization extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    componentDidMount() {
      _firebase__WEBPACK_IMPORTED_MODULE_2__["firebase"].auth.onAuthStateChanged(authUser => {
        if (!authUser && needsAuthorization) {
          next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(_constants_routes__WEBPACK_IMPORTED_MODULE_3__["SIGN_IN"]);
        }
      });
    }

    render() {
      return __jsx(Component, _extends({}, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 9
        }
      }));
    }

  }

  return WithAuthorization;
};

/* harmony default export */ __webpack_exports__["default"] = (withAuthorization);

/***/ }),

/***/ "./src/components/SignOut/index.js":
/*!*****************************************!*\
  !*** ./src/components/SignOut/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../firebase */ "./src/firebase/index.js");
var _jsxFileName = "C:\\Users\\Procheta Bhattachary\\nextjs-redux-firebase-authentication\\src\\components\\SignOut\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SignOutButton = () => __jsx("button", {
  type: "button",
  onClick: _firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].doSignOut,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, "Sign Out");

/* harmony default export */ __webpack_exports__["default"] = (SignOutButton);

/***/ }),

/***/ "./src/constants/routes.js":
/*!*********************************!*\
  !*** ./src/constants/routes.js ***!
  \*********************************/
/*! exports provided: LANDING, SIGN_UP, SIGN_IN, PASSWORD_FORGET, HOME, ACCOUNT, INDEX, SIGN, FEED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANDING", function() { return LANDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP", function() { return SIGN_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN", function() { return SIGN_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASSWORD_FORGET", function() { return PASSWORD_FORGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME", function() { return HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT", function() { return ACCOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INDEX", function() { return INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN", function() { return SIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEED", function() { return FEED; });
const LANDING = '/';
const SIGN_UP = '/signup';
const SIGN_IN = '/signin';
const PASSWORD_FORGET = '/pw-forget';
const HOME = '/home';
const ACCOUNT = '/account';
const INDEX = '/index';
const SIGN = '/signin';
const FEED = '/feed';

/***/ }),

/***/ "./src/firebase/auth.js":
/*!******************************!*\
  !*** ./src/firebase/auth.js ***!
  \******************************/
/*! exports provided: doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword, doSignOut, doPasswordReset, doPasswordUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doCreateUserWithEmailAndPassword", function() { return doCreateUserWithEmailAndPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSignInWithEmailAndPassword", function() { return doSignInWithEmailAndPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSignOut", function() { return doSignOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doPasswordReset", function() { return doPasswordReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doPasswordUpdate", function() { return doPasswordUpdate; });
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase */ "./src/firebase/firebase.js");
 // Sign Up

const doCreateUserWithEmailAndPassword = (email, password) => _firebase__WEBPACK_IMPORTED_MODULE_0__["auth"].createUserWithEmailAndPassword(email, password); // Sign In

const doSignInWithEmailAndPassword = (email, password) => _firebase__WEBPACK_IMPORTED_MODULE_0__["auth"].signInWithEmailAndPassword(email, password); // Sign out

const doSignOut = () => _firebase__WEBPACK_IMPORTED_MODULE_0__["auth"].signOut(); // Password Reset

const doPasswordReset = email => _firebase__WEBPACK_IMPORTED_MODULE_0__["auth"].sendPasswordResetEmail(email); // Password Change

const doPasswordUpdate = password => _firebase__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser.updatePassword(password);

/***/ }),

/***/ "./src/firebase/db.js":
/*!****************************!*\
  !*** ./src/firebase/db.js ***!
  \****************************/
/*! exports provided: doCreateUser, onceGetUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doCreateUser", function() { return doCreateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onceGetUsers", function() { return onceGetUsers; });
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase */ "./src/firebase/firebase.js");
 // User API

const doCreateUser = (id, username, email) => _firebase__WEBPACK_IMPORTED_MODULE_0__["db"].ref(`users/${id}`).set({
  username,
  email
});
const onceGetUsers = () => _firebase__WEBPACK_IMPORTED_MODULE_0__["db"].ref('users').once('value'); // Other db APIs ...

/***/ }),

/***/ "./src/firebase/firebase.js":
/*!**********************************!*\
  !*** ./src/firebase/firebase.js ***!
  \**********************************/
/*! exports provided: db, auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "@firebase/app");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/auth */ "@firebase/auth");
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/database */ "@firebase/database");
/* harmony import */ var _firebase_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_firebase_database__WEBPACK_IMPORTED_MODULE_2__);



const prodConfig = {
  apiKey: "AIzaSyDfqpLjCdb9tCdbCIFEI90LkXeEfeBUzs4",
  authDomain: "dsc-nsec-blogs.firebaseapp.com",
  databaseURL: "https://dsc-nsec-blogs.firebaseio.com",
  projectId: "dsc-nsec-blogs",
  storageBucket: "dsc-nsec-blogs.appspot.com",
  messagingSenderId: "1066927664407"
};
const devConfig = {
  apiKey: "AIzaSyDfqpLjCdb9tCdbCIFEI90LkXeEfeBUzs4",
  authDomain: "dsc-nsec-blogs.firebaseapp.com",
  databaseURL: "https://dsc-nsec-blogs.firebaseio.com",
  projectId: "dsc-nsec-blogs",
  storageBucket: "dsc-nsec-blogs.appspot.com",
  messagingSenderId: "1066927664407"
};
const config = false ? undefined : devConfig;

if (!_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
}

const db = _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.database();
const auth = _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();


/***/ }),

/***/ "./src/firebase/index.js":
/*!*******************************!*\
  !*** ./src/firebase/index.js ***!
  \*******************************/
/*! exports provided: auth, db, firebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./src/firebase/auth.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db */ "./src/firebase/db.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "db", function() { return _db__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebase */ "./src/firebase/firebase.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "firebase", function() { return _firebase__WEBPACK_IMPORTED_MODULE_2__; });





/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/signin.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Procheta Bhattachary\nextjs-redux-firebase-authentication\pages\signin.js */"./pages/signin.js");


/***/ }),

/***/ "@firebase/app":
/*!********************************!*\
  !*** external "@firebase/app" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@firebase/app");

/***/ }),

/***/ "@firebase/auth":
/*!*********************************!*\
  !*** external "@firebase/auth" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@firebase/auth");

/***/ }),

/***/ "@firebase/database":
/*!*************************************!*\
  !*** external "@firebase/database" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@firebase/database");

/***/ }),

/***/ "@material-ui/core/Icon":
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "recompose":
/*!****************************!*\
  !*** external "recompose" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHctZm9yZ2V0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3NpZ25pbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWdudXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2Vzc2lvbi93aXRoQXV0aGVudGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2Vzc2lvbi93aXRoQXV0aG9yaXphdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWduT3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvcm91dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9maXJlYmFzZS9hdXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9maXJlYmFzZS9kYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlyZWJhc2UvZmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpcmViYXNlL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmaXJlYmFzZS9kYXRhYmFzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlY29tcG9zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJ1cmwiLCJvcmlnaW4iLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJocmVmIiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRGdW5jIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwib2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInAiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdFVybCIsImFzSHJlZiIsImUiLCJub2RlTmFtZSIsInRhcmdldCIsImlzTG9jYWwiLCJzY3JvbGwiLCJSb3V0ZXIiLCJzaGFsbG93Iiwic3VjY2VzcyIsImRvY3VtZW50IiwicHJvcHMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicmVzb2x2ZWRIcmVmIiwicGFyc2VkQXMiLCJoYW5kbGVSZWYiLCJyZWYiLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsInBhdGhzIiwiZXJyIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiZWwiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJwcm9jZXNzIiwiUmVhY3QiLCJ3YXJuIiwiUHJvcFR5cGVzIiwicmVxdWlyZSIsImV4YWN0IiwiTGluayIsInJlcGxhY2UiLCJwYXNzSHJlZiIsInZhbHVlIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImdldCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnQiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInBhdGgiLCJwcmVwYXJlUm91dGUiLCJ0b1JvdXRlIiwiYXR0ZW1wdHMiLCJpc1NlcnZlclJlbmRlciIsInBhdGhuYW1lIiwiYWRkQmFzZVBhdGgiLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImRlbEJhc2VQYXRoIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJnZXRSZXNwb25zZSIsImRhdGEiLCJyb3V0ZSIsInF1ZXJ5IiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJQcm9taXNlIiwiZmV0Y2hOZXh0RGF0YSIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwidXBkYXRlIiwibW9kIiwibmV3RGF0YSIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwib3B0aW9ucyIsImNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyZXNvbHZlIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJyZWplY3QiLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiZXJyb3IiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImNhbmNlbGxlZCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5IiwiVEVTVF9ST1VURSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsImVzY2FwZWRSb3V0ZSIsImVzY2FwZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsImlzT3B0aW9uYWwiLCIkMSIsImlzQ2F0Y2hBbGwiLCJwb3MiLCJyZXBlYXQiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImtleSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkxhbmRpbmdQYWdlIiwidGV4dEFsaWduIiwiSW5kZXhMaW5rIiwicm91dGVzIiwiUGFzc3dvcmRGb3JnZXRQYWdlIiwidXBkYXRlQnlQcm9wZXJ0eU5hbWUiLCJwcm9wZXJ0eU5hbWUiLCJJTklUSUFMX1NUQVRFIiwiZW1haWwiLCJQYXNzd29yZEZvcmdldEZvcm0iLCJzdGF0ZSIsImF1dGgiLCJkb1Bhc3N3b3JkUmVzZXQiLCJ0aGVuIiwic2V0U3RhdGUiLCJjYXRjaCIsInByZXZlbnREZWZhdWx0IiwiaXNJbnZhbGlkIiwib25TdWJtaXQiLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsIlBhc3N3b3JkRm9yZ2V0TGluayIsIlNpZ25JblBhZ2UiLCJwYXNzd29yZCIsIlNpZ25JbkZvcm0iLCJkb1NpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiU2lnblVwUGFnZSIsInVzZXJuYW1lIiwicGFzc3dvcmRPbmUiLCJwYXNzd29yZFR3byIsIlNpZ25VcEZvcm0iLCJkb0NyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImF1dGhVc2VyIiwiZGIiLCJkb0NyZWF0ZVVzZXIiLCJ1c2VyIiwidWlkIiwiU2lnblVwTGluayIsIkFwcFdpdGhBdXRoZW50aWNhdGlvbiIsImNvbXBvc2UiLCJ3aXRoQXV0aGVudGljYXRpb24iLCJ3aXRoQXV0aG9yaXphdGlvbiIsIkFwcFdpdGhBdXRob3JpemF0aW9uIiwiTmF2aWdhdGlvbiIsIk5hdmlnYXRpb25BdXRoIiwiTmF2aWdhdGlvbk5vbkF1dGgiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzZXNzaW9uU3RhdGUiLCJjb25uZWN0IiwiV2l0aEF1dGhlbnRpY2F0aW9uIiwiY29tcG9uZW50RGlkTW91bnQiLCJvblNldEF1dGhVc2VyIiwiZmlyZWJhc2UiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInR5cGUiLCJuZWVkc0F1dGhvcml6YXRpb24iLCJXaXRoQXV0aG9yaXphdGlvbiIsIlNpZ25PdXRCdXR0b24iLCJkb1NpZ25PdXQiLCJMQU5ESU5HIiwiU0lHTl9VUCIsIlNJR05fSU4iLCJQQVNTV09SRF9GT1JHRVQiLCJIT01FIiwiQUNDT1VOVCIsIklOREVYIiwiU0lHTiIsIkZFRUQiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25PdXQiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwiZG9QYXNzd29yZFVwZGF0ZSIsImN1cnJlbnRVc2VyIiwidXBkYXRlUGFzc3dvcmQiLCJpZCIsIm9uY2VHZXRVc2VycyIsIm9uY2UiLCJwcm9kQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiZGV2Q29uZmlnIiwiY29uZmlnIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJkYXRhYmFzZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Es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aW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCByZXNvbHZlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG5mdW5jdGlvbiBpc0xvY2FsKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1cmwgPSBwYXJzZShocmVmLCBmYWxzZSwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gcGFyc2UoZ2V0TG9jYXRpb25PcmlnaW4oKSwgZmFsc2UsIHRydWUpXG5cbiAgcmV0dXJuIChcbiAgICAhdXJsLmhvc3QgfHwgKHVybC5wcm90b2NvbCA9PT0gb3JpZ2luLnByb3RvY29sICYmIHVybC5ob3N0ID09PSBvcmlnaW4uaG9zdClcbiAgKVxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBGb3JtYXRSZXN1bHQgPSB7IGhyZWY6IHN0cmluZzsgYXM/OiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jOiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4gRm9ybWF0UmVzdWx0KSB7XG4gIGxldCBsYXN0SHJlZjogbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RBczogdW5kZWZpbmVkIHwgbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RSZXN1bHQ6IG51bGwgfCBGb3JtYXRSZXN1bHQgPSBudWxsXG4gIHJldHVybiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4ge1xuICAgIGlmIChsYXN0UmVzdWx0ICYmIGhyZWYgPT09IGxhc3RIcmVmICYmIGFzID09PSBsYXN0QXMpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gZm9ybWF0RnVuYyhocmVmLCBhcylcbiAgICBsYXN0SHJlZiA9IGhyZWZcbiAgICBsYXN0QXMgPSBhc1xuICAgIGxhc3RSZXN1bHQgPSByZXN1bHRcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0VXJsKHVybDogVXJsKTogc3RyaW5nIHtcbiAgcmV0dXJuIHVybCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCkgOiB1cmxcbn1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChvYnNlcnZlcikge1xuICAgIHJldHVybiBvYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBDb21wb25lbnQ8TGlua1Byb3BzPiB7XG4gIHA6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogTGlua1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuICB9XG5cbiAgY2xlYW5VcExpc3RlbmVycyA9ICgpID0+IHt9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcbiAgfVxuXG4gIGdldFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBjb25zdCB7IGhyZWY6IHBhcnNlZEhyZWYsIGFzOiBwYXJzZWRBcyB9ID0gdGhpcy5mb3JtYXRVcmxzKFxuICAgICAgdGhpcy5wcm9wcy5ocmVmLFxuICAgICAgdGhpcy5wcm9wcy5hc1xuICAgIClcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRIcmVmKVxuICAgIHJldHVybiBbcmVzb2x2ZWRIcmVmLCBwYXJzZWRBcyA/IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEFzKSA6IHJlc29sdmVkSHJlZl1cbiAgfVxuXG4gIGhhbmRsZVJlZihyZWY6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIHJlZiAmJiByZWYudGFnTmFtZSkge1xuICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcblxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgICAgcHJlZmV0Y2hlZFtcbiAgICAgICAgICB0aGlzLmdldFBhdGhzKCkuam9pbihcbiAgICAgICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycyA9IGxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnByZWZldGNoKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbiAgLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG4gIGZvcm1hdFVybHMgPSBtZW1vaXplZEZvcm1hdFVybCgoaHJlZiwgYXNIcmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IGFkZEJhc2VQYXRoKGZvcm1hdFVybChocmVmKSksXG4gICAgICBhczogYXNIcmVmID8gYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGFzSHJlZikpIDogYXNIcmVmLFxuICAgIH1cbiAgfSlcblxuICBsaW5rQ2xpY2tlZCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgICBpZiAoXG4gICAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICAgIGUubWV0YUtleSB8fFxuICAgICAgICBlLmN0cmxLZXkgfHxcbiAgICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgICApIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuXG4gICAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBocmVmID0gcmVzb2x2ZShwYXRobmFtZSwgaHJlZilcbiAgICBhcyA9IGFzID8gcmVzb2x2ZShwYXRobmFtZSwgYXMpIDogaHJlZlxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBsZXQgeyBzY3JvbGwgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgICB9XG5cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICBSb3V0ZXJbdGhpcy5wcm9wcy5yZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgc2hhbGxvdzogdGhpcy5wcm9wcy5zaGFsbG93LFxuICAgIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJlZmV0Y2gob3B0aW9ucz86IFByZWZldGNoT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmdldFBhdGhzKClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgUm91dGVyLnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8gMF0sIHBhdGhzWy8qIGFzUGF0aCAqLyAxXSwgb3B0aW9ucykuY2F0Y2goXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgIHByZWZldGNoZWRbXG4gICAgICBwYXRocy5qb2luKFxuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAnJSdcbiAgICAgIClcbiAgICBdID0gdHJ1ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICAgIH1cblxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICAgIGNvbnN0IHByb3BzOiB7XG4gICAgICBvbk1vdXNlRW50ZXI6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgaHJlZj86IHN0cmluZ1xuICAgICAgcmVmPzogYW55XG4gICAgfSA9IHtcbiAgICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWYoZWwpXG5cbiAgICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91c2VFbnRlcjogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZWZldGNoKHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLmxpbmtDbGlja2VkKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5wYXNzSHJlZiB8fFxuICAgICAgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpXG4gICAgKSB7XG4gICAgICBwcm9wcy5ocmVmID0gYXMgfHwgaHJlZlxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmhyZWYgJiZcbiAgICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKVxuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgOiBwYXRoXG59XG5cbmZ1bmN0aW9uIHRvUm91dGUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLydcbn1cblxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGg6IHN0cmluZykgPT5cbiAgdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpXG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5IHwgbnVsbCxcbiAgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4sXG4gIGNiPzogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4pIHtcbiAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMVxuICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBmZXRjaChcbiAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmBcbiAgICAgICAgKSxcbiAgICAgICAgcXVlcnksXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9XG4gICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgIC8vIGxvb3AuXG4gICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAoXG4gICAgICBlLnN0YXRlICYmXG4gICAgICB0aGlzLmlzU3NyICYmXG4gICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgcGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICBfdXJsOiBVcmwsXG4gICAgX2FzOiBVcmwsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICBpZiAoU1QpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsXG4gICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXNcblxuICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKVxuICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcylcblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpXG5cbiAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcylcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSBwYXJzZSh1cmwsIHRydWUpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZShhcylcbiAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4oXG4gICAgICAgIChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpXG4gICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChcbiAgICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXNcbiAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIH0gYXMgYW55KS50aGVuKFxuICAgICAgICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoZ2lwRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgZ2lwRXJyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpXG4gICAgICAgIClcbiAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgIH1cblxuICAgIHJldHVybiAobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgIChyZXMpID0+XG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pLFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz4pXG4gICAgICAudGhlbigocm91dGVJbmZvOiBSb3V0ZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICAgIClcbiAgICAgICAgKS50aGVuKChwcm9wcykgPT4ge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpXG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybClcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG4gICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGFyc2UoYXNQYXRoKS5wYXRobmFtZSEpXG5cbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgIDogZmV0Y2hOZXh0RGF0YShcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuaXNTc3IsXG4gICAgICAgICAgKGRhdGEpID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKVxuICAgICAgICApXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZShhc1BhdGgsIHRydWUpXG4gICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUhKVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJylcbiAgICAgIDsoZSBhcyBhbnkpLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfVxufSB7XG4gIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG5cbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAoXywgJDEpID0+IHtcbiAgICAgIGNvbnN0IGlzT3B0aW9uYWwgPSAvXlxcXFxcXFsuKlxcXFxcXF0kLy50ZXN0KCQxKVxuICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSgyLCAtMilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgIGlmIChpc0NhdGNoQWxsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoNilcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1tcbiAgICAgICAgJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9XG4gICAgICByZXR1cm4gaXNDYXRjaEFsbCA/IChpc09wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgfVxuICApXG5cbiAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgICAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG5cbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksXG4gICAgZ3JvdXBzLFxuICAgIG5hbWVkUmVnZXg6IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICA/IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYFxuICAgICAgOiB1bmRlZmluZWQsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvcm1hdCwgVVJMRm9ybWF0T3B0aW9ucywgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBzdGF0aWNNYXJrdXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkZXZGaWxlczogc3RyaW5nW11cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGxvd1ByaW9yaXR5RmlsZXM6IHN0cmluZ1tdXG4gIHBvbHlmaWxsRmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaHRtbFByb3BzOiBhbnlcbiAgYm9keVRhZ3M6IGFueVtdXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICB1cmw6IFVybE9iamVjdCxcbiAgb3B0aW9ucz86IFVSTEZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXQodXJsIGFzIFVSTCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0ICogYXMgcm91dGVzIGZyb20gXCIuLi9zcmMvY29uc3RhbnRzL3JvdXRlc1wiXHJcbmltcG9ydCB7IEFwcFdpdGhBdXRoZW50aWNhdGlvbiB9IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9BcHBcIjtcclxuaW1wb3J0IEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYW5kaW5nUGFnZSgpe1xyXG4gIHJldHVybiAoXHJcbiAgPEFwcFdpdGhBdXRoZW50aWNhdGlvbj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIj48L21ldGE+XHJcbiAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiPjwvbWV0YT5cclxuICAgICAgICA8dGl0bGU+RFNDIE5TRUMgYmxvZ3MhPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9wcm9jaGV0YTE5OTkvRFNDLU5TRUMtQmxvZ3MvbWFzdGVyL3B1YmxpYy9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjQuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIj48L2xpbms+XHJcbiAgPHNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8zLjUuMS9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgPHNjcmlwdCBzcmM9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjQuMS9qcy9ib290c3RyYXAubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCI+PC9saW5rPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICBcclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vcHJvY2hldGExOTk5L0RTQy1OU0VDLUJsb2dzL2Jsb2IvbWFzdGVyL3B1YmxpYy9kc2MucG5nP3Jhdz10cnVlXCIgYWx0PVwiZHNjIExvZ29cIiBjbGFzc05hbWU9XCJsb2dvXCIvPlxyXG4gICAgICAgICAgPGI+RFNDIE5TRUMgQkxPR1MtPGkgaWQ9XCJzXCI+V3JpdGUgWW91ciBPd24gU3RvcnkhPC9pPjwvYj5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvcE9aaG1FNDJEMVdyQ1dBVExLL2dpcGh5LmdpZlwiPjwvaW1nPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICBXZSwgYXQgRFNDIE5TRUMsIGJlbGlldmUgdGhhdCBldmVyeW9uZSBoYXMgYSB1bmlxdWUgc3RvcnkgdG8gdGVsbCB0byB0aGUgd29ybGQtIGEgc3RvcnkgYWJvdXQgdGhlbSxob3cgdGhleSByZWFjaGVkIHN1Y2Nlc3MsIGhvdyB0aGV5IG5ldmVyIGdhdmUgdXAsIHdoYXQgY2hhbGxlbmdlcyBkaWQgdGhleSBmYWNlLCB3aGF0IHdhcyB0aGUgZmluYWwgb3V0Y29tZS4gU28gd2UgY2FtZSB1cCB3aXRoIG91ciBibG9nIHBsYXRmb3JtIDxpIGlkPVwicHJvXCI+RFNDIE5TRUMgYmxvZ3MhPC9pPiB0byBoZWxwIHJlYWNoIHlvdXIgc3RvcmllcyB0byB0aGUgd29ybGQsIHRvIGVuY291cmFnZSBtb3JlIHBlb3BsZSBpbiB0aGVpciBqb3VybmV5LiBTbywgbGV0J3Mgc3RhcnQgd3JpdGluZyAhXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gIDxkaXYgaWQ9XCJteUNhcm91c2VsXCIgY2xhc3M9XCJjYXJvdXNlbCBzbGlkZVwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCI+XHJcbiAgICA8b2wgY2xhc3M9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+XHJcbiAgICAgIDxsaSBkYXRhLXRhcmdldD1cIiNteUNhcm91c2VsXCIgZGF0YS1zbGlkZS10bz1cIjBcIiBjbGFzcz1cImFjdGl2ZVwiPjwvbGk+XHJcbiAgICAgIDxsaSBkYXRhLXRhcmdldD1cIiNteUNhcm91c2VsXCIgZGF0YS1zbGlkZS10bz1cIjFcIj48L2xpPlxyXG4gICAgICA8bGkgZGF0YS10YXJnZXQ9XCIjbXlDYXJvdXNlbFwiIGRhdGEtc2xpZGUtdG89XCIyXCI+PC9saT5cclxuICAgIDwvb2w+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaW5uZXJcIj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIGFjdGl2ZVwiPlxyXG4gICAgICA8ZGl2IGlkPVwicHIyNFwiPlxyXG4gICAgICAgPGRpdiBpZD1cInByMlwiPiA8aT5TdGFydCB3cml0aW5nLCBubyBtYXR0ZXIgd2hhdC4gVGhlIHdhdGVyIGRvZXMgbm90IGZsb3cgdW50aWwgdGhlIGZhdWNldCBpcyB0dXJuZWQgb24uPC9pPjwvZGl2PlxyXG4gICAgICAgIC1Mb3VpcyBM4oCZQW1vdXJcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICA8ZGl2IGlkPVwicHIxXCI+XHJcbiAgICAgICA8ZGl2IGlkPVwicHIyXCI+IDxpPldyaXRlIHdoYXQgc2hvdWxkIG5vdCBiZSBmb3Jnb3R0ZW48L2k+PC9kaXY+XHJcbiAgICAgICAgLUlzYWJlbCBBbGxlbmRlXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgIDxkaXYgaWQ9XCJwcjM0XCI+XHJcbiAgICAgICA8ZGl2IGlkPVwicHIyXCI+IDxpPlRoZSBmaXJzdCBkcmFmdCBpcyBqdXN0IHlvdSB0ZWxsaW5nIHlvdXJzZWxmIHRoZSBzdG9yeS48L2k+PC9kaXY+XHJcbiAgICAgICAgLVRlcnJ5IFByYXRjaGV0dFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICBcclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxhIGNsYXNzPVwibGVmdCBjYXJvdXNlbC1jb250cm9sXCIgaHJlZj1cIiNteUNhcm91c2VsXCIgZGF0YS1zbGlkZT1cInByZXZcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tbGVmdFwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgICA8YSBjbGFzcz1cInJpZ2h0IGNhcm91c2VsLWNvbnRyb2xcIiBocmVmPVwiI215Q2Fyb3VzZWxcIiBkYXRhLXNsaWRlPVwibmV4dFwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1yaWdodFwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj5cclxuICAgIDwvYT5cclxuICA8L2Rpdj5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9wcm9jaGV0YTE5OTkvRFNDLU5TRUMtQmxvZ3MvYmxvYi9tYXN0ZXIvcHVibGljL2RzYy5wbmc/cmF3PXRydWVcIiBhbHQ9XCJibG9nXCIgaWQ9XCJib29rMVwiIC8+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9kc2Nuc2VjLmNvbS9cIiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxoMz5BYm91dCB1cyAmcmFycjs8L2gzPlxyXG4gICAgICAgICAgICA8cD5XZSBhcmUgRGV2ZWxvcGVyIFN0dWRlbnQgQ2x1YiBvZiBOZXRhamkgU3ViaGFzaCBFbmdpbmVlcmluZyBDb2xsZWdlLCBOZXcgR2FyaWEsIEtvbGthdGEuPC9wPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduaW5cIj48YSBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxoMz5Mb2cgSW4gJnJhcnI7PC9oMz5cclxuICAgICAgICAgICAgPHA+U3RhcnQgeW91ciBCbG9nIEpvdXJuZXkgdG9kYXkhPC9wPlxyXG4gICAgICAgICAgPC9hPjwvTGluaz5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL3Byb2NoZXRhMTk5OS9EU0MtTlNFQy1CbG9ncy9ibG9iL21hc3Rlci9wdWJsaWMvYm9vay5qcGc/cmF3PXRydWVcIiBhbHQ9XCJibG9nXCIgaWQ9XCJib29rXCIgLz5cclxuICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vcHJvY2hldGExOTk5L0RTQy1OU0VDLUJsb2dzL2Jsb2IvbWFzdGVyL3B1YmxpYy9jcmVhdGUuanBnP3Jhdz10cnVlXCIgYWx0PVwiYmxvZ1wiIGlkPVwiYm9va1wiIC8+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL2ZvdXItcG9zdFwiIGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGgzPkNvbnRyaWJ1dG9ycycgU2VjdGlvbiAmcmFycjs8L2gzPlxyXG4gICAgICAgICAgICA8cD5UaGUgcGVvcGxlIHdpdGhvdXQgd2hvbSB0aGlzIHBhZ2Ugd291bGQgaGF2ZSBiZWVuIGltcG9zc2libGU8L3A+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgPGRpdiBpZD1cInByXCI+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgZ3V0dGVyQm90dG9tIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICBGb2xsb3cgdXM6XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vZHNjbnNlY1wiIHRhcmdldD1cIl9ibGFua1wiPjxJY29uIGNsYXNzTmFtZT1cImZhIGZhLWZhY2Vib29rLWZcIiAvPjwvYT5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9kc2Nuc2VjXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PEljb24gY2xhc3NOYW1lPVwiZmEgZmEtdHdpdHRlclwiIC8+PC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2lnLm1lL2RzY25zZWNcIiB0YXJnZXQ9XCJfYmxhbmtcIj48SWNvbiBjbGFzc05hbWU9XCJmYSBmYS1pbnN0YWdyYW1cIiAvPjwvYT5cclxuICAgICAgICA8YSAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kc2Nuc2VjXCJ0YXJnZXQ9XCJfYmxhbmtcIj48SWNvbiBjbGFzc05hbWU9XCJmYSBmYS1naXRodWJcIiAvPjwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgPGZvb3Rlcj5cclxuICAgICAgXHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2RzY25zZWMuY29tL1wiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vcHJvY2hldGExOTk5L0RTQy1OU0VDLUJsb2dzL2Jsb2IvbWFzdGVyL3B1YmxpYy9kc2MucG5nP3Jhdz10cnVlXCIgYWx0PVwiZHNjIExvZ29cIiBjbGFzc05hbWU9XCJsb2dvXCIgIGhlaWdodD1cIjMwMHB4XCIgd2lkdGg9XCIxMDBweFwiLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgI2Jvb2sxe1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBoZWlnaHQ6NTAlO1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gICAgICB9XHJcbiAgICAgICNwcjM0e1xyXG4gICAgICAgIHBhZGRpbmc6MmVtIDJlbSAyZW0gMmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBPcHRpbXVzIFByaW5jZXBzO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiaHR0cHM6Ly9naXRodWIuY29tL3Byb2NoZXRhMTk5OS9EU0MtTlNFQy1CbG9ncy9ibG9iL21hc3Rlci9wdWJsaWMvbGlnaHQuanBnP3Jhdz10cnVlXCIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtd2lkdGg6MjUlO1xyXG4gICAgICAgIGJhY2tncm91bmQtaGVpZ2h0OjI1JTtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgIH1cclxuICAgICAgI3ByMjR7XHJcbiAgICAgICAgcGFkZGluZzoyZW0gMmVtIDJlbSAyZW07XHJcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE9wdGltdXMgUHJpbmNlcHM7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCJodHRwczovL2dpdGh1Yi5jb20vcHJvY2hldGExOTk5L0RTQy1OU0VDLUJsb2dzL2Jsb2IvbWFzdGVyL3B1YmxpYy9idWxiLmpwZz9yYXc9dHJ1ZVwiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXdpZHRoOjI1JTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWhlaWdodDoyNSU7XHJcbiAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICB9XHJcbiAgICAgICNwcjJ7XHJcbiAgICAgICAgcGFkZGluZzoxZW0gMWVtIDFlbSAxZW07XHJcbiAgICAgICAgZm9udC1zaXplOjQwcHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAgICNwcjF7XHJcbiAgICAgICAgcGFkZGluZzoyZW0gMmVtIDJlbSAyZW07XHJcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE9wdGltdXMgUHJpbmNlcHM7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCJodHRwczovL2dpdGh1Yi5jb20vcHJvY2hldGExOTk5L0RTQy1OU0VDLUJsb2dzL2Jsb2IvbWFzdGVyL3B1YmxpYy9ib29rLmpwZz9yYXc9dHJ1ZVwiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXdpZHRoOjUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWhlaWdodDo1MCU7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICB9XHJcbiAgICAgICNwcntcclxuICAgICAgICBwYWRkaW5nOjFlbSAxZW0gMWVtIDFlbTtcclxuICAgIH1cclxuICAgICAgI3ByIGEge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICB9IFxyXG4gICAgICAjY3JlYXRle1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gO1xyXG4gICAgaGVpZ2h0OjMwMHB4O1xyXG4gICAgd2lkdGg6NjAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgI2Jvb2t7XHJcbiAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICBoZWlnaHQ6NTAlO1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYWluIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDVyZW0gMDtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb290ZXIgaW1nIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb290ZXIgYSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIGEge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUgYTpob3ZlcixcclxuICAgICAgICAudGl0bGUgYTpmb2N1cyxcclxuICAgICAgICAudGl0bGUgYTphY3RpdmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUsXHJcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29kZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMC43NXJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXHJcbiAgICAgICAgICAgIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ncmlkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgICBmbGV4LWJhc2lzOiA0NSU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQ6aG92ZXIsXHJcbiAgICAgICAgLmNhcmQ6Zm9jdXMsXHJcbiAgICAgICAgLmNhcmQ6YWN0aXZlIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQgaDMge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQgcCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxLjVlbTtcclxuICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6MWVtXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgIC5ncmlkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNze1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSA1cyBpbmZpbml0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgICAgICAgICAyMCUge1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMzAle1xyXG4gICAgICAgICAgICAgIGNvbG9yOmJsdWU7IFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgNDAle1xyXG4gICAgICAgICAgICAgIGNvbG9yOmdyZWVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB5ZWxsb3c7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNwcm97XHJcbiAgICAgICAgICBjb2xvcjpibHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBodG1sLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICA8L0FwcFdpdGhBdXRoZW50aWNhdGlvbj5cclxuKTtcclxuICB9XHJcbiAgY29uc3QgSW5kZXhMaW5rID0gKCkgPT4gKFxyXG4gICAgPHA+XHJcbiAgICAgIDxMaW5rIGhyZWY9e3JvdXRlcy5JTkRFWH0+XHJcbiAgICAgICAgPGE+SG9tZVBhZ2Ug8J+PoDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9wPlxyXG4gICk7XHJcbiAgZXhwb3J0eyBJbmRleExpbmt9XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IHsgQXBwV2l0aEF1dGhlbnRpY2F0aW9uIH0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0FwcFwiO1xyXG5pbXBvcnQgKiBhcyByb3V0ZXMgZnJvbSBcIi4uL3NyYy9jb25zdGFudHMvcm91dGVzXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vc3JjL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7SW5kZXhMaW5rfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5jb25zdCBQYXNzd29yZEZvcmdldFBhZ2UgPSAoKSA9PiAoXHJcbiAgPEFwcFdpdGhBdXRoZW50aWNhdGlvbj5cclxuICAgIDxoMT5Gb3Jnb3QgWW91ciBQYXNzd29yZD88L2gxPlxyXG4gICAgPFBhc3N3b3JkRm9yZ2V0Rm9ybSAvPlxyXG4gIDwvQXBwV2l0aEF1dGhlbnRpY2F0aW9uPlxyXG4pO1xyXG5cclxuY29uc3QgdXBkYXRlQnlQcm9wZXJ0eU5hbWUgPSAocHJvcGVydHlOYW1lLCB2YWx1ZSkgPT4gKCkgPT4gKHtcclxuICBbcHJvcGVydHlOYW1lXTogdmFsdWVcclxufSk7XHJcblxyXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xyXG4gIGVtYWlsOiBcIlwiLFxyXG4gIGVycm9yOiBudWxsXHJcbn07XHJcblxyXG5jbGFzcyBQYXNzd29yZEZvcmdldEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHsgLi4uSU5JVElBTF9TVEFURSB9O1xyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQgPSBldmVudCA9PiB7XHJcbiAgICBjb25zdCB7IGVtYWlsIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGF1dGhcclxuICAgICAgLmRvUGFzc3dvcmRSZXNldChlbWFpbClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgLi4uSU5JVElBTF9TVEFURSB9KSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVCeVByb3BlcnR5TmFtZShcImVycm9yXCIsIGVycm9yKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBlbWFpbCwgZXJyb3IgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgY29uc3QgaXNJbnZhbGlkID0gZW1haWwgPT09IFwiXCI7XHJcblxyXG4gICAgcmV0dXJuICg8PlxyXG4gICAgICA8Y2VudGVyPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICBZb3VyIEVtYWlsIEFkZHJlc3M6PGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PlxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHVwZGF0ZUJ5UHJvcGVydHlOYW1lKFwiZW1haWxcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgLz48YnI+PC9icj5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8Y2VudGVyPjxidXR0b24gZGlzYWJsZWQ9e2lzSW52YWxpZH0gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgUmVzZXQgTXkgUGFzc3dvcmRcclxuICAgICAgICA8L2J1dHRvbj48L2NlbnRlcj5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgIDxjZW50ZXI+PGJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwMHB4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEluZGV4TGluay8+XHJcbiAgICAgICAgICA8L2J1dHRvbj48L2NlbnRlcj5cclxuICAgICAgICB7ZXJyb3IgJiYgPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2NlbnRlcj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICBmb290ZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb290ZXIgaW1nIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb290ZXIgYSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5ncmlkIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZCB7XHJcbiAgICAgICAgbWFyZ2luOiAycmVtO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDQ1JTtcclxuICAgICAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgIC1tb3otYm94LXNoYWRvdzogICAgaW5zZXQgMCAwIDEwcHggIzAwMDAwMDtcclxuICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xyXG4gICBib3gtc2hhZG93OiAgICAgICAgIGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXJkOmhvdmVyLFxyXG4gICAgICAuY2FyZDpmb2N1cyxcclxuICAgICAgLmNhcmQ6YWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogIzAwNzBmMztcclxuICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXJkIGgzIHtcclxuICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXJkIHAge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgfVxyXG4gICAgICAjbHtcclxuICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5sb2dvIHtcclxuICAgICAgICBoZWlnaHQ6IDFlbTtcclxuICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICB9XHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XHJcbiAgICAgIH1cclxuICAgICAgI3N7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSA1cyBpbmZpbml0ZTtcclxuICAgICAgfVxyXG4gICAgICBAa2V5ZnJhbWVzIHB1bHNlIHtcclxuICAgICAgICAyMCUge1xyXG4gICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgMzAle1xyXG4gICAgICAgICAgICBjb2xvcjpibHVlOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgNDAle1xyXG4gICAgICAgICAgICBjb2xvcjpncmVlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICBjb2xvcjogeWVsbG93O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAjcHJve1xyXG4gICAgICAgIGNvbG9yOmJsdWU7XHJcbiAgICAgIH1cclxuICAgICAgZm9ybXtcclxuICAgICAgICBmb250LXNpemU6MzBweDtcclxuICAgIHBhZGRpbmc6MC4wMDAxMHJlbSA1ZW0gNWVtIDVlbTsgICAgICAgICBcclxuICAgIG1hcmdpbjogMTAwcHggMTAwcHggMTAwcHggMTAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgQnV0dG9ue1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAjbmV3e1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBodG1sLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IFBhc3N3b3JkRm9yZ2V0TGluayA9ICgpID0+IChcclxuICA8cD5cclxuICAgIDxMaW5rIGhyZWY9e3JvdXRlcy5QQVNTV09SRF9GT1JHRVR9PlxyXG4gICAgICA8YT5Gb3Jnb3QgUGFzc3dvcmQ/PC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gIDwvcD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhc3N3b3JkRm9yZ2V0UGFnZTtcclxuXHJcbmV4cG9ydCB7IFBhc3N3b3JkRm9yZ2V0Rm9ybSwgUGFzc3dvcmRGb3JnZXRMaW5rIH07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU2lnblVwTGluayB9IGZyb20gXCIuL3NpZ251cFwiO1xyXG5pbXBvcnQgeyBQYXNzd29yZEZvcmdldExpbmsgfSBmcm9tIFwiLi9wdy1mb3JnZXRcIjtcclxuaW1wb3J0IHsgQXBwV2l0aEF1dGhlbnRpY2F0aW9uIH0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0FwcFwiO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL3NyYy9maXJlYmFzZVwiO1xyXG5pbXBvcnQgKiBhcyByb3V0ZXMgZnJvbSBcIi4uL3NyYy9jb25zdGFudHMvcm91dGVzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7SW5kZXhMaW5rfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5jb25zdCBTaWduSW5QYWdlID0gKCkgPT4gKFxyXG4gIDxBcHBXaXRoQXV0aGVudGljYXRpb24+XHJcbiAgICA8U2lnbkluRm9ybSAvPlxyXG4gICAgXHJcbiAgICBcclxuICA8L0FwcFdpdGhBdXRoZW50aWNhdGlvbj5cclxuKTtcclxuXHJcbmNvbnN0IHVwZGF0ZUJ5UHJvcGVydHlOYW1lID0gKHByb3BlcnR5TmFtZSwgdmFsdWUpID0+ICgpID0+ICh7XHJcbiAgW3Byb3BlcnR5TmFtZV06IHZhbHVlXHJcbn0pO1xyXG5cclxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcclxuICBlbWFpbDogXCJcIixcclxuICBwYXNzd29yZDogXCJcIixcclxuICBlcnJvcjogbnVsbFxyXG59O1xyXG5cclxuY2xhc3MgU2lnbkluRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0geyAuLi5JTklUSUFMX1NUQVRFIH07XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCA9IGV2ZW50ID0+IHtcclxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGF1dGhcclxuICAgICAgLmRvU2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyAuLi5JTklUSUFMX1NUQVRFIH0pKTtcclxuICAgICAgICBSb3V0ZXIucHVzaChyb3V0ZXMuSE9NRSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVCeVByb3BlcnR5TmFtZShcImVycm9yXCIsIGVycm9yKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQsIGVycm9yIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGNvbnN0IGlzSW52YWxpZCA9IHBhc3N3b3JkID09PSBcIlwiIHx8IGVtYWlsID09PSBcIlwiO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIj48L21ldGE+XHJcbiAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+PC9tZXRhPlxyXG4gICAgICAgPHRpdGxlPkxvZyBJbjwvdGl0bGU+XHJcbiAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9wcm9jaGV0YTE5OTkvRFNDLU5TRUMtQmxvZ3MvbWFzdGVyL3B1YmxpYy9mYXZpY29uLmljb1wiID48L2xpbms+XHJcbiAgICAgPC9IZWFkPlxyXG4gICAgIDxtYWluPlxyXG4gICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL3Byb2NoZXRhMTk5OS9EU0MtTlNFQy1CbG9ncy9ibG9iL21hc3Rlci9wdWJsaWMvZHNjLnBuZz9yYXc9dHJ1ZVwiIGFsdD1cImRzYyBMb2dvXCIgY2xhc3NOYW1lPVwibG9nb1wiPjwvaW1nPlxyXG4gICAgICAgICAgPGI+RFNDIE5TRUMgQkxPR1MtPGkgaWQ9XCJzXCI+V3JpdGUgWW91ciBPd24gU3RvcnkhPC9pPjwvYj5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxjZW50ZXI+PGgxPlxyXG4gICAgICAgIExvZyBJbiBUbyBTdGFydCBZb3VyIEpvdXJuZXkgVG9kYXkhXHJcbiAgICAgICAgPC9oMT48L2NlbnRlcj5cclxuICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvMU8yQlJaY0RnSWZEc0tNVGJHL2dpcGh5LmdpZlwiPjwvaW1nPjwvY2VudGVyPlxyXG4gICAgICAgIDxjZW50ZXI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgIFVzZXJuYW1lOjxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodXBkYXRlQnlQcm9wZXJ0eU5hbWUoXCJlbWFpbFwiLCBldmVudC50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJzb21lb25lQGV4YW1wbGUuY29tXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIFBhc3N3b3JkOjxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodXBkYXRlQnlQcm9wZXJ0eU5hbWUoXCJwYXNzd29yZFwiLCBldmVudC50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGNlbnRlcj48YnV0dG9uIGRpc2FibGVkPXtpc0ludmFsaWR9IHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgIFNpZ24gSW5cclxuICAgICAgICA8L2J1dHRvbj48L2NlbnRlcj5cclxuXHJcbiAgICAgICAge2Vycm9yICYmIDxwPntlcnJvci5tZXNzYWdlfTwvcD59XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGNlbnRlcj48UGFzc3dvcmRGb3JnZXRMaW5rIC8+PC9jZW50ZXI+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICA8Y2VudGVyPjxTaWduVXBMaW5rIC8+PC9jZW50ZXI+XHJcbiAgICA8YnI+PC9icj5cclxuICAgIDxjZW50ZXI+PGJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjIwMHB4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEluZGV4TGluay8+XHJcbiAgICAgICAgICA8L2J1dHRvbj48L2NlbnRlcj5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICAgICAgXHJcbiAgICAgIDwvY2VudGVyPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2RzY25zZWMuY29tL1wiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vcHJvY2hldGExOTk5L0RTQy1OU0VDLUJsb2dzL2Jsb2IvbWFzdGVyL3B1YmxpYy9kc2MucG5nP3Jhdz10cnVlXCIgYWx0PVwiRFNDIExvZ29cIiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvb3RlciBpbWcge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvb3RlciBhIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmdyaWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXJkIHtcclxuICAgICAgICBtYXJnaW46IDJyZW07XHJcbiAgICAgICAgZmxleC1iYXNpczogNDUlO1xyXG4gICAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAgICBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xyXG4gICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XHJcbiAgIGJveC1zaGFkb3c6ICAgICAgICAgaW5zZXQgMCAwIDEwcHggIzAwMDAwMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQ6aG92ZXIsXHJcbiAgICAgIC5jYXJkOmZvY3VzLFxyXG4gICAgICAuY2FyZDphY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwNzBmMztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQgaDMge1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICB9XHJcbiAgICAgICNse1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmxvZ28ge1xyXG4gICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDVyZW0gMDtcclxuICAgICAgfVxyXG4gICAgICAjc3tcclxuICAgICAgICBhbmltYXRpb246IHB1bHNlIDVzIGluZmluaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIEBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gICAgICAgIDIwJSB7XHJcbiAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAzMCV7XHJcbiAgICAgICAgICAgIGNvbG9yOmJsdWU7IFxyXG4gICAgICAgIH1cclxuICAgICAgICA0MCV7XHJcbiAgICAgICAgICAgIGNvbG9yOmdyZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgIGNvbG9yOiB5ZWxsb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICNwcm97XHJcbiAgICAgICAgY29sb3I6Ymx1ZTtcclxuICAgICAgfVxyXG4gICAgICBmb3Jte1xyXG4gICAgICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgcGFkZGluZzowLjAwMDEwcmVtIDVlbSA1ZW0gNWVtOyAgICAgICAgIFxyXG4gICAgbWFyZ2luOiAxMDBweCAxMDBweCAxMDBweCAxMDBweDtcclxuICAgICAgfVxyXG4gICAgICBCdXR0b257XHJcbiAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgICNuZXd7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW5QYWdlO1xyXG5cclxuZXhwb3J0IHsgU2lnbkluRm9ybSB9O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IEFwcFdpdGhBdXRoZW50aWNhdGlvbiB9IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9BcHBcIjtcclxuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tIFwiLi4vc3JjL2ZpcmViYXNlXCI7XHJcbmltcG9ydCAqIGFzIHJvdXRlcyBmcm9tIFwiLi4vc3JjL2NvbnN0YW50cy9yb3V0ZXNcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCB7SW5kZXhMaW5rfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5jb25zdCBTaWduVXBQYWdlID0gKCkgPT4gKFxyXG4gIDxBcHBXaXRoQXV0aGVudGljYXRpb24+XHJcbiAgICA8U2lnblVwRm9ybSAvPlxyXG4gIDwvQXBwV2l0aEF1dGhlbnRpY2F0aW9uPlxyXG4pO1xyXG5cclxuY29uc3QgdXBkYXRlQnlQcm9wZXJ0eU5hbWUgPSAocHJvcGVydHlOYW1lLCB2YWx1ZSkgPT4gKCkgPT4gKHtcclxuICBbcHJvcGVydHlOYW1lXTogdmFsdWVcclxufSk7XHJcblxyXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xyXG4gIHVzZXJuYW1lOiBcIlwiLFxyXG4gIGVtYWlsOiBcIlwiLFxyXG4gIHBhc3N3b3JkT25lOiBcIlwiLFxyXG4gIHBhc3N3b3JkVHdvOiBcIlwiLFxyXG4gIGVycm9yOiBudWxsXHJcbn07XHJcblxyXG5jbGFzcyBTaWduVXBGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7IC4uLklOSVRJQUxfU1RBVEUgfTtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0ID0gZXZlbnQgPT4ge1xyXG4gICAgY29uc3QgeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkT25lIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGF1dGhcclxuICAgICAgLmRvQ3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZE9uZSlcclxuICAgICAgLnRoZW4oYXV0aFVzZXIgPT4ge1xyXG4gICAgICAgIC8vIENyZWF0ZSBhIHVzZXIgaW4geW91ciBvd24gYWNjZXNzaWJsZSBGaXJlYmFzZSBEYXRhYmFzZSB0b29cclxuICAgICAgICBkYi5kb0NyZWF0ZVVzZXIoYXV0aFVzZXIudXNlci51aWQsIHVzZXJuYW1lLCBlbWFpbClcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyAuLi5JTklUSUFMX1NUQVRFIH0pKTtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2gocm91dGVzLkhPTUUpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodXBkYXRlQnlQcm9wZXJ0eU5hbWUoXCJlcnJvclwiLCBlcnJvcikpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVCeVByb3BlcnR5TmFtZShcImVycm9yXCIsIGVycm9yKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkT25lLCBwYXNzd29yZFR3bywgZXJyb3IgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgY29uc3QgaXNJbnZhbGlkID1cclxuICAgICAgcGFzc3dvcmRPbmUgIT09IHBhc3N3b3JkVHdvIHx8IHBhc3N3b3JkT25lID09PSBcIlwiIHx8IHVzZXJuYW1lID09PSBcIlwiO1xyXG5cclxuICAgIHJldHVybiAoPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPjwvbWV0YT5cclxuICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIj48L21ldGE+XHJcbiAgICAgICA8dGl0bGU+U2lnbiBVcDwvdGl0bGU+XHJcbiAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9wcm9jaGV0YTE5OTkvRFNDLU5TRUMtQmxvZ3MvbWFzdGVyL3B1YmxpYy9mYXZpY29uLmljb1wiID48L2xpbms+XHJcbiAgICAgPC9IZWFkPlxyXG4gICAgIDxtYWluPlxyXG4gICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL3Byb2NoZXRhMTk5OS9EU0MtTlNFQy1CbG9ncy9ibG9iL21hc3Rlci9wdWJsaWMvZHNjLnBuZz9yYXc9dHJ1ZVwiIGFsdD1cImRzYyBMb2dvXCIgY2xhc3NOYW1lPVwibG9nb1wiPjwvaW1nPlxyXG4gICAgICAgICAgPGI+RFNDIE5TRUMgQkxPR1MtPGkgaWQ9XCJzXCI+V3JpdGUgWW91ciBPd24gU3RvcnkhPC9pPjwvYj5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxjZW50ZXI+PGgxPlxyXG4gICAgICAgIFNpZ24gVXAgVG8gU3RhcnQgWW91ciBKb3VybmV5IFRvZGF5IVxyXG4gICAgICAgIDwvaDE+PC9jZW50ZXI+XHJcbiAgICAgICAgPGNlbnRlcj48aW1nIHNyYz1cImh0dHBzOi8vbWVkaWEuZ2lwaHkuY29tL21lZGlhL01Uak03b2t6cFF1ODgvZ2lwaHkuZ2lmXCI+PC9pbWc+PC9jZW50ZXI+XHJcbiAgICAgICAgPGNlbnRlcj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgRnVsbCBOYW1lOjxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodXBkYXRlQnlQcm9wZXJ0eU5hbWUoXCJ1c2VybmFtZVwiLCBldmVudC50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJGdWxsIE5hbWVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgRW1haWw6PGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVCeVByb3BlcnR5TmFtZShcImVtYWlsXCIsIGV2ZW50LnRhcmdldC52YWx1ZSkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgIC8+PGJyPjwvYnI+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgUGFzc3dvcmQ6PGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmRPbmV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICB1cGRhdGVCeVByb3BlcnR5TmFtZShcInBhc3N3b3JkT25lXCIsIGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgIC8+PGJyPjwvYnI+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgQ29uZmlybSBQYXNzd29yZDo8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZFR3b31cclxuICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PlxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICAgIHVwZGF0ZUJ5UHJvcGVydHlOYW1lKFwicGFzc3dvcmRUd29cIiwgZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCJcclxuICAgICAgICAvPjxicj48L2JyPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxjZW50ZXI+PGJ1dHRvbiBkaXNhYmxlZD17aXNJbnZhbGlkfSB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICBTaWduIFVwXHJcbiAgICAgICAgPC9idXR0b24+PC9jZW50ZXI+XHJcbiAgICAgICAgPGNlbnRlcj5BdGVyIGNyZWF0aW5nIGFjY291bnQsIGdvIGJhY2sgdG8gTG9naW4gUGFnZS48L2NlbnRlcj5cclxuICAgIDxicj48L2JyPlxyXG4gICAgPGNlbnRlcj48YnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiwgd2lkdGg6IFwiMjAwcHhcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW5kZXhMaW5rLz5cclxuICAgICAgICAgIDwvYnV0dG9uPjwvY2VudGVyPlxyXG5cclxuICAgICAgICB7ZXJyb3IgJiYgPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2NlbnRlcj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Zm9vdGVyPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kc2Nuc2VjLmNvbS9cIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL3Byb2NoZXRhMTk5OS9EU0MtTlNFQy1CbG9ncy9ibG9iL21hc3Rlci9wdWJsaWMvZHNjLnBuZz9yYXc9dHJ1ZVwiIGFsdD1cIkRTQyBMb2dvXCIgY2xhc3NOYW1lPVwibG9nb1wiIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICBmb290ZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb290ZXIgaW1nIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb290ZXIgYSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5ncmlkIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZCB7XHJcbiAgICAgICAgbWFyZ2luOiAycmVtO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDQ1JTtcclxuICAgICAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgIC1tb3otYm94LXNoYWRvdzogICAgaW5zZXQgMCAwIDEwcHggIzAwMDAwMDtcclxuICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAjMDAwMDAwO1xyXG4gICBib3gtc2hhZG93OiAgICAgICAgIGluc2V0IDAgMCAxMHB4ICMwMDAwMDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXJkOmhvdmVyLFxyXG4gICAgICAuY2FyZDpmb2N1cyxcclxuICAgICAgLmNhcmQ6YWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogIzAwNzBmMztcclxuICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXJkIGgzIHtcclxuICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXJkIHAge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgfVxyXG4gICAgICAjbHtcclxuICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5sb2dvIHtcclxuICAgICAgICBoZWlnaHQ6IDFlbTtcclxuICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICB9XHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XHJcbiAgICAgIH1cclxuICAgICAgI3N7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSA1cyBpbmZpbml0ZTtcclxuICAgICAgfVxyXG4gICAgICBAa2V5ZnJhbWVzIHB1bHNlIHtcclxuICAgICAgICAyMCUge1xyXG4gICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgMzAle1xyXG4gICAgICAgICAgICBjb2xvcjpibHVlOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgNDAle1xyXG4gICAgICAgICAgICBjb2xvcjpncmVlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICBjb2xvcjogeWVsbG93O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAjcHJve1xyXG4gICAgICAgIGNvbG9yOmJsdWU7XHJcbiAgICAgIH1cclxuICAgICAgZm9ybXtcclxuICAgICAgICBmb250LXNpemU6MzBweDtcclxuICAgIHBhZGRpbmc6MC4wMDAxMHJlbSA1ZW0gNWVtIDVlbTsgICAgICAgICBcclxuICAgIG1hcmdpbjogMTAwcHggMTAwcHggMTAwcHggMTAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgQnV0dG9ue1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAjbmV3e1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBodG1sLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IFNpZ25VcExpbmsgPSAoKSA9PiAoXHJcbiAgPHA+XHJcbiAgICBEb24ndCBoYXZlIGFuIGFjY291bnQ/e1wiIFwifVxyXG4gICAgPExpbmsgaHJlZj17cm91dGVzLlNJR05fVVB9PlxyXG4gICAgICA8YT5TaWduIFVwPC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gIDwvcD5cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgU2lnblVwUGFnZTtcclxuZXhwb3J0IHsgU2lnblVwRm9ybSwgU2lnblVwTGluayB9O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tIFwicmVjb21wb3NlXCI7XHJcblxyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgd2l0aEF1dGhlbnRpY2F0aW9uIGZyb20gXCIuLi9TZXNzaW9uL3dpdGhBdXRoZW50aWNhdGlvblwiO1xyXG5pbXBvcnQgd2l0aEF1dGhvcml6YXRpb24gZnJvbSBcIi4uL1Nlc3Npb24vd2l0aEF1dGhvcml6YXRpb25cIjtcclxuXHJcbmNvbnN0IEFwcCA9ICh7IGNoaWxkcmVuIH0pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxyXG4gICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuKTtcclxuY29uc3QgQXBwV2l0aEF1dGhlbnRpY2F0aW9uID0gY29tcG9zZShcclxuICB3aXRoQXV0aGVudGljYXRpb24sXHJcbiAgd2l0aEF1dGhvcml6YXRpb24oZmFsc2UpXHJcbikoQXBwKTtcclxuY29uc3QgQXBwV2l0aEF1dGhvcml6YXRpb24gPSBjb21wb3NlKFxyXG4gIHdpdGhBdXRoZW50aWNhdGlvbixcclxuICB3aXRoQXV0aG9yaXphdGlvbih0cnVlKVxyXG4pKEFwcCk7XHJcbmV4cG9ydCB7IEFwcFdpdGhBdXRoZW50aWNhdGlvbiwgQXBwV2l0aEF1dGhvcml6YXRpb24gfTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCAqIGFzIHJvdXRlcyBmcm9tICcuLi8uLi9jb25zdGFudHMvcm91dGVzJztcclxuaW1wb3J0IFNpZ25PdXRCdXR0b24gZnJvbSAnLi4vU2lnbk91dCc7XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uID0gKHsgYXV0aFVzZXIgfSkgPT5cclxuICA8ZGl2PlxyXG4gICAgeyBhdXRoVXNlclxyXG4gICAgICAgID8gPE5hdmlnYXRpb25BdXRoIC8+XHJcbiAgICAgICAgOiA8TmF2aWdhdGlvbk5vbkF1dGggLz5cclxuICAgIH1cclxuICA8L2Rpdj5cclxuXHJcbmNvbnN0IE5hdmlnYXRpb25BdXRoID0gKCkgPT5cclxuICA8dWw+XHJcbiAgICA8bGk+PExpbmsgaHJlZj17cm91dGVzLkxBTkRJTkd9PjxhPkxhbmRpbmc8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICA8bGk+PExpbmsgaHJlZj17cm91dGVzLkhPTUV9PjxhPkhvbWU8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICA8bGk+PExpbmsgaHJlZj17cm91dGVzLkFDQ09VTlR9PjxhPkFjY291bnQ8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICA8bGk+PFNpZ25PdXRCdXR0b24gLz48L2xpPlxyXG4gIDwvdWw+XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uTm9uQXV0aCA9ICgpID0+XHJcbiAgPHVsPlxyXG4gICAgPGxpPjxMaW5rIGhyZWY9e3JvdXRlcy5MQU5ESU5HfT48YT5MYW5kaW5nPC9hPjwvTGluaz48L2xpPlxyXG4gICAgPGxpPjxMaW5rIGhyZWY9e3JvdXRlcy5TSUdOX0lOfT48YT5TaWduIEluPC9hPjwvTGluaz48L2xpPlxyXG4gIDwvdWw+XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgYXV0aFVzZXI6IHN0YXRlLnNlc3Npb25TdGF0ZS5hdXRoVXNlcixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTmF2aWdhdGlvbik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCB7IGZpcmViYXNlIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UnO1xyXG5cclxuY29uc3Qgd2l0aEF1dGhlbnRpY2F0aW9uID0gKENvbXBvbmVudCkgPT4ge1xyXG4gIGNsYXNzIFdpdGhBdXRoZW50aWNhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgY29uc3QgeyBvblNldEF1dGhVc2VyIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgZmlyZWJhc2UuYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aFVzZXIgPT4ge1xyXG4gICAgICAgIGF1dGhVc2VyXHJcbiAgICAgICAgICA/IG9uU2V0QXV0aFVzZXIoYXV0aFVzZXIpXHJcbiAgICAgICAgICA6IG9uU2V0QXV0aFVzZXIobnVsbCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8Q29tcG9uZW50IHsgLi4udGhpcy5wcm9wcyB9IC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgICBvblNldEF1dGhVc2VyOiAoYXV0aFVzZXIpID0+IGRpc3BhdGNoKHsgdHlwZTogJ0FVVEhfVVNFUl9TRVQnLCBhdXRoVXNlciB9KSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShXaXRoQXV0aGVudGljYXRpb24pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aGVudGljYXRpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBmaXJlYmFzZSB9IGZyb20gJy4uLy4uL2ZpcmViYXNlJztcclxuaW1wb3J0ICogYXMgcm91dGVzIGZyb20gJy4uLy4uL2NvbnN0YW50cy9yb3V0ZXMnO1xyXG5cclxuY29uc3Qgd2l0aEF1dGhvcml6YXRpb24gPSAobmVlZHNBdXRob3JpemF0aW9uKSA9PiAoQ29tcG9uZW50KSA9PiB7XHJcbiAgY2xhc3MgV2l0aEF1dGhvcml6YXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIGZpcmViYXNlLmF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKGF1dGhVc2VyID0+IHtcclxuICAgICAgICBpZiAoIWF1dGhVc2VyICYmIG5lZWRzQXV0aG9yaXphdGlvbikge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2gocm91dGVzLlNJR05fSU4pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbXBvbmVudCB7IC4uLnRoaXMucHJvcHMgfSAvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFdpdGhBdXRob3JpemF0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aG9yaXphdGlvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4uLy4uL2ZpcmViYXNlJztcclxuXHJcbmNvbnN0IFNpZ25PdXRCdXR0b24gPSAoKSA9PlxyXG4gIDxidXR0b25cclxuICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgb25DbGljaz17YXV0aC5kb1NpZ25PdXR9XHJcbiAgPlxyXG4gICAgU2lnbiBPdXRcclxuICA8L2J1dHRvbj5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25PdXRCdXR0b247XHJcbiIsImV4cG9ydCBjb25zdCBMQU5ESU5HID0gJy8nO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUCA9ICcvc2lnbnVwJztcclxuZXhwb3J0IGNvbnN0IFNJR05fSU4gPSAnL3NpZ25pbic7XHJcbmV4cG9ydCBjb25zdCBQQVNTV09SRF9GT1JHRVQgPSAnL3B3LWZvcmdldCc7XHJcbmV4cG9ydCBjb25zdCBIT01FID0gJy9ob21lJztcclxuZXhwb3J0IGNvbnN0IEFDQ09VTlQgPSAnL2FjY291bnQnO1xyXG5leHBvcnQgY29uc3QgSU5ERVg9Jy9pbmRleCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOPScvc2lnbmluJ1xyXG5leHBvcnQgY29uc3QgRkVFRD0nL2ZlZWQnIiwiaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4vZmlyZWJhc2UnO1xyXG5cclxuLy8gU2lnbiBVcFxyXG5leHBvcnQgY29uc3QgZG9DcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQgPSAoZW1haWwsIHBhc3N3b3JkKSA9PlxyXG4gIGF1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCk7XHJcblxyXG4vLyBTaWduIEluXHJcbmV4cG9ydCBjb25zdCBkb1NpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkID0gKGVtYWlsLCBwYXNzd29yZCkgPT5cclxuICBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCk7XHJcblxyXG4vLyBTaWduIG91dFxyXG5leHBvcnQgY29uc3QgZG9TaWduT3V0ID0gKCkgPT5cclxuICBhdXRoLnNpZ25PdXQoKTtcclxuXHJcbi8vIFBhc3N3b3JkIFJlc2V0XHJcbmV4cG9ydCBjb25zdCBkb1Bhc3N3b3JkUmVzZXQgPSAoZW1haWwpID0+XHJcbiAgYXV0aC5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKTtcclxuXHJcbi8vIFBhc3N3b3JkIENoYW5nZVxyXG5leHBvcnQgY29uc3QgZG9QYXNzd29yZFVwZGF0ZSA9IChwYXNzd29yZCkgPT5cclxuICBhdXRoLmN1cnJlbnRVc2VyLnVwZGF0ZVBhc3N3b3JkKHBhc3N3b3JkKTtcclxuIiwiaW1wb3J0IHsgZGIgfSBmcm9tICcuL2ZpcmViYXNlJztcclxuXHJcbi8vIFVzZXIgQVBJXHJcblxyXG5leHBvcnQgY29uc3QgZG9DcmVhdGVVc2VyID0gKGlkLCB1c2VybmFtZSwgZW1haWwpID0+XHJcbiAgZGIucmVmKGB1c2Vycy8ke2lkfWApLnNldCh7XHJcbiAgICB1c2VybmFtZSxcclxuICAgIGVtYWlsLFxyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9uY2VHZXRVc2VycyA9ICgpID0+XHJcbiAgZGIucmVmKCd1c2VycycpLm9uY2UoJ3ZhbHVlJyk7XHJcblxyXG4vLyBPdGhlciBkYiBBUElzIC4uLlxyXG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcIkBmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IFwiQGZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IFwiQGZpcmViYXNlL2RhdGFiYXNlXCI7XHJcblxyXG5jb25zdCBwcm9kQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lEZnFwTGpDZGI5dENkYkNJRkVJOTBMa1hlRWZlQlV6czRcIixcclxuICBhdXRoRG9tYWluOiBcImRzYy1uc2VjLWJsb2dzLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vZHNjLW5zZWMtYmxvZ3MuZmlyZWJhc2Vpby5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwiZHNjLW5zZWMtYmxvZ3NcIixcclxuICBzdG9yYWdlQnVja2V0OiBcImRzYy1uc2VjLWJsb2dzLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTA2NjkyNzY2NDQwN1wiLFxyXG59O1xyXG5cclxuY29uc3QgZGV2Q29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lEZnFwTGpDZGI5dENkYkNJRkVJOTBMa1hlRWZlQlV6czRcIixcclxuICBhdXRoRG9tYWluOiBcImRzYy1uc2VjLWJsb2dzLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vZHNjLW5zZWMtYmxvZ3MuZmlyZWJhc2Vpby5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwiZHNjLW5zZWMtYmxvZ3NcIixcclxuICBzdG9yYWdlQnVja2V0OiBcImRzYy1uc2VjLWJsb2dzLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTA2NjkyNzY2NDQwN1wiLFxyXG59O1xyXG5cclxuY29uc3QgY29uZmlnID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gcHJvZENvbmZpZyA6IGRldkNvbmZpZztcclxuXHJcbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XHJcbn1cclxuXHJcbmNvbnN0IGRiID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcclxuXHJcbmV4cG9ydCB7IGRiLCBhdXRoIH07XHJcbiIsImltcG9ydCAqIGFzIGF1dGggZnJvbSAnLi9hdXRoJztcclxuaW1wb3J0ICogYXMgZGIgZnJvbSAnLi9kYic7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJy4vZmlyZWJhc2UnO1xyXG5cclxuZXhwb3J0IHtcclxuICBhdXRoLFxyXG4gIGRiLFxyXG4gIGZpcmViYXNlLFxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZpcmViYXNlL2RhdGFiYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlY29tcG9zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9