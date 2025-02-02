const UsersCard = ({ id, user }) => {
  return (
    <div
      className="p-4 bg-gray-100  rounded shadow-lg 
            translate-y-5 animate-fade-in"
      style={{ animationDelay: `${id * 100}ms` }}
    >
      <h3 className="text-lg font-bold">Name : {user?.name}</h3>
      <h5 className="text-lg font-extralight">UserName : {user?.userName}</h5>
      <p>Email : {user?.email}</p>
    </div>
  );
};

export default UsersCard;
