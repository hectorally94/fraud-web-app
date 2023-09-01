import http from "../../AxiosRequest/httpcommon";
import Result from "../Models/Result";


const getAllCombined = () => {

  return http.get<Array<Result>>("/loardAllResultCombination");
};
const getAllDetails = () => {

    return http.get<Array<Result>>("/loardAllResultDetails");
  };

const ServiceResult = {
    getAllCombined,
    getAllDetails
};

export default ServiceResult;