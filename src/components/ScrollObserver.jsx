"use client";
import { useEffect } from "react";

export default function ScrollObserver() {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.15,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    // Animar solo la primera vez que entra en viewport
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const observeElements = () => {
            const revealElements = document.querySelectorAll(".reveal:not(.active)");
            revealElements.forEach((el) => observer.observe(el));
        };

        // Observar elementos iniciales
        // Set timeout para asegurar que el DOM ha renderizado antes de buscar elementos
        const timeoutId = setTimeout(observeElements, 100);

        // Interceptar cambios en el DOM para SPA navigation
        const mutationObserver = new MutationObserver(() => {
            observeElements();
        });

        mutationObserver.observe(document.body, { childList: true, subtree: true });

        return () => {
            clearTimeout(timeoutId);
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, []);

    return null;
}
