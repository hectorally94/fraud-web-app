import { TabGroup, TabList, Tab, TabPanels, TabPanel, Card } from "@tremor/react"
import { Algorithm } from "../Analysis/CompaireAlgorithm/Components/Algorithm"
import { Matrix } from "../Analysis/Matrix/Components/Matrix"
import { Scan } from "../Analysis/Scan/Components/Scan"
import { Combined } from "./Combined/Components/Combined"
import { Details } from "./Details/Components/Details"

export const Result=()=> {
    return (

        <main>
        <TabGroup className="mt-6">
          <TabList>
            <Tab>Combined</Tab>
            <Tab>Details</Tab>
          </TabList>
  
          <TabPanels>
         
            <TabPanel>
              <div className="mt-6">
                <Card>
                  <Combined/>
                </Card>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-6">
                <Card>
                  <Details/>
                </Card>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </main>
    ) }
