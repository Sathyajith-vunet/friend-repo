import "./DisplayListOfFriends.css";

export default function DisplayListOfFriends(props) {
  const indexOfLastEvent = props.activePage * props.eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - props.eventsPerPage;
  const DisplayFriendsList =
    props.displayFriendsList &&
    props.displayFriendsList.slice(indexOfFirstEvent, indexOfLastEvent);

  const displayFriendsList = () => {
    return (
      DisplayFriendsList &&
      DisplayFriendsList.map((friend) => {
        return (
          <div key={friend} className="friend-row">
            <div key={friend} className="friend-name">
              {friend.name}
              <div className="text">is your friend</div>
            </div>
            <div className="actions">
              <div
                className="star-icon"
                onClick={() => props.handleFavorite(friend.name)}
              >
                {friend.favorite ? (
                  <span className="fa fa-star"></span>
                ) : (
                  <span className="fa fa-star-o"></span>
                )}
              </div>
              <div
                className="delete-icon"
                onClick={() => props.handleDisplayDeleteModal(friend.name)}
              >
                <span className="fa fa-trash"></span>
              </div>
            </div>
          </div>
        );
      })
    );
  };

  return DisplayFriendsList.length > 0
    ? displayFriendsList()
    : props.friendName !== "" && (
        <div className="friend-row">
          Yay!! New friend. Hit enter to add as friend
        </div>
      );
}
