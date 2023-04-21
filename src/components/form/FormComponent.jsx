import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button, Modal } from "react-bootstrap";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router";

import emailjs from "@emailjs/browser";
import {
  db,
  updateData,
  useDbData,
  useDbUpdate,
} from "../../database/firebase";
export const FormComponent = ({ setTitle, setDocument, setUid }) => {
  
  const apply = localStorage.getItem("apply");
  console.log(apply);
  let [position, setPosition] = useState("");
  useEffect(() => {
    if (apply === "internship-software-engineer") {
      setPosition("Internship Software Engineer");
    } else if (apply === "full-time-software-engineer") {
      setPosition("Full-Time Software Engineer");
    } else if (apply === "internship-data-scientist") {
      setPosition("Internship Data Scientist");
    } else if (apply === "full-time-data-scientist") {
      setPosition("Full-Time Data Scientist");
    } else if (apply === "internship-project-manager") {
      setPosition("Internship Project Manager");
    } else if (apply === "full-time-project-manager") {
      setPosition("Full-Time Project Manager");
    }
  }, [apply]);
  console.log(position);
  // if(apply == "internship-software-engineer"){
  //   setPosition("Internship Software Engineer")
  // }else if(apply == "full-time-software-engineer"){
  //   setPosition("Full-Time Software Engineer")
  // }else if(apply == "internship-data-scientist"){
  //   setPosition("Internship Data Scientist")
  // }else if(apply == "full-time-data-scientist"){
  //   setPosition("Full-Time Data Scientist")
  // }else if(apply == "internship-project-manager"){
  //   setPosition("Internship Project Manager")
  // }else if(apply == "full-time-project-manager"){
  //   setPosition("Full-Time Project Manager")
  // }
  console.log(setTitle);
  console.log(setUid);
  let [firstN, setUsername] = useState("");
  let [lastN, setlastname] = useState("");
  let [email, setEmail] = useState("");
  let [location, setLocation] = useState("");
  let [education, setEducation] = useState("");
  let [accomplish, setAccomplish] = useState("");
  let [visa, setVisa] = useState("");
  let [resume, setResume] = useState("");
  let [link, setLink] = useState("");

  
  let [privacyChecked, setPrivacyChecked] = useState(false); // new state variable for privacy checkbox

  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const handleClose2 = () => setShowSuccessModal(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const navigate = useNavigate();

  


  if(setTitle == ""){}
  const form = useRef();

  async function writeNewPost(e) {
    e.preventDefault(); // prevent form submission when the Apply button is clicked

    if (
      !firstN ||
      !lastN ||
      !email ||
      !location ||
      !education ||
      !accomplish ||
      !visa ||
      !link ||
      !resume ||
      !privacyChecked
    ) {
      // check if all fields are filled and privacy is checked
      setShow(true); // show warning modal
      return;
    }

    const postData = {
      id: 1,
      firstN: firstN,
      lastN: lastN,
      title: "Intern SDE", // PM | full-time ...
      email: email,
      location: location,
      education: education,
      accomplish: accomplish,
      visa: visa,
      link: link,
      resume: resume,
      uid: setUid,
      status: "Pending"
    };

    try {
      const docRef = await addDoc(collection(db, "resumes"), postData);

      setShowSuccessModal(true);
      navigate("/apply");

      console.log("Document written with ID: ", docRef.id);
      setDocument(docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    const templateParams = {
      user_email: email,
      user_name: firstN + " " + lastN,
      from_name: "Diamond Tofu",
      message: "Application submitted successfully.",
    };

    emailjs
      .send(
        "service_m6td8xi",
        "template_q7m09ga",
        templateParams,
        "34k_iE5a6LQj_hmU8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  async function getPosts() {
    // const dbRef = ref(getDatabase());
    // get(child(dbRef, `/testuser/${lastN}`))
    //   .then((snapshot) => {
    //     if (snapshot.exists()) {
    //       console.log(snapshot.val());
    //     } else {
    //       console.log("No data available");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    const querySnapshot = await getDocs(collection(db, "resumes"));
    return querySnapshot.docs.map((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);

      return doc.data();
    });
  }

  return (
    <>
      <section className="jobdes">
        <div className="container">
          <div className="px-9 pt-9 pb-9">
            <div className="text-center text-violet-700">
              <h1>{position}</h1>
            </div>
            <br />
            <form action="" ref={form}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  value={firstN}
                  name="user_name"
                  onChange={(event) => setUsername(event.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  value={lastN}
                  onChange={(event) => setlastname(event.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  name="user_email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Education</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Education"
                  value={education}
                  onChange={(event) => setEducation(event.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Top 3 accomplishments at work/school.</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  type="text"
                  placeholder="accomplishments"
                  value={accomplish}
                  onChange={(event) => setAccomplish(event.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label> Visa Status</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Visa"
                  value={visa}
                  onChange={(event) => setVisa(event.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Personal website/ LinkedIn </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Personal website/ LinkedIn"
                  value={link}
                  onChange={(event) => setLink(event.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>
                  Resume Link(put the resuem in Google Drive and set the access
                  to public){" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Resume Link"
                  value={resume}
                  onChange={(event) => setResume(event.target.value)}
                />
              </Form.Group>

              {/* Checkbox for privacy */}
              <Form.Group controlId="formBasicCheckbox">
                <p>
                  lease review Diamond Tofu's{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowPrivacyModal(true);
                    }}
                  >
                    privacy policy
                  </a>
                  , which we will update from time to time, for additional
                  information. Please choose your country of residence and
                  language to review the relevant privacy policy. I agree to
                  Diamond Tofu' retaining my personal information for up to five
                  years including any sensitive information I choose to share
                  for future employment opportunities as part of Diamond Tofu'’s
                  optional recruiting programs, as set out in Diamond Tofu’s
                  privacy policy.
                </p>
                <Form.Check
                  type="checkbox"
                  label="I agree to the privacy policy"
                  checked={privacyChecked}
                  onChange={(event) => setPrivacyChecked(event.target.checked)}
                />
              </Form.Group>
            </form>
            <br />
            <div className="btnpadding btn-block ">
              <Button onClick={writeNewPost}>Apply</Button>
            </div>
            {/* <div className="btnpadding btn-block ">
          <Button onClick={getPosts}>get post</Button>
        </div> */}
          </div>
        </div>

        {/* Warning modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Missing Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            Please fill out all fields and agree to the privacy policy before
            submitting your application.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={showSuccessModal} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Apply Successfully</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            Thank you {lastN} for applying this application.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose2}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal
          show={showPrivacyModal}
          onHide={() => setShowPrivacyModal(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Privacy Policy</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              LAST UPDATED: April 2023 The Diamond Tofu, Inc. and its
              subsidiaries and affiliates https://diamondtofu.com(“we”, “Diamond Tofu”)
              understand that your privacy is important.<br /><br />

              With this Privacy Policy, Diamond Tofu aims to make sure you understand how Diamond
              Tofu maintains and collects your personal information[1], explain
              the purposes of Diamond Tofu processing your personal information
              for how long and additionally inform you on your rights and give
              an understanding of certain requirements under any applicable data
              protection legislation that relate to data protection, privacy,
              the use of information relating to individuals, and or the
              information rights of individuals to which you and/or Diamond Tofu
              are subject to, and any relevant national laws implementing the
              same (“Applicable Data Privacy Laws”). This Privacy Policy only
              applies to the personal information of job applicants, potential
              candidates for employment, and participants of our optional
              recruiting programs and events. If you are a California resident,
              please see the California Addendum at the end of this Privacy
              Policy for further details on how we handle your information and
              how to exercise your rights. Some of our online recruiting
              activities enable access to external sites operated by third
              parties, which are not governed by this Privacy Policy. We
              encourage you to review the privacy policies of any such sites
              before you submit information there. <br /><br />
              WHAT INFORMATION DO WE COLLECT? <br />
              The types of personal information that Diamond Tofu
              requests from you and the ways that we process it are determined
              by the requirements of the Diamond Tofu office’s country in which
              the position is located, and not the country in which you reside.
              If you apply to more than one location or if the role to which you
              apply is available in more than one country, the types of personal
              information we request from you and the ways that we process it
              are determined by the requirements of all Diamond Tofu offices’
              countries in which the position is located. It can include e.g.
              your name, contact data of email address, phone number, CV/Resume
              information, employment and educational history, grades, and data
              relating to your recruiting performance, where applicable
              documentation required under immigration laws as well as criminal
              records or other data revealed during background screenings. In
              addition to information, you may submit directly to us now, we
              also collect information from third-party sources, such as
              professional recruiting firms, resume books, student
              organizations, and social media sites, and from Diamond Tofu
              employees who referred you for the role in order to populate your
              profile. As a result, you may see information in your profile
              which you did not provide directly to us. We encourage you to
              revise any data which you feel is inaccurate or outdated or that
              you prefer not to include and we thank you for your help in
              keeping your profile up to date. We may collect sensitive personal
              data about a candidate to the extent prescribed by applicable laws
              (e.g., U.S. equal opportunity laws) and, where applicable, to
              support our efforts to support Diamond Tofu’s diversity goals,
              evaluate the effectiveness of our equal opportunity policy and
              create an inclusive and diverse work environment. We may collect
              some optional information that may reveal your sensitive personal
              data when we ask you about your dietary requirements for events
              registration, or whether you are interested in any Diamond Tofu
              affiliation initiatives (e.g. Pride@Diamond Tofu,
              AccessAbility@Diamond Tofu, AsianDiversity@Diamond Tofu,
              Indigenous@Diamond Tofu, Black@Diamond Tofu, Latinx@Diamond Tofu
              etc.) only to invite you specifically to the events based on your
              choices, and you may share with us information or a photo or
              video, which can reveal for instance your ethnicity or disability
              status. If you choose to provide your sensitive data, your data
              will be shared only with the authorised Diamond Tofu employees on
              a strictly need-to-know basis only for the purposes explained at
              the time of collection, subject to your consent and will never be
              used for any individual employment decision making. Sensitive
              personal information is a subset of personal information and
              includes ethnicity, health, sexual orientation, as well as other
              categories, political opinions, religious or philosophical
              beliefs, trade union membership, genetic data, biometric data as
              prescribed by Applicable Data Privacy laws or other relevant laws.
              You are not required to provide any requested information to us
              but failing to do so may result in not being able to continue your
              candidacy for the job for which you have applied. <br/><br/>
              HOW DO WE USE YOUR INFORMATION? <br/>
              Personal information is processed in the
              following ways and in accordance with Applicable Data Privacy
              Laws, the processing is based on the lawful bases as stated below.
              In some situations, as listed below, we may need to process your
              personal data for the legitimate interests pursued by us for the
              following purposes, unless consent is required specifically under
              Applicable Data Privacy laws Recruiting and business management
              reasons including, identifying, and evaluating candidates for
              potential employment, as well as for future roles that may become
              available Inviting you to recruiting events and keeping you
              informed about recruiting programs In case of active sourcing,
              analyzing if you might fit with a role and initiating contact with
              you to assess suitability for the role you apply and to
              communicate with you in relation to your application in case you
              accept an offer from Diamond Tofu for a role, running background
              checks [2], financial checks where applicable, and identity
              verification Record keeping in relation to recruiting and hiring;
              we will retain your data for a period of up to five years subject
              to your consent, if you join a recruiting program; Store your data
              on a global tool which also enables Diamond Tofu to assess your
              application for available roles in different Diamond Tofu offices;
              For marketing communications from Diamond Tofu based on your
              consent where required[3] ensuring compliance with legal
              requirements (e.g. immigration laws, tax laws), including
              diversity requirements and practices; and protecting our legal
              rights to the extent authorized or permitted by law. Whatever the
              outcome of your application or other interaction with us, we may
              also analyze, in anonymized form, your personal information or
              aggregated data to improve our recruitment and hiring process by
              using such information to build algorithms that will inform our
              decisions about future candidates, and augment our ability to
              attract successful candidates from diverse backgrounds. We process
              your personal information for the purposes described above: when
              we have your consent to do so, where applicable; when necessary to
              enter into an employment contract with you; when necessary for us
              to comply with a legal obligation; or when necessary for the
              purposes of our legitimate interests as an employer operating
              globally. You may withdraw your consent at any time by sending an
              email to datasubjectrights@Diamond Tofu.com. For candidates in
              Germany please email us at datenschutz@Diamond Tofu.com. <br /><br />
              AUTOMATED SORTING OF CANDIDATES <br />
              In certain jurisdictions, our recruitment process may include data analytics and algorithms to help us efficiently review the large quantities of candidates and application data that we receive.  When you submit a job application, the information you share with us will be screened and compared to the predefined responses and scores set for the relevant roles. You may also undergo a series of online assessments. We may collect data generated by your participation in psychological, technical or behavioral assessments. The predefined responses are based on data that indicates what good job performance at Diamond Tofu looks like and/or in relation to these assessments.  You will receive more information about the nature of such assessments before you participate in any of them.


These results are always considered in tandem with, and not in lieu of, human judgment and evaluation of individual candidates.
<br /><br />
              
              WHEN WILL WE SHARE YOUR INFORMATION? <br />
              Diamond Tofu uses
              carefully selected third-party service providers and business
              partners who: provide a recruiting software system; process
              information on our behalf to help run some of our internal
              business operations including email distribution and IT services;
              assist us in recruiting talent, administering and evaluating
              pre-employment screening and testing, and improving our recruiting
              practices; assist in scheduling, organizing and hosting events,
              meetings and interviews; law enforcement bodies in order to comply
              with any legal obligation or court order. Diamond Tofu will ensure
              that legal mechanisms are in place with such third parties to
              protect your personal information. <br /><br />
              
              HOW DO WE PROTECT YOUR INFORMATION?<br />
              Diamond Tofu has in place appropriate technological and operational security processes designed to protect your personal information from loss, misuse, alteration or destruction. Only authorized employees and providers will have access to any data provided by you, and that access is limited by need. Each employee or provider having access to any personal information is obligated to maintain its confidentiality. Although we take steps that are generally accepted as industry standards to protect your personal information, Diamond Tofu cannot guarantee that your personally identifiable information will not become accessible to unauthorized persons. <br /><br />
              HOW LONG WILL WE RETAIN YOUR INFORMATION? <br />
              If we do not employ you, we may continue to retain and use your
              personal information for a period of time (which may vary
              depending on the country) for system administration purposes, and
              to perform research. At the expiry of this period, we will retain
              a minimum amount of your personal information to record your
              recruiting activity with us. In addition, we may ask you for
              permission to retain your personal data to consider you for future
              employment opportunities, as part of our optional recruiting
              programs. In this case, we will retain your data for a period of
              up to five years. If you join a recruiting program, but
              subsequently wish to withdraw, please contact us at
              datasubjectrights@Diamond Tofu.com. For candidates in Germany
              please email us at datenschutz@Diamond Tofu.com. <br /><br />
              YOUR RIGHTS <br />
              In accordance with Applicable Data Privacy Laws, including but not
              limited to the GDPR and the California Consumer Privacy Act
              (CCPA), California Privacy Rights Act (CPRA), you have a right to
              request a copy of the personal information we hold about you and
              details of how we use that information. If any of the information
              held about you is incorrect or out of date, you have the right to
              amend or rectify it. Please follow the process outlined below and
              we will amend our records where appropriate. You also have the
              right to request that we erase your personal data, stop processing
              your personal data, restrict the processing of your personal data,
              and provide your personal information in a portable form. Where
              processing is based on your consent, you may withdraw your consent
              to processing. This may not apply if there are other legal
              justifications to continue processing. If you think we may have
              incorrect personal information, or would like a copy of the
              personal information we hold on you, or to exercise any other data
              protection right, please write to:  datasubjectrights@Diamond
              Tofu.com. You also have a right to lodge a complaint with your
              local supervisory authority. For further questions you may contact
              the appropriate data protection point of contact: Data Protection
              Office Boston, MA 02210 Contact Us <br /><br />
              THIS RECRUITMENT PRIVACY POLICY <br />
              We may change or update this Privacy Policy from
              time to time. When we do, we will communicate changes and updates
              to this Privacy Policy by posting the updated Privacy Policy on
              this page with a new “Last Updated” date. <br /><br />
              CALIFORNIA ADDENDUM <br />
              This California Addendum applies to California residents and
              supplements the information provided above in the Privacy Policy.<br /><br />
              Collection and Disclosure of Personal Information<br />
              The following
              table details which categories of personal information we collect
              and process, as well as which categories of personal information
              we disclose to third parties for our operational business and
              hiring and recruitment purposes, including within the 12 months
              preceding the date this Privacy Policy was last updated.
              Categories of Personal Information Disclosed to Which Categories
              of Third Parties for Operational Business Purposes Identifiers,
              such as name, postal address, unique personal identifiers, IP
              address, email address, account name, online identifiers, and
              government-issued identifiers Our affiliates; service providers
              that provide services such as recruiting, candidate engagement,
              employment screening and background checks, consulting, IT and
              other services; professional advisors, such as lawyers; public and
              governmental authorities, such as regulatory authorities and law
              enforcement Personal information as defined in the California
              customer records law, such as name, contact information, and
              financial, education and employment information Our affiliates;
              service providers that provide services such as recruiting,
              candidate engagement, employment screening and background checks,
              consulting, IT and other services; professional advisors, such as
              lawyers; public and governmental authorities, such as regulatory
              authorities and law enforcement Protected Class Information, such
              as characteristics of protected classifications under California
              or federal law, such as sex, age, gender, race, disability,
              citizenship, military/veteran status, gender identity and
              expression, primary language, and immigration status Our
              affiliates; service providers that provide services such as
              employment screening and background checks, consulting, IT and
              other services; professional advisors, such as lawyers; public and
              governmental authorities, such as regulatory authorities and law
              enforcement Commercial Information, such as travel expenses Our
              affiliates; service providers that provide services such as
              expense reimbursement provider, consulting, IT and other services;
              professional advisors, such as lawyers; public and governmental
              authorities, such as regulatory authorities and law enforcement
              Internet or network activity information, such as browsing history
              and interactions with our website and other online portals or
              services Our affiliates; service providers that provide services
              such as recruiting, candidate engagement, consulting, IT and other
              services; professional advisors, such as lawyers; public and
              governmental authorities, such as regulatory authorities and law
              enforcement Audio/Video Data. Audio, electronic, visual and
              similar information, such as photographs and call and video
              recordings Our affiliates; service providers that provide services
              such as recruiting, candidate engagement consulting, IT and other
              services; professional advisors, such as lawyers; public and
              governmental authorities, such as regulatory authorities and law
              enforcement Education Information subject to the federal Family
              Educational Rights and Privacy Act such as student transcripts,
              grade point average, grades, academic standing, disciplinary
              records, and confirmation of graduation Our affiliates; service
              providers that provide services such as recruiting, candidate
              engagement, employment screening and background checks,
              consulting, IT and other services; professional advisors, such as
              lawyers; public and governmental authorities, such as regulatory
              authorities and law enforcement Employment Information.
              Professional or employment-related information, such as work
              history and prior employer, information from reference checks,
              work experience, qualifications, training and skills, work
              authorization, CV, résumé, cover letter, professional and other
              work-related licenses Our affiliates; service providers that
              provide services such as recruiting, candidate engagement,
              employment screening and background checks, consulting, IT and
              other services; professional advisors, such as lawyers; public and
              governmental authorities, such as regulatory authorities and law
              enforcement Inferences drawn from any of the Personal Information
              listed above to create a profile about, for example, an
              individual’s preferences, characteristics, predispositions, and
              abilities Our affiliates; service providers that provide services
              such as recruiting, candidate engagement, consulting, IT and other
              services; professional advisors, such as lawyers; public and
              governmental authorities, such as regulatory authorities and law
              enforcement Sensitive Personal Information [5]Social Security,
              driver’s license, state identification card, or passport number;
              account log-in; racial or ethnic origin, citizenship, immigration
              status Our affiliates; service providers that provide services
              such as recruiting, talent acquisition, employment screening and
              background checks, consulting, IT and other services; professional
              advisors, such as lawyers; public and governmental authorities,
              such as regulatory authorities and law enforcement We may use
              sensitive personal information for purposes of performing services
              for our business, providing services as requested or chosen by
              you, and ensuring the security and integrity of our business,
              infrastructure, and the individuals we interact with. This
              includes, without limitation, receiving and processing your job
              application, conducting background checks, analyzing and
              monitoring diversity, making you an offer (subject to our
              discretion), fulfilling administrative functions, complying with
              law, legal process, or requests from governmental or regulatory
              authorities, and exercising or defending legal claims. <br /><br />
              Individual Requests<br />
              You may, subject to applicable law, make the following requests:


1. You may request that we disclose to you the following information:
The categories of personal information we collected about you and the categories of sources from which we collected such personal information
The business or commercial purpose for collecting personal information about you; and
The categories of personal information about you that we otherwise disclosed, and the categories of third parties to whom we disclosed such personal information


2. You may request to correct inaccuracies in your personal information


3. You may request to have your personal information deleted


4. You may request to receive the specific pieces of your personal information, including a copy of the personal information you provided to us in a portable format


We will not unlawfully retaliate against you for making an individual request. To make a request.  We may need to request additional personal information from you, such as a copy of your driver’s license, and utility bill in order to verify your identity and protect against fraudulent requests. If you maintain a password-protected account with us, we may verify your identity through our existing authentication practices for your account and require you to re-authenticate yourself before disclosing or deleting your personal information.  If you make a request to delete, we may ask you to confirm your request before we delete your personal information.
<br /><br />
              Authorized Agents <br />
              If an agent would like to make a request on your behalf as permitted by applicable law, the agent may use the submission methods noted in the section entitled “Individuaequests.”  As part of our verification process, we may request that the agent provide, as applicable, proof concerning their status as authorized agents.  In addition, we may require that you verify your identity as described in the section entitled “Individual Requests” or confirm that you provided the agent permission to submit the request.<br /><br />
              FOOTNOTES [1]<br />
              [1] Personal data only includes information relating to natural persons who can be identified or who are identifiable, directly from the information in question; or who can be indirectly identified from that information in combination with other information.


[2] Diamond Tofu only uses publicly available information for running background checks.


[3] Data transfers within Diamond Tofu entities are governed by Diamond Tofu’s intra company agreements, local data export restrictions and/or local data privacy laws.


[4] CPRA defines sensitive personal information as personal information that reveals an individual’s social security, driver’s license, state identification card, or passport number; account log-in, financial account, debit card, or credit card number in combination with any required security or access code, password, or credentials allowing access to an account; precise geolocation; racial or ethnic origin, religious or philosophical beliefs, citizenship, immigration status, or union membership; the contents of mail, email, and text messages unless Diamond Tofu is the intended recipient of the communication; genetic data; The processing of biometric information for the purpose of uniquely identifying an individual; Personal information collected and analyzed concerning an individual’s health; and Personal information collected and analyzed concerning an individual’s sex life or sexual orientation.

            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setShowPrivacyModal(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </section>
    </>
  );
};
