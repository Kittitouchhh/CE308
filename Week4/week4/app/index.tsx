//3.1
// import { Text } from "react-native";
// import { CenteredView } from "./component/CenteredView";
// import { Card } from "./component/Card";

// export default function Index() {
//   const data = [
//     { id: "1", name: "กล้วยตาก", price:50, amount:100,btnColor:"red",btnSize:"md"},
//     { id: "2", name: "มะม่วงตาก", price:50, amount:250,btnColor:"red",btnSize:"md"},
//     { id: "3", name: "พระเจ้าตาก", price:45050,amount:0,btnColor:"red",btnSize:"md" },
//   ]

//   return (
//     <>
//       <CenteredView backgroundColor="bg-blue-100">
//         <Text className=" text-4xl text-blue-600 font-bold">Hello NativeWind!</Text>
//         <Card itemsCard={data} />
//       </CenteredView>
//     </>

//   );
// }

//3.2
import { View } from "react-native";
import { useState } from "react";
import { Input } from "./component/Input";
import { CustomButton } from "./component/Button";

export const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [pcs, setPcs] = useState("");

  const handleSubmit = () => {
    console.log("Product:", productName);
    console.log("Price:", price);
    console.log("PCS:", pcs);
  };

  return (
    <View className="p-4 bg-gray-100 flex-1">
      <Input
        label="ชื่อสินค้า"
        value={productName}
        onChangeText={setProductName}
        placeholder="กรอกชื่อสินค้า"
      />

      <Input
        label="ราคา"
        value={price}
        onChangeText={setPrice}
        placeholder="กรอกราคา"
      />

      <Input
        label="จำนวน"
        value={pcs}
        onChangeText={setPcs}
        placeholder="กรอกจำนวนสินค้า"
      />

      <CustomButton
        title="Submit"
        size="md"
        variant="blue"
        onPress={handleSubmit}
      />
    </View>
  );
};

