import {useEffect, useState} from "react";
import Layout from "../components/layout/layout";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useRequireAuth } from "../lib/useAuth";
const nFetch = require('node-fetch');
// import { useData } from "../lib/useData";



import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


import Chip from "@material-ui/core/Chip";
import CancelIcon from "@material-ui/icons/Cancel";
import TextField from "@material-ui/core/TextField";
import Avatar from '@material-ui/core/Avatar';

import { DataGrid } from '@material-ui/data-grid';

import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Loading from "../components/loading";

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
export default function App() {
  
  console.log("1. App Main Page Component");
  const api_id = "cdbaedf0";
  const api_key = "57365c5e0ffd69f47741f5efe705fcc8";
  const [open, setOpen] = useState(false); 
  const [openSleep, setOpenSleep] = useState(false);
  const auth = useRequireAuth();
  const [value, setValue] = useState("");
  const [data, setData] = useState([])
  const [foodItems, setFoodItems] = useState([])
  const [foodInfo, setFoodInfo] = useState({'cal':0,'pro':0,'carbs':0,'fat':0,'fiber':0})
  const [rec, setRec] = useState({});
  const addFood = (item) => {
    setFoodItems([...foodItems, item.food])
  }
  const searchFood = () =>{
    fetch(
      'https://api.edamam.com/api/food-database/v2/parser?ingr='+encodeURIComponent(value)+'&app_id='+ api_id+'&app_key='+api_key,
      {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      })
    .then((res)=> res.json())
    .then(res=>setData(res.hints));
  }
  const getNewRec = () =>{
    fetch(
      'https://nmnegamg43.execute-api.us-west-2.amazonaws.com/default/cs125_healthsuggestions',
      {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      })
    .then((res)=> res.json())
    .then(res=>setRec(res));

  };
  const deleteFoodItem = (index) => {
    foodItems.splice(index,1);
    setFoodItems([...foodItems]);
  };
  const handleDelete = ( label ) =>{
    fetch(
      "https://ykr6kmq7zf.execute-api.us-west-2.amazonaws.com/default/write-to-sleeptable",
      {
        method:'POST',
        mode :'cors',
        headers: new Headers(),
        body :JSON.stringify(
          {
            "date":"2030-13-20",
            "sleep_quality":100, 
            "sleep_start":"10:10",
            "sleep_time":"10:10"
          }
        ),
      }
    ).then((res)=>console.log("request sent",res));
  } 
  return (
    <>
    <Layout pageName={auth.pageName}>
      {auth.pageName === "Food"?
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{display:"block", height: "100%", height: "-webkit-calc(100% - 64px)", height: "-moz-calc(100% - 64px)",height: "calc(100% - 64px)",}}
        >
          <div
            style={{
                display:"grid",
                gridTemplateColumns:"25% auto 25%",
                width:"100%",
                height:"70px",
                padding:"0 1vh",
                margin:"1vh 0", 
                alignItems:"center" }}
          >
            <div  style={{margin:"1vh", gridColumn:"2/span 1", justifySelf:"center"}}>
                  <Button  onClick={()=>{setOpen(true);}} size="large" variant="contained" style={{color:"white",textShadow:"0 0 5px #000000",textTransform: "none",fontSize:15, backgroundColor:"#4caf50", borderRadius:"20px"}}>
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
      {auth.pageName === "Sleep"?
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{display:"block", height: "100%", height: "-webkit-calc(100% - 64px)", height: "-moz-calc(100% - 64px)",height: "calc(100% - 64px)",}}
        >
          <div
            style={{
                display:"grid",
                gridTemplateColumns:"25% auto 25%",
                width:"100%",
                height:"70px",
                padding:"0 1vh",
                margin:"1vh 0", 
                alignItems:"center" }}
          >
            <div  style={{margin:"1vh", gridColumn:"2/span 1", justifySelf:"center"}}>
                  <Button  onClick={()=>{setOpenSleep(true);}} size="large" variant="contained" style={{color:"white",textShadow:"0 0 5px #000000",textTransform: "none",fontSize:15, backgroundColor:"#4caf50", borderRadius:"20px"}}>
                        Add Sleep Survey
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

      {auth.pageName === "Dashboard"?
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{display:"block", height: "100%", height: "-webkit-calc(100% - 64px)", height: "-moz-calc(100% - 64px)",height: "calc(100% - 64px)",}}
        >
          <div
            style={{
                display:"grid",
                gridTemplateColumns:"25% auto 25%",
                width:"100%",
                height:"70px",
                padding:"0 1vh",
                margin:"1vh 0", 
                alignItems:"center" }}
          >
            <div  style={{margin:"1vh", gridColumn:"2/span 1", justifySelf:"center"}}>
                  <Button  onClick={()=>{getNewRec();}} size="large" variant="contained" style={{color:"white",textShadow:"0 0 5px #000000",textTransform: "none",fontSize:15, backgroundColor:"#4caf50", borderRadius:"20px"}}>
                        Get New Recommendation
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
          <Card style={{margin:'10px'}}>
            <CardContent>
              <h2>Food Recommendatation</h2>
              {rec.FoodResponse?
              'We recommend eating, '+ rec.FoodResponse.name+' today as '+rec.FoodResponse.reason
              :null}
            </CardContent>
            <CardActions>
              
            </CardActions>
          </Card>
          <Card style={{margin:'10px'}}>
            <CardContent>
              <h2>Sleep Recommendatation</h2>
              {rec.SleepPrediction?
              'Based on your previous activities we recommend you sleep today for '+ rec.SleepPrediction.sleep_quantity+' hours.'
              :null}
            </CardContent>
            <CardActions>
              
            </CardActions>
          </Card>
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
            direction="row"
            alignItems="flex-start"
            style={{margin: "2px"}}>
            {foodItems.map((item, index)=>
              <Chip label={item.label}
              avatar={<Avatar alt={item.label} src={item.image} />} 
              onDelete={()=>deleteFoodItem(index)} 
              color="primary" 
              deleteIcon={<CancelIcon/>}
              style={{margin: "5px"}}
              />
            )}
            </Grid>
          </DialogContentText>
          <form>
          <div
            style={{
                display:"grid",
                gridTemplateColumns:"auto 50px",
                width:"500px",
                height:"100px",
                padding:"0 1vh",
                margin:"1vh 0", 
                 }}
          >
            <div  style={{margin:"1vh", gridColumn:"1/span 1", justifySelf:"stretch", width:"100%"}}>
            <TextField
              id="SearchBar"
              label="Food Item"
              value={value}
              onChange={(event)=>setValue(event.target.value)}
              style={{width:"100%"}}
            />
            </div>
            <div  style={{margin:"1vh", gridColumn:"2/span 1", justifySelf:"center", alignItems:"center"}}>
            <IconButton color="primary" aria-label="Search" onClick={()=>searchFood()}>
              <SearchIcon />
            </IconButton>
            </div>
            </div>
            
          </form>
          
          {data.map((item)=>
            <div>
              <button onClick={()=>addFood(item)}><img src={item.food.image} height={30} width={30}/></button>
              <b style={{margin:10 }}>{item.food.label}</b>
              <span style={{margin:5 }}>{item.food.nutrients.ENERC_KCAL.toPrecision(3)+'kcal'}</span>
              <span style={{margin:5 }}>{item.food.nutrients.PROCNT.toPrecision(3)+'g protein'}</span>
              <span style={{margin:5 }}>{item.food.nutrients.FAT.toPrecision(3)+'g fat'}</span>
              <span style={{margin:5 }}>{item.food.nutrients.CHOCDF.toPrecision(3)+'g carbs'}</span>
            </div>)
        }
        
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
      <Dialog
        open={openSleep}
        onClose={()=>setOpenSleep(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add Sleep Survey"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid 
            container
            direction="row"
            alignItems="flex-start"
            style={{margin: "2px"}}>
            
            </Grid>
          </DialogContentText>
          <form style={{display: 'flex', flexDirection:'column', width:'200px' }}>
          <FormControl style={{margin:'10',}}>
              <InputLabel>Sleep Quality</InputLabel>
              <Select
                
                autoFocus
                // value={maxWidth}
                // onChange={handleMaxWidthChange}
                // inputProps={{
                //   name: 'max-width',
                //   id: 'max-width',
                // }}
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="6">6</MenuItem>
                <MenuItem value="7">7</MenuItem>
                <MenuItem value="8">8</MenuItem>
                <MenuItem value="9">9</MenuItem>
                <MenuItem value="10">10</MenuItem>
              </Select>
            </FormControl>
            <TextField
            
              id="time"
              label="Sleep Time"
              type="time"
              defaultValue="22:30"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
            <TextField
              id="time2"
              label="Wake up Time"
              type="time"
              defaultValue="07:30"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpenSleep(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>setOpenSleep(false)} color="primary" autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};