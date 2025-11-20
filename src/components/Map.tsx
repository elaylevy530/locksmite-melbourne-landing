const Map = () => {
  return (
    <section className="w-full h-[600px] md:h-[500px] bg-muted">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d807125.9554060268!2d144.2!3d-37.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f5!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x404567bf8fa8650!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1635398265744!5m2!1sen!2sau"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Locksmite Locksmiths Service Area - Melbourne"
      />
    </section>
  );
};

export default Map;
