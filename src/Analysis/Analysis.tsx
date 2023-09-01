import { Title, TabGroup, TabList, Tab, TabPanels, TabPanel, Card } from "@tremor/react"
import { AnalysisWPeriode } from "../AnalysisWPeriode/AnalysisWPeriode"
import { AnalysisWthoutPeriode } from "../AnalysisWthoutPeriode/AnalysisWthoutPeriode"
import { Result } from "../Result/Result"
import { TrainData } from "../TrainData/TrainData"
import { Scan } from "./Scan/Components/Scan"
import { Algorithm } from "./CompaireAlgorithm/Components/Algorithm"
import { Matrix } from "./Matrix/Components/Matrix"

export const Analysis=()=> {
    return (
<main>
      <TabGroup className="mt-6">
        <TabList>
          <Tab>Scan</Tab>
          <Tab>Best Algorithm</Tab>
          <Tab>Matrix</Tab>
        </TabList>

        <TabPanels>
       
          <TabPanel>
            <div className="mt-6">
               <Scan/>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <Algorithm/>
              </Card>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <Matrix/>
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
    ) }