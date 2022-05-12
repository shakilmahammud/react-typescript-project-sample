import React from 'react'
import { Card } from 'antd';
interface IProps {
    name: string,
    email?: string
}
export const Contact = ({name, email = "N/A"}:IProps) => {
    return (
        <div>
            <Card title="Card title" bordered={false} style={{ width: 300 }}>
                <p>Name : {name}</p>
                <p>Email : {email}</p>
          
            </Card> 
        </div>
    )
}

export const ContactDemo : React.FC<IProps> = ({name, email = "N/A"}:IProps) => {
    return (
        <div>
            <Card title="Card title" bordered={false} style={{ width: 300 }}>
                <p>Name : {name}</p>
                <p>Email : {email}</p>
          
            </Card> 
        </div>
    )
}