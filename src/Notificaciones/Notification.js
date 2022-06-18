import { useState, createContext, useContext } from "react";

const Notification = ({ message, severity }) => {

    const notificationStyles = {
      position: 'wrap',
      top: 120,
      right: 8,
      width: 'auto',
      height: 'auto',
      backgroundColor: severity === 'error' ? 'orange' : 'violet',
      padding: '10px 20px 10px 20px',
      color: 'white',
      borderRadius: 7
    }

    if(message === '') {
        return 
    }
  
    return (
      <div style={notificationStyles}>
        { message }
      </div>
    )
  }

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')

    const setNotification = (severity, message) => {
        setMessage(message)
        setSeverity(severity)
        setTimeout(() => {
            setMessage('')
        }, 3000)
    }   

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification message={message} severity={severity}/>
            { children }
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}