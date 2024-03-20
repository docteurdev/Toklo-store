import {type ComponentPropsWithoutRef, type ReactNode} from "react"
export interface IForm {
 children: ReactNode

}

export type TInput = {
 label: string
} & ComponentPropsWithoutRef<"input">

export type TBtn = {
 label: string
} & ComponentPropsWithoutRef<"button">

export type TasideItem = {
 item:{
  icon: ReactNode,
  link: string
  label: string

 }
}

export interface IrecapCard {
 icon: ReactNode
 label: string 
 value: string
 sublabel: string
 isActive?: boolean
}

export interface ISmallBtn {
 label: string
 icon: ReactNode
 bg?: string
 action?: () => void
}

export type IDressMaker = {
  id: string
  name: string
  lastname: string
  phone: string
  password: string
  photo?: string 
  subscribe: boolean,
  createdAt:  string
  updatedAt: string
}
export type TComment = {
  id: string
  comment: string
  createdAt: string
  updatedAt: string
  status: number
  DressMaker: IDressMaker
}

export type TPricing = {
  id : number
  name: string
  price: number
  createdAt: string
  updatedAt: string
  desc: string
  items: string []
  type: "HAL_YEARLY" | "ALL_TIME" | 'QUATERLY'
}