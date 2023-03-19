import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Form, FormGroup, Input, Button, Row, Col } from "reactstrap";
import { myAxios } from "../common/services/Helper";
import profileDom from "../common/Images/profileDom.png";
import camera from "../common/Images/camera.png";
import { BASE_URL } from "../common/services/Helper";
import { ReactSession } from 'react-client-session';

const Profile = () => {
    const name = localStorage.getItem("displayName");
    const [photoURL, setPhotoURL] = useState(localStorage.getItem("photoURL"));
    let formData1 = new FormData();
    let formData = new FormData();



    const onFileChange = (e) => {
        // console.log(e.target.files[0]);
        formData1.append("photo", e.target.files[0]);
        formData1.append("id", ReactSession.get('user_id'));
    };
    const [file, setFile] = useState([]);
    const onFileChange1 = (e) => {
        let id = e.target.id;
        let file_reader = new FileReader();
        let file = e.target.files[0];
        file_reader.onload = () => {
            setFile([...file, { file_id: id, updatedImage: file_reader.result }]);
        };
        // reading the actual uploaded file
        //file_reader.readAsDataURL(file);
        // formData.append('aadhar_image', e.target.files[0]);
        // formData.append('pan_image', e.target.files[0]);
        formData.append(id, file);
    };

    const SubmitFileData = () => {

        myAxios({
            method: "post",
            url: BASE_URL + "/editProfileImage",
            data: formData1,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                //handle success
                // console.log(response);
                localStorage.setItem("photoURL", response.data.updatedImage);
                setPhotoURL(response.data.updatedImage);
                setImage((value) => !value);
            })
            .catch(function (response) {
                //handle error
                // console.log(response);
            });

    };

    const [show, setShow] = useState(true);
    const [image, setImage] = useState(true);
    const handleClick = () => {
        setShow((value) => !value);
    };

    const handleClick1 = () => setImage((value) => !value);

    const [data, setData] = useState({
        id: ReactSession.get("user_id"),
        name: "",
        mobile: "",
        email: "",
        address: "",
        aadhar_no: "",
        pan_no: "",
    });

    const [ErrorName, setErrorName] = useState("");
    const [ErrorMobile, setErrorMobile] = useState("");
    const [ErrorAddrs, setErrorAddrs] = useState("");
    const [ErrorAadhar, setErrorAadhar] = useState("");
    const [ErrorPan, setErrorPan] = useState("");
    const [errorColor, setErrorColor] = useState("white");

    const handleChange = (event, property) => {
        setData({ ...data, [property]: event.target.value });
        setErrorName("");
        setErrorPan("");
        setErrorAadhar("");
        setErrorMobile("");
        setErrorAddrs("");
        setErrorColor("");
    };
    // console.log(data);

    const submitForm = (event) => {
        event.preventDefault();

        function isValidMobile(mobile) {
            return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(mobile);
        }

        function isValidAadhar(aadhar_no) {
            return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{6,6}$/.test(aadhar_no);
        }


        if (data.name === "") {
            setErrorName("Name can't be null")
            setErrorColor("red");
        }

        else if (data.mobile === "") {
            setErrorMobile("Mobile Number can't be null")
            setErrorColor("red");
        }

        else if (!isValidMobile(data.mobile)) {
            setErrorMobile("Invalid Mobile Number")
            setErrorColor("red");
        }

        else if (data.address === "") {
            setErrorAddrs("Address can't be null")
            setErrorColor("red");
        }
        else if (data.aadhar_no === "") {
            setErrorAadhar("Aadhar Number can't be null")
            setErrorColor("red");
        }
        else if (!isValidAadhar(data.aadhar_no)) {
            setErrorAadhar("Invalid Aadhar Number")
            setErrorColor("red");
        }
        else if (data.pan_no === "") {
            setErrorPan("Pan Number can't be null")
            setErrorColor("red");
        }

        else {
            formData.append("id", data.id);
            formData.append("name", data.name);
            formData.append("mobile", data.mobile);
            formData.append("address", data.address);
            formData.append("aadhar_no", data.aadhar_no);
            formData.append("pan_no", data.pan_no);

            myAxios({
                method: "post",
                url: BASE_URL + "/editProfile",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(function (response) {
                    if (response.data.success) {
                        const getProfile = () => {
                            fetch(
                                BASE_URL + "/getProfile/" +
                                ReactSession.get("user_id")
                            )
                                .then((res) => res.json())
                                .then((json) => {
                                    setData(json.data);
                                    toast.success("Profile Updated Successfully");
                                    setShow(true);
                                });
                        };
                        getProfile();

                        //console.log("updated profile latst : " + JSON.stringify(response.data))
                    } else {
                        toast.error("Something went wrong");
                    }
                })

                .catch(function (response) {
                    toast.error("Something went wrong");
                });

        }
    };

    useEffect(() => {
        const getProfile = () => {
            fetch(
                BASE_URL + "/getProfile/" +
                ReactSession.get("user_id")
            )
                .then((res) => res.json())
                .then((json) => {
                    setData(json.data);
                });
        };
        getProfile();
    }, []);
    // console.log("Get Profile" + JSON.stringify(data));
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <section className="profilePic">
                            {photoURL === "" ? (
                                <img src={profileDom} alt="profilepic" className="profilemain" />
                            ) : (
                                <img src={photoURL} alt="profilepic" className="profilemain" />
                            )}
                            <div className="dnone">
                                <section>
                                    <img src={camera} alt="camera" className="cameraleft" />
                                    <p>Upload Picture</p>
                                </section>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="photo"
                                    onChange={(e) => {
                                        onFileChange(e);
                                        SubmitFileData(e);
                                    }}

                                />
                            </div>
                        </section>
                    </div>
                    <div className="col-md-8"></div>
                </div>
                {show ? (
                    <div className="row">
                        <div className="col-md-4 profileDetails">
                            <span>Full Name</span>
                        </div>
                        <div className="col-md-8 profileDetails">
                            <span>{data.name}</span>
                        </div>
                        <div className="col-md-4 profileDetails">
                            <span>Email</span>
                        </div>
                        <div className="col-md-8 profileDetails">
                            <span>{data.email}</span>
                        </div>
                        <div className="col-md-4 profileDetails">
                            <span>Mobile Number</span>
                        </div>
                        <div className="col-md-8 profileDetails">
                            <span>{data.mobile}</span>
                        </div>
                        <div className="col-md-4 profileDetails">
                            <span>Address</span>
                        </div>
                        <div className="col-md-8 profileDetails">
                            <span>{data.address}</span>
                        </div>
                        <div className="col-md-4 profileDetails">
                            <span>Aadhar Number</span>
                        </div>
                        <div className="col-md-8 profileDetails">
                            <span>{data.aadhar_no}</span>
                        </div>
                        <div className="col-md-4 profileDetails">
                            <span>Pan Number</span>
                        </div>
                        <div className="col-md-8 profileDetails">
                            <span>{data.pan_no}</span>
                        </div>
                        <div className="col-md-4 profileDetails2">
                            <span>Pan Card Image</span>
                        </div>
                        <div className="col-md-8 profileDetails2">
                            <img src={data.pan_image} width={"10%"} />
                        </div>
                        <div className="col-md-4 profileDetails2">
                            <span>Aadhar Card Image</span>
                        </div>
                        <div className="col-md-8 profileDetails2">
                            <img
                                src={data.aadhar_image}
                                width={"10%"}
                            />
                        </div>
                    </div>
                ) : (
                    <Row>
                        <Col md={4} className="profileDetails">
                            <span>Full Name</span>
                        </Col>

                        <Col md={8} className="profileDetails">
                            <FormGroup>
                                <input
                                    onChange={(e) => handleChange(e, "name")}
                                    type="text"
                                    placeholder="Your Name"
                                    value={data.name}
                                    className="editprofileintup"
                                />
                                <span style={{ color: errorColor }}>{ErrorName}</span>
                            </FormGroup>
                        </Col>

                        <Col md={4} className="profileDetails">
                            <span>Email </span>
                        </Col>

                        <Col md={8} className="profileDetails">
                            <FormGroup>
                                <input
                                    onChange={(e) => handleChange(e, "email")}
                                    type="email"
                                    placeholder="Your Email"
                                    value={data.email}
                                    className="editprofileintup bg-grey cursor1"
                                    readOnly
                                />
                            </FormGroup>
                        </Col>

                        <Col md={4} className="profileDetails">
                            <span>Phone</span>
                        </Col>

                        <Col md={8} className="profileDetails">
                            <FormGroup>
                                <input
                                    onChange={(e) => handleChange(e, "mobile")}
                                    type="mobile"
                                    placeholder="Your Number"
                                    value={data.mobile}
                                    className="editprofileintup"
                                    maxLength={10}
                                />
                                <span style={{ color: errorColor }}>{ErrorMobile}</span>
                            </FormGroup>
                        </Col>

                        <Col md={4} className="profileDetails">
                            <span>Address</span>
                        </Col>

                        <Col md={8} className="profileDetails">
                            <FormGroup>
                                <input
                                    onChange={(e) => handleChange(e, "address")}
                                    type="text"
                                    placeholder="Your Address"
                                    value={data.address}
                                    className="editprofileintup"
                                />
                                <span style={{ color: errorColor }}>{ErrorAddrs}</span>
                            </FormGroup>
                        </Col>

                        <Col md={4} className="profileDetails">
                            <span>Aadhar Card</span>
                        </Col>

                        <Col md={8} className="profileDetails">
                            <FormGroup>
                                <input
                                    onChange={(e) => handleChange(e, "aadhar_no")}
                                    type="text"
                                    placeholder="Your Aadhar Card Number"
                                    className="editprofileintup"
                                    value={data.aadhar_no}
                                    maxLength={12}
                                />
                                <span style={{ color: errorColor }}>{ErrorAadhar}</span>
                            </FormGroup>
                        </Col>

                        <Col md={4} className="profileDetails">
                            <span>Pan Card</span>
                        </Col>

                        <Col md={8} className="profileDetails">
                            <FormGroup>
                                <input
                                    onChange={(e) => handleChange(e, "pan_no")}
                                    type="text  "
                                    placeholder="Your Pen Card Number"
                                    className="editprofileintup"
                                    value={data.pan_no}
                                />
                                <span style={{ color: errorColor }}>{ErrorPan}</span>
                            </FormGroup>
                        </Col>

                        <Col md={4} className="profileDetails">
                            <span>Pan Card Image</span>
                        </Col>

                        <Col md={8} className="profileDetails">
                            <FormGroup>
                                <input
                                    onChange={onFileChange1}
                                    id="pan_image"
                                    name="pan_image"
                                    type="file"
                                    className="editprofileintup"
                                />
                            </FormGroup>
                        </Col>

                        <Col md={4} className="profileDetails">
                            <span>Aadhar Card Image</span>
                        </Col>

                        <Col md={8} className="profileDetails">
                            <FormGroup>
                                <input
                                    onChange={onFileChange1}
                                    id="aadhar_image"
                                    name="aadhar_image"
                                    type="file"
                                    className="editprofileintup"
                                />
                            </FormGroup>
                        </Col>

                        <Col md={12} className="profileDetails justify_center">
                            <FormGroup>
                                <Button onClick={submitForm} type="submit" className="btn savebtnprofile mt-3">
                                    Save
                                </Button>
                            </FormGroup>
                        </Col>
                    </Row>
                )}

                <div className="col-md-12 text-center">
                    <Button className="btn savebtnprofile">
                        <i onClick={handleClick} className="fa fa-edit"> {""}

                            {show ? "Edit Profile" : "Back"}
                        </i>
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Profile