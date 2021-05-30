import { useEffect, useState } from "react";
import "./App.css";
import Pagination from "react-js-pagination";
import DeleteConfirmModal from "./components/DeleteConfirmModal/DeleteConfirmModal";

function App() {
  const [friendsList, setFriendsList] = useState([]);
  const [friendName, setFriendName] = useState("");
  const [displayFriendsList, setDisplayFriendsList] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false);
  const [toDeleteFriend, setToDeleteFriend] = useState("");
  const eventsPerPage = 4;

  const handleDisplayDeleteModal = (name) => {
    setDisplayDeleteModal(true);
    setToDeleteFriend(name);
  };

  const displayListOfFriends = () => {
    const indexOfLastEvent = activePage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const DisplayFriendsList =
      displayFriendsList &&
      displayFriendsList.slice(indexOfFirstEvent, indexOfLastEvent);
    if (DisplayFriendsList.length > 0) {
      return (
        DisplayFriendsList &&
        DisplayFriendsList.map((friend) => {
          return (
            <div className="friend-row">
              <div>
                {friend.name}
                <div className="text">is your friend</div>
              </div>
              <div className="actions">
                <div
                  className="star-icon"
                  onClick={() => handleFavorite(friend.name)}
                >
                  {friend.favorite ? (
                    <span className="fa fa-star"></span>
                  ) : (
                    <span className="fa fa-star-o"></span>
                  )}
                </div>
                <div
                  className="delete-icon"
                  onClick={() => handleDisplayDeleteModal(friend.name)}
                >
                  <span className="fa fa-trash"></span>
                </div>
              </div>
            </div>
          );
        })
      );
    }else if(friendName !== ''){
      return(
      <div className="friend-row">
        Yay!! New friend. Hit enter to add as friend
      </div>
      );
    }
  };

  const handleFavorite = (name) => {
    let newFriendsList = [...friendsList];
    newFriendsList = friendsList.map((friend) => {
      if (friend.name === name) {
        friend.favorite = !friend.favorite;
      }
      return friend;
    });
    setFriendsList(newFriendsList);
  };

  // const handleDelete = (name) => {
  //   const newFriendsList = friendsList.filter((friend) => friend.name !== name);
  //   const newDisplayFriendsList = displayFriendsList.filter(
  //     (friend) => friend.name !== name
  //   );
  //   setFriendsList(newFriendsList);
  //   setDisplayFriendsList(newDisplayFriendsList);
  // };

  const handleNameChange = (name) => {
    let newDisplayFriendsList = [...friendsList];
    newDisplayFriendsList = newDisplayFriendsList.filter((friend) =>
      friend.name.toLowerCase().includes(name.toLowerCase())
    );
    setDisplayFriendsList(newDisplayFriendsList);
    setFriendName(name);
  };

  useEffect(() => {
    if (friendName === "") setDisplayFriendsList([...friendsList]);
  }, [friendName]);

  const handleInputFriendName = (e) => {
    if (e.key === "Enter" && friendName !== "") {
      const friendExists = friendsList.filter((friend) => {
        return friend.name === friendName.trimEnd();
      });
      if (friendExists.length === 0) {
        const friendObject = {
          name: friendName,
          favorite: false,
        };
        setFriendsList((oldFriendList) => [...oldFriendList, friendObject]);
      }
      setFriendName("");
    }
  };

  const sortByFavorite = () => {
    setDisplayFriendsList(
      [...displayFriendsList].sort((a, b) =>
        a.favorite === b.favorite ? 0 : a.favorite ? -1 : 1
      )
    );
    setActivePage(1);
  };

  const cancelDeleteFriend = () => {
    setDisplayDeleteModal(false);
  };

  const deleteFriend = (name) => {
    const newFriendsList = friendsList.filter((friend) => friend.name !== name);
    const newDisplayFriendsList = displayFriendsList.filter(
      (friend) => friend.name !== name
    );
    setFriendsList(newFriendsList);
    setDisplayFriendsList(newDisplayFriendsList);
    setDisplayDeleteModal(false);
  };

  return (
    <div className="App">
      <h2 className="page-title">Welcome to Haptik!!</h2>
      <div className="body-wrapper">
        <div className="friends-list-table">
          <div className="header-row">
            <div className="header">Friends List</div>
            <div onClick={() => sortByFavorite()} className="sort-header">
              Sort By
              <span className="sort-star-icon">
                <span className="fa fa-star"></span>
              </span>
            </div>
          </div>
          <div className="add-new-friend">
            <input
              type="text"
              value={friendName}
              placeholder="Enter your friends name"
              onChange={(e) => handleNameChange(e.target.value)}
              onKeyPress={handleInputFriendName}
            />
          </div>
          <div className="list-of-friends">{displayListOfFriends()}</div>
          <Pagination
            className="pagination-component"
            activePage={activePage}
            itemsCountPerPage={4}
            totalItemsCount={displayFriendsList.length}
            onChange={setActivePage}
            hideDisabled={true}
            hideNavigation={true}
          />
        </div>
      </div>
      {displayDeleteModal && (
        <div className="delete-modal">
          <DeleteConfirmModal
            friendName={toDeleteFriend}
            cancelDeleteFriend={cancelDeleteFriend}
            deleteFriend={deleteFriend}
          />
        </div>
      )}
    </div>
  );
}

export default App;
