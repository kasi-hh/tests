
/**
 * Quasar QForm component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/form|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QForm',
  props: {
    /**
     * Emitted when all validations have passed when tethered to a submit button

     */      
    '@submit': function () {},

    /**
     * Emitted when all validations have been reset when tethered to a reset button; It is recommended to manually reset the wrapped components models in this handler

     */      
    '@reset': function () {},

    /**
     * Emitted after a validation was triggered and all inner Quasar components models are valid

     */      
    '@validation-success': function () {},

    /**
     * Emitted after a validation was triggered and at least one of the inner Quasar components models are NOT valid

     */      
    '@validation-error': function () {},
    /**
     * Focus first focusable element on initial component render
     * @type {Boolean}
     */
    autofocus: {
      type: Boolean,
    }
  }
}
