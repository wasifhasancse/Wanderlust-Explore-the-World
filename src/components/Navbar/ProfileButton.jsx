import { RxDashboard } from "react-icons/rx";

const ProfileButton = () => {
  return (
    <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-semibold w-fit transition-colors duration-200 cursor-pointer">
      <RxDashboard className="text-lg" />
      Dashboard
    </button>
  );
};

export default ProfileButton;
