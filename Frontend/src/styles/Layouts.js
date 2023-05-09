import styled from "styled-components";

export const MainLayout = styled.div`
    padding: 2rem;
    height: 100%;
    display: flex;
    gap: 2rem;
`;

export const InnerLayout = styled.div`
    height: 100vh;
    background-image: url(${props => props.bg});
    position: relative;
    main{
        flex: 1;
        background: rgba(252, 246, 249, 0.78);
        border: 3px solid #FFFFFF;
        backdrop-filter: blur(4.5px);
        border-radius: 32px;
        overflow-x: hidden;
        &::-webkit-scrollbar{
            width: 0;
        }
    }
`;