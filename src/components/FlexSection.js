import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: hidden;
`

const Container = ({ className, children, backgroundColor }) => (
  <SectionContainer className={className} style={{backgroundColor: backgroundColor}}>{children}</SectionContainer>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
  Background: PropTypes.func,
}

export default Container
