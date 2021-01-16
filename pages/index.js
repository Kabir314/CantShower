import {useEffect, useState} from 'react';
// import Layout from '../components/layout/layout'

import { useRequireAuth } from "../lib/useAuth";
import { useData } from "../lib/useData";


import Loading from '../components/loading';

export default function App() {
  
  console.log("1. App Main Page Component");

  const auth = useRequireAuth();
  auth.signout()
  return (<></>);
};