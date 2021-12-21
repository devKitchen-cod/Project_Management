import React, { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { SETNAMEOFPROJECT } from '../../Utils/redux/redux-types';
import { notcreate, reqcreate } from '../../Utils/redux/actions';

const mapDispatchToProps = {
  reqcreate,
};
const mapStateToProps = (state) => {
  return {
    store: state.reducer.success
  }
};

 function CreateF(){
  const dispatch = useDispatch()
  const history = useHistory();
  const state = useSelector((state) => state)

  const email = useSelector((state) => state.setAuth.email)
  const name_of_project = useSelector((state) => state.setProject.name_of_project)
  const obj = {email: email, name_of_project: name_of_project}

  useEffect(() => {
    if(state.reducer.created){
      alert('Created!!!');
      history.push('/startp')
      dispatch(notcreate())
    }
  })

  const handleSubmit =  _event => {    
   if (obj.email, obj.name_of_project === '') {
    alert('Fild the Form!');
   }
   else{
     dispatch(reqcreate(obj))
   }
  }

  return (
    <div>
      <div style ={{textAlign: 'center'}}>Create new project</div>
         <div style = {{marginLeft: '600px', marginRight: '600px', marginTop: '100px' }}>
             <Form.Group onChange = {e => dispatch({type:SETNAMEOFPROJECT, payload: e.target.value})}>
                  <Form.Floating className="mb-3">
                    <Form.Control id="floatingInputCustom" type="text" placeholder="name@example.com"/>
                      <label htmlFor="floatingInputCustom">Name</label>
                  </Form.Floating>
                <Button onClick={handleSubmit} style = {{background: '#272727'}}>Create</Button>
              </Form.Group>
          </div>
      </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateF);