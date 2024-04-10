"use client";
import React from "react";
import styles from "./ContactForm.module.scss";
import FormSection from "../FormSection/FormSection";
import Input from "../FormSection/Input/Input";
import axios from "axios";

const ContactForm = () => {
    const fetchFormData = (e: React.FormEvent<HTMLFormElement>) => {
        const form = e.target as HTMLFormElement;
        const formData = Object.fromEntries(
            Array.from(
                form.querySelectorAll("input, textarea") as NodeListOf<
                    HTMLInputElement | HTMLTextAreaElement
                >
            ).map((element) => [element.name, element.value])
        );

        return formData;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = fetchFormData(e);
        let firstname = formData["firstname"];
        let lastname = formData["lastname"];
        let email = formData["email"];
        let phone = formData["phone"];
        let message = formData["message"];
        console.log(process.env.NEXT_PUBLIC_API_URL);
        axios
            .post(process.env.NEXT_PUBLIC_API_URL + "/contact", {
                firstname: firstname,
                lastname: lastname,
                email: email,
                phone: phone,
                message: message,
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        fetchFormData(e);
    };

    return (
        <form className={styles.container} onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.header}>Get in touch</div>
            <FormSection>
                <Input label="Firstname" required />
                <Input label="Lastname" required />
                <Input label="Email" required />
                <Input label="Phone" />
                <Input label="Message" big />
            </FormSection>

            <input className={styles.submit} type="submit" value={"submit"} />
        </form>
    );
};

export default ContactForm;
