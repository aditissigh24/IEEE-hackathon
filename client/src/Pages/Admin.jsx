import React, { useState } from "react";
import {
  ChartBarIcon,
  UsersIcon,
  CogIcon,
  PlusIcon,
  MinusIcon,
  ClipboardListIcon,
  HeartIcon,
  RefreshIcon,
} from "@heroicons/react/outline";
import { HiChartBar } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { FaClipboardList } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { SlRefresh } from "react-icons/sl";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [resources, setResources] = useState([
    {
      id: 1,
      name: "ICU Beds",
      total: 50,
      available: 12,
      icon: "bed",
      color: "blue",
      lastUpdated: "Today at 9:45 AM",
    },
    {
      id: 2,
      name: "Ventilators",
      total: 30,
      available: 8,
      icon: "lung",
      color: "green",
      lastUpdated: "Today at 10:15 AM",
    },
    {
      id: 3,
      name: "Isolation Rooms",
      total: 25,
      available: 7,
      icon: "shield",
      color: "purple",
      lastUpdated: "Yesterday at 6:30 PM",
    },
    {
      id: 4,
      name: "Emergency Beds",
      total: 40,
      available: 15,
      icon: "emergency",
      color: "red",
      lastUpdated: "Today at 8:20 AM",
    },
    {
      id: 5,
      name: "Operating Theaters",
      total: 10,
      available: 3,
      icon: "surgery",
      color: "indigo",
      lastUpdated: "Today at 11:05 AM",
    },
    {
      id: 6,
      name: "Ambulances",
      total: 8,
      available: 5,
      icon: "ambulance",
      color: "yellow",
      lastUpdated: "Today at 9:10 AM",
    },
  ]);

  // Mock data for dashboard
  const stats = [
    { title: "Users", value: "3,456", change: "+5.2%" },
    { title: "Revenue", value: "$34,245", change: "+2.8%" },
    { title: "Projects", value: "12", change: "-0.5%" },
    { title: "Tasks", value: "64", change: "+12.0%" },
  ];

  // Mock user data
  const users = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      role: "User",
      status: "Active",
    },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charlie@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 4,
      name: "David Miller",
      email: "david@example.com",
      role: "Editor",
      status: "Active",
    },
  ];

  // Resource activity log
  const resourceLog = [
    {
      action: "Updated ventilator count",
      user: "Dr. Sarah Chen",
      time: "10 minutes ago",
    },
    {
      action: "Added 5 new ICU beds",
      user: "Admin James Wilson",
      time: "2 hours ago",
    },
    {
      action: "Released Emergency Room #4",
      user: "Nurse Rodriguez",
      time: "3 hours ago",
    },
    {
      action: "Maintenance completed on Operating Theater #2",
      user: "Tech Support",
      time: "1 day ago",
    },
    {
      action: "Ambulance #3 returned to service",
      user: "Transport Manager",
      time: "1 day ago",
    },
  ];

  // Function to update resource availability
  const updateResource = (id, increment) => {
    setResources(
      resources.map((resource) => {
        if (resource.id === id) {
          const newAvailable = increment
            ? Math.min(resource.available + 1, resource.total)
            : Math.max(resource.available - 1, 0);

          return {
            ...resource,
            available: newAvailable,
            lastUpdated: `Today at ${new Date().getHours()}:${String(
              new Date().getMinutes()
            ).padStart(2, "0")} ${new Date().getHours() >= 12 ? "PM" : "AM"}`,
          };
        }
        return resource;
      })
    );
  };

  // Function to get the icon for a resource
  const getResourceIcon = (iconName) => {
    switch (iconName) {
      case "bed":
        return (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 7v8.5a2.5 2.5 0 002.5 2.5h13a2.5 2.5 0 002.5-2.5V7m-9-3h6a2 2 0 012 2v2a2 2 0 01-2 2H3m9-4v4m-9 0h18"
            />
          </svg>
        );
      case "lung":
        return (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12h6m-6 4h6m-6-8h6M7 20h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        );
      case "shield":
        return (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        );
      case "emergency":
        return (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        );
      case "surgery":
        return (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
          </svg>
        );
      case "ambulance":
        return (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        );
      default:
        return (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <button
              className={`inline-block py-2 px-4 border-b-2 font-medium text-sm ${
                activeTab === "dashboard"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("dashboard")}
            >
              <div className="flex items-center">
                <HiChartBar className="w-4 h-4 mr-2" />
                Dashboard
              </div>
            </button>
          </li>
          <li className="mr-2">
            <button
              className={`inline-block py-2 px-4 border-b-2 font-medium text-sm ${
                activeTab === "resources"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("resources")}
            >
              <div className="flex items-center">
                <IoIosHeart className="w-4 h-4 mr-2" />
                Resources
              </div>
            </button>
          </li>
          <li className="mr-2">
            <button
              className={`inline-block py-2 px-4 border-b-2 font-medium text-sm ${
                activeTab === "users"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("users")}
            >
              <div className="flex items-center">
                <FaUser className="w-4 h-4 mr-2" />
                Users
              </div>
            </button>
          </li>
          <li className="mr-2">
            <button
              className={`inline-block py-2 px-4 border-b-2 font-medium text-sm ${
                activeTab === "settings"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("settings")}
            >
              <div className="flex items-center">
                <FaCog className="w-4 h-4 mr-2" />
                Settings
              </div>
            </button>
          </li>
        </ul>
      </div>

      {/* Dashboard Content */}
      {activeTab === "dashboard" && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <p className="text-sm font-medium text-gray-600">
                  {stat.title}
                </p>
                <div className="flex items-baseline mt-1">
                  <p className="text-2xl font-semibold text-gray-800">
                    {stat.value}
                  </p>
                  <p
                    className={`ml-2 text-sm ${
                      stat.change.startsWith("+")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {stat.change}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium mb-4">Recent Activity</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <div>
                  <p className="font-medium">New user registered</p>
                  <p className="text-sm text-gray-500">
                    Emily Davis created an account
                  </p>
                </div>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <div>
                  <p className="font-medium">Project updated</p>
                  <p className="text-sm text-gray-500">
                    Website redesign completed
                  </p>
                </div>
                <span className="text-sm text-gray-500">5 hours ago</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Server maintenance</p>
                  <p className="text-sm text-gray-500">
                    System update successfully deployed
                  </p>
                </div>
                <span className="text-sm text-gray-500">1 day ago</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Resources Content */}
      {activeTab === "resources" && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Hospital Resources
            </h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded flex items-center">
              <CiCirclePlus className="w-4 h-4 mr-2" />
              Add New Resource
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className={`h-2 bg-${resource.color}-500`}></div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div
                      className={`p-3 rounded-lg bg-${resource.color}-100 text-${resource.color}-600`}
                    >
                      {getResourceIcon(resource.icon)}
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Last updated</p>
                      <p className="text-sm font-medium">
                        {resource.lastUpdated}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mt-4">
                    {resource.name}
                  </h3>

                  <div className="mt-2 flex justify-between items-center">
                    <div>
                      <div className="flex items-center">
                        <span className="text-2xl font-bold">
                          {resource.available}
                        </span>
                        <span className="text-gray-500 ml-1">
                          / {resource.total}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">Available</p>
                    </div>

                    <div>
                      <div
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${
                          resource.available / resource.total > 0.5
                            ? "bg-green-100 text-green-800"
                            : resource.available / resource.total > 0.25
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {Math.round(
                          (resource.available / resource.total) * 100
                        )}
                        %
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        resource.available / resource.total > 0.5
                          ? "bg-green-500"
                          : resource.available / resource.total > 0.25
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                      style={{
                        width: `${
                          (resource.available / resource.total) * 100
                        }%`,
                      }}
                    ></div>
                  </div>

                  <div className="mt-5 flex justify-between">
                    <button
                      className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"
                      onClick={() => updateResource(resource.id, false)}
                      disabled={resource.available === 0}
                    >
                      <CiCircleMinus className="w-4 h-4 mr-1" />
                      Decrease
                    </button>
                    <button
                      className="flex items-center justify-center bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-lg transition-colors"
                      onClick={() => updateResource(resource.id, true)}
                      disabled={resource.available === resource.total}
                    >
                      <CiCirclePlus className="w-4 h-4 mr-1" />
                      Increase
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Resource Activity Log</h3>
              <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <SlRefresh className="w-4 h-4 mr-1" />
                Refresh
              </button>
            </div>

            <div className="space-y-4">
              {resourceLog.map((log, index) => (
                <div
                  key={index}
                  className="flex items-start border-b border-gray-100 pb-3 last:border-0"
                >
                  <div className="bg-blue-100 p-2 rounded-full text-blue-500 mt-1">
                    <FaClipboardList className="w-4 h-4" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">{log.action}</p>
                    <p className="text-sm text-gray-500">
                      {log.user} • {log.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Users Content */}
      {activeTab === "users" && (
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Users
            </h3>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
              Add User
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {user.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{user.role}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Settings Content */}
      {activeTab === "settings" && (
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium mb-6">System Settings</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-base font-medium mb-3">General</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Site Name</p>
                    <p className="text-sm text-gray-500">
                      Change the name of your site
                    </p>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="IEEE Hackathon"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-gray-500">
                      Receive email notifications
                    </p>
                  </div>
                  <div>
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-base font-medium mb-3">Security</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-gray-500">
                      Add an extra layer of security
                    </p>
                  </div>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded">
                    Enable
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Login History</p>
                    <p className="text-sm text-gray-500">
                      View recent login activity
                    </p>
                  </div>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded">
                    View
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded mr-3">
                Cancel
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
