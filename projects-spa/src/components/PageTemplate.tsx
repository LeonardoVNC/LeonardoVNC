import { type ReactNode } from "react";
import { Typography, Layout } from "antd";
import useThemeStore from "../store/useThemeStore";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

type TemplateProps = {
    title: ReactNode;
    subtitle?: ReactNode;
    children: ReactNode;
};

export default function PageTemplate({ title, subtitle, children }: TemplateProps) {
    const { palette } = useThemeStore();

    return (
        <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header
                style={{
                    backgroundColor: palette.P0,
                    color: 'var(--app-colorText)',
                    height: '120px',
                    minHeight: '80px',
                    padding: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        margin: '0 auto',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 6,
                    }}
                >
                    <Title
                        level={1}
                        style={{
                            color: 'inherit',
                            margin: 0,
                            fontSize: 'clamp(20px, 3.5vw, 36px)',
                            textOverflow: 'unset',
                            whiteSpace: 'normal',
                            wordBreak: 'break-word',
                            width: '100%',
                        }}
                    >
                        {title}
                    </Title>

                    {subtitle && (
                        <Text
                            type="secondary"
                            style={{
                                color: '#8b949e',
                                fontSize: 'clamp(12px, 2vw, 16px)',
                                textOverflow: 'unset',
                                whiteSpace: 'normal',
                                wordBreak: 'break-word',
                                marginTop: 4,
                                marginBottom: 4,
                            }}
                        >
                            {subtitle}
                        </Text>
                    )}
                </div>
            </Header>

            <Content style={{ flex: 1, minHeight: 0, overflow: 'auto', padding: 12, marginBottom: 4 }}>
                {children}
            </Content>
        </Layout>
    );
}
