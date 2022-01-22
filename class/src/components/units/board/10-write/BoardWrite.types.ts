import { ChangeEvent } from 'react'

export interface IBoardWriteProps {
    isEdit: boolean
    data?: any
}

export interface IBoardWriteUIProps {
    bbb: string
    ccc: () => void
    xxx: () => void
    ddd: (event: ChangeEvent<HTMLInputElement>) => void
    eee: (event: ChangeEvent<HTMLInputElement>) => void
    fff: (event: ChangeEvent<HTMLInputElement>) => void
    isActive: boolean
    isEdit: boolean
    data: any
}

export interface IMyButtonProps {
    ggg: boolean
}