import http from "../../../AxiosRequest/httpcommon";
import ChiffreAffaire from "../Models/ChiffreAffaire";
import PredictionNewInput from "../Models/PredictionNewInput";


const getAll = () => {
  return http.get<Array<ChiffreAffaire>>("/loardAllChiffreAffaire");
};
const create = (data: PredictionNewInput) => {
  return http.post<PredictionNewInput>("/createPrediction",data);
};

const ServiceChiffreAffaire = {
  getAll,
  create
};

export default ServiceChiffreAffaire;