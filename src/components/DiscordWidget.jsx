import {useEffect, useState} from "react";

export default function DiscordWidget() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("https://discord.com/api/guilds/799523917327761419/widget.json").then(r => r.json()).then(json => setData(json)).catch(console.error);
    }, []);
    if (!data) return;
    return (
        <a href={data.instant_invite} target="_blank" rel="noreferrer">
            <div>
                <span className="material-icons">discord</span>
                {data.name}
                {data.presence_count} members online
            </div>
        </a>
    );
}