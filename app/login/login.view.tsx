import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./login.styles";

import Logo from "@/components/auth/Logo";
import InputField from "@/components/auth/InputField";
import RememberMe from "@/components/auth/RememberMe";
import PrimaryButton from "@/components/auth/PrimaryButton";
import GoogleButton from "@/components/auth/GoogleButton";

type LoginViewProps = {
    email: string;
    password: string;
    remember: boolean;
    setEmail: (value: string) => void;
    setPassword: (value: string) => void;
    setRemember: (value: boolean) => void;
    handleLogin: () => void;
    handleGoogleLogin: () => void;
}

const LoginView = ({
    email,
    password,
    remember,
    setEmail,
    setPassword,
    setRemember,
    handleLogin,
    handleGoogleLogin,
}: LoginViewProps) => {
    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView contentContainerStyle={styles.container}>

                <Logo />

                <View style={styles.form}>
                    <InputField
                        label="Email"
                        placeholder="Digite seu nome"
                        icon="mail"
                        value={email}
                        onChangeText={setEmail}
                    />

                    <InputField
                        label="Senha"
                        placeholder="Digite sua senha"
                        icon="lock-closed"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />

                    <RememberMe
                        value={remember}
                        onValueChange={setRemember}
                        onForgot={() => { }}
                    />

                    <PrimaryButton
                        title="Entrar"
                        onPress={handleLogin}
                    />

                    <GoogleButton onPress={handleGoogleLogin} />
                </View>

                <View style={styles.footer}>
                    <Text>Não possuí uma conta?</Text>
                    <TouchableOpacity>
                        <Text style={styles.link}> Inscreva-se agora</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default LoginView;