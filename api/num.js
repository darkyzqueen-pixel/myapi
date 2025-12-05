export default async function handler(req, res) {
    try {
        const mobile = req.query.mobile;

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

        const text = await response.text(); // <-- take raw text first

        // Try to convert to JSON
        try {
            const json = JSON.parse(text);
            return res.status(200).json(json);
        } catch (err) {
            // If it's not JSON, return the raw HTML/text
            return res.status(200).send(text);
        }

    } catch (err) {
        return res.status(500).json({ error: "Server error", details: err.toString() });
    }
}
