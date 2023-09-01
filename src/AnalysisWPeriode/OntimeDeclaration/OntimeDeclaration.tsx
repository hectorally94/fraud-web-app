import { TabGroup, TabList, Tab, TabPanels, TabPanel, Card } from "@tremor/react"
import { NotFraud } from "./NoFraud/Components/NotFaud"
import { OverDeclaration } from "./OverDeclaration/Components/OverDeclaration"
import { WithFraude } from "./WithFraud/Components/WithFraude"
import { InOneTableOntime } from "./InOne/InOneTableOntime"


    
export const OntimeDeclaration=()=> {
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
                  <InOneTableOntime/>
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