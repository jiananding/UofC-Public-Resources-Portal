import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import FastFood from "@material-ui/icons/Fastfood";
import Sport_BasketBall from "@material-ui/icons/SportsBasketball";
import Local_Parking from "@material-ui/icons/LocalParking";



export const mainListItems = (
         <div>
           <ListItem button >
             <ListItemIcon>
               <DashboardIcon />
             </ListItemIcon>
             <ListItemText primary="Dashboard" />
           </ListItem>
           <ListItem button>
             <ListItemIcon>
               <PeopleIcon />
             </ListItemIcon>
             <ListItemText primary="Study" />
           </ListItem>
           <ListItem button>
             <ListItemIcon>
                 <FastFood />
             </ListItemIcon>
             <ListItemText primary="Living" />
           </ListItem>
           <ListItem button>
             <ListItemIcon>
               <Sport_BasketBall />
             </ListItemIcon>
             <ListItemText primary="Exercise" />
           </ListItem>
           <ListItem button>
             <ListItemIcon>
                 <Local_Parking />
             </ListItemIcon>
             <ListItemText primary="Parking" />
           </ListItem>
         </div>
       );

