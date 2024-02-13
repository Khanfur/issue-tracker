'use client'

import { Dialog, Flex, TextField, Button, Text } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

export default function NewIssueDialog() {
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button>New issue</Button>
            </Dialog.Trigger>

            <Dialog.Content style={{ maxWidth: 600 }}>
                <Dialog.Title>Create a new issue</Dialog.Title>

                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Email
                        </Text>
                        <TextField.Input placeholder="Enter your email"/>
                    </label>
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Description
                        </Text>
                        <SimpleMDE placeholder="Enter the descritpion of your issue" />
                    </label>
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
    )
}