'use client'

import "easymde/dist/easymde.min.css";
import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import Loading from '@/app/components/loading/loading'
import { Suspense } from 'react'
import { Controller, useForm } from 'react-hook-form'
import axios, { Axios } from 'axios'

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

                <Dialog.Content style={ { maxWidth: 600 } }>
                    <Dialog.Title>Create a new issue</Dialog.Title>

                    <Flex direction="column" gap="3">
                        <form onSubmit={ handleSubmit((data) => submitIssueForm(data)) }>
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

                                <Controller render={ (field) =>
                                    <SimpleMDE placeholder="Enter the descritpion of your issue" { ...field }/>
                                }
                                            name='description'
                                            control={ control }
                                />
                            </label>
                        </form>
                    </Flex>

                    <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close>
                            <Button variant="soft" color="gray">
                                Cancel
                            </Button>
                        </Dialog.Close>
                        <Dialog.Trigger>
                            <Button>Create issue</Button>
                        </Dialog.Trigger>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>
        </Suspense>
    )
}

async function submitIssueForm(data: IssueForm) {
    console.log(data)
    await axios.post('/api/issues', data)
}