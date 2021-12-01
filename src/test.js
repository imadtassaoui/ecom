import firebase from "firebase/compat/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("jPG6lyqHCCTFojWm0LTx")
  .collection("cartItems")
  .doc("RKxMdWoiz2qn0siLV9I9");
// or
firestore.doc("users/jPG6lyqHCCTFojWm0LTx");
