import { useEffect, useState } from "react";
import {
  Flex ,
  Text,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Button,
} from "@tremor/react";
import Pagination from "@material-ui/lab/Pagination/Pagination";
import { usePagination } from "../../../../pagination/usePagination";
import { DocumentDownloadIcon, RefreshIcon } from "@heroicons/react/outline";
import Periode from "../../../Models/Periode";
import ServicePeriode from "../../../Services/ServicePeriode";


export const TableEarlyOverDeclaration=()=> {

  const [mytableData, setMytableData] = useState<Array<Periode>>([]);
  const [page, setPage]= useState(1);
  const PER_PAGE = 3;
  const count = Math.ceil(mytableData.length / PER_PAGE);
  const _DATA = usePagination(mytableData, PER_PAGE);
  
  const handleChange = (e:any, gg: number) => {
    setPage(gg);
    _DATA.jump(gg);
  };
  
const retrieveMydata = () => {
    ServicePeriode.getAlladvanceDeclarationPeriodeNegative()
      .then((response: any) => {
        setMytableData(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  useEffect(() => {
    retrieveMydata();
  },[retrieveMydata]);

  
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
      <Button icon={RefreshIcon} onClick={retrieveMydata}>Actualize </Button>
      </div>
    </Flex>
    
      <Table>
          <TableHead>
            <TableRow >

              <TableHeaderCell>Enterprise</TableHeaderCell>
              <TableHeaderCell className="text-right">Turnover</TableHeaderCell>
              <TableHeaderCell className="text-right">Exact Turnover's Declaration</TableHeaderCell>
              <TableHeaderCell className="text-right">Declared Turnover</TableHeaderCell>
              <TableHeaderCell className="text-right">Supposed Date's Declaration</TableHeaderCell>
              <TableHeaderCell className="text-right">Date Declared</TableHeaderCell>
              <TableHeaderCell className="text-right">tax difference</TableHeaderCell>
              <TableHeaderCell className="text-right">Penelity</TableHeaderCell>
              <TableHeaderCell className="text-right">Total penelity</TableHeaderCell>
              <TableHeaderCell className="text-right">Periode</TableHeaderCell>

            </TableRow>
          </TableHead>
          <TableBody >          
             {_DATA.currentData().map((v: any,index:number) => {
          return (
            <TableRow key={index+1}>
                <TableCell>{v.enterprisename}</TableCell>
                <TableCell className="text-right">
                  <Text>{v.chifreaffaire}</Text>
                </TableCell>
                <TableCell className="text-right">
                  <Text>{v.taxesuposetodeclare}</Text>
                </TableCell>
                <TableCell className="text-right">
                  <Text>{v.taxdeclared}</Text>
                </TableCell>
                <TableCell className="text-right">
                  <Text>{v.datatopay}</Text>
                </TableCell>
                <TableCell className="text-right">
                  <Text>{v.datepayed}</Text>
                </TableCell>
                <TableCell className="text-right">
                  <Text>{v.defferencetaxe}</Text>
                </TableCell>
                <TableCell className="text-right">
                  <Text>{v.penelity}</Text>
                </TableCell>
                <TableCell className="text-right">
                  <Text>{v.totalpenelity}</Text>
                </TableCell>
                <TableCell className="text-right">
                  <Text>{v.periode}</Text>
                </TableCell>
              </TableRow>
          );
        })}
          </TableBody>
        </Table>
      
    </>
  );
}