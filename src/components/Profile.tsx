type ProfileProps = {
  greeting: string;
  name: string;
  avatar: string;
}

const Profile = ({greeting, name, avatar}: ProfileProps) => {
  return(
    <div className="flex justify-between items-center ">
      <div className="text-left">
        <p className="text-subtle text-sm">{greeting}</p>
        <p className="font-bold text-light text-2xl">{name}</p>
      </div>
      <img src={avatar} alt="Profile Photo" className="w-10 h-10 rounded-2xl"/>
    </div>
  )
}

export default Profile