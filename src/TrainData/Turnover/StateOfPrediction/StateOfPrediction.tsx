
import { Badge, BadgeDelta, Callout, Metric } from "@tremor/react";

import { IStateOfPrediction } from './IStateOfPrediction';
import { Stack } from "react-bootstrap";
import { useEffect, useState } from "react";
import TrendingDownIcon from "@heroicons/react/outline/TrendingDownIcon";
import indigo from "@material-ui/core/colors/indigo";
export const StateOfPrediction: React.FC<IStateOfPrediction> = props=>{

    const [myState, setMyState] = useState<string>('')

    useEffect(() => {

            setMyState(props.updateState)
        
        },[props.updateState])
  return (
    <>
    <Callout
            className="mt-6"
            title={`Prediction`}
            icon={TrendingDownIcon}
            color={"gray"}
          >
             <Metric>{myState}</Metric>
          </Callout>
     
    </>
  );
}

