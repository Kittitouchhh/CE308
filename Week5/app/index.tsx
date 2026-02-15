import "./global.css";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import CustomInput from "./component/Input";
import CustomButton from "./component/CustomButton";
import Checkbox from "./component/Checkbox";
import GenderSelector from "./component/GenderSelector";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  address: string;
  gender: string;
  dob: Date | null;
  accepted: boolean;
}

export default function Index() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    gender: "",
    dob: null,
    accepted: false,
  });

  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  const maxAddressLength = 200;

  const validate = (name: string, value: any): string | undefined => {
    switch (name) {
      case "address":
        if (value.trim().length < 10)
          return "กรุณากรอกที่อยู่อย่างน้อย 10 ตัวอักษร";
        return;

      case "gender":
        if (!value) return "กรุณาเลือกเพศ";
        return;

      case "accepted":
        if (!value) return "กรุณายอมรับข้อตกลง";
        return;

      case "dob":
        if (!value) return "กรุณาเลือกวันเกิด";
        const today = new Date();
        const age = today.getFullYear() - value.getFullYear();
        if (age < 13) return "อายุต้องมากกว่า 13 ปี";
        return;

      default:
        return;
    }
  };

  const handleChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validate(name, value),
      }));
    }
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validate(name, formData[name as keyof FormData]),
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors: Record<string, string | undefined> = {};

    Object.keys(formData).forEach((key) => {
      const error = validate(key, formData[key as keyof FormData]);
      if (error) {
        valid = false;
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);

    const allTouched: Record<string, boolean> = {};
    Object.keys(formData).forEach((k) => (allTouched[k] = true));
    setTouched(allTouched);

    return valid;
  };

  const formatDate = (date: Date) => {
    const d = String(date.getDate()).padStart(2, "0");
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const y = date.getFullYear();
    return `${d}/${m}/${y}`;
  };

  const handleSubmit = () => {
    Keyboard.dismiss();

    if (!validateForm()) {
      Alert.alert("ข้อมูลไม่ครบ", "กรุณาตรวจสอบข้อมูลอีกครั้ง");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      Alert.alert("สำเร็จ!", "ลงทะเบียนสำเร็จ 🎉");
    }, 2000);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-gray-100"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
          <View className="bg-blue-600 px-6 pt-14 pb-8">
            <Text className="text-white text-2xl font-bold">
              ลงทะเบียนสมาชิก
            </Text>
            <Text className="text-blue-100 mt-2">
              กรุณากรอกข้อมูลให้ครบถ้วน
            </Text>
          </View>

          <View className="px-6 mt-6">

            {/* Address */}
            <View className="mb-4">
              <Text className="text-gray-700 font-semibold mb-2">
                ที่อยู่
              </Text>

              <TextInput
                multiline
                numberOfLines={4}
                value={formData.address}
                onChangeText={(v) => handleChange("address", v)}
                onBlur={() => handleBlur("address")}
                maxLength={maxAddressLength}
                className={`border-2 rounded-lg px-4 py-3 ${
                  errors.address ? "border-red-500" : "border-gray-300"
                }`}
                style={{ minHeight: 100, textAlignVertical: "top" }}
              />

              <View className="flex-row justify-between mt-1">
                {errors.address ? (
                  <Text className="text-red-500 text-sm">
                    {errors.address}
                  </Text>
                ) : (
                  <View />
                )}
                <Text className="text-gray-400 text-sm">
                  {formData.address.length}/{maxAddressLength}
                </Text>
              </View>
            </View>

            {/* Gender */}
            <GenderSelector
              value={formData.gender}
              onChange={(val) => handleChange("gender", val)}
              error={errors.gender}
              touched={touched.gender}
            />

            {/* DOB */}
            <View className="mb-4">
              <Text className="text-gray-700 font-semibold mb-2">
                วันเกิด
              </Text>

              <TouchableOpacity
                className="border-2 border-gray-300 rounded-lg px-4 py-3"
                onPress={() => setShowPicker(true)}
              >
                <Text>
                  {formData.dob
                    ? formatDate(formData.dob)
                    : "เลือกวันเกิด"}
                </Text>
              </TouchableOpacity>

              {errors.dob && (
                <Text className="text-red-500 text-sm mt-1">
                  {errors.dob}
                </Text>
              )}

              {showPicker && (
                <DateTimePicker
                  value={formData.dob || new Date()}
                  mode="date"
                  display="default"
                  onChange={(event, date) => {
                    setShowPicker(false);
                    if (date) handleChange("dob", date);
                  }}
                />
              )}
            </View>

            {/* Checkbox */}
            <Checkbox
              label="ฉันยอมรับข้อกำหนดและเงื่อนไข"
              checked={formData.accepted}
              onPress={() =>
                handleChange("accepted", !formData.accepted)
              }
              error={errors.accepted}
              touched={touched.accepted}
            />

            <View className="mt-4 space-y-3">
              <CustomButton
                title="ลงทะเบียน"
                onPress={handleSubmit}
                loading={isLoading}
              />
            </View>

          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
