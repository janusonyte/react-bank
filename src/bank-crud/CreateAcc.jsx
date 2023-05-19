import { useState, useRef, useEffect } from "react"

function CreateAcc({ setCreateData }) {

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
                <h5 className="card-header">Create a new account</h5>
                <div className="m-3">
                    <form>
                        <fieldset className="fields">
                            <input className="field-input" type="text" id="name" ref={nRef} placeholder="First name" required />
                            <input className="field-input" type="text" id="surname" ref={sRef} placeholder="Last name" required />
                            <button className="purple-gradient field-btn" onClick={save}>Create</button>
                        </fieldset>
                    </form>

                </div>
            </div>
        </>
    )
}
export { CreateAcc };