import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Modal from "../../Components/Modal/Modal";

const Table = () => {
  const [showModal, setShowModal] = useState(false);
  const token = localStorage.getItem("token");
  const { user, loading, bills, setBills ,setRefresh,refresh} = useContext(AuthContext);
  // const [refresh, setRefresh] = useState(false);
  const [loadings,setLoadings] = useState(true);
  const [search, setSearch] = useState("");
  const [editbill, setEditBill] = useState(null);
  const [count, setCount] = useState(0);
  const [size, setSize] = useState(10);
  const [page, setPage] = useState(0);
  const pages = Math.ceil(count / size);

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
      setLoadings(true)
      fetch(
        `${process.env.REACT_APP_serverURL}/api/billing-list?page=${page}&size=${size}&email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setBills(data?.bills);
          setCount(data?.count);
          setLoadings(false)
        });
    } else {
      setLoadings(true)
      fetch(
        `${process.env.REACT_APP_serverURL}/api/billing-list/${search}?page=${page}&size=${size}&email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setBills(data?.bills);
          setCount(data?.count);
          setLoadings(false)
        });
    }
  }, [search, refresh, page, size, setBills,user?.email]);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoadings(true)
        fetch(`${process.env.REACT_APP_serverURL}/api/delete-billing/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            setLoadings(false)
            setRefresh(!refresh);
          });
      }
    });
  };

  const handleEdit = (bill) => {
    setShowModal(true);
    setEditBill(bill);
  };

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

             {
              loadings ? <tbody ><tr  className="text-2xl text-center"><td>Loadings ...</td></tr></tbody> :  <tbody className="divide-y  divide-gray-200">
              {bills?.length > 0 ? (
                <>
                  {bills?.map((bill) => (
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
                        <button onClick={() => handleEdit(bill)}>Edit</button>{" "}
                        <h1>|</h1>
                        <button onClick={() => handleDelete(bill._id)}>
                          Delete
                        </button>
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
             }
            </table>
            {/* pagination  */}
            <div className="my-5 flex items-center justify-center gap-3">
              {pages > 0 &&
                [...Array(pages).keys()]?.map((number) => (
                  <button
                    className={`${
                      page === number && "bg-[#8ecae6] "
                    } border-2 px-4 py-1.5 rounded-full font-bold`}
                    onClick={() => setPage(number)}
                    key={number}
                  >
                    {number + 1}
                  </button>
                ))}
            </div>
          </div>
          {showModal && (
            <Modal
              setShowModal={setShowModal}
              user={user}
              time={time}
              refresh={refresh}
              setRefresh={setRefresh}
              editbill={editbill}
              setEditBill={setEditBill}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Table;
