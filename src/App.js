import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import Header from './Components/Header';
import { Form, Formik } from 'formik';
import { Typography } from '@mui/material';
import FormDataField from './Forms/Form';
import { FORM_VALIDATION_SCHEMA, INITIAL_FORM_STATE } from './helper/helper';
import Select from './helper/Select'
import DateTimePicker from './helper/DatePicker'

import countries from './data/countries'
import Textfield from './helper/Textfield';
import CheckboxWrapper from './helper/Checkbox';


const useStyles = makeStyles((theme) =>({
   container:{
     marginTop:'25px',
     marginBottom:'12px'
   }
}))




function App() {

  const classes = useStyles();
  return (
   <Grid container>
     <Grid item xs={12}>
       <Header/>
     </Grid>
     <Grid item xs={12}>
       <Container>
         <div className={classes.container}>
           <Formik initialValues={{
             ...INITIAL_FORM_STATE
           }}  
             validationSchema={FORM_VALIDATION_SCHEMA}
             onSubmit={(valus)=>{
               console.log(valus);
             }}
           >
             <Form>
               <Grid container spacing={2}>
                 <Grid xs={12}>
                  <Typography>
                    Your Details
                  </Typography>
                 </Grid>
                 
                 <Grid item xs={6}>
                    <FormDataField name='firstName' label='FirstName'/>
                 </Grid>

                 <Grid item xs={6}>
                    <FormDataField name='lastName' label='LastName'/>
                 </Grid>

                 <Grid item xs={12}>
                    <FormDataField name='email' label='Enter Email'/>
                 </Grid>

                 <Grid item xs={12}>
                    <FormDataField name='phone' label='Enter Valid phone'/>
                 </Grid>

                 <Grid xs={12}>
                  <Typography>
                    Adress Details
                  </Typography>
                 </Grid>

                 
                 <Grid item xs={12}>
                    <FormDataField name='addressLine1' label='AddressLine'/>
                 </Grid>

                 <Grid item xs={12}>
                    <FormDataField name='addressLine2' label='AddressLine 2'/>
                 </Grid>

                 <Grid item xs={6}>
                    <FormDataField name='city' label='City'/>
                 </Grid>

                 <Grid item xs={6}>
                    <FormDataField name='state' label='State'/>
                 </Grid>

                 <Grid item xs={12}>
                   <Select options={countries} name='country' label='Country'/>
                 </Grid>

                 <Grid xs={12}>
                  <Typography>
                    Booking Information
                  </Typography>
                 </Grid>

                 <Grid item xs={6}>
                   <DateTimePicker  name='arrivealDate' label='ArrivealDate' id='arrivalDate'/>
                 </Grid>

                 <Grid item xs={6}>
                   <DateTimePicker  name='departureDate' label='DepartureDate' id='arrivalDate'/>
                 </Grid>

                 <Grid item xs={12}>
                    <Textfield
                      name="message"
                      label="Message"
                      multiline={true}
                      rows={4}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <CheckboxWrapper name='termsOfService' legend='Terms Of Service' label='I Agree'/>
                  </Grid>

               </Grid>
             </Form>

           </Formik>
         </div>
       </Container>
     </Grid>
   </Grid>
  );
}

export default App;
