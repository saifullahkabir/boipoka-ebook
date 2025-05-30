import { useEffect, useState } from 'react';
import styled from 'styled-components';

const InstallPrompt = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [showInstallButton, setShowInstallButton] = useState(import.meta.env.DEV ? true : false);

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            console.log("beforeinstallprompt event fired"); // check er jnno
            setDeferredPrompt(e);
            setShowInstallButton(true);
        });
    }, []);

    const handleInstallClick = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
        }
    };

    return (
        <>
            {showInstallButton && (
                <StyledWrapper>
                    <button
                        onClick={handleInstallClick}
                    ><svg viewBox="0 0 256 256" height={30} width={32} xmlns="http://www.w3.org/2000/svg">
                            <path d="M74.34 85.66a8 8 0 0 1 11.32-11.32L120 108.69V24a8 8 0 0 1 16 0v84.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-48 48a8 8 0 0 1-11.32 0ZM240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h52.4a4 4 0 0 1 2.83 1.17L111 145a24 24 0 0 0 34 0l23.8-23.8a4 4 0 0 1 2.8-1.2H224a16 16 0 0 1 16 16m-40 32a12 12 0 1 0-12 12a12 12 0 0 0 12-12" fill="currentColor" /></svg></button>
                </StyledWrapper>
            )}
        </>
    );
};

const StyledWrapper = styled.div`
  button {
    color: #FF314F;
    padding: 5px 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.397);
    background: rgba(255, 255, 255, 0.068);
    overflow: hidden;
    font-size: 0.9rem;
    font-weight: 600;
    gap: 5px;
    border-radius: 5px;
    margin: 0 5px;
    transition: 0.2s;
    border: 1px solid transparent;
  }

  button:hover {
    border-color: rgba(255, 255, 255, 0.767);
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.144),
      rgba(255, 255, 255, 0.247),
      rgba(255, 255, 255, 0.39)
    );
    box-shadow: 12px rgba(255, 255, 255, 0.623);
    transform: translateY(-6px);
  }

  button:active {
    transform: translateY(2px);
    box-shadow: none;
  }`;

export default InstallPrompt;
