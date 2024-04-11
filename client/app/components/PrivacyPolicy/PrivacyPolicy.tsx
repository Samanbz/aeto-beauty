import React from "react";
import styles from "./PrivacyPolicy.module.scss";
import textContent from "@/public/text/privacy-policy.json";
import { parseSpan } from "@/app/utils/textUtils";
import Header from "../Header/Header";
const PrivacyPolicy = () => {
    const textBase = textContent.en;
    const text = textBase.content;

    return (
        <div className={styles.container}>
            <Header header={textBase.title} />

            <div className={styles.content}>
                <div className={styles.section}>
                    <h2 className={styles.header}>{text.section1.header}</h2>
                    <p className={styles.body}>{text.section1.body}</p>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.header}>{text.section2.header}</h2>
                    <p className={styles.body}>
                        {parseSpan(text.section2.body)}
                    </p>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.header}>{text.section3.header}</h2>
                    <div className={styles.subsection}>
                        <h3 className={styles.subheader}>
                            {text.section3.subsection1.subheader}
                        </h3>
                        <p className={styles.body}>
                            {text.section3.subsection1.body}
                        </p>
                    </div>
                    <div className={styles.subsection}>
                        <h3 className={styles.subheader}>
                            {text.section3.subsection2.subheader}
                        </h3>
                        <p className={styles.body}>
                            {text.section3.subsection2.body.listheader}
                        </p>
                        <ul className={styles.list}>
                            {text.section3.subsection2.body.listitems.map(
                                (item) => (
                                    <li className={styles.body}>
                                        <span>{item.term}</span>{" "}
                                        {item.definition}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.header}>{text.section4.header}</h2>
                    <div className={styles.subsection}>
                        <h3 className={styles.subheader}>
                            {text.section4.subsection1.subheader}
                        </h3>

                        <div className={styles.subsubsection}>
                            <h4 className={styles.subsubheader}>
                                {
                                    text.section4.subsection1.subsubsection1
                                        .subsubheader
                                }
                            </h4>
                            <p className={styles.body}>
                                {
                                    text.section4.subsection1.subsubsection1
                                        .body.listheader
                                }
                            </p>
                            <ul className={styles.list}>
                                {text.section4.subsection1.subsubsection1.body.listitems.map(
                                    (item) => (
                                        <li className={styles.body}>{item}</li>
                                    )
                                )}
                            </ul>
                        </div>
                        <div className={styles.subsubsection}>
                            <h4 className={styles.subsubheader}>
                                {
                                    text.section4.subsection1.subsubsection2
                                        .subsubheader
                                }
                            </h4>
                            <p className={styles.body}>
                                {text.section4.subsection1.subsubsection2.p1}
                            </p>
                            <p className={styles.body}>
                                {text.section4.subsection1.subsubsection2.p2}
                            </p>
                            <p className={styles.body}>
                                {text.section4.subsection1.subsubsection2.p3}
                            </p>
                            <p className={styles.body}>
                                {text.section4.subsection1.subsubsection2.p4}
                            </p>
                        </div>
                        <div className={styles.subsubsection}>
                            <h4 className={styles.subsubheader}>
                                {
                                    text.section4.subsection1.subsubsection3
                                        .subsubheader
                                }
                            </h4>
                            <p className={styles.body}>
                                {
                                    text.section4.subsection1.subsubsection3
                                        .body.listheader1
                                }
                            </p>
                            <ul className={styles.list}>
                                {text.section4.subsection1.subsubsection3.body.listitems1.map(
                                    (item) => (
                                        <li className={styles.body}>
                                            <span>{item.term}</span>{" "}
                                            {item.definition}
                                        </li>
                                    )
                                )}
                            </ul>
                            <p className={styles.body}>
                                {
                                    text.section4.subsection1.subsubsection3
                                        .body.p1
                                }
                                <span className={styles.link}>
                                    {
                                        text.section4.subsection1.subsubsection3
                                            .body.link
                                    }
                                </span>
                            </p>
                            <p className={styles.body}>
                                {
                                    text.section4.subsection1.subsubsection3
                                        .body.listheader2
                                }
                            </p>
                            <ul className={styles.list}>
                                {text.section4.subsection1.subsubsection3.body.listitems2.map(
                                    (item) => (
                                        <li className={styles.body}>
                                            <span>{item.term}</span>{" "}
                                            {item.definition}
                                        </li>
                                    )
                                )}
                            </ul>
                            <p className={styles.body}>
                                {
                                    text.section4.subsection1.subsubsection3
                                        .body.p2
                                }
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.header}>{text.section5.header}</h2>
                    <p className={styles.body}>
                        {text.section5.body.listheader1}
                    </p>
                    <ul className={styles.list}>
                        {text.section5.body.listitems1.map((item) => (
                            <li className={styles.body}>
                                <span>{item.term}</span>
                                {item.definition}
                            </li>
                        ))}
                    </ul>
                    <p className={styles.body}>
                        {text.section5.body.listheader2}
                    </p>
                    <ul className={styles.list}>
                        {text.section5.body.listitems2.map((item) => (
                            <li className={styles.body}>
                                <span>{item.term}</span>
                                {item.definition}
                            </li>
                        ))}
                    </ul>
                    <p className={styles.body}>
                        {text.section5.body.listheader1}
                    </p>
                    <ul className={styles.list}>
                        {text.section5.body.listitems1.map((item) => (
                            <li className={styles.body}>
                                <span>{item.term}</span>
                                {item.definition}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.header}>{text.section6.header}</h2>
                    <p className={styles.body}>{text.section6.p1}</p>
                    <p className={styles.body}>{text.section6.p2}</p>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.header}>{text.section7.header}</h2>
                    <p className={styles.body}>{text.section7.p1}</p>
                    <p className={styles.body}>{text.section7.p2}</p>
                    <p className={styles.body}>{text.section7.p3}</p>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.header}>{text.section8.header}</h2>
                    <div className={styles.subsection}>
                        <h3 className={styles.subheader}>
                            {text.section8.subsection1.subheader}
                        </h3>
                        <p className={styles.body}>
                            {text.section8.subsection1.body}
                        </p>
                    </div>
                    <div className={styles.subsection}>
                        <h3 className={styles.subheader}>
                            {text.section8.subsection2.subheader}
                        </h3>
                        <p className={styles.body}>
                            {text.section8.subsection2.body}
                        </p>
                    </div>
                    <div className={styles.subsection}>
                        <h3 className={styles.subheader}>
                            {text.section8.subsection3.subheader}
                        </h3>
                        <p className={styles.body}>
                            {text.section8.subsection3.body.listheader}
                        </p>
                        <ul className={styles.list}>
                            {text.section8.subsection3.body.listitems.map(
                                (item) => (
                                    <li className={styles.body}>{item}</li>
                                )
                            )}
                        </ul>
                    </div>
                    <div className={styles.subsection}>
                        <h3 className={styles.subheader}>
                            {text.section8.subsection4.subheader}
                        </h3>
                        <p className={styles.body}>
                            {text.section8.subsection4.body}
                        </p>
                    </div>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.header}>{text.section9.header}</h2>
                    <p className={styles.body}>{text.section9.p1}</p>
                    <p className={styles.body}>{text.section9.p2}</p>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.header}>{text.section10.header}</h2>
                    <p className={styles.body}>{text.section10.p1}</p>
                    <p className={styles.body}>{text.section10.p2}</p>
                    <p className={styles.body}>{text.section10.p3}</p>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.header}>{text.section11.header}</h2>
                    <p className={styles.body}>
                        {text.section11.body.listheader}
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.email}>
                            {text.section11.body.listitems[0]} info
                            <span>
                                <span>@</span>
                            </span>
                            aeto-beauty<span>.</span>c<span>om</span>
                        </li>
                        <li className={styles.phone}>
                            {text.section11.body.listitems[1]} +49 69 6677 411
                            58
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
