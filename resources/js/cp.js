import ReportTable from "./components/listings/ReportTable.vue";
import CreateReport from "./components/reports/CreateReport.vue";

Statamic.booting(() => {
    Statamic.$components.register("sp-table", ReportTable);
    Statamic.$components.register("sp-create-report", CreateReport);
});
