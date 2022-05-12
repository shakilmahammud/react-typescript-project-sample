import React,{useState} from 'react'
 import { Contact } from './Contact';
 import { Button } from 'antd';
// import { PoweroffOutlined } from '@ant-design/icons'

const Contacts = () => {
    const [contact,setContact] = useState("")
     const [contactList,setContactList] = useState<string[]>([])
    const onClick=()=>{
        setContactList([...contactList,contact])
        setContact("")
    }
    const [loadings, setLoadings] = useState<boolean[]>([]);
    const enterLoading = (index:number) => {
        setLoadings(prevLoadings => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = true;
          return newLoadings;
        });
    
        setTimeout(() => {
          setLoadings(prevLoadings=> {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = false;
            return newLoadings;
          });
        }, 6000);
      };
      
    //loading={loadings[0]} onClick={() => enterLoading(0)}
    return (
        <div>
            <h2> Contact List</h2>
           <div>
           <input type="text"
           name="name"
           onChange={(e) =>setContact(e.target.value)}
           placeholder="Contact Name"
           />
            <Button type="primary" loading={loadings[0]} onClick={() => {
                onClick();
                enterLoading(0)
                }}>
            Click me!
            </Button>
           </div>
           {
           contactList.map(contactName=> <Contact name={contactName}
            key={contactName}
            />
            )}
           
        </div>
    )
}
export default Contacts;
