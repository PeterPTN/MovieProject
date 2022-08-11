import styled from "styled-components"

const KeywordWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: .35rem;
  flex-wrap: wrap;
  margin: .75rem 0;
  padding: 0 .25rem;
  letter-spacing: .1rem;


  h4 {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    padding: .5rem;
    border-radius: .5em;
    cursor: default;
    text-align: center;
    display: flex;
    align-items: center;
    font-weight: 400;
  }

  h4:hover {
    color: silver;
  }

  @media screen and (max-width: 1000px) {
    h4 {
      font-size: .9rem;
    }
  }
`

const KeywordComponent = ({ keywordData }) => {
  //console.log(keywordData);
  
  if (keywordData.results) {
    return (
      <KeywordWrapper>
        {keywordData.results.map((word, index) => {
          return (
            <h4 key={index + 2} >{word.name}</h4>
          )
        })}
      </KeywordWrapper>
    )
  } else if (keywordData.length > 0){
    return (
      <KeywordWrapper>
        {keywordData.keywords.map((word, index) => {
          return (
            <h4 key={index + 2} >{word.name}</h4>
          )
        })}
      </KeywordWrapper>
    )
  } 
}

export default KeywordComponent