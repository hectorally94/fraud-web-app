import DeclarationDto from "../Models/DeclarationDto";
import http from "../../../AxiosRequest/httpcommon";

const getAll = () => {

    return http.get<Array<DeclarationDto>>("/loardAllDeclaration");
  };
  
  
  const ServiceDeclarationDto = {
    getAll
  };
  
  export default ServiceDeclarationDto;