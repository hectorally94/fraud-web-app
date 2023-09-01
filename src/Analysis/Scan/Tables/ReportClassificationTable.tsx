import { SetStateAction, useEffect, useState } from "react";
import {
  Flex ,
  Text,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Card,
  Button,
  Divider,
} from "@tremor/react";
import ReportClassification from "../Models/ReportClassification";
import ServiceReportClassification from "../Services/ServiceReportClassification";
import Pagination from "@material-ui/lab/Pagination/Pagination";
import { usePagination } from "../../../pagination/usePagination";
import { DocumentDownloadIcon, RefreshIcon } from "@heroicons/react/outline";


export const ReportClassificationTable=()=> {

  const [mytableData, setMytableData] = useState<Array<ReportClassification>>([]);
  const [page, setPage]= useState(1);
  const PER_PAGE = 13;
  const count = Math.ceil(mytableData.length / PER_PAGE);
  const _DATA = usePagination(mytableData, PER_PAGE);
  
  const handleChange = (e:any, gg: number) => {
    setPage(gg);
    _DATA.jump(gg);
  };
  
const retrieveMydata = () => {
    ServiceReportClassification.getAllClassification()
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

  const Actualisation = () => {
    ServiceReportClassification.getAllClassification()
      .then((response: any) => {
       // console.log(response.data);
        setMytableData(response.data);

      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  return (
    <>
    <Flex>
        <div>
        <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
        </div>
      <div>
      <Button icon={DocumentDownloadIcon} >Downloard </Button>
      </div>
      <div>
      <Button icon={RefreshIcon} onClick={Actualisation}>Actualize </Button>
      </div>
    </Flex>
    
      <Table>
          <TableHead>
            <TableRow >
              <TableHeaderCell>Precision</TableHeaderCell>
              <TableHeaderCell className="text-right">Recall</TableHeaderCell>
              <TableHeaderCell className="text-right">f1score</TableHeaderCell>
              <TableHeaderCell className="text-right">support</TableHeaderCell>
              <TableHeaderCell className="text-right">classes</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody >          
             {_DATA.currentData().map((v: any,index:number) => {
          return (
            <TableRow key={index+1}>
                <TableCell>{v.precision}</TableCell>
                <TableCell className="text-right">
                  <Text>{v.recall}</Text>
                </TableCell>
                <TableCell className="text-right">
                  <Text>{v.f1score}</Text>
                </TableCell>
                <TableCell className="text-right">
                  <Text>{v.support}</Text>
                </TableCell>
                <TableCell className="text-right">
                  <Text>{v.classes}</Text>
                </TableCell>
              </TableRow>
          );
        })}
          </TableBody>
        </Table>
      
    </>
  );
}