import { Card, AreaChart, Title, Text } from "@tremor/react";
import { useEffect, useState } from "react";
import ServiceResult from "../../Services/ServiceResult";
import Result from "../../Models/Result";



export  const Combined=()=> {

    const [mytableData, setMytableData] = useState<Array<Result>>([]);

    const retrieveMydata = () => {
        ServiceResult.getAllCombined()
          .then((response: any) => {
            setMytableData(response.data);
           // console.log(response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          });
      };
      
  useEffect(() => {
    retrieveMydata();
  },[retrieveMydata]);
  return (
    <Card>
      <Title>.....</Title>
      <AreaChart
        className="mt-4 h-80"
        data={mytableData}
        categories={["number"]}
        index="description"
        colors={["indigo"]}
        yAxisWidth={60}
        valueFormatter={(number: number) =>
            `enterprise ${Intl.NumberFormat("us").format(number).toString()}`}
      />
    </Card>
  );
}
