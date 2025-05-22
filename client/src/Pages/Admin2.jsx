import { useState, useEffect } from "react";
import {
  ChevronUp,
  ChevronDown,
  X,
  Check,
  Search,
  Plus,
  Minus,
  RefreshCw,
  Users,
  Bell,
  Settings,
  ClipboardList,
  Edit,
  Bed,
  Wind,
  Activity,
  Home,
  UserPlus,
} from "lucide-react";
import { FaUserDoctor } from "react-icons/fa6";

// Mock data for resources - adding degree and gender
const initialResources = [
  {
    id: 1,
    name: "ICU Beds",
    value: 32,
    total: 40,
    color: "#1d60a5",
    icon: "bed",
  },
  {
    id: 2,
    name: "General Beds",
    value: 155,
    total: 200,
    color: "#1d981e",
    icon: "bed",
  },
  {
    id: 3,
    name: "Oxygen Units",
    value: 85,
    total: 100,
    color: "#f35280",
    icon: "oxygen",
  },
  {
    id: 4,
    name: "Ventilators",
    value: 28,
    total: 30,
    color: "#FFC300",
    icon: "ventilator",
  },
  {
    id: 5,
    name: "Operating Rooms",
    value: 12,
    total: 14,
    color: "#C70039",
    icon: "room",
  },
  {
    id: 6,
    name: "Emergency Staff",
    value: 45,
    total: 50,
    color: "#38bcbf",
    icon: "staff",
  },
];

// Add degree and gender to doctors data
const initialDoctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    degree: "MD, FACS",
    gender: "Female",
    specialization: "Surgeon",
    status: "available",
    image: null,
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    degree: "MD, PhD",
    gender: "Male",
    specialization: "Cardiologist",
    status: "off-duty",
    image: null,
  },
  {
    id: 3,
    name: "Dr. Emily Garcia",
    degree: "MD",
    gender: "Female",
    specialization: "Pediatrician",
    status: "available",
    image: null,
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    degree: "MD, FAAN",
    gender: "Male",
    specialization: "Neurologist",
    status: "off-duty",
    image: null,
  },
  {
    id: 5,
    name: "Dr. Olivia Martinez",
    degree: "MD",
    gender: "Female",
    specialization: "Anesthesiologist",
    status: "available",
    image: null,
  },
  {
    id: 6,
    name: "Dr. David Kim",
    degree: "MD, FACEP",
    gender: "Male",
    specialization: "Emergency",
    status: "available",
    image: null,
  },
];

// Toast notification component
const Toast = ({ message, visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg flex items-center">
      <Check size={16} className="mr-2" />
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 text-white hover:text-gray-200">
        <X size={16} />
      </button>
    </div>
  );
};

// New Resource Card Component
const ResourceCard = ({ resource, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(resource.value);

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue) && newValue >= 0) {
      setValue(newValue);
    }
  };

  const handleSave = () => {
    onUpdate(resource.id, value);
    setIsEditing(false);
  };

  // Icons based on resource type
  const getIcon = () => {
    switch (resource.icon) {
      case "bed":
        return <Bed size={24} />;
      case "oxygen":
        return <Wind size={24} />;
      case "ventilator":
        return <Activity size={24} />;
      case "room":
        return <Home size={24} />;
      case "staff":
        return <UserPlus size={24} />;
      default:
        return <ClipboardList size={24} />;
    }
  };

  return (
    <div className="bg-white w-[250px] rounded-lg shadow-sm p-4">
      <div className="flex items-center">
        <div
          style={{ backgroundColor: resource.color }}
          className={`p-3 rounded-lg font-extrabold text-white mr-4`}
        >
          {getIcon()}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-800">{resource.name}</h3>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-gray-500 hover:text-gray-700"
            >
              <Edit size={16} />
            </button>
          </div>
          {isEditing ? (
            <div className="mt-2 flex items-center">
              <input
                type="number"
                value={value}
                onChange={handleInputChange}
                className="w-20 p-1 border border-gray-300 rounded mr-2"
              />
              <span className="text-gray-500 text-sm"></span>
              <button
                onClick={handleSave}
                className="ml-2 bg-[#323235] text-white font-bold cursor-pointer px-2 py-1 rounded text-sm"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-gray-800">{value}</span>
              <span className="text-sm text-gray-500 ml-1"></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Doctor status options
const statusOptions = [
  { value: "available", label: "Available", color: "bg-green-500" },
  { value: "off-duty", label: "Off Duty", color: "bg-red-500" },
];

// Doctor Status Cell Component
const DoctorStatusCell = ({ doctor, onStatusChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState(doctor.status);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    setIsEditing(false);
    onStatusChange(doctor.id, newStatus);
  };

  const getStatusColor = () => {
    const statusMap = {
      available: "bg-green-500",
      "off-duty": "bg-red-500",
    };
    return statusMap[status] || "bg-gray-500";
  };

  const getStatusLabel = () => {
    const labelMap = {
      available: "Available",
      "off-duty": "Off Duty",
    };
    return labelMap[status] || "Unknown";
  };

  return (
    <div className="relative">
      {isEditing ? (
        <div className="absolute right-0 top-0 mt-8 bg-white rounded-md shadow-lg border border-gray-200 z-10 w-32">
          {statusOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleStatusChange(option.value)}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center">
                <span
                  className={`h-2 w-2 font-medium rounded-full ${option.color} mr-2`}
                ></span>
                {option.label}
              </div>
            </button>
          ))}
        </div>
      ) : null}

      <button
        onClick={() => setIsEditing(!isEditing)}
        className="flex items-center space-x-1 px-2 py-1 rounded hover:bg-gray-100 transition-colors"
      >
        <span
          className={`h-2 w-2 mt-1 rounded-full ${getStatusColor()}`}
        ></span>
        <span className="text-sm font-medium">{getStatusLabel()}</span>
        <ChevronDown size={14} className="text-gray-500" />
      </button>
    </div>
  );
};

export default function Admin() {
  const [resources, setResources] = useState(initialResources);
  const [doctors, setDoctors] = useState(initialDoctors);
  const [activeSpecialization, setActiveSpecialization] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Filter doctors based on active specialization and search term
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSpecialization =
      activeSpecialization === "All" ||
      doctor.specialization === activeSpecialization;
    const matchesSearch = doctor.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesSpecialization && matchesSearch;
  });

  // Update resource handler
  const handleResourceUpdate = (id, newValue) => {
    setResources(
      resources.map((resource) =>
        resource.id === id ? { ...resource, value: newValue } : resource
      )
    );

    // Show success toast
    setToastMessage("Resources updated successfully!");
    setShowToast(true);
    setLastUpdated(new Date());

    // Hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  // Update doctor status handler
  const handleDoctorStatusChange = (id, newStatus) => {
    setDoctors(
      doctors.map((doctor) =>
        doctor.id === id ? { ...doctor, status: newStatus } : doctor
      )
    );

    // Show success toast
    setToastMessage("Doctor status updated successfully!");
    setShowToast(true);
    setLastUpdated(new Date());

    // Hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  // Format timestamp
  const formatTimestamp = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Dashboard Title */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
          <div>
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center">
                <RefreshCw size={16} className="mr-2" />
                Refresh Data
              </button>
            </div>
            <div className="text-right mt-1">
              <span className="text-sm text-gray-500">
                Last updated: {formatTimestamp(lastUpdated)}
              </span>
            </div>
          </div>
        </div>

        {/* Resource Cards */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4"></h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {resources.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                onUpdate={handleResourceUpdate}
              />
            ))}
          </div>
        </section>

        {/* Doctor Availability Section as Table */}
        <section className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Medical Staff
            </h3>

            <div className="relative bg-white">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search doctors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Specialization Tabs */}
          <div className="mb-4 flex flex-wrap gap-2">
            {[
              "All",
              "Surgeon",
              "Cardiologist",
              "Pediatrician",
              "Neurologist",
              "Anesthesiologist",
              "Emergency",
              "Pulmonologist",
            ].map((specialization) => (
              <button
                key={specialization}
                onClick={() => setActiveSpecialization(specialization)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSpecialization === specialization
                    ? "bg-indigo-100 text-indigo-800"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {specialization}
              </button>
            ))}
          </div>

          {/* Doctor Table */}
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
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
                    Degree
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Specialization
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Gender
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredDoctors.map((doctor) => (
                  <tr key={doctor.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-11 w-11 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold mr-3">
                          <FaUserDoctor className="h-6 w-6" />
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                          {doctor.name}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {doctor.degree}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {doctor.specialization}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {doctor.gender}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <DoctorStatusCell
                        doctor={doctor}
                        onStatusChange={handleDoctorStatusChange}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredDoctors.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No doctors found matching your criteria
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        visible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
