import { useForm } from "@mantine/form";
import React, { FC, useState } from "react";
import { UnderlineInput } from "../../ui";
import { Button, Center, Text } from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
interface MarkupModalFormProps {
    onSubmit: (title: string, form: File | null) => void
}
interface FormValues {
    title: string
    file: File | null
}
const MarkupModalForm: FC<MarkupModalFormProps> = (props) => {
    const MarkupModalHookForm = useForm<FormValues>({
        initialValues: { title: '', file: null},
        validateInputOnChange: true,
        validate: {
            title: (val: string) => (val.length > 3 ? null : 'Название разметки не может быть меньше 4 символов'),
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
            <Dropzone 
            maxSize={5 * 1024 ** 2} 
            onDrop={(files) => onDrop(files)}
            onReject={() => MarkupModalHookForm.setFieldError('files', 'Select images only')}
            >
                <Center h={120}>
                    <Dropzone.Idle>Drop files here</Dropzone.Idle>
                    <Dropzone.Accept>Drop files here</Dropzone.Accept>
                    <Dropzone.Reject>Files are invalid</Dropzone.Reject>
                </Center>
            </Dropzone>
            {selectedFile != null &&
                <Text mb={5} mt="md">
                    Selected file:
                    {selectedFile.name}
                </Text>
            }
            <Button style={{ marginTop: 15 }} fullWidth type="submit">Создать</Button>
        </form>
    )
}
export default MarkupModalForm