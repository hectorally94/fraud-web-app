import { TabGroup, TabList, Tab, TabPanels, TabPanel, Card } from "@tremor/react"
import { NotFraud } from "../AnalysisWthoutPeriode/NoFraud/Components/NotFaud"
import { OverDeclaration } from "../AnalysisWthoutPeriode/OverDeclaration/Components/OverDeclaration"
import { WithFraude } from "../AnalysisWthoutPeriode/WithFraud/Components/WithFraude"
import { EarlyDeclaration } from "./EarlyDeclaration/EarlyDeclaration"
import { LateDeclaration } from "./LateDeclaration/LateDeclaration"
import { OntimeDeclaration } from "./OntimeDeclaration/OntimeDeclaration"

        
export const AnalysisWPeriode=()=> {
    return (
        <main>
        <TabGroup className="mt-6">
          <TabList>
            <Tab>EarlyDeclaration</Tab>
            <Tab>LateDeclaration</Tab>
            <Tab>OntimeDeclaration</Tab>
          </TabList>
  
          <TabPanels>
          <TabPanel>
              <div className="mt-6">
                <Card>
                  <EarlyDeclaration/>
                </Card>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-6">
                <Card>
                  <LateDeclaration/>
                </Card>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-6">
                <Card>
                  <OntimeDeclaration/>
                </Card>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </main>       ) }