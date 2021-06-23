import React from 'react'
import {
    SectionTitle,
    SectionWrapper,
    SectionTag,
    SectionText,
    SectionP
} from "./SectionHeadingElements";


export default function SectionHeading({ tag, title, paragraph }) {
    return (
        <SectionWrapper>
            <SectionText>
                <SectionTag>{tag}</SectionTag>
                <SectionTitle>{title}</SectionTitle>
                <SectionP>{paragraph}</SectionP>
            </SectionText>
        </SectionWrapper>
    );
}