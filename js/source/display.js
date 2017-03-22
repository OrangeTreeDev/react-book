/**
 * Created by hubery on 2017/3/16.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import Button from './component/Button'
import Excel from './component/Excel'

// Excel 组件骨架 和 数据
let schema = {
        field_name: {
                displayName: 'name',
                fieldType: 'string'
        },
        field_year:{
                displayName : 'year',
                fieldType : 'number'
        },
        field_grape:{
                displayName : 'grape',
                fieldType : 'suggest'
        },
        field_rating:{
                displayName : 'rating',
                fieldType : 'rating'
        }
};

let datas = [{
        field_name :'merlot france',
        field_year: 2015,
        field_grape: 'Merlot',
        field_rating: 4
},{
        field_name :'Norton Garden 77',
        field_year: 2000,
        field_grape: 'Norton',
        field_rating: 2
}];

var props = {
        'schema':schema,
        'datas': datas
};
ReactDOM.render(
    <div className="Display">
            <div className="header">
                    <img src="images/wp-logo2.png"/><span>Welcome to Whinepad!</span>
            </div>
            <div className="content">
                    <div className="toolbar">
                            <Button className="middle">+ add</Button>
                            <input className="searchInpt" type="text" placeholder="search"/>
                    </div>
                    <Excel {...props}></Excel>
            </div>
    </div>,
    document.getElementById('app')
);