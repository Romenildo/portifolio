"use client";
import { useState } from 'react'
import styles from '../../styles/View.module.css'



interface ViewProps{
  title: string
  children:any
  isVisible:boolean
  setVisible?: (e:any)=> void
}

export default function View(props:ViewProps) {

    return (
      <div>
        {props.isVisible && (
          <div className={styles.header}>
          <div className={styles.title}>
            <div> {props.title}</div>
            <div onClick={()=>props.setVisible?.(false)} className={styles.buttonClose}>x</div>
          </div>
          <div className={styles.content}> 
            <div>
              {props.children}
            </div>
            <div className={styles.footer}></div>
              
          </div>
  
       </div>
        )}
      </div>
     
    )
  }
  