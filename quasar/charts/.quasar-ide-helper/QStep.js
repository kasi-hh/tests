
/**
 * Quasar QStep component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/step|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QStep',
  props: {
    /**
     * Panel name
     * @type {*}
     */
    name: {
      required: true
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    disable: {
      type: Boolean,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed unless you are using 'img:' prefix
     * @type {String}
     */
    icon: {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    color: {
      type: String,
    },
    /**
     * Step title
     * @type {String}
     */
    title: {
      type: String,
      required: true
    },
    /**
     * Step’s additional information that appears beneath the title
     * @type {String}
     */
    caption: {
      type: String,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed unless you are using 'img:' prefix
     * @type {String}
     */
    doneIcon: {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    doneColor: {
      type: String,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed unless you are using 'img:' prefix
     * @type {String}
     */
    activeIcon: {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    activeColor: {
      type: String,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed unless you are using 'img:' prefix
     * @type {String}
     */
    errorIcon: {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    errorColor: {
      type: String,
    },
    /**
     * Allow navigation through the header
     * @type {Boolean}
     */
    headerNav: {
      type: Boolean,
    },
    /**
     * Mark the step as 'done'
     * @type {Boolean}
     */
    done: {
      type: Boolean,
    },
    /**
     * Mark the step as having an error
     * @type {Boolean}
     */
    error: {
      type: Boolean,
    }
  }
}
