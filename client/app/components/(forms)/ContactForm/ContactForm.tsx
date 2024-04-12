"use client";
import React from "react";
import styles from "./ContactForm.module.scss";
import FormSection from "../FormSection/FormSection";
import Input from "../FormSection/Input/Input";
import axios from "axios";
import Header from "../../Header/Header";
import FadeInWrapper from "../../common/FadeInWrapper/FadeInWrapper";
import { useLanguageStore } from "@/app/utils/globalStore";
import textContent from "@/public/text/register.json";

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

    const { language } = useLanguageStore();
    const text = textContent[language];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = fetchFormData(e);
        let firstname = formData["firstname"];
        let lastname = formData["lastname"];
        let email = formData["email"];
        let phone = formData["phone"];
        let message = formData["message"];
        axios
            .post(process.env.NEXT_PUBLIC_API_URL + "/contact", {
                firstname: firstname,
                lastname: lastname,
                email: email,
                phone: phone,
                message: message,
            })
            .then((res) => (e.target as HTMLFormElement).reset())
            .catch((err) => console.log(err));
        fetchFormData(e);
    };

    return (
        <form className={styles.container} onSubmit={(e) => handleSubmit(e)}>
            <Header header={text.header2} />
            <FormSection>
                <Input label={text.section1.fn} required />
                <Input label={text.section1.ln} required />
                <Input label={text.section1.email} required />
                <Input label={text.section1.phone} />
                <Input label={text.section2.ms} big />
            </FormSection>
            <FadeInWrapper heightAuto widthAuto delay={0.5} margin={5}>
                <input
                    className={styles.submit}
                    type="submit"
                    value={text.button}
                />
            </FadeInWrapper>
        </form>
    );
};

export default ContactForm;
