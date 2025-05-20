import Button from '@/components/ui/Button'
import Panel from '@/components/ui/Panel'
import SectionContainer from '@/components/ui/SectionContainer'
import Subtitle from '@/components/ui/Subtitle'
import Title from "@/components/ui/Title"
import { useQuizzContext } from '@/context/QuizzContext'
import React from 'react'
import { View } from 'react-native'
const Success = () => {
    const { navega } = useQuizzContext()

    return (
      <SectionContainer>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Panel>
            <Title customCss={{ textAlign: "center", fontWeight: "bold" }}>
              Congrats!!
            </Title>
            <Subtitle customCss={{ textAlign: "center" }}>
              We have received your answers
            </Subtitle>
            <Button
              handleClick={() => navega({ href: "/" })}
              customCss={{ marginTop: 20 }}
            >
              Back Home
            </Button>
          </Panel>
        </View>
      </SectionContainer>
    );
}
export default Success;