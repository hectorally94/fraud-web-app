import http from "../../../AxiosRequest/httpcommon";
import ComparaisonAlgorithm from "../Models/ComparaisonAlgorithm";


const getAll = () => {

  return http.get<Array<ComparaisonAlgorithm>>("/loardAllComparaisonAlgorithm");
};

const ServiceComparaisonAlgorithm = {
  getAll
};

export default ServiceComparaisonAlgorithm;