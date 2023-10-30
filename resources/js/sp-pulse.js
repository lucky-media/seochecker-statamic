import CreateReport from './components/reports/CreateReport.vue';
import ReportTable from './components/reports/ReportTable.vue';
import ShowReport from './components/reports/ShowReport.vue';

Statamic.booting(() => {
  Statamic.$components.register('sp-table', ReportTable);
  Statamic.$components.register('sp-create-report', CreateReport);
  Statamic.$components.register('sp-show-report', ShowReport);
});
