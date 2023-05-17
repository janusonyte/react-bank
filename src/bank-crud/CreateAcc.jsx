import { useState, useRef, useEffect } from "react"

export default function CreateAcc({ setCreateData }) {

    const nRef = useRef(null);
    const sRef = useRef(null);

    const save = _ => {

        const name = nRef.current.value;
        const surname = sRef.current.value;

        setCreateData({
            Name: name,
            Surname: surname,
            Balance: 0
        });
    };

    return (
        <>
            <div className="card m-5">
                <h5 className="card-header">Nauja sąskaita</h5>
                <div className="m-3">
                    <form>
                        <fieldset className="fields">
                            <input className="field-input" type="text" id="name" ref={nRef} placeholder="Vardas" required />
                            <input className="field-input" type="text" id="surname" ref={sRef} placeholder="Pavardė" required />
                            <button className="purple-gradient field-btn" onClick={save}>Sukurti</button>
                        </fieldset>
                    </form>

                </div>
            </div>
        </>
    )
}