'use client'

import { Suspense } from 'react'
import NewIssueDialog from '@/app/components/issues/new-issue-dialog'
import Loading from '@/app/components/loading/loading'

export default function IssuesPage() {
    return (
        <div>
            <Suspense fallback={ <Loading/> }>
                <NewIssueDialog/>
            </Suspense>
        </div>
    )
}