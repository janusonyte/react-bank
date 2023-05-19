export default function DeleteAccount({ deleteModalData, setDeleteModalData, setDeleteData }) {

    const destroy = _ => {
        setDeleteData(deleteModalData);
        setDeleteModalData(null);
    }

    if (null === deleteModalData) {
        return null;
    }

    if (deleteModalData.Balance !== 0) {
        return (
            <div className="modal">
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Klaida</h5>
                            <button type="button" className="btn btn-close" onClick={_ => setDeleteModalData(null)}></button>
                        </div>
                        <div className="modal-body">
                            <p>Negalima trinti sąskaitos, kurioje yra lėšų.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="button" onClick={_ => setDeleteModalData(null)}>Gerai</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="modal">
            <div className="modal-dialog  modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Ištrinti sąskaitą</h5>
                        <button type="button" className="btn btn-close" onClick={_ => setDeleteModalData(null)}></button>
                    </div>
                    <div className="modal-body">
                        <p className="modal-body-text">Ar tikrai norite ištrinti sąskaitą?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="slate-gray" onClick={_ => setDeleteModalData(null)}>Atšaukti</button>
                        <button type="button" className="red" onClick={destroy}>Ištrinti</button>
                    </div>
                </div>
            </div>
        </div>
    );
}