import { Avatar, Typography } from "antd";

const ProfileInfo = ({ photoURL, name, collapsed }: { photoURL: string, name: string, collapsed: boolean }) => {
    return (
        <>
            <Avatar
                size={collapsed ? 32: 64}
                src={photoURL}
                style={{
                    background: "var(--ant-colorBorder)",
                    margin: 12,
                }}
            />
            {!collapsed && (<Typography.Text
                style={{
                    color: "var(--ant-colorText)",
                    fontSize: 16,
                    fontWeight: 500,
                    textAlign: "center",
                }}
            >
                {name}
            </Typography.Text>)}
        </>
    )
}

export default ProfileInfo;