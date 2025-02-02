import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { fetchUsersInfo } from "../api/api";
import UsersCard from "../components/UserCard";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      const usersResp = await fetchUsersInfo();
      if (usersResp?.length > 0) {
        setUsers([...usersResp]);
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }
    })();
  }, []);
  console.log("users", users);

  return (
    <>
      <div className="p-5">
        <SearchBar search={search} setSearch={setSearch} />
        {isLoading ? (
          <h1 className="text-2xl text-center mx-auto mt-16">Loading...</h1>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {users.map((user) => (
              <UsersCard
                key={user.id}
                name={user.name}
                email={user.email}
                userName={user.username}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
