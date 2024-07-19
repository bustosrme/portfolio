export async function discord_notify(message: string) {
    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!discordWebhookUrl || discordWebhookUrl === '') {
        console.log('Discord webhook url not set');
        return false;
    }

    const body = {
        content: message,
    }

    const response = await fetch(discordWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        console.log('Error sending message to discord');
        return false;
    }
    return true;
}