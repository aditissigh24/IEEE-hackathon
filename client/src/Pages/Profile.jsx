import React from "react";

const Profile = () => {
  // Mock user data (replace with actual user data fetching)
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    joinDate: "January 15, 2023",
    bio: "Software developer with passion for creating intuitive user experiences.",
    location: "San Francisco, CA",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 bg-gray-50 p-8 flex flex-col items-center">
            <img
              className="h-40 w-40 rounded-full object-cover border-4 border-white shadow"
              src={user.avatar}
              alt={user.name}
            />
            <h2 className="mt-4 text-xl font-bold text-gray-800">
              {user.name}
            </h2>
            <p className="text-gray-600">{user.location}</p>
            <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit Profile
            </button>
          </div>

          <div className="md:w-2/3 p-8">
            <div className="mb-6">
              <h3 className="text-gray-600 text-sm uppercase font-bold mb-2">
                Bio
              </h3>
              <p className="text-gray-800">{user.bio}</p>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-gray-600 text-sm uppercase font-bold mb-2">
                    Email
                  </h3>
                  <p className="text-gray-800">{user.email}</p>
                </div>

                <div>
                  <h3 className="text-gray-600 text-sm uppercase font-bold mb-2">
                    Member Since
                  </h3>
                  <p className="text-gray-800">{user.joinDate}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-4">
              <h3 className="text-gray-600 text-sm uppercase font-bold mb-4">
                Account Settings
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-800">Password</h4>
                    <p className="text-sm text-gray-600">
                      Update your password
                    </p>
                  </div>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded">
                    Change
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-800">Notifications</h4>
                    <p className="text-sm text-gray-600">
                      Manage your notification preferences
                    </p>
                  </div>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded">
                    Configure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
