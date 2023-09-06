import React from 'react';
import { Link } from 'react-router-dom';
import IElement from '../interfaces/IElement';

function RoomElement(props :any) {
    return ( 
        <div className='flex'>
            <div>
                {props.room.number}
            </div>
            <div>
                {props.room.name}
            </div>
            <div>
                {props.room.squer}
            </div>
            <div>
                {props.room.level}
            </div>
        </div>
    );
}

export default RoomElement;