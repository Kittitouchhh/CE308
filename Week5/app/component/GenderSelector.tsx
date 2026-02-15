import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface Props {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  touched?: boolean;
}

const options = ["ชาย", "หญิง", "ไม่ระบุ"];

export default function GenderSelector({
  value,
  onChange,
  error,
  touched,
}: Props) {
  return (
    <View className="mb-4">
      <Text className="text-gray-700 font-semibold mb-2">
        เพศ
      </Text>

      <View className="flex-row justify-between">
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            className="flex-row items-center"
            onPress={() => onChange(option)}
          >
            <View
              className={`w-5 h-5 border-2 rounded-full mr-2 items-center justify-center ${
                value === option
                  ? "border-blue-600"
                  : "border-gray-400"
              }`}
            >
              {value === option && (
                <View className="w-2.5 h-2.5 bg-blue-600 rounded-full" />
              )}
            </View>
            <Text>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {touched && error && (
        <Text className="text-red-500 text-sm mt-1">
          {error}
        </Text>
      )}
    </View>
  );
}
