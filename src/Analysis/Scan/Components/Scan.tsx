import { Card, Button, Divider } from "@tremor/react";
import { ReportClassificationTable } from "../Tables/ReportClassificationTable";
import { SearchCircleIcon } from "@heroicons/react/outline";
import ServiceReportClassification from "../Services/ServiceReportClassification";

export const Scan=() => { 

    const AnalyseModel = () => {
        ServiceReportClassification.getAll()
          .then((response: any) => {
            console.log(response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          });
      };
 
    return(
    <>
    <Card>
      <Button icon={SearchCircleIcon} onClick={AnalyseModel}>Analyse Data</Button>
    <Divider/>
      <ReportClassificationTable/>
  </Card>
    </>
);
  
    };