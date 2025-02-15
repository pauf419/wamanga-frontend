"use client"
import { useState } from "react"
import { Header, Image, Title, Wrapper, Body, PanelWrapper, Count, Icon, Counter, CounterControlls, ControllBtn, CounterIcon, ThxButton, Footer, Link, Description } from "./styled"
import PawIcon from "@icons/svg/paw.svg"
import CounterArrowTopIcon from "@icons/svg/counter-arrow-top.svg"
import CounterArrowBottomIcon from "@icons/svg/counter-arrow-bottom.svg"

interface Props {
    cb: (_:number) => void
    nested?: boolean
}

export const DonationPanel = ({cb, nested = false}: Props) => {

    const [count, setCount] = useState<number>(1)

    const handleSubtraction = () => {
        if(count !== 1) setCount(prev => prev-1);
    }
    
    return (
        <Wrapper $nested={nested}>
            <Header>
                <Title>
                    Спасибо команде
                </Title>
                <Image src="/no-comments.png"/>
            </Header>
            <Body>
                <PanelWrapper>
                    <Count>
                        <Icon as={PawIcon}/>
                        <Counter value={count}/>
                        <CounterControlls>
                            <ControllBtn onClick={() => setCount(prev => prev+1)}>
                                <CounterIcon as={CounterArrowTopIcon}/>
                            </ControllBtn>
                            <ControllBtn onClick={handleSubtraction}>
                                <CounterIcon as={CounterArrowBottomIcon}/>
                            </ControllBtn>
                        </CounterControlls>
                    </Count>

                    <ThxButton>
                        Спасибо
                    </ThxButton>
                </PanelWrapper>
            </Body>
            <Footer>
                <Description>
                    Мальописи та переклади роблять реальні люди і їх дуже надихає ваша підтримка! Тому на сайті існує легка система донатів — *тиць* і ваша подяка вже у команди.
                </Description>
                <Link href="">
                    Детальніше про подяки
                </Link>
            </Footer>
        </Wrapper>
    )
}