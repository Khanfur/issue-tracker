'use client'

import { TextArea, TextField, Button } from '@radix-ui/themes'

export default function NewIssuePage() {
    return (
        <div className={ 'max-w-xl space-y-3' }>
            <TextField.Root>
                <TextField.Input placeholder={ 'Title' }></TextField.Input>
            </TextField.Root>
            <TextArea placeholder={ 'Description' }></TextArea>
            <Button>Submit new issue</Button>
        </div>
    )
}