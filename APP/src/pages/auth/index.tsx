import { AuthButtonContainer, AuthScreen } from "./style";
import { useForm } from "react-hook-form";
import { IAuthForm } from "./type";
import { Button, Container, PasswordInput, Stack, TextInput } from '@mantine/core';
import { useNavigate } from "react-router-dom";

export const Auth = () => {
    const { register, handleSubmit } = useForm<IAuthForm>();
    const navigate = useNavigate();

    const InputLabelColor = {
        styles: { label: { color: '#f2f2f2' } }
    };

    const checkAuth = (data: IAuthForm) => {
        console.log(data);
    }

    return (
        <AuthScreen>
            <Stack>
                <Container>
                    <form onSubmit={handleSubmit(checkAuth)}>
                        <TextInput {...register("user")} label="Usuário" {...InputLabelColor} />
                        <PasswordInput {...register("password")} label="Senha" {...InputLabelColor}/>
                        <AuthButtonContainer>
                            <Button type="submit" color="pink">Entrar</Button>
                            <Button color="pink" onClick={() => navigate("/register")}>Registrar</Button>
                        </AuthButtonContainer>
                    </form>
                </Container>
            </Stack>
        </AuthScreen>
    );
}