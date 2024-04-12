"use client";
import React from "react";
import FormSection from "../FormSection/FormSection";
import styles from "./RegisterForm.module.scss";
import Input from "../FormSection/Input/Input";
import axios from "axios";
import Header from "../../Header/Header";
import FadeInWrapper from "../../common/FadeInWrapper/FadeInWrapper";

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
            <Header header={"Register"} />
            <FormSection title={"You"}>
                <Input label="Firstname" required />
                <Input label="Lastname" required />
                <Input label="Email" required />
                <Input label="Phone" />
                <Input label="Position" />
            </FormSection>
            <FormSection title={"Your Business"}>
                <Input label="Name" name="companyName" required />
                <Input label="Type" name="companyType" />
                <Input label="Website" name="companyWebsite" />
                <Input label="Address" name="companyAddress" />
                <Input
                    label="Estimated opening order quantity"
                    name="estimatedQuantity"
                />
                <Input
                    label="Number of locations"
                    name="numberOfLocations"
                    type="number"
                />
                <Input label="Notes" name="message" big />
            </FormSection>
            <FadeInWrapper heightAuto widthAuto margin={0}>
                <input
                    className={styles.submit}
                    type="submit"
                    value={"submit"}
                />
            </FadeInWrapper>
        </form>
    );
};

export default RegisterForm;
