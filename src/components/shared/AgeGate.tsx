"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "toasty_age_verified";

export default function AgeGate() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const verified = localStorage.getItem(STORAGE_KEY);
      if (verified !== "true") {
        setVisible(true);
      }
    } catch {
      // localStorage unavailable -- show the gate to be safe
      setVisible(true);
    }
  }, []);

  function handleConfirm() {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Silently continue even if storage write fails
    }
    setVisible(false);
  }

  function handleReject() {
    window.location.href = "https://www.google.com";
  }

  // Don't render anything on the server or before hydration check
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="age-gate-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center"
          style={{
            backgroundColor: "rgba(250, 245, 228, 0.98)",
            zIndex: 9999,
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="w-full text-center"
            style={{
              maxWidth: 400,
              padding: 48,
              borderRadius: 30,
              backgroundColor: "#FFFFFF",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.12)",
            }}
          >
            {/* Logo */}
            <img
              src="/images/logo/toasty-logo.webp"
              alt="Toasty CA"
              width={80}
              height={80}
              className="mx-auto mb-6"
            />

            {/* Heading */}
            <h2
              className="font-heading font-bold mb-2"
              style={{ fontSize: 24 }}
            >
              Are you 21 or older?
            </h2>

            {/* Subtitle */}
            <p className="mb-8" style={{ color: "var(--text-muted)", fontSize: 14 }}>
              You must be 21+ to enter this site
            </p>

            {/* Confirm button */}
            <button
              onClick={handleConfirm}
              className="w-full font-heading font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              style={{
                backgroundColor: "var(--color-orange)",
                borderRadius: 40,
                padding: "16px 0",
                fontSize: 16,
                border: "none",
              }}
            >
              I&apos;m 21+
            </button>

            {/* Reject link */}
            <button
              onClick={handleReject}
              className="mt-4 inline-block bg-transparent border-none cursor-pointer transition-colors duration-200"
              style={{ color: "var(--text-muted)", fontSize: 14 }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-orange)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              No, take me back
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
