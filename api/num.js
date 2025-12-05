export default async function handler(req, res) {
    try {
        const mobile = req.query.mobile; // GET parameter

        if (!mobile) {
            return res.status(400).json({ error: "Mobile number missing" });
        }

        // Call original POST API
        const response = await fetch("https://globalcomputers.shop/botsnation", {
            method: "POST",
            headers: {
                "authorization": "Bearer eo - 69atmkbfjga",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ value: mobile })
        });

        const data = await response.json();
        return res.status(200).json(data);

    } catch (err) {
        return res.status(500).json({ error: "Server error", details: err.toString() });
    }
}
