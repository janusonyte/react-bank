function DeleteAcc({ deleteModalData, setDeleteModalData, setDeleteData }) {

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
                            <h5 className="modal-title">Ooops, a wild error has occurred...</h5>
                            <button type="button" className="btn btn-close" onClick={_ => setDeleteModalData(null)}></button>
                        </div>
                        <div className="modal-body">
                            <p>You cannot delete an account which has funds in it</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="yellow" onClick={_ => setDeleteModalData(null)}>OK</button>
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
                        <h5 className="modal-title">Delete an account</h5>
                        <button type="button" className="btn btn-close" onClick={_ => setDeleteModalData(null)}></button>
                    </div>
                    <div className="modal-body">
                        <p className="modal-body-text">Would you like to delete your account?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="yellow" onClick={_ => setDeleteModalData(null)}>Cancel</button>
                        <button type="button" className="red" onClick={destroy}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { DeleteAcc };