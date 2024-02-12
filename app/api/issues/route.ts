import { NextResponse } from 'next/server'
import { createIssueSchema } from '@/app/api/validation/issue/issue'
import prisma from '@/app/prisma'
import { Issue } from '@prisma/client'


export async function POST(request: NextResponse) {
    const body: Issue = await request.json()
    const validation = createIssueSchema.safeParse(body)

    if(! validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 })
    }

    await prisma.issue.create({
        data: {
            ...validation.data
        }
    })

    return NextResponse.json('Issue has been created', { status: 201 })
}