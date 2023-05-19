import { useRef } from "react";


function EditBalance({ accounts, setEditData }) {

    const changeBalance = useRef('0');


    const addMoney = () => {
        const money = parseFloat(changeBalance.current.value);
        const increasedBalance = accounts.Balance + money;

        setEditData({ ...accounts, Balance: increasedBalance });
        changeBalance.current.value = null;

    }

    const withdrawMoney = () => {
        const money = parseFloat(changeBalance.current.value);
        const currentBalance = accounts.Balance;


        if (currentBalance >= money) {
            const intermittentBalance = accounts.Balance - money;
            setEditData({ ...accounts, Balance: intermittentBalance });
            changeBalance.current.value = null;
        } else {
            setEditData({ ...accounts, Balance: accounts.Balance });
        }
    }


    return (<div>
        <input type="text" ref={changeBalance} className="field-input" placeholder="Suma (eurais)" />
        <button onClick={addMoney} className="field-btn green">+ lėšų</button>
        <button onClick={withdrawMoney} className="field-btn green">- lėšas</button>
    </div>);
}

export { EditBalance };