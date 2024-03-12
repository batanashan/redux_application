'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { Provider } from "react-redux";
import A from "@/A/A";
import { appStore } from "@/store/appStore";
export default function App() {
  return <div>
    <Provider store={appStore} >
 <A/>

    </Provider>
 
  </div>
    
  
}
