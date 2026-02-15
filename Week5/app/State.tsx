import { useState } from "react";

interface FormData{
    fullname: string;
    lastname: string;
    email: string;
    phone: string;
}

const [formData, setFormData] = useState<FormData>({
    fullname: "",
    lastname: "",
    email: "",
    phone: "",
})

const handleChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({
        ...prev,
        [name]: value
    }));
};