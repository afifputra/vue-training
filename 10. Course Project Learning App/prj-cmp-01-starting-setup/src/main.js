import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/base/BaseCard1.vue';
import BaseButton from './components/base/BaseButton.vue';
import BaseDialog from './components/base/BaseDialog.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.mount('#app');
