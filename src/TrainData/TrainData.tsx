import { TabGroup, TabList, Tab, TabPanels, TabPanel, Card } from "@tremor/react"
import { Combined } from "../Result/Combined/Components/Combined"
import { Details } from "../Result/Details/Components/Details"
import { TurnOver } from "./Turnover/Components/Turnover"
import { Declation } from "./Declaration/Components/Declaration"

export const TrainData=()=> {
    return (


        <main>
        <TabGroup className="mt-6">
          <TabList>
            <Tab>Turnover</Tab>
            <Tab>Declation</Tab>
          </TabList>
  
          <TabPanels>
         
            <TabPanel>
              <div className="mt-6">
                <Card>
                  <TurnOver/>
                </Card>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-6">
                <Card>
                  <Declation/>
                </Card>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </main>    ) }
