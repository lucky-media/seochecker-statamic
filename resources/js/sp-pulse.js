import CreateReport from '@/pages/reports/Create.vue';
import IndexReport from '@/pages/reports/Index.vue';
import ShowReport from '@/pages/reports/Show.vue';

Statamic.booting(() => {
  Statamic.$components.register('sp-index', IndexReport);
  Statamic.$components.register('sp-create-report', CreateReport);
  Statamic.$components.register('sp-show-report', ShowReport);
});
