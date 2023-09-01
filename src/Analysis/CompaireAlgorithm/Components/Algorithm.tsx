import { Card, AreaChart, Title, Text } from "@tremor/react";
import ServiceComparaisonAlgorithm from "../Services/ServiceComparaisonAlgorithm";
import ComparaisonAlgorithm from "../Models/ComparaisonAlgorithm";
import { useEffect, useState } from "react";



export  const Algorithm=()=> {

    const [mytableData, setMytableData] = useState<Array<ComparaisonAlgorithm>>([]);

    const retrieveMydata = () => {
        ServiceComparaisonAlgorithm.getAll()
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
      <Title>Chouse Best Algorithm</Title>
      <Text>Comparison between Mean and Std Of Machine learning Algorithm</Text>
      <AreaChart
        className="mt-4 h-80"
        data={mytableData}
        categories={["mean", "std"]}
        index="namealgorithm"
        colors={["indigo", "fuchsia"]}
        yAxisWidth={60}
        
      />
    </Card>
  );
}