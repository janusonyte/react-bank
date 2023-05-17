export default function ListAcc({ accounts, setDeleteData }) {

    const destroy = acc => setDeleteData(acc);

    return (
        <>
            <div className="card m-5">
                <h5 className="card-header">Sąskaitos</h5>
                <div className="card-body">
                    <ul className="ul-style list-group list-group-flush">
                        {
                            accounts
                                ? accounts.length
                                    ? accounts.map(acc => (
                                        <li key={acc.id}>
                                            <div className="acc-list">
                                                <div className="account">
                                                    <p>{acc.Name}</p>
                                                    <p>{acc.Surname}</p>
                                                    <p>{acc.Balance}<span>€</span></p>
                                                </div>
                                                <form>
                                                    <fieldset className="fields">
                                                        <div className="acc-fields">
                                                            <input type="number" className="field-input" />
                                                            <button className="field-btn green">+ lėšų</button>
                                                            <button className="field-btn green">- lėšas</button>
                                                        </div>
                                                        <div className="field-btn-cont">
                                                            <button className="field-btn red" onClick={_ => destroy(acc)}>Ištrinti</button>
                                                        </div>
                                                    </fieldset>
                                                </form>

                                            </div>
                                        </li>))
                                    : 'Tuščias bankas'
                                : '...kraunasi'
                        }

                    </ul>
                </div>
            </div>
        </>
    )
}