import {useEffect, useState} from 'react';
import Layout from '../components/layout/layout';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useRequireAuth } from "../lib/useAuth";
// import { useData } from "../lib/useData";



import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import Chip from '@material-ui/core/Chip';
import CancelIcon from '@material-ui/icons/Cancel';
import TextField from '@material-ui/core/TextField';


import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Loading from '../components/loading';

export default function App() {
  
  console.log("1. App Main Page Component");
  const api_id = 'cdbaedf0';
  const api_key = '57365c5e0ffd69f47741f5efe705fcc8';
  const [open, setOpen] = useState(false); 
  const auth = useRequireAuth();
  const [value, setValue] = useState('');
  const [foodItems, setFoodItems] = useState([{'label':'Chicken'},{ 'label': 'Bread'}])
  const handleDelete = ( label ) =>{
    fetch('https://ykr6kmq7zf.execute-api.us-west-2.amazonaws.com/default/write-to-sleeptable',
    {method:'POST',
    headers: {'Content-Type': 'application/json'},
    body:JSON.stringify({'date':'2019-10-20','sleep_quality':100})
  }).then((res)=>console.log("request sent",res));
  } 
  return (
    <>
    <Layout pageName={auth.pageName}>
      {auth.pageName === 'Food'?
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{display:'block', height: '100%', height: '-webkit-calc(100% - 64px)', height: '-moz-calc(100% - 64px)',height: 'calc(100% - 64px)',}}
        >
          <div
            style={{
                display:'grid',
                gridTemplateColumns:'25% auto 25%',
                width:'100%',
                height:'70px',
                padding:'0 1vh',
                margin:'1vh 0', 
                alignItems:"center" }}
          >
            <div  style={{margin:'1vh', gridColumn:'2/span 1', justifySelf:'center'}}>
                  <Button  onClick={()=>{setOpen(true);}} size='large' variant="contained" style={{color:'white',textShadow:'0 0 5px #000000',textTransform: 'none',fontSize:15, backgroundColor:"#4caf50", borderRadius:'20px'}}>
                        Add New Meal
                  </Button>
              </div>
          </div>
          <Grid
            container
            direction="column"
            justify="space-evenly"
            alignItems="flex-start"
            // spacing={2}
          >
          <Grid>

          </Grid>
        </Grid>
        </Grid>
        :null
      }
    </Layout>
    <Dialog
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add new Meal"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid 
            container
            direction='row'
            alignItems='flex-start'
            style={{margin: '2px'}}>
            {foodItems.map((item)=>
              <Chip label={item.label} 
              onDelete={()=>handleDelete(item.label)} 
              color="primary" 
              deleteIcon={<CancelIcon/>}
              style={{margin: '5px'}}
              />
            )}
            </Grid>
          </DialogContentText>
          <form>
          <div
            style={{
                display:'grid',
                gridTemplateColumns:'auto 50px',
                width:'500px',
                height:'100px',
                padding:'0 1vh',
                margin:'1vh 0', 
                 }}
          >
            <div  style={{margin:'1vh', gridColumn:'1/span 1', justifySelf:'stretch', width:'100%'}}>
            <TextField
              id='SearchBar'
              label='Food Item'
              value={value}
              onChange={(event)=>setValue(event.target.value)}
              style={{width:'100%'}}
            />
            </div>
            <div  style={{margin:'1vh', gridColumn:'2/span 1', justifySelf:'center', alignItems:'center'}}>
            <IconButton color="primary" aria-label="upload picture">
              <SearchIcon />
            </IconButton>
            </div>
            </div>
            
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>setOpen(false)} color="primary" autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};