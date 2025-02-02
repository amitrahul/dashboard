const UsersCard = ({ id, name, email, userName }) => {
  const handleCard = () => {
    console.log("hii");
  };
  return (
    <div className="p-4 bg-gray-400 rounded" onClick={handleCard}>
      <h3 className="text-lg font-bold">Name : {name}</h3>
      <h5 className="text-lg font-extralight">UserName : {userName}</h5>
      <p>Email : {email}</p>
    </div>
  );
};

export default UsersCard;
