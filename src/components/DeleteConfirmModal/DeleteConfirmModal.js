import './DeleteConfirmModal.css';

export default function DeleteConfirmModal(props) {

  return (
    <div className="delete-confirm-modal">
      <div className="title">Delete Confirmation</div>
      <div className="message">Are you sure you want to delete "{props.friendName}" as your friend?</div>
      <div className="form-actions">
        <button
          className="cancel-button"
          onClick={() => props.cancelDeleteFriend()}
        >
          No
        </button>
        <button
          className="submit-button"
          onClick={() => props.deleteFriend(props.friendName)}
        >
          Yes
        </button>
      </div>
    </div>
  );
}
