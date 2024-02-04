import { Button, Center, Text } from "@mantine/core";
import { matches, useForm } from "@mantine/form";
import { FC, useState } from "react";
import { UnderlineInput } from "../../ui";
import { Dropzone } from "@mantine/dropzone";
import fedyaRight from '../../img/fedyaRight.png';

interface VersionModalFormProps {
    onSubmit: (file: File | null, version: string) => void;
}
interface FormValues {
    file: File | null;
    version: string;
}
const VersionModalForm: FC<VersionModalFormProps> = (props) => {
    const VersionModalHookForm = useForm<FormValues>({
        initialValues: { file: null, version: '' },
        validateInputOnChange: true,
        validate: {
            version: matches(/^(\d+\.)?(\d+\.)?(\*|\d+)$/, 'Введите коректное описание версии'),
            file: (val: File | null) => (val != null ? null : 'Обязательно Загрузите файл')
        }
    })
    let [selectedFile, setSelectedFile] = useState<File | null>(null)
    const onDrop = (files: File[]) => {
        VersionModalHookForm.setFieldValue('file', files[0])
        setSelectedFile(files[0])
    }
    return (
        <form onSubmit={VersionModalHookForm.onSubmit((values) => props.onSubmit(values.file, values.version))}>
            <UnderlineInput placeholder="Введите версию" {...VersionModalHookForm.getInputProps('version')} />
            <div />
            <div style={{
                display: 'flex',

            }}>
                <div style={{ width: '61%' }}>
                    <Dropzone
                        maxSize={5 * 1024 ** 2}
                        onDrop={(files) => onDrop(files)}
                        onReject={() => VersionModalHookForm.setFieldError('files', 'Select images only')}
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
                    <Button style={{ marginTop: 15 }} fullWidth type="submit">Создать</Button>
                </div>
                <div>
                    <img width={'150px'} src={fedyaRight} height={'175px'}/>
                </div>
            </div>
        </form>
    )
}
export default VersionModalForm;