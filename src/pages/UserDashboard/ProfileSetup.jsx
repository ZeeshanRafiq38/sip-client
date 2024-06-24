import axios, { baseUrl } from "api/axios";
import DashboardHeader from "components/global/DashboardHeader";
import ImageUpload from "components/global/ImageUpload";
import Input from "components/global/Input";
import Layout from "components/global/Layout";
import Password from "components/global/Password";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setUser } from "store/authSlice";

const userProfileUrl = "/api/user/profile";
const updateProfileUrl = "/api/user/update-profile";
const updatePasswordUrl = "/api/user/update-password";
const ProfileSetup = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const [getProfile, setGetProfile] = useState({
        username: "",
        phone: "",
        image: "",
    });
    const token = user?.token;
    const showProfile = async () => {
        try {
            const response = await axios.get(userProfileUrl, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const {
                data: {
                    data: { doc },
                },
            } = response;
            // console.log(response);

            return doc;
        } catch (error) {
            toast.error(error?.message);
        }
    };
    const { data: doc } = useQuery({
        queryKey: ["showProfile"],
        queryFn: showProfile,
    });
    useEffect(() => {
        if (doc) {
            setGetProfile({
                ...doc,
                image: baseUrl + doc?.image,
            });
        }
    }, [doc]);
    const updateUserProfile = async () => {
        const body = {
            ...getProfile,
        };
        try {
            if (body.phone) {
                delete body.phone;
            }
            if (body.email) {
                delete body.email;
            }
            let response = await axios.put(updateProfileUrl, body, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const {
                data: {
                    data: { doc, message },
                },
            } = response;
            // console.log(response);
            dispatch(setUser({ ...doc, token }));
            toast.success(message);
        } catch (error) {
            console.log(error.message);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        updateUserProfile();
        // console.log(getProfile);
    };
    const [updatePassword, setUpdatePassword] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const updateUserPassword = async () => {
        const body = {
            ...updatePassword,
        };
        try {
            let response = await axios.put(updatePasswordUrl, body, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const {
                data: {
                    data: { doc, message },
                },
            } = response;
            console.log(response);
            // dispatch(setUser({ ...doc, token }));
            toast.success(message);
        } catch (error) {
            console.log(error.message);
        }
    };
    const handlePassword = (e) => {
        e.preventDefault();
        if (updatePassword.newPassword !== updatePassword.confirmPassword) {
            toast.error("password does not match");
        }
        updateUserPassword();
        // console.log(getProfile);
    };
    return (
        <Layout>
            <div>
                <div>
                    <DashboardHeader text="Update Profile" />
                </div>
                <form
                    className="bg-pure rounded-lg flex flex-col gap-6 p-4"
                    onSubmit={handleSubmit}
                >
                    <ImageUpload
                        value={getProfile.image}
                        setValue={(value) =>
                            setGetProfile({
                                ...getProfile,
                                image: value,
                            })
                        }
                    />
                    <div className="flex items-center gap-4">
                        <Input
                            label="Username"
                            type="text"
                            placeholder="username"
                            name="username"
                            data={getProfile}
                            setData={setGetProfile}
                            readonly
                        />
                        <Input
                            label="Phone"
                            type="number"
                            placeholder="phone number"
                            name="phone"
                            data={getProfile}
                            setData={setGetProfile}
                            readonly
                        />
                    </div>
                    <div className="text-end">
                        <button className="btn-primary">Save</button>
                    </div>
                </form>
                <div>
                    <div className="py-6">
                        <h2 className="text-2xl text-primary font-semibold">
                            Update Password
                        </h2>
                    </div>
                    <div className="bg-pure rounded-lg shadow-lg p-4">
                        <form
                            className="flex flex-col gap-4"
                            onSubmit={handlePassword}
                        >
                            <div className="grid grid-cols-2 items-center gap-4">
                                <Password
                                    label="Current Password"
                                    placeholder="Current Password"
                                    name="currentPassword"
                                    data={updatePassword}
                                    setData={setUpdatePassword}
                                />
                                <Password
                                    label="New Password"
                                    placeholder="Ex: ********"
                                    name="newPassword"
                                    data={updatePassword}
                                    setData={setUpdatePassword}
                                />
                            </div>
                            <div>
                                <Password
                                    label="Confirm Password"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    data={updatePassword}
                                    setData={setUpdatePassword}
                                />
                            </div>
                            <div className="text-end">
                                <button className=" btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProfileSetup;
