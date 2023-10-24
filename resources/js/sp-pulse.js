import ReportTable from "./components/listings/ReportTable.vue";
import CreateReport from "./components/reports/CreateReport.vue";
import ShowReport from "./components/reports/ShowReport.vue";

Statamic.booting(() => {
    Statamic.$components.register("sp-table", ReportTable);
    Statamic.$components.register("sp-create-report", CreateReport);
    Statamic.$components.register("sp-show-report", ShowReport);
});
