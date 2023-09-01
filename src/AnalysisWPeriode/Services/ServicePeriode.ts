import http from "../../AxiosRequest/httpcommon";
import Periode from "../Models/Periode";


const getAllPeriodeExact = () => {

  return http.get<Array<Periode>>("/loardAllPeriodeExact");
};
const getAllPeriodeNegative = () => {

    return http.get<Array<Periode>>("/loardAllPeriodeNegative");
  };
  const getAllPeriodePositive = () => {

    return http.get<Array<Periode>>("/loardAllPeriodePositive");
  };
  /// exact
  const getAllwithNotFraudPeriodeExact = () => {

    return http.get<Array<Periode>>("/loardAllwithNotFraudPeriodeExact");
  };
  const getAllwithFraudePeriodeExact = () => {

    return http.get<Array<Periode>>("/loardAllwithFraudePeriodeExact");
  };
  const getAlladvanceDeclarationPeriodeExact = () => {

    return http.get<Array<Periode>>("/loardAlladvanceDeclarationPeriodeExact");
  };
/// positive
const getAllwithNotFraudPeriodePositive = () => {

    return http.get<Array<Periode>>("/loardAllwithNotFraudPeriodePositive");
  };
  const getAllwithFraudePeriodePositive = () => {

    return http.get<Array<Periode>>("/loardAllwithFraudePeriodePositive");
  };
  const getAlladvanceDeclarationPeriodePositive = () => {

    return http.get<Array<Periode>>("/loardAlladvanceDeclarationPeriodePositive");
  }
  /// nigative
  const getAllwithNotFraudPeriodeNegative = () => {

    return http.get<Array<Periode>>("/loardAllwithNotFraudPeriodeNegative");
  };
  const getAllwithFraudePeriodeNegative = () => {

    return http.get<Array<Periode>>("/loardAllwithFraudePeriodeNegative");
  };
  const getAlladvanceDeclarationPeriodeNegative= () => {

    return http.get<Array<Periode>>("/loardAlladvanceDeclarationPeriodeNegative");
  }

const ServicePeriode = {
  getAllPeriodeExact,
  getAllPeriodeNegative,
  getAllPeriodePositive,
  //
  getAllwithNotFraudPeriodeExact,
  getAllwithFraudePeriodeExact,
  getAlladvanceDeclarationPeriodeExact,
  ///
  getAllwithNotFraudPeriodePositive,
  getAllwithFraudePeriodePositive,
  getAlladvanceDeclarationPeriodePositive,
  //
  getAllwithNotFraudPeriodeNegative,
  getAllwithFraudePeriodeNegative,
  getAlladvanceDeclarationPeriodeNegative

};

export default ServicePeriode;