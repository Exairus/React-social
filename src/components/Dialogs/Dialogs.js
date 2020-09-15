import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return(
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink exact to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return(
        <div className={classes.message}>
            {props.message}
        </div>
    );
}

const Dialogs = (props) => {

    const dialogsData = [
        {id: '1', name: 'Dimych'},
        {id: '2', name: 'Viktor'}
    ];

    const messagesData = [
        {id: '1', message: 'Hi'},
        {id: '2', message: "How your's IT-kamasutra?"}
    ]

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
            </div>
        </div>
    );
}

export default Dialogs;