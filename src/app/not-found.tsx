import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section
      className="flex items-center justify-center"
      style={{
        background: "#1A2A1A",
        minHeight: "100vh",
        paddingTop: "calc(var(--announcement-height, 0px) + 80px)",
        paddingBottom: 80,
      }}
    >
      <div className="container text-center">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img
            src="/images/logo/toasty-logo.webp"
            alt="Toasty CA Logo"
            width={120}
            height={120}
            style={{ width: 120, height: "auto", opacity: 0.8 }}
          />
        </div>

        {/* 404 Display */}
        <h1
          className="font-heading font-extrabold"
          style={{
            fontSize: "clamp(6rem, 15vw, 12rem)",
            lineHeight: 1,
            color: "#E8953A",
          }}
        >
          404
        </h1>

        {/* Subtitle */}
        <p
          className="font-heading font-bold text-2xl mt-4 mb-4"
          style={{ color: "#FAF5E4" }}
        >
          Page Not Found
        </p>

        <p
          className="text-base max-w-md mx-auto mb-10"
          style={{ color: "rgba(250,245,228,0.6)", lineHeight: 1.625 }}
        >
          Looks like this page went up in smoke. Let's get you back on track.
        </p>

        {/* CTA */}
        <Button href="/" variant="primary">
          Back to Home
        </Button>
      </div>
    </section>
  );
}
