
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import CreateAcc from './bank-crud/CreateAcc';
import DeleteAcc from './bank-crud/DeleteAcc';
import EditBalance from './bank-crud/EditBalance';
import ListAcc from './bank-crud/ListAcc';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';

import { crudCreate, crudDelete, crudEdit, crudRead } from './Functions/localStorage';

const KEY = 'bankas';

export default function App() {

  const [listUpdate, setListUpdate] = useState(Date.now());
  const [createData, setCreateData] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [deleteData, setDeleteData] = useState(null);

  //R read
  useEffect(_ => {
    setAccounts(crudRead(KEY));
  }, [listUpdate]);

  //C create
  useEffect(_ => {
    if (null === createData) {
      return;
    }
    crudCreate(KEY, createData);
    setListUpdate(Date.now());
  }, [createData]);

  //D delete
  useEffect(_ => {
    if (null === deleteData) {
      return;
    }
    crudDelete(KEY, deleteData.id);
    setListUpdate(Date.now());
  }, [deleteData]);


  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to React Bank!</h1>
          <div className="container">
            <div className="row">
              <div className="col-8">
                <ListAcc
                  accounts={accounts}
                  setDeleteData={setDeleteData}
                />

              </div>
              <div className="col-4">
                <CreateAcc setCreateData={setCreateData} />
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}


