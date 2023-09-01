import { TabGroup, TabList, Tab, TabPanels, TabPanel, Card } from "@tremor/react"
import { Declation } from "../TrainData/Declaration/Components/Declaration"
import { TurnOver } from "../TrainData/Turnover/Components/Turnover"
import { NotFraud } from "./NoFraud/Components/NotFaud"
import { WithFraude } from "./WithFraud/Components/WithFraude"
import { OverDeclaration } from "./OverDeclaration/Components/OverDeclaration"

export const AnalysisWthoutPeriode=()=> {
    return (


        <main>
        <TabGroup className="mt-6">
          <TabList>
            <Tab>No Fraud</Tab>
            <Tab>With Fraud</Tab>
            <Tab>Over Declaration</Tab>
          </TabList>
  
          <TabPanels>
       
          <TabPanel>
              <div className="mt-6">
                <Card>
                  <NotFraud/>
                </Card>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-6">
                <Card>
                  <WithFraude/>
                </Card>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-6">
                <Card>
                  <OverDeclaration/>
                </Card>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </main>       ) }
