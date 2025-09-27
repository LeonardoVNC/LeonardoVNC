import { type ReactNode } from "react";
import { Typography, Layout } from "antd";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

type TemplateProps = {
    title: ReactNode;
    subtitle?: ReactNode;
    children: ReactNode;
};

export default function PageTemplate({ title, subtitle, children }: TemplateProps) {
    return (
        <Layout className="min-h-screen">
            <Header 
                style={{ 
                    backgroundColor: '#0d1117',
                    color: '#ffffff',
                    height: '138px',
                    minHeight: '80px'
                }}
            >
                <div className="w-full max-w-7xl mx-auto text-center flex flex-col items-center justify-center h-full">
                    <Title 
                        level={1} 
                        className="leading-tight text-xl md:text-2xl m-0 mb-0.5"
                        style={{ color: 'inherit' }}
                    >
                        {title}
                    </Title>
                    {subtitle && (
                        <Text 
                            type="secondary" 
                            className="block text-sm md:text-base mt-0"
                            style={{ color: '#8b949e' }}
                        >
                            {subtitle}
                        </Text>
                    )}
                </div>
            </Header>

            <Content className="flex-1 min-h-0 overflow-auto p-4 md:p-6">
                {children}
            </Content>
        </Layout>
    );
}
