import Vue from 'vue';
/**
* Quasar plugins injected to prototype:
* * $q.addressbarColor
* $q.fullscreen
* $q.appVisible
* $q.bottomSheet
* $q.cookies
* $q.dialog
* $q.loading
* $q.loadingBar
* $q.localStorage
* $q.notify
* $q.platform
* $q.screen
* $q.sessionStorage 
*/
Vue.prototype.$q = {
  addressbarColor : {
  
  
    /**
     * Sets addressbar color (for browsers that support it)
     * @param {String} hexColor Color in hex format
     * @returns  
     */
    set (hexColor) {}
  },
  fullscreen : {
  
    /**
     * Does browser support it?
     * @type {Boolean}
     */
    isCapable: {},
    /**
     * Is Fullscreen active? (reactive)
     * @type {Boolean}
     */
    isActive: {},
  
    /**
     * Request going into Fullscreen (with optional target)
     * @param {String} [target] Optional CSS selector of target to request Fullscreen on
     * @returns  
     */
    request (target) {},
    /**
     * Request exiting out of Fullscreen mode
     * @returns  
     */
    exit () {},
    /**
     * Request toggling Fullscreen mode (with optional target if requesting going into Fullscreen only)
     * @param {String} [target] Optional CSS selector of target to request Fullscreen on
     * @returns  
     */
    toggle (target) {}
  },
  appVisible : {
  
    /**
     * Does the app have user focus? Or the app runs in the background / another tab has the user's attention (reactive)
     * @type {Boolean}
     */
    appVisible: {},
  
  },
  bottomSheet : {
  
  
    /**
     * Creates an ad-hoc Bottom Sheet; Same as calling $q.bottomSheet(...)
     * @param {{class : String|Array|Object, style : String|Array|Object, title : String, message : String, actions : Array, grid : Boolean, dark : Boolean, seamless : Boolean, persistent : Boolean}} opts Bottom Sheet options
     * @returns {{onOk : Function, onCancel : Function, onDismiss : Function, hide : Function}} Chainable Object
     */
    create (opts) {}
  },
  cookies : {
  
  
    /**
     * Get cookie
     * @param {String} name Cookie name
     * @returns {String} Cookie value
     */
    get (name) {},
    /**
     * Get all cookies
     * @returns {Object} Object with cookie names (as keys) and their values
     */
    getAll () {},
    /**
     * Set cookie
     * @param {String} name Cookie name
     * @param {String} value Cookie value
     * @param {{expires : Number|String, path : String, domain : String, httpOnly : Boolean, secure : Boolean}} [options] Cookie options
     * @returns  
     */
    set (name,value,options) {},
    /**
     * Check if cookie exists
     * @param {String} name Cookie name
     * @returns {Boolean} Does cookie exists or not?
     */
    has (name) {},
    /**
     * Remove a cookie
     * @param {String} name Cookie name
     * @param {{path : String, domain : String, httpOnly : Boolean, secure : Boolean}} [options] Cookie options
     * @returns  
     */
    remove (name,options) {},
    /**
     * For SSR usage only, and only on the global import (not on $q.cookies)
     * @param {Object} ssrContext SSR Context Object
     * @returns {Object} Cookie object (like $q.cookies) for SSR usage purposes
     */
    parseSSR (ssrContext) {}
  },
  dialog : {
  
  
    /**
     * Creates an ad-hoc Dialog; Same as calling $q.dialog(...)
     * @param {{class : String|Array|Object, style : String|Array|Object, title : String, message : String, position : 'top'|'right'|'bottom'|'left'|'standard', options : {prompt : {model : Array|String, type : String}, options : {type : 'radio'|'checkbox'|'toggle', model : Array, items : Array}}, ok : String|{...props : *}|Boolean, cancel : String|{...props : *}|Boolean, stackButtons : Boolean, color : String, dark : Boolean, persistent : Boolean, no-esc-dismiss : Boolean, no-backdrop-dismiss : Boolean, no-route-dismiss : Boolean, seamless : Boolean, maximized : Boolean, full-width : Boolean, full-height : Boolean, transition-show : String, transition-hide : String, component : *, root : Object}} opts Dialog options
     * @returns {{onOk : Function, onCancel : Function, onDismiss : Function, hide : Function}} Chainable Object
     */
    create (opts) {}
  },
  loading : {
  
    /**
     * Is Loading active? (reactive)
     * @type {Boolean}
     */
    isActive: {},
  
    /**
     * Activate and show
     * @param {{delay : Number, message : String, sanitize : Boolean, spinnerSize : Number, spinnerColor : String, messageColor : String, backgroundColor : String, spinner : Component, customClass : String}} [opts] All props are optional
     * @returns  
     */
    show (opts) {},
    /**
     * Hide it
     * @returns  
     */
    hide () {},
    /**
     * Merge options into the default ones
     * @param {{delay : Number, message : String, spinnerSize : Number, spinnerColor : String, messageColor : String, backgroundColor : String, spinner : Component, customClass : String}} opts Pick the subprop you want to define
     * @returns  
     */
    setDefaults (opts) {}
  },
  loadingBar : {
  
  
    /**
     * Notify bar you've started a background activity
     * @param {Number} [speed] Delay (in milliseconds) between bar progress increments
     * @returns  
     */
    start (speed) {},
    /**
     * Notify bar one background activity has finalized
     * @returns  
     */
    stop () {},
    /**
     * Manually trigger a bar progress increment
     * @param {Number} [amount] Amount (0.0 < x < 1.0) to increment with
     * @returns  
     */
    increment (amount) {}
  },
  localStorage : {
  
  
    /**
     * Check if storage item exists
     * @param {String} key Entry key
     * @returns {Boolean} Does the item exists or not?
     */
    has (key) {},
    /**
     * Get storage number of entries
     * @returns {Number} Number of entries
     */
    getLength () {},
    /**
     * Get a storage item value
     * @param {String} key Entry key
     * @returns {*} Storage item value
     */
    getItem (key) {},
    /**
     * Get the storage item value at specific index
     * @param {Number} index Entry index
     * @returns {*} Storage item value
     */
    getIndex (index) {},
    /**
     * Retrieve all items in storage
     * @returns {Object} Object syntax: item name as Object key and its value
     */
    getAll () {},
    /**
     * Set item in storage
     * @param {String} key Entry key
     * @param {*} value Entry value
     * @returns  
     */
    set (key,value) {},
    /**
     * Remove a storage item
     * @param {String} key Storage key
     * @returns  
     */
    remove (key) {},
    /**
     * Remove everything from the storage
     * @returns  
     */
    clear () {},
    /**
     * Determine if storage has any items
     * @returns {Boolean} Tells if storage is empty or not
     */
    isEmpty () {}
  },
  notify : {
  
  
    /**
     * Creates a notification; Same as calling $q.notify(...)
     * @param {{color : String, textColor : String, message : String, icon : String, avatar : String, position : 'top-left'|'top-right'|'bottom-left'|'bottom-right'|'top'|'bottom'|'left'|'right'|'center', classes : String, timeout : Number, actions : Array, onDismiss : Function, closeBtn : String, multiLine : Boolean}} opts For syntax, check quasar.conf options parameters
     * @returns {Function} Calling this function hides the notification
     */
    create (opts) {},
    /**
     * Merge options into the default ones
     * @param {{color : String, textColor : String, message : String, icon : String, avatar : String, position : 'top-left'|'top-right'|'bottom-left'|'bottom-right'|'top'|'bottom'|'left'|'right'|'center', classes : String, timeout : Number, actions : Array, onDismiss : Function, closeBtn : String, multiLine : Boolean}} opts For syntax, check quasar.conf options parameters
     * @returns  
     */
    setDefaults (opts) {}
  },
  platform : {
  
    /**
     * Client browser details (property names depend on browser)
     * @type {Object}
     */
    is: {},
    /**
     * Client browser detectable properties
     * @type {{touch : Boolean, webStorage : Boolean}}
     */
    has: {},
    /**
     * Client browser environment
     * @type {{iframe : Boolean}}
     */
    within: {},
  
  },
  screen : {
  
    /**
     * Screen width (in pixels) (reactive)
     * @type {Number}
     */
    width: {},
    /**
     * Screen height (in pixels) (reactive)
     * @type {Number}
     */
    height: {},
    /**
     * Breakpoints (in pixels) (reactive)
     * @type {{sm : Number, md : Number, lg : Number, xl : Number}}
     */
    sizes: {},
    /**
     * Tells if current screen width is lower than breakpoint-name (reactive)
     * @type {{sm : Boolean, md : Boolean, lg : Boolean, xl : Boolean}}
     */
    lt: {},
    /**
     * Tells if current screen width is greater than breakpoint-name (reactive)
     * @type {{xs : Boolean, sm : Boolean, md : Boolean, lg : Boolean}}
     */
    gt: {},
    /**
     * Current screen width fits exactly 'xs' breakpoint (reactive)
     * @type {Boolean}
     */
    xs: {},
    /**
     * Current screen width fits exactly 'sm' breakpoint (reactive)
     * @type {Boolean}
     */
    sm: {},
    /**
     * Current screen width fits exactly 'md' breakpoint (reactive)
     * @type {Boolean}
     */
    md: {},
    /**
     * Current screen width fits exactly 'lg' breakpoint (reactive)
     * @type {Boolean}
     */
    lg: {},
    /**
     * Current screen width fits exactly 'xl' breakpoint (reactive)
     * @type {Boolean}
     */
    xl: {},
  
    /**
     * Override default breakpoint sizes
     * @param {{sm : Number, md : Number, lg : Number, xl : Number}} breakpoints Pick what you want to override
     * @returns  
     */
    setSizes (breakpoints) {},
    /**
     * Debounce update of all props when screen width/height changes
     * @param {Number} amount Amount in milliseconds
     * @returns  
     */
    setDebounce (amount) {}
  },
  sessionStorage : {
  
  
    /**
     * Check if storage item exists
     * @param {String} key Entry key
     * @returns {Boolean} Does the item exists or not?
     */
    has (key) {},
    /**
     * Get storage number of entries
     * @returns {Number} Number of entries
     */
    getLength () {},
    /**
     * Get a storage item value
     * @param {String} key Entry key
     * @returns {*} Storage item value
     */
    getItem (key) {},
    /**
     * Get the storage item value at specific index
     * @param {Number} index Entry index
     * @returns {*} Storage item value
     */
    getIndex (index) {},
    /**
     * Retrieve all items in storage
     * @returns {Object} Object syntax: item name as Object key and its value
     */
    getAll () {},
    /**
     * Set item in storage
     * @param {String} key Entry key
     * @param {*} value Entry value
     * @returns  
     */
    set (key,value) {},
    /**
     * Remove a storage item
     * @param {String} key Storage key
     * @returns  
     */
    remove (key) {},
    /**
     * Remove everything from the storage
     * @returns  
     */
    clear () {},
    /**
     * Determine if storage has any items
     * @returns {Boolean} Tells if storage is empty or not
     */
    isEmpty () {}
  }
}