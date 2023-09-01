import http from "../../AxiosRequest/httpcommon";
import DefferenceTaxes from "../Models/DefferenceTaxes";


const getAllwithFraudeDefferenceTaxes = () => {

  return http.get<Array<DefferenceTaxes>>("/loardAllwithFraudeDefferenceTaxes");
};
const getAlladvanceDeclarationDefferenceTaxes = () => {

    return http.get<Array<DefferenceTaxes>>("/loardAlladvanceDeclarationDefferenceTaxes");
  };
  const getAllwithNotFraudDefferenceTaxes = () => {

    return http.get<Array<DefferenceTaxes>>("/loardAllwithNotFraudDefferenceTaxes");
  };



const ServiceDefferenceTaxes = {
    getAllwithFraudeDefferenceTaxes,
    getAlladvanceDeclarationDefferenceTaxes,
    getAllwithNotFraudDefferenceTaxes
};

export default ServiceDefferenceTaxes;