import { Avatar, Typography } from "antd";
import { useState, useEffect } from "react";

const ProfileInfo = ({ photoURL, name, collapsed }: { photoURL: string; name: string; collapsed: boolean }) => {
    const [isVisible, setIsVisible] = useState(!collapsed);

    useEffect(() => {
        if (!collapsed) {
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 100);
            return () => clearTimeout(timer);
        }
    }, [collapsed]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                padding: collapsed ? "12px 0" : "12px",
            }}
        >
            <Avatar
                size={collapsed ? 32 : 64}
                src={photoURL}
                style={{
                    background: "var(--ant-colorBorder)",
                    border: "1px solid var(--ant-colorBorder)",
                }}
            />
            <Typography.Text 
                style={{
                    fontSize: 16,
                    opacity: isVisible ? 1 : 0,
                    maxHeight: isVisible ? "100px" : "0",
                    overflow: "hidden",
                    textAlign: "center" as const,
                    transition: "opacity 0.2s ease, maxHeight 0.2s ease",
                    marginTop: 8,
                }}
            >
                {name}
            </Typography.Text>
        </div>
    );
};

export default ProfileInfo;