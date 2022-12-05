import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  CollectionReference,
  getDocs,
  query,
  QueryDocumentSnapshot,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import UserList from "../organisms/UserList";
import { auth, db } from "../../firebase";
import BackBtn from "../atoms/button/BackBtn";
import { User } from "../../types/types";

interface State {
  userId: string;
  follower: string[];
  uid: string;
}

function Follower() {
  const [followerUsers, setFollowerUsers] = useState<User[]>([]);

  const [loading, setLoading] = useState(true);

  //各ページからデータ取得
  const location = useLocation();
  const { userId, uid } = location.state as State;

  useEffect(() => {
    onAuthStateChanged(auth, async (currentUser: any) => {
      setLoading(false);

      const followerUserCollectionRef = query(
        collection(db, "user"),
        where("follow", "array-contains", userId)
      )as CollectionReference<User>;

      const followerUserDocId = await getDocs(followerUserCollectionRef);

      const newFollowerUserDocIds = followerUserDocId.docs as QueryDocumentSnapshot<User>[];

      const followerUserArray = newFollowerUserDocIds.map((doc) => doc.data());
      setFollowerUsers(followerUserArray);
    });
  }, []);

  console.log(followerUsers);

  return (
    <>
      {!loading && (
        <>
          <Header show={true} />
          {/* <Link to={"/profile"} state={{ userId: userId }}>
            ⬅︎
          </Link> */}
          <BackBtn />
          <UserList usersData={followerUsers} uid={uid} />
          <Footer />
        </>
      )}
    </>
  ); //return
}

export default Follower;
