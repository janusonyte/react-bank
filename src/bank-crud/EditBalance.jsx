import { useRef } from "react";


function EditBalance(accounts, setEditData) {

    const balanceChange = useRef('0');
    const currBalance = accounts.Balance;
    const funds = balanceChange.current.value;


    const addMoney = () => {
        setEditData(currBalance + funds);
    }

    // const withdrawMoney = () => {
    //     if (setEditData.accounts.Balance > funds) {
    //         setEditData(accounts.Balance - funds);
    //     } else {
    //         setEditData(accounts.Balance);
    //     }

    // }


    return (<div>
        <input type="number" ref={balanceChange} className="field-input" />
        <button onClick={addMoney} className="field-btn green">+ lėšų</button>
        {/* <button onClick={withdrawMoney} className="field-btn green">- lėšas</button> */}
    </div>);
}

export { EditBalance };