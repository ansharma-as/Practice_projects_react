import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobAtom, messagingAtom, networkAtom, notificationAtom } from './store/atoms';


function App() {
  return (<RecoilRoot>
    <MainApp/>
  </RecoilRoot>
  )
};


function MainApp(){
  const networkNotificationcount = useRecoilValue(networkAtom);
  const jobCount = useRecoilValue(jobAtom);
  const MessagingCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom);



  return (
    <>
    <button>Home</button>
    <button>My Network() ({networkNotificationcount >=100 ? "99+" : networkNotificationcount})</button>
    <button>Jobs() {jobCount}</button>
    <button>Messaging() {MessagingCount} </button>
    <button> Notifications() {notificationCount} </button>
    <button>me</button>
      
    </>
  )
}

export default App
