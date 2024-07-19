import toast from "react-hot-toast";

function ErrorToast(theme: string, message: string) {
    if (theme === "light") {
        return toast.error(message, {
            style: {
                background: `#333`,
                color: "#fff",
            },
        });
    }
    return toast.error(message, {
        style: {
            background: `#fff`,
            color: "#000",
        },
    });
}

export default ErrorToast;