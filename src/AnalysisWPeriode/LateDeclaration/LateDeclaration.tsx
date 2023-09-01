import { TabGroup, TabList, Tab, TabPanels, TabPanel, Card } from "@tremor/react"
import { NotFraud } from "./NoFraud/Components/NotFaud"
import { OverDeclaration } from "./OverDeclaration/Components/OverDeclaration"
import { WithFraude } from "./WithFraud/Components/WithFraude"
import { InOneTableLate } from "./InOne/InOneTableLate"

    
export const LateDeclaration=()=> {
    return (


        <main>
        <TabGroup className="mt-6">
          <TabList>
            <Tab>In One</Tab>
            <Tab>No Fraud</Tab>
            <Tab>With Fraud</Tab>
            <Tab>Over Declaration</Tab>
          </TabList>
  
          <TabPanels>
          <TabPanel>
              <div className="mt-6">
                <Card>
                  <InOneTableLate/>
                </Card>
              </div>
            </TabPanel>
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