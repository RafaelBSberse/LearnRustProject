import { Button, Group, Input, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";
import { RegisterButtonContainer, RegisterScreen } from "./styles";
import { IRegisterForm } from "./types";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const { register, handleSubmit } = useForm<IRegisterForm>();
    const navigate = useNavigate();

    const InputStyles = {
        text: { styles: { label: { color: '#f2f2f2' } }},
        password: { styles: { label: { color: '#f2f2f2' }, visibilityToggle: { display: 'none' } } },
    };

    const registrar = (data: IRegisterForm) => {
        console.log(data);
    }

    return <>
        <RegisterScreen>
            <Stack>
                <form onSubmit={handleSubmit(registrar)}>
                    <Group>
                        <TextInput {...register("nome")} {...InputStyles.text} label="Nome" />
                        <TextInput {...register("sobrenome")} {...InputStyles.text} label="Sobrenome" />
                    </Group>
                    <TextInput {...register("usuario")} {...InputStyles.text} label="Usuário" />
                    <PasswordInput {...register("senha")} {...InputStyles.text} label="Senha" />
                    <PasswordInput {...register("senhaConfirmacao")} {...InputStyles.password} label="Confirmar senha" visible={false} />
                    <Input.Wrapper label="CPF" {...InputStyles.text}>
                        <Input {...register("cpf")} component={InputMask} mask="999.999.999-99"/>
                    </Input.Wrapper>
                    <RegisterButtonContainer>
                        <Button color="pink" onClick={() => navigate(-1)}>Voltar</Button>
                        <Button type="submit" color="pink">Registrar</Button>
                    </RegisterButtonContainer>
                </form>
            </Stack>
        </RegisterScreen>
    </>;
}