import React, { useEffect, useState } from 'react'
import apiurl from '../../environment';
import UniqueTask from './UniqueTask';
import NewTask from './NewTask';

export default function ShowAllTasks(props) {
    return (
        <div>
            {
                props.tasks !== '' ?
                    <div>
                        {
                            // props.tasks.map(task => {
                            //     <UniqueTask key={task.id} token={props.token} />
                            // })
                        }
                    </div>
                    : <p>Nothing to Do!</p>
            }
        </div>

    )
}
