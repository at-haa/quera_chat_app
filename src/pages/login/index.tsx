import { useForm } from "react-hook-form";
// import { Button } from "../../components/Base/Button"
import { Input } from "../../components/Base/Forms/Input"
import { AXIOS } from "../../config/axios.config";
import { ApiRoutes } from "../../constants/api.route";
import { AppContext } from "../../context/store";
import React, { useContext } from "react";
import { UserActionTypes } from "../../@Types/context/context.type";
import { useNavigate } from "react-router-dom";

interface LoginProps extends React.PropsWithChildren {

}
export const Login: React.FunctionComponent = (props: LoginProps): JSX.Element => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const dispatch = useContext(AppContext).dispatch
    const handleOnSubmit = (data: any) => {
        console.log(data);

        AXIOS.get(ApiRoutes.Login + `?username=${data.username}&password=${data.password}`).then(res => {
            dispatch({ type: UserActionTypes.Login_success, payload: res.data })
            AXIOS.defaults.headers.common.Authorization = 'Bearer' + res.data.accessToken
            navigate("/")
        }
        )
    }
    return (
        <div className="flex justify-center items-center h-full">
            <form onSubmit={handleSubmit(handleOnSubmit)} className="py-5 px-10 border-[2px] border-gray-500 [&_input]:mt-5 [&_button]:mt-5 rounded-lg">
                <h1 className="text-center text-lg font-bold">ورود به پیام‌رسان</h1>
                <Input {...register("username", { required: true })} placeholder="نام‌کاربری" />
                <Input {...register("password", { required: true })} placeholder="رمز عبور" />
                <Input value="ورود" type="submit" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full" />
            </form>
        </div>
    )
}
