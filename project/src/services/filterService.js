import { useState } from "react";
import { userService } from "./userService";
import { useUser } from "../context/userContext";

const [cred, setCred] = useState();
const [user, setUser] = useUser();
const handleSubmit = (e) => {
    e.preventDefault();
    userService
        .loginUser({

        })
}