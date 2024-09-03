import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { collection, doc, getDoc, query, where } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import { Colors } from "../../constants/Colors";
import Intro from "../../components/BusinessDetail/Intro";
import ActionButton from "../../components/BusinessDetail/ActionButton";
import About from "../../components/BusinessDetail/About";
import Reviews from "../../components/BusinessDetail/Reviews";

export default function BusinessDetail() {
  const { businessid } = useLocalSearchParams();
  const [businessDetail, setBusinessDetail] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetBusinessDetailById();
  }, []);

  const GetBusinessDetailById = async () => {
    setLoading(true);
    const docRef = doc(db, "BusinessList", businessid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setBusinessDetail({ id: docSnap.id, ...docSnap.data() });
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const renderContent = () => (
    <View>
      {/* Intro */}
      <Intro business={businessDetail} />

      {/* Action Buttons */}
      <ActionButton business={businessDetail} />

      {/* About Section */}
      <About business={businessDetail} />

      {/* Review Section */}
      <Reviews business={businessDetail} />
    </View>
  );

  return (
    // <ScrollView>
    //   {loading ? (
    //     <ActivityIndicator
    //       style={{ marginTop: "70%" }}
    //       size={"large"}
    //       color={Colors.PRIMARY}
    //     />
    //   ) : (
    //     <View>
    //       {/* Intro */}
    //       <Intro business={businessDetail} />

    //       {/* Action Buttons  */}
    //       <ActionButton business={businessDetail} />

    //       {/* About Section  */}
    //       <About business={businessDetail} />

    //       {/* Review Section  */}
    //       <Reviews business={businessDetail} />
    //     </View>
    //   )}
    // </ScrollView>

    <>
      {loading ? (
        <ActivityIndicator
          style={{ marginTop: "70%" }}
          size={"large"}
          color={Colors.PRIMARY}
        />
      ) : (
        <FlatList
          data={[]}
          renderItem={null}
          ListHeaderComponent={renderContent}
        />
      )}
    </>
  );
}
