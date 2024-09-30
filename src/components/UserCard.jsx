const UserCard = ({ card }) => {
  const { firstName, lastName, photoUrl, age, gender, about } = card;

  return (
    <div className="card bg-base-300 w-96 shadow-xl h-full">
      <figure>
        <img className="" src={photoUrl} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{gender + ", " + age}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center my-4">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
