import SectionContainer from '@/components/ui/SectionContainer'
import UserForm from '@/components/UserForm'
import { useQuizzContext } from '@/context/QuizzContext'
import React from 'react'

const User = () => {
    const { handleSend  } = useQuizzContext()

    return <SectionContainer>
       <UserForm handleSend={handleSend} />
    </SectionContainer>
}
export default User;