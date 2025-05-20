import Button from '@/components/ui/Button'
import QuestionCard from '@/components/ui/QuestionCard'
import SectionContainer from '@/components/ui/SectionContainer'
import Timer from '@/components/ui/Timer'
import { useQuizzContext } from '@/context/QuizzContext'
import { IQuestion } from '@/types'
import React from 'react'
import { FlatList, View } from 'react-native'

const Index = () => {
    const { state,  navega, handleClick } = useQuizzContext()
    const Row = ({ question, index }: { question: IQuestion, index: number }) => {
        return (
            <View key={index}>
                <QuestionCard question={question} index_question={index} handleClick={handleClick} />
            </View>
        );
    };
    return <SectionContainer>
        <View
            style={{
                flex: 1,
            }}
        >
            <View style={{marginBottom:10 }}>
            <Timer />
            </View>
            <FlatList
                data={state.quizz}
                renderItem={({ item, index }) => <Row question={item} index={index} />}
                keyExtractor={option => option.id.toString()}
            />
            <View style={{ marginTop: 10 }}>
                <Button
                    handleClick={() => navega({ href: "/quizz/user" })}
                >
                    Continue
                </Button>
            </View>
        </View>
    </SectionContainer>
}
export default Index;