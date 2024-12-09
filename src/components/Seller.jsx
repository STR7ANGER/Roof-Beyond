import React, { useState } from "react";
import Navbar from "./NavBar.jsx"; // Ensure this is correctly named
import Footer from "./Footer.jsx"; // Ensure this is correctly named
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Home,
  TrendingUp,
  DollarSign,
  PlusCircle,
  BarChart2,
  Users,
  Eye,
  Mail, // Added Mail icon import
} from "lucide-react";

// Dummy data
const propertyData = [
  {
    id: 1,
    title: "Luxury Beachfront Villa",
    price: 1500000,
    location: "Malibu, CA",
    status: "Active",
    buyers: [
      {
        name: "John Smith",
        contact: "(310) 555-1234",
        interestedDate: "2024-02-15",
      },
      {
        name: "Emily Chen",
        contact: "(415) 888-9999",
        interestedDate: "2024-03-22",
      },
    ],
  },
  {
    id: 2,
    title: "Modern Downtown Loft",
    price: 750000,
    location: "San Francisco, CA",
    status: "Pending",
    buyers: [
      {
        name: "Michael Rodriguez",
        contact: "(650) 222-3333",
        interestedDate: "2024-04-10",
      },
    ],
  },
];

const earningsData = [
  { month: "Jan", earnings: 450000 },
  { month: "Feb", earnings: 620000 },
  { month: "Mar", earnings: 550000 },
  { month: "Apr", earnings: 780000 },
  { month: "May", earnings: 920000 },
  { month: "Jun", earnings: 850000 },
];

const propertyStatusData = [
  { name: "Active", value: 4 },
  { name: "Pending", value: 3 },
  { name: "Sold", value: 5 },
];


const COLORS = ["#00ff00", "#FFA500", "#FF0000"];
// Dummy messages data
const initialMessages = [
    {
      id: 1,
      sender: "John Smith",
      email: "john.smith@example.com",
      property: "Luxury Beachfront Villa",
      message: "I'm very interested in the Malibu property. Can we schedule a viewing?",
      date: "2024-05-15",
      status: "Unread"
    },
    {
      id: 2,
      sender: "Emily Chen",
      email: "emily.chen@example.com",
      property: "Modern Downtown Loft",
      message: "What are the closing costs for this downtown loft?",
      date: "2024-05-12",
      status: "Read"
    },
    {
      id: 3,
      sender: "Michael Rodriguez",
      email: "michael.rodriguez@example.com",
      property: "Modern Downtown Loft",
      message: "Is this property still available? I would like more details.",
      date: "2024-05-10",
      status: "Unread"
    }
  ];

const Seller = () => {
  const [properties, setProperties] = useState(propertyData);
  const [newProperty, setNewProperty] = useState({
    title: "",
    price: "",
    location: "",
  });
  const [newMessage, setNewMessage] = useState({
    sender: "",
    email: "",
    property: "",
    message: "",
  });
  const [messages, setMessages] = useState(initialMessages);

  const addProperty = () => {
    if (newProperty.title && newProperty.price && newProperty.location) {
      const property = {
        ...newProperty,
        id: properties.length + 1,
        status: "Active",
        buyers: [],
      };
      setProperties([...properties, property]);
      setNewProperty({ title: "", price: "", location: "" });
    }
  };

  const sendMessage = () => {
    if (
      newMessage.sender &&
      newMessage.email &&
      newMessage.property &&
      newMessage.message
    ) {
      const message = {
        ...newMessage,
        id: messages.length + 1,
        date: new Date().toISOString().split("T")[0],
        status: "Unread",
      };
      setMessages([...messages, message]);
      setNewMessage({ sender: "", email: "", property: "", message: "" });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6 bg-gray-50 mt-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Earnings Overview */}
          <div className="bg-white shadow-lg rounded-lg p-6 col-span-2">
            <div className="flex items-center mb-4">
              <TrendingUp className="mr-2 text-blue-500" />
              <h2 className="text-xl font-bold">Monthly Earnings</h2>
            </div>
            <LineChart width={600} height={300} data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="earnings" stroke="#8884d8" />
            </LineChart>
          </div>

          {/* Property Status */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Home className="mr-2 text-green-500" />
              <h2 className="text-xl font-bold">Property Status</h2>
            </div>
            <PieChart width={300} height={300}>
              <Pie
                data={propertyStatusData}
                cx={150}
                cy={150}
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {propertyStatusData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>

          {/* Add New Property */}
          <div className="bg-white shadow-lg rounded-lg p-6 col-span-1">
            <div className="flex items-center mb-4">
              <PlusCircle className="mr-2 text-purple-500" />
              <h2 className="text-xl font-bold">Add New Property</h2>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Property Title"
                value={newProperty.title}
                onChange={(e) =>
                  setNewProperty({ ...newProperty, title: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
              <input
                type="number"
                placeholder="Price"
                value={newProperty.price}
                onChange={(e) =>
                  setNewProperty({ ...newProperty, price: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Location"
                value={newProperty.location}
                onChange={(e) =>
                  setNewProperty({ ...newProperty, location: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
              <button
                onClick={addProperty}
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Add Property
              </button>
            </div>
          </div>

          {/* Property Listings */}
          <div className="bg-white shadow-lg rounded-lg p-6 col-span-2">
            <div className="flex items-center mb-4">
              <BarChart2 className="mr-2 text-red-500" />
              <h2 className="text-xl font-bold">My Properties</h2>
            </div>
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Property</th>
                  <th className="p-2 text-left">Price</th>
                  <th className="p-2 text-left">Location</th>
                  <th className="p-2 text-left">Status</th>
                  <th className="p-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {properties.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="p-4 text-center">
                      No properties available
                    </td>
                  </tr>
                ) : (
                  properties.map((property) => (
                    <tr key={property.id} className="border-b">
                      <td className="p-2">{property.title}</td>
                      <td className="p-2">
                        ${property.price.toLocaleString()}
                      </td>
                      <td className="p-2">{property.location}</td>
                      <td className="p-2">
                        <span
                          className={`px-2 py-1 rounded text-xs 
                          ${
                            property.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : property.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {property.status}
                        </span>
                      </td>
                      <td className="p-2">
                        <button className="mr-2 text-blue-500 hover:text-blue-700">
                          <Eye size={18} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Potential Buyers */}
          <div className="bg-white shadow-lg rounded-lg p-6 col-span-1">
            <div className="flex items-center mb-4">
              <Users className="mr-2 text-teal-500" />
              <h2 className="text-xl font-bold">Potential Buyers</h2>
            </div>
            <div className="space-y-4">
              {properties.flatMap((property) =>
                property.buyers.map((buyer) => (
                  <div key={buyer.name} className="bg-gray-100 p-3 rounded">
                    <div className="flex justify-between">
                      <span className="font-semibold">{buyer.name}</span>
                      <span className="text-sm text-gray-500">
                        {buyer.interestedDate}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {property.title}
                    </div>
                    <div className="text-sm">📞 {buyer.contact}</div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Messages Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 col-span-2">
            <div className="flex items-center mb-4">
              <Mail className="mr-2 text-indigo-500" />
              <h2 className="text-xl font-bold">Messages</h2>
            </div>

            {/* Messages List */}
            <div className="mt-6">
              {messages.length === 0 ? (
                <div className="text-center text-gray-500">
                  No messages yet.
                </div>
              ) : (
                messages.map((message) => (
                  <div
                    key={message.id}
                    className="bg-gray-100 p-4 mb-4 rounded"
                  >
                    <div className="flex justify-between">
                      <div>
                        <span className="font-semibold">{message.sender}</span>
                        <span className="text-sm text-gray-500">
                          {message.date}
                        </span>
                      </div>
                      <div>
                        <span
                          className={`px-2 py-1 rounded text-xs 
                          ${
                            message.status === "Unread"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {message.status}
                        </span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      Property: {message.property}
                    </div>
                    <div className="text-sm">{message.message}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Seller;
