import {
  Card,
  Grid,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
} from "@tremor/react";
import { Analysis } from "./Analysis/Analysis";
import { Result } from "./Result/Result";
import { AnalysisWPeriode } from "./AnalysisWPeriode/AnalysisWPeriode";
import { AnalysisWthoutPeriode } from "./AnalysisWthoutPeriode/AnalysisWthoutPeriode";
import { TrainData } from "./TrainData/TrainData";

export const App=()=> {
  return (
    <main>
      <TabGroup className="mt-6">
        <TabList>
          <Tab>Analysis</Tab>
          <Tab>Result</Tab>
          <Tab>Analyse with Periode</Tab>
          <Tab>Analyse without Periode</Tab>
          <Tab>Trained Data</Tab>
        </TabList>
        <TabPanels>
        <TabPanel>
            <div className="mt-6">
              <Card>
                <Analysis/>
              </Card>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <Result/>
              </Card>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <AnalysisWPeriode/>
              </Card>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <AnalysisWthoutPeriode/>
              </Card>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <TrainData/>
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}