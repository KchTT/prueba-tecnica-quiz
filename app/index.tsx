import Button from '@/components/ui/Button'
import Paragraph from '@/components/ui/Paragraph'
import SectionContainer from '@/components/ui/SectionContainer'
import Title from '@/components/ui/Title'
import { styles } from '@/constants/Styles'
import { useQuizzContext } from '@/context/QuizzContext'
import { Image } from 'expo-image'
import React from 'react'
import { View } from 'react-native'
const logo = require('../assets/images/abacus-wealth-logo.png')
const Index = () => {
        const { navega  } = useQuizzContext()
    
    return (
      <SectionContainer scroll={true}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
          }}
        >
          <View style={styles.logoCont}>
            {<Image source={logo} style={styles.imageLogo} />}
          </View>
          <Title>When it comes to money, you are more than a number.</Title>
          <Paragraph>
            {`You are a person with thoughts, feelings, dreams… and a past. A very speciﬁc and important money past. Most people have formed both helpful and harmful habits around spending, saving, giving, and investing. Many of us make financial decisions based not on our current financial situation, but on biases and tendencies that were formed many years ago.

Learning your money archetypes can help you have a healthier, more balanced relationship to money. Keep these three important things in mind:

   - You are a number. You are a sum of your money habits and behaviors.
   - There's no hierarchy. There aren't better and worse archetypes.
   - Archetypes can be fluid. We're usually a combination of one, two, or three of them and we may change over time.
   - They all possess both positive intentions as well as painful emotional states.
   - Knowing your financial archetypes brings you greater awareness around your inherent money behaviors.`}
          </Paragraph>
          <Title>
            Fill out these 5 questions to discover your dominant Financial
            Archetypes.
          </Title>
          <Paragraph customCss={{ marginBottom: 10 }}>
            To learn more about how we help clients, visit our website.
          </Paragraph>
          <Button
            customCss={{ marginBottom: 20 }}
            handleClick={() => navega({ href: "/quizz" })}
          >
            Get Started
          </Button>
        </View>
      </SectionContainer>
    );
}

export default Index