const GoogleMapEmbed = () => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_EMBED_KEY;
    console.log(apiKey);

    const address = "Cabinet Dentaire Côté Gare Bussigny, Switzerland";

    const src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(
        address
    )}`;

    return (
        <iframe
            title="Google Map"
            src={src}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
        />
    );
};

export default GoogleMapEmbed;
