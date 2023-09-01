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
import { usePagination } from "../../../pagination/usePagination";
import { DocumentDownloadIcon, RefreshIcon, UserAddIcon } from "@heroicons/react/outline";
import ChiffreAffaire from "../Models/ChiffreAffaire";
import ServiceChiffreAffaire from "../Services/ServiceChiffreAffaire";
import Stack from "react-bootstrap/esm/Stack";
import { ModalNewDeclaration } from "../ModalComponent/ModalNewDeclaration";

const initialTypeState = {

  chifreaffaire: '',
  taxesuposetodeclare:'',
  taxdeclared: '',
    datatopay: '',
    defferencetaxe:'',
    enterpriseid: '',
    periode: '',
    enterprisename:'',
    datepayed: ''

}

export const TableChiffreAffaire=()=> {

  const [mytableData, setMytableData] = useState<Array<ChiffreAffaire>>([]);
  const [page, setPage]= useState(1);
  const PER_PAGE = 3;
  const count = Math.ceil(mytableData.length / PER_PAGE);
  const _DATA = usePagination(mytableData, PER_PAGE);
  const [pushprincipalMemberData, setpushprincipalMemberData] = useState<ChiffreAffaire>(initialTypeState);
  const [modalShow, setModalShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const handleChange = (e:any, gg: number) => {
    setPage(gg);
    _DATA.jump(gg);
  };
  
const retrieveMydata = () => {
  ServiceChiffreAffaire.getAll()
      .then((response: any) => {
        setMytableData(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
 
  const PushPrincipalMemberData = (onCurrant: ChiffreAffaire, index: number) => {
    setCurrentIndex(index); 
    setpushprincipalMemberData(onCurrant);
    setModalShow(true);
    console.log(onCurrant);
    console.log(index);
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
      <Button icon={RefreshIcon} onClick={retrieveMydata}>Actualize </Button>
      </div>
    </Flex>
    
      <Table>
          <TableHead>
            <TableRow >
              <TableHeaderCell>Enterprise</TableHeaderCell>
              <TableHeaderCell className="text-right">Turnover</TableHeaderCell>
              <TableHeaderCell className="text-right">Supposed Date's Declaration </TableHeaderCell>
              <TableHeaderCell className="text-right">Declaration </TableHeaderCell>

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
                  <Text>{v.datatopay}</Text>
                </TableCell>
                <TableCell className="text-right">
                <Button icon={UserAddIcon} onClick={() => PushPrincipalMemberData(v, index)}>new </Button>
          </TableCell>
              </TableRow>
          );
        })}
          </TableBody>
        </Table>
        <ModalNewDeclaration
            show={modalShow}
            onHide={() => setModalShow(false)}
            editinfo={pushprincipalMemberData}
         />
    </>
  );
}