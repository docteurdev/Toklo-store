import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import React from 'react'

type Props = {}

const Menu = (props: Props) => {
  return (
     <div className="w-full flex flex-col md:flex-row md:justify-between items-center mb-6">
     {/* <Button>
      Add a card
     </Button> */}

      <h2 className='font-bold text-2xl' > Liste de suggestions </h2>
     
      <div className=" flex gap-6">
       <DropdownMenu>
       <DropdownMenuTrigger asChild>
         <Button variant="outline">
           Toutes les suggestions
         </Button>
        </DropdownMenuTrigger>
       <DropdownMenuContent>
         <DropdownMenuLabel>My Account</DropdownMenuLabel>
         <DropdownMenuSeparator />
         <DropdownMenuItem>Profile</DropdownMenuItem>
         <DropdownMenuItem>Billing</DropdownMenuItem>
         <DropdownMenuItem>Team</DropdownMenuItem>
         <DropdownMenuItem>Subscription</DropdownMenuItem>
       </DropdownMenuContent>
      </DropdownMenu>



      </div>
     </div>
  )
}

export default Menu