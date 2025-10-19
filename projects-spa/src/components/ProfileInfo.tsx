import { Avatar, Typography } from "antd";
import { useState, useEffect } from "react";

type ProfileInfoProps = {
    photoURL: string;
    name: string;
    collapsed?: boolean,
    imgSize?: number,
    fontSize?: number,
    onPress?: () => void,
}

const ProfileInfo = ({ photoURL, name, collapsed, imgSize = 64, fontSize = 16, onPress }: ProfileInfoProps) => {
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
                size={collapsed ? imgSize / 2 : imgSize}
                src={photoURL}
                style={{
                    background: "var(--ant-colorBorder)",
                    border: "1px solid var(--ant-colorBorder)",
                    cursor: onPress? "pointer" : ""
                }}
                onClick={onPress}
            />
            <Typography.Text
                style={{
                    fontSize: fontSize,
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