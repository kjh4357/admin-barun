import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import { db } from "../../lib/firebase";
import { collection, query, getDocs } from "firebase/firestore";
import { getFormTranslate } from "../../helper/common";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    align: "center",
  },
  {
    title: "이름",
    dataIndex: "name",
    key: "name",
    align: "center",
  },
  {
    title: "전화번호",
    dataIndex: "phone",
    key: "phone",
    align: "center",
  },
  {
    title: "시공 지역",
    dataIndex: "address",
    key: "address",
    align: "center",
  },
  {
    title: "시공 예상 시기",
    dataIndex: "expectDate",
    key: "expectDate",
    align: "center",
  },
  {
    title: "건물 형태",
    dataIndex: "form",
    key: "form",
    align: "center",
    render: (form) => <span>{getFormTranslate(form)}</span>,
  },
  {
    title: "그린리모델링 적용여부",
    dataIndex: "greenRemodeling",
    key: "greenRemodeling",
    align: "center",
    render: (bool) => <span>{bool ? "동의" : "비동의"}</span>,
  },
  {
    title: "기타 문의",
    dataIndex: "memo",
    key: "memo",
    align: "center",
    render: (text) => <p className="text-left">{text}</p>,
  },
  {
    title: "개인정보동의",
    dataIndex: "privacyAgree",
    key: "privacyAgree",
    align: "center",
    render: (bool) => <span>{bool ? "동의" : "비동의"}</span>,
  },
  {
    title: "신청 일자",
    dataIndex: "createdAt",
    key: "createdAt",
    align: "center",
    render: (date) => <p>{date}</p>,
  },
  // {
  //   title: "신청일자",
  //   dataIndex: "tags",
  //   key: "tags",
  // },
];

const Inquiry = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getInquiryList();
  }, []);
  const getInquiryList = async () => {
    const newList = [];
    const q = query(collection(db, "remodeling"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query  oc snapshots
      newList.push(doc.data());
    });
    setList(newList);

    // const docRef = doc(db, "remodeling");
    // const docSnap = await getDoc(docRef);
    // console.log(docSnap);
  };
  return (
    <div>
      <div>
        <Table columns={columns} dataSource={list} />
      </div>
    </div>
  );
};
export default Inquiry;
