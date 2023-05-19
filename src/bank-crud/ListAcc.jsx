
import { EditBalance } from "./EditBalance";

function ListAcc({ accounts, setDeleteModalData, doSort, sort, setEditData }) {

    const destroy = acc => setDeleteModalData(acc);


    return (
        <div className="card m-5">
            <h5 className="card-header">Sąskaitos</h5>
            <div className="card-body">
                <p className="sort">Rūšiuoti<span className={'sort-button ' + sort} onClick={doSort}></span></p>
                <ul className="ul-style list-group list-group-flush">
                    {
                        accounts
                            ? accounts.length
                                ? accounts.map(acc => (
                                    <li key={acc.id}>
                                        <div className="card m-5">

                                            <div className="card-body">
                                                <div className="acc-list">
                                                    <div className="account">
                                                        <div>
                                                            <p className="acc-titles">Vardas:</p>
                                                            <p>{acc.Name}</p>
                                                        </div>
                                                        <div>
                                                            <p className="acc-titles">Pavardė:</p>
                                                            <p>{acc.Surname}</p>
                                                        </div>
                                                        <div>
                                                            <p className="acc-titles">Lėšos:</p>
                                                            <p>{acc.Balance}<span>€</span></p></div>
                                                    </div>
                                                    <form>
                                                        <fieldset className="fields">
                                                            <div className="acc-fields">
                                                                <EditBalance accounts={acc} setEditData={setEditData} />
                                                            </div>

                                                        </fieldset>
                                                    </form>
                                                    <div className="field-btn-cont">
                                                        <button className="field-btn red" onClick={_ => destroy(acc)}>Ištrinti</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </li>))
                                : 'Tuščias bankas'
                            : '...kraunasi'
                    }

                </ul>
            </div>
        </div>
    )
}
export { ListAcc };