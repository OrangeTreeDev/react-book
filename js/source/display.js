/**
 * Created by hubery on 2017/3/16.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import Rating from './component/Rating'
import Button from './component/Button'

ReactDOM.render(
    <div>
        <h1>Raiting</h1>
        <Rating className="test"></Rating>
        <br/>
        <h1>Button</h1>
        <Button txt="ok"/>
        <Button className="middle" txt="+ add"></Button>
    </div>,
    document.getElementById('app')
);