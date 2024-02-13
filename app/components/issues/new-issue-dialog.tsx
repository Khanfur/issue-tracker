'use client'

import "easymde/dist/easymde.min.css";
import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes'
import Loading from '@/app/components/loading/loading'
import { Suspense } from 'react'
import { Controller, useForm } from 'react-hook-form'
import axios from 'axios'

import dynamic from "next/dynamic";

const SimpleMdeEditor = dynamic(
    () => import("react-simplemde-editor"),
    { ssr: false }
);

async function submitIssueForm(data: IssueForm) {
    console.log('submit', data)
    await axios.post('/api/issues', data)
}

export default function NewIssueDialog() {
    const {
        register,
        control,
        handleSubmit
    } = useForm<IssueForm>()


    return (
        <Suspense fallback={ <Loading/> }>
            <Dialog.Root>
                <Dialog.Trigger>
                    <Button>New issue</Button>
                </Dialog.Trigger>
                <form onSubmit={ handleSubmit((data) => submitIssueForm(data)) }>
                    <Dialog.Content style={ { maxWidth: 600 } }>
                        <Dialog.Title>Create a new issue</Dialog.Title>

                        <Flex direction="column" gap="3">
                            <label>
                                <Text as="div" size="2" mb="1" weight="bold">
                                    Title
                                </Text>
                                <TextField.Input placeholder="Enter the title of the issue"
                                                 { ...register('title') }
                                />
                            </label>
                            <label>
                                <Text as="div" size="2" mb="1" weight="bold">
                                    Description
                                </Text>

                                <Controller render={({ field }) => {
                                    const {
                                        ref,
                                        ...fieldProps
                                    } = field

                                    return (
                                        <SimpleMdeEditor
                                            placeholder="Enter the descritpion of your issue"
                                            { ...fieldProps }
                                        />
                                    )
                                }}
                                        name="description"
                                        control={control}
                                        />
                            </label>

                        </Flex>

                        <Flex gap="3" mt="4" justify="end">
                            <Dialog.Close>
                                <Button variant="soft" color="gray">
                                    Cancel
                                </Button>
                            </Dialog.Close>
                            <Button type='submit'>Create issue</Button>
                        </Flex>
                    </Dialog.Content>
                </form>
            </Dialog.Root>
        </Suspense>
    )
}