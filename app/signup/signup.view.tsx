import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./signup.styles";

import Logo from "@/components/auth/Logo";
import InputField from "@/components/auth/InputField";
import RememberMe from "@/components/auth/RememberMe";
import PrimaryButton from "@/components/auth/PrimaryButton";
import GoogleButton from "@/components/auth/GoogleButton";

type SignUpViewProps = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    remember: boolean;
    setName: (value: string) => void;
    setEmail: (value: string) => void;
    setPassword: (value: string) => void;
    setConfirmPassword: (value: string) => void;
    setRemember: (value: boolean) => void;
    handleSignUp: () => void;
    handleToLogin: () => void;
    handleGoogleLogin: () => void;
}

const SignUpView = ({
    name,
    email,
    password,
    confirmPassword,
    remember,
    setName,
    setEmail,
    setPassword,
    setConfirmPassword,
    setRemember,
    handleSignUp,
    handleToLogin,
    handleGoogleLogin,
}: SignUpViewProps) => {
    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView contentContainerStyle={styles.container}>

                <Logo />

                <View style={styles.form}>
                    <InputField
                        label="Nome"
                        placeholder="Digite seu nome"
                        icon="person"
                        value={name}
                        onChangeText={setName}
                    />

                    <InputField
                        label="Email"
                        placeholder="Digite seu email"
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

                    <InputField
                        label="Confirmar Senha"
                        placeholder="Confirme sua senha"
                        icon="shield-checkmark"
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />

                    <RememberMe
                        value={remember}
                        onValueChange={setRemember}
                        onForgot={() => {}}
                    />

                    <PrimaryButton
                        title="Cadastrar"
                        onPress={handleSignUp}
                    />

                    <View style={styles.divider} />

                    <GoogleButton onPress={handleGoogleLogin} />
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Já possuí uma conta?</Text>
                    <TouchableOpacity 
                        onPress={handleToLogin}
                    >
                        <Text style={styles.link}> Acesse agora</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default SignUpView;