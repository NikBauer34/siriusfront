import { useForm } from "@mantine/form";
import { FC, useState } from "react";
import { GradientButton, UnderlineInput } from "../../ui";
import { Center, Text } from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import fedyaLeft from '../../img/Fedya.png';


interface MarkupModalFormProps {
    onSubmit: (title: string, form: File | null) => void;
}
interface FormValues {
    file: File | null;
    title: string;
}
const MarkupModalForm: FC<MarkupModalFormProps> = (props) => {
    const MarkupModalHookForm = useForm<FormValues>({
        initialValues: { file: null, title: '' },
        validateInputOnChange: true,
        validate: {
            title: (val: string) => (val.length > 3 ? null : 'Название магнитограммы не может быть меньше 4 символов'),
        }
    })
    let [selectedFile, setSelectedFile] = useState<File | null>(null)
    const onDrop = (files: File[]) => {
        MarkupModalHookForm.setFieldValue('file', files[0])
        setSelectedFile(files[0])
    }
    return (
        <form onSubmit={MarkupModalHookForm.onSubmit((val) => props.onSubmit(val.title, val.file))}>
            <UnderlineInput placeholder="Введите название" {...MarkupModalHookForm.getInputProps('title')} />
            <div style={{
                display: 'flex',

            }}>
                <div>
                    <img width={'150px'} src={fedyaLeft} height={'170px'}/>
                </div>
                <div style={{ width: '61%' }}>
                    <Dropzone
                        maxSize={5 * 1024 ** 2}
                        onDrop={(files) => onDrop(files)}
                        onReject={() => MarkupModalHookForm.setFieldError('files', 'Select images only')}
                    >
                        <Center h={120}>
                            <Dropzone.Idle>Загрузите файл</Dropzone.Idle>
                            <Dropzone.Accept>Загрузите файл</Dropzone.Accept>
                            <Dropzone.Reject>Файл не валиден</Dropzone.Reject>
                        </Center>
                    </Dropzone>
                    {selectedFile != null &&
                        <Text mb={5} mt="md">
                            Выбранный файл: {selectedFile.name}
                        </Text>
                    }
                    <GradientButton type="submit">Создать</GradientButton>
                </div>             
            </div>
        </form>
    )
}
export default MarkupModalForm;