import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Modal from "../../Components/Modal/Modal";

const Table = () => {
  const [showModal, setShowModal] = useState(false);
  const token = localStorage.getItem("token");
  const { user, loading,bills,setBills } = useContext(AuthContext);
  const [refresh, setRefresh] = useState(false);
  const [search, setSearch] = useState("");
  // const [bills, setBills] = useState([]);
  const navigate = useNavigate();
  const time = new Date().toLocaleString();

  useEffect(() => {
    if (!loading) {
      if (!token && !user?.email) {
        navigate("../login");
      }
    }
  }, [token, user?.email, navigate, loading]);

  useEffect(() => {
    if (search === "") {
      fetch(`${process.env.REACT_APP_serverURL}/api/billing-list`)
        .then((res) => res.json())
        .then((data) => setBills(data));
    } else {
      fetch(`${process.env.REACT_APP_serverURL}/api/billing-list/${search}`)
        .then((res) => res.json())
        .then((data) => setBills(data));
    }
  }, [search,refresh]);

  console.log(bills);

  return (
    <>
      {loading ? (
        <h1 className="text-2xl text-center">Loading...</h1>
      ) : (
        <div className="mt-10 text-xl">
          <div className="md:flex justify-between bg-[#8ecae6] py-3 md:px-12 rounded px-4">
            <div className="flex md:gap-3 gap-2 items-center">
              <h1 className="text-2xl ">Billing</h1>
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="border rounded-lg p-1 text-[16px]"
              />
            </div>
            <div className="mt-5 md:mt-0">
              <button
                onClick={() => setShowModal(true)}
                className="text-black bg-white py-1 px-4 rounded-lg border border-white hover:bg-[#8ecae6]  "
              >
                Add New Bill
              </button>
            </div>
          </div>

          {/* table  */}

          <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200 mt-10">
            <table className="min-w-full divide-y divide-gray-200 text-sm border-collapse ">
              <thead className="bg-[#8ecae6]">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 text-left text-lg text-gray-900 border border-r-gray-200">
                    Billing ID
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left text-lg text-gray-900 border border-r-gray-200">
                    Full Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left text-lg text-gray-900 border border-r-gray-200">
                    Email
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left text-lg text-gray-900 border border-r-gray-200">
                    Phone
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left text-lg text-gray-900 border border-r-gray-200">
                    Paid Amount
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left text-lg text-gray-900 ">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y  divide-gray-200">
                {bills?.length > 0 ? (
                  <>
                    {bills.map((bill) => (
                      <tr key={bill._id}>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700  border border-r-gray-200">
                          {bill.generatingId}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-r-gray-200">
                        {bill.fullName}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-r-gray-200">
                        {bill.email}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-r-gray-200">
                        {bill.phone}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-r-gray-200">
                        {bill.amount}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex gap-3 font-bold">
                          
                            <button>Edit</button> <h1>|</h1>
                            <button>Delete</button>
                         
                        </td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <tr className="text-xl m-2 text-red-600 w-full whitespace-nowrap px-4 py-2">
                    <td>No Bills Found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {showModal && (
            <Modal
              setShowModal={setShowModal}
              user={user}
              time={time}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Table;
