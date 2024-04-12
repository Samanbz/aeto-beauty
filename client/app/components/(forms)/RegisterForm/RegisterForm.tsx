"use client";
import React from "react";
import FormSection from "../FormSection/FormSection";
import styles from "./RegisterForm.module.scss";
import Input from "../FormSection/Input/Input";
import axios from "axios";
import Header from "../../Header/Header";
import FadeInWrapper from "../../common/FadeInWrapper/FadeInWrapper";
import { useLanguageStore } from "@/app/utils/globalStore";
import textContent from "@/public/text/register.json";

const RegisterForm = () => {
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
        let position = formData["position"];

        let companyName = formData["companyName"];
        let companyType = formData["companyType"];
        let companyWebsite = formData["companyWebsite"];
        let companyAddress = formData["companyAddress"];
        let estimatedQuantity = formData["estimatedQuantity"];
        let numberOfLocations = parseInt(formData["numberOfLocations"]) || -1;
        let message = formData["message"];

        // console.log(formData);
        // console.log(
        //     "firstname: " + firstname + "\n",
        //     "lastname: " + lastname + "\n",
        //     "email: " + email + "\n",
        //     "phone: " + phone + "\n",
        //     "position: " + position + "\n",
        //     "companyName: " + companyName + "\n",
        //     "companyType: " + companyType + "\n",
        //     "companyWebsite: " + companyWebsite + "\n",
        //     "companyAddress: " + companyAddress + "\n",
        //     "estimatedQuantity: " + estimatedQuantity + "\n",
        //     "numberOfLocations: " + numberOfLocations + "\n",
        //     "message: " + message + "\n"
        // );
        axios
            .post(process.env.NEXT_PUBLIC_API_URL + "/register", {
                firstname: firstname,
                lastname: lastname,
                email: email,
                phone: phone,
                position: position,
                company_name: companyName,
                company_type: companyType,
                company_website: companyWebsite,
                company_address: companyAddress,
                estimated_quantity: estimatedQuantity,
                num_of_locations: numberOfLocations,
                message: message,
            })
            .then((res) => (e.target as HTMLFormElement).reset())
            .catch((err) => console.log(err));
    };
    return (
        <form className={styles.container} onSubmit={(e) => handleSubmit(e)}>
            <Header header={text.header} />
            <FormSection title={text.section1.header}>
                <Input label={text.section1.fn} required />
                <Input label={text.section1.ln} required />
                <Input label={text.section1.email} required />
                <Input label={text.section1.phone} />
                <Input label={text.section1.position} />
            </FormSection>
            <FormSection title={text.section2.header}>
                <Input label={text.section2.cn} name="companyName" required />
                <Input label={text.section2.ct} name="companyType" />
                <Input label={text.section2.cw} name="companyWebsite" />
                <Input label={text.section2.ca} name="companyAddress" />
                <Input label={text.section2.eq} name="estimatedQuantity" />
                <Input
                    label={text.section2.nol}
                    name="numberOfLocations"
                    type="number"
                />
                <Input label={text.section2.ms} name="message" big />
            </FormSection>
            <FadeInWrapper heightAuto widthAuto margin={0}>
                <input
                    className={styles.submit}
                    type="submit"
                    value={text.button}
                />
            </FadeInWrapper>
        </form>
    );
};

export default RegisterForm;
