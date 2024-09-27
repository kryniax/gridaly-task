import React, { useState } from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

type ShareComponentProps = {
    link: string;
};

const ShareComponent: React.FC<ShareComponentProps> = ({ link }) => {
    const [copyStatus, setCopyStatus] = useState('Copy');
    const [showTooltip, setShowTooltip] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(link);
        setCopyStatus('Copied');
        setTimeout(() => {
            setCopyStatus('Copy');
        }, 5000);
    };

    const handleMouseEnter = () => {
        if (copyStatus === 'Copy') {
            setShowTooltip(true);
        }
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <section className="font-inter flex flex-col md:flex-row items-center gap-4">
            <div className="relative flex items-center border border-gray-300 rounded-md p-2 w-full max-w-sm bg-[#F2F2F2]">
                <input
                    type="text"
                    title={link}
                    value={link}
                    readOnly
                    className="bg-transparent border-none outline-none w-full text-sm text-gray-600"
                />
                <button
                    onClick={handleCopy}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="ml-2 px-4 py-2 rounded-md bg-[#7354F9] text-white text-sm font-medium hover:bg-[#9780FF] transition duration-300"
                >
                    {copyStatus}
                </button>
                {showTooltip && (
                    <div className="absolute top-[-30px] right-4 bg-[#333333] text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                        Click to copy
                    </div>
                )}
            </div>
            <div className="flex items-center gap-4">
                <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1877F2] hover:opacity-75 transition duration-300"
                    aria-label="Share on Facebook"
                >
                    <FaFacebook size={24} />
                </a>
                <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(link)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0A66C2] hover:opacity-75 transition duration-300"
                    aria-label="Share on LinkedIn"
                >
                    <FaLinkedin size={24} />
                </a>
                <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(link)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:opacity-75 transition duration-300"
                    aria-label="Share on Twitter"
                >
                    <FaXTwitter size={24} />
                </a>
            </div>
        </section>
    );
};

export default ShareComponent;