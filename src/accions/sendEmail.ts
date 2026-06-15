import { Resend } from "resend";
import { validateString, getErrorMessage } from "../libraries/utils";
import ContactFormEmail from "../components/templates/email";

interface IData {
    email: string;
    message: string;
}

interface CreateEmailResponse {
    created_at?: string,
    from?: string,
    to?: string[],
    subject?: string
    email_id?: string,
    data?: object,
    error?: string;
}

const sendEmail = async (formData: IData): Promise<CreateEmailResponse> => {
    
    // simple server-side validation
    if (!validateString(formData.email, 500)) {
        return {
            error: "Invalid sender email",
        };
    }
    if (!validateString(formData.message, 5000)) {
        return {
            error: "Invalid message",
        };
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    let data;
    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "bustosrme@gmail.com",
            subject: "Message from contact form",
            react: ContactFormEmail({ message: formData.message, email: formData.email }),
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }

    return {
        data,
    };
};

export default sendEmail;