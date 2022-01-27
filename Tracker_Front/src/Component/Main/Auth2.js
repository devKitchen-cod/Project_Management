import React, { useEffect, useState } from 'react'
import {Form, Row, Col, Button, Modal, ModalDialog} from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { LOGIN, SETEMAIL, SETNAME, SETPASSWORD } from '../../Utils/redux/redux-types';
import { reqauth } from '../../Utils/redux/actions';

// const mapDispatchToProps = {
//   reqauth,
// };
// const mapStateToProps = (state) => {
//   return {
//     store: state.reducer.success
//   }
// };

export default function AuthForm(props){

  return(
  <Modal
  {...props}
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
  >
    <Modal.Header closeButton>
    <Modal.Title id="contained-modal-title-vcenter">
        Auth2
      </Modal.Title>
    </Modal.Header>
   
    <Modal.Body>
    <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
    </Modal.Body>
   
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
  )
}


 function Auth2(){

  const [modalShow, setModalShow] = useState(false)

return(
  <>
    <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
    </Button>
    <AuthForm
      show = {modalShow}
      onHide = {() => setModalShow(false)}
    />
  </>

)

}

// export default connect(mapStateToProps, mapDispatchToProps)(Auth2);