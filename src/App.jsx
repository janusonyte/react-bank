
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';


import { crudCreate, crudDelete, crudEdit, crudRead } from './Functions/localStorage';
import CreateAcc from './bank-crud/CreateAcc';
import DeleteAcc from './bank-crud/DeleteAcc';
import EditBalance from './bank-crud/EditBalance';
import ListAcc from './bank-crud/ListAcc';

const KEY = 'bankas';

export default function App() {

  const [listUpdate, setListUpdate] = useState(Date.now());
  const [createData, setCreateData] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [deleteModalData, setDeleteModalData] = useState(null);
  const [sort, setSort] = useState('default');



  //R read
  useEffect(_ => {
    setAccounts(crudRead(KEY).map((c, i) => ({ ...c, row: i, show: true })));
  }, [listUpdate]);


  //C create
  useEffect(_ => {
    if (null === createData) {
      return;
    }
    crudCreate(KEY, createData);
    setListUpdate(Date.now());
  }, [createData]);

  //U update

  useEffect(_ => {
    if (null === editData) {
      return;
    }
    crudEdit(KEY, editData, editData.id);
    setListUpdate(Date.now());
  }, [editData]);

  //D deleate
  useEffect(_ => {
    if (null === deleteData) {
      return;
    }
    crudDelete(KEY, deleteData.id);
    setListUpdate(Date.now());
  }, [deleteData]);

  useEffect(() => {
    if (sort === 'default') {
      setAccounts(c => [...c].sort((a, b) => a.row - b.row));
    } else if (sort === 'asc') {
      setAccounts(c => [...c].sort((a, b) => a.Surname.localeCompare(b.Surname)));
    } else {
      setAccounts(c => [...c].sort((b, a) => a.Surname.localeCompare(b.Surname)));
    }

  }, [sort]);

  const doSort = _ => {
    setSort(s => {
      switch (s) {
        case 'default': return 'asc';
        case 'asc': return 'dsc';
        default: return 'default'
      }
    });
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to React Bank!</h1>
          <div className="container">
            <div className="row">

              <div className="col-4">
                <CreateAcc setCreateData={setCreateData} />
              </div>

              <div className="col-8">
                <ListAcc
                  accounts={accounts}
                  setDeleteModalData={setDeleteModalData}
                  sort={sort}
                  doSort={doSort}
                  setEditData={setEditData}
                />
              </div>



            </div>
          </div>
          <DeleteAcc
            deleteModalData={deleteModalData}
            setDeleteModalData={setDeleteModalData}
            setDeleteData={setDeleteData}
          />
        </header>
      </div>
    </>
  );
}


