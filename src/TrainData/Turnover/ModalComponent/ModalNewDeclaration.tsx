import Button from 'react-bootstrap/Button';
import { Card, Col, Container, Modal, Row,InputGroup, Form, Stack} from "react-bootstrap";

import ChiffreAffaire from '../Models/ChiffreAffaire';
import { useEffect, useState } from 'react';
import { StateOfPrediction } from '../StateOfPrediction/StateOfPrediction';
import ServiceChiffreAffaire from '../Services/ServiceChiffreAffaire';

const pushedTypeState = {

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
  let getUpdateStateOfPrediction=''
  const newInput = {
    chifreaffaire: 0,
    taxesuposetodeclare:0,
    taxdeclared: 0,
    enterpriseid: 0
  }

interface IpushCurrantValue {
    show: boolean; 
    onHide: () => void; 
    editinfo: ChiffreAffaire;
  }
export const ModalNewDeclaration:React.FC<IpushCurrantValue>=props=> {
const [getPushedValue, setgetPushedValue] = useState<ChiffreAffaire>(pushedTypeState);

const [isInput,setInput]=useState(newInput);
const [myState, setMyState] = useState<string>('No Action')

const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setInput({ ...isInput, [e.target.name]: e.target.value });
    console.log(e.target.value);
  }

  const resetButton = () => {
    setInput(newInput)
    getUpdateStateOfPrediction=''
}
    const save = () => {  
      
          let data = {
            chifreaffaire: getPushedValue.chifreaffaire,
            taxesuposetodeclare:getPushedValue.taxesuposetodeclare,
            taxdeclared:isInput.taxdeclared,
            enterpriseid:getPushedValue.enterpriseid
          };
  
          ServiceChiffreAffaire.create(data)
          .then((response: any) => {
            setInput({
                chifreaffaire: response.data.chifreaffaire,
                taxesuposetodeclare: response.data.taxesuposetodeclare,
                taxdeclared:response.data.taxdeclared,
                enterpriseid:response.data.enterpriseid
            });
            getUpdateStateOfPrediction=response.data
            console.log(getUpdateStateOfPrediction);
            console.log(data);
         setInput(newInput)
          })
          .catch((e: Error) => {
            console.log(e);
          });
        
      };

      const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
        }
useEffect(() => {
    setgetPushedValue(props.editinfo);
      },[props.editinfo])
  return (
    <Modal {...props}
    size="lg"
    backdrop="static"
    keyboard={false}
    
     aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        New Declaration of {getPushedValue.enterprisename}  
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
      <Container fluid>
            <Row>
                <Col> 
                <Card>
            <Card.Body>
           
            < form className="form-edit" onSubmit={onFormSubmit}>
         <Row className="mb-3">
         <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>New declaration</Form.Label>
            <InputGroup>
                <Form.Control aria-label="Recipient's username" aria-describedby="basic-addon2" type="taxdeclared" name="taxdeclared" value={isInput.taxdeclared} onChange={handleChange} />
            </InputGroup>
        </Form.Group>
         </Row>
         <Row className="mb-3">
        <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
        <Stack  direction="horizontal" gap={2}>
            <Button  onClick={()=>save()} >Verifie</Button>
            <Button  onClick={resetButton} >Cancel</Button>
        </Stack>             
        </Form.Group>
      </Row>
            </form>
            <StateOfPrediction updateState={getUpdateStateOfPrediction} /> 
            </Card.Body>
        </Card>
        </Col>
    </Row>
          
        </Container>
      </Modal.Body>
    
    </Modal>
  );
}

