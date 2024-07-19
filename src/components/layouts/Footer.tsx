function Footer() {
    return (
        <footer className="mb-10 px-4 text-center text-gray-500">
            <small className="mb-2 block text-xs">
                &copy; {new Date().getFullYear()} Mauro. All rights reserved.
            </small>
            <p className="text-xs">
                <span className="font-semibold">About this website:</span> built with
                React, TypeScript, Tailwind CSS, Framer Motion, i18next, Webhooks, and hosted on my own cloud infrastructure.
            </p>
        </footer>
    );
}

export default Footer;