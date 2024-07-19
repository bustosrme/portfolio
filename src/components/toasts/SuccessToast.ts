import toast from "react-hot-toast";

function SuccessToast(theme: string, message: string) {
    if (theme === "light") {
        return toast.success(message, {
            style: {
                background: `#333`,
                color: "#fff",
            },
        });
    }
    return toast.success(message, {
        style: {
            background: `#fff`,
            color: "#000",
        },
    });
}

export default SuccessToast;