import http from "../../../AxiosRequest/httpcommon";
import ReportClassification from "../Models/ReportClassification";


const getAll = () => {

  return http.get<Array<ReportClassification>>("/loardAllReportClasification");
};

const getAllClassification = () => {

  return http.get<Array<ReportClassification>>("/loardAllclasification");
};


const ServiceReportClassification = {
  getAll,
  getAllClassification
};

export default ServiceReportClassification;