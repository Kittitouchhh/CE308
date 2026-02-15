import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onPress: () => void;
  error?: string;
  touched?: boolean;
}

export default function Checkbox({
  label,
  checked,
  onPress,
  error,
  touched,
}: CheckboxProps) {
  return (
    <View className="mb-4">
      <TouchableOpacity
        className="flex-row items-center"
        onPress={onPress}
      >
        <View
          className={`w-5 h-5 border-2 rounded mr-3 items-center justify-center ${
            checked ? "bg-blue-600 border-blue-600" : "border-gray-400"
          }`}
        >
          {checked && (
            <View className="w-2.5 h-2.5 bg-white rounded-sm" />
          )}
        </View>

        <Text className="text-gray-700">{label}</Text>
      </TouchableOpacity>

      {touched && error && (
        <Text className="text-red-500 text-sm mt-1">
          {error}
        </Text>
      )}
    </View>
  );
}
