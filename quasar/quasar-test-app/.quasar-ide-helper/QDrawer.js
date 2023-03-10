
/**
 * Quasar QDrawer component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/drawer|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QDrawer',
  props: {
    /**
     * Emitted when showing/hidden state changes; Is also used by v-model
     * @param {Boolean} value New state (showing/hidden) 
     */      
    '@input': function (value) {},

    /**
     * Emitted after component has triggered show()
     * @param {Object} evt JS event object 
     */      
    '@show': function (evt) {},

    /**
     * Emitted when component triggers show() but before it finishes doing it
     * @param {Object} evt JS event object 
     */      
    '@before-show': function (evt) {},

    /**
     * Emitted after component has triggered hide()
     * @param {Object} evt JS event object 
     */      
    '@hide': function (evt) {},

    /**
     * Emitted when component triggers hide() but before it finishes doing it
     * @param {Object} evt JS event object 
     */      
    '@before-hide': function (evt) {},

    /**
     * Emitted when drawer toggles between occupying space on page or not
     * @param {Boolean} state New state 
     */      
    '@on-layout': function (state) {},

    /**
     * Emitted when user clicks/taps on the component and drawer is NOT in mobile mode; Useful for when taking a decision to toggle mini mode
     * @param {Object} evt JS event object 
     */      
    '@click': function (evt) {},

    /**
     * Emitted when user moves mouse cursor over the component and drawer is NOT in mobile mode; Useful for when taking a decision to toggle mini mode
     * @param {Object} evt JS event object 
     */      
    '@mouseover': function (evt) {},

    /**
     * Emitted when user moves mouse cursor out of the component and drawer is NOT in mobile mode; Useful for when taking a decision to toggle mini mode
     * @param {Object} evt JS event object 
     */      
    '@mouseout': function (evt) {},
    /**
     * Model of the component defining shown/hidden state; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Boolean}
     */
    value: {
      type: Boolean,
    },
    /**
     * Side to attach to
     * @type {'left'|'right'}
     */
    side: {
      type: String,
    },
    /**
     * Side to attach to
     * @type {'left'|'right'}
     */
    'side="left" _': {
      type: String,
    },
    /**
     * Side to attach to
     * @type {'left'|'right'}
     */
    'side="right" _': {
      type: String,
    },
    /**
     * Puts drawer into overlay mode (does not occupies space on screen, narrowing the page)
     * @type {Boolean}
     */
    overlay: {
      type: Boolean,
    },
    /**
     * Width of drawer (in pixels)
     * @type {Number}
     */
    width: {
      type: Number,
    },
    /**
     * Puts drawer into mini mode
     * @type {Boolean}
     */
    mini: {
      type: Boolean,
    },
    /**
     * Width of drawer (in pixels) when in mini-mode
     * @type {Number}
     */
    miniWidth: {
      type: Number,
    },
    /**
     * Breakpoint (in pixels) of layout width up to which mobile mode is used
     * @type {Number}
     */
    breakpoint: {
      type: Number,
    },
    /**
     * Overrides the default dynamic mode into which the drawer is put on
     * @type {'default'|'desktop'|'mobile'}
     */
    behavior: {
      type: String,
    },
    /**
     * Overrides the default dynamic mode into which the drawer is put on
     * @type {'default'|'desktop'|'mobile'}
     */
    'behavior="default" _': {
      type: String,
    },
    /**
     * Overrides the default dynamic mode into which the drawer is put on
     * @type {'default'|'desktop'|'mobile'}
     */
    'behavior="desktop" _': {
      type: String,
    },
    /**
     * Overrides the default dynamic mode into which the drawer is put on
     * @type {'default'|'desktop'|'mobile'}
     */
    'behavior="mobile" _': {
      type: String,
    },
    /**
     * Applies a default border to the component
     * @type {Boolean}
     */
    bordered: {
      type: Boolean,
    },
    /**
     * Adds a default shadow to the header
     * @type {Boolean}
     */
    elevated: {
      type: Boolean,
    },
    /**
     * Does not auto-closes when app's route changes
     * @type {Boolean}
     */
    persistent: {
      type: Boolean,
    },
    /**
     * Force drawer to be shown on screen on initial render if the layout width is above breakpoint
     * @type {Boolean}
     */
    showIfAbove: {
      type: Boolean,
    },
    /**
     * Class definitions to be attributed to the drawer
     * @type {Array|String|Object}
     */
    contentClass: {
      type: [Array,String,Object],
    },
    /**
     * Style definitions to be attributed to the drawer
     * @type {Array|String|Object}
     */
    contentStyle: {
      type: [Array,String,Object],
    },
    /**
     * Disables the default behavior where drawer can be swiped into view; Useful for iOS platforms where it might interfere with Safari's 'swipe to go to previous/next page' feature
     * @type {Boolean}
     */
    noSwipeOpen: {
      type: Boolean,
    },
    /**
     * Disables the default behavior where drawer can be swiped out of view; Useful for iOS platforms where it might interfere with Safari's 'swipe to go to previous/next page' feature
     * @type {Boolean}
     */
    noSwipeClose: {
      type: Boolean,
    }
  }
}
