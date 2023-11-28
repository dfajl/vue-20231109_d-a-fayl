import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'UiAlert',

  props: {
    text: {
      type: String,
      default: 'Программа пока пуста...',
    },
  },

  template: `
    <div class="alert">
      <slot>{{ text }}</slot>
    </div>`,
});
