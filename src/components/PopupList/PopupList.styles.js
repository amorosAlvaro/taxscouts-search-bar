import styled from 'styled-components';

const BooksNav = styled.nav`
    display: flex;
    justify-content: right;
    padding-right: 2rem;`;

const BooksNavList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    width: 28rem;`;

const AmazonLink = styled.a`
    text-decoration: none;
    aria-label="amazon"
    `;

const BooksNavListItem = styled.li`
    width: 100%;
    overflow: hidden;
    box-shadow: 0px 0px 1.5rem rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
    min-height: 4rem;`;

const BooksNavItemContainer = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;`;
const BooksNavItemInfo = styled.div`
 width: 60%;
 padding: 1rem 1.5rem;`;

const BooksNavInfoHeader = styled.p`    
font-size: 1.2rem;
font-family: 'Sintony', sans-serif;
margin-bottom: 1rem;`;

const BooksNavItemImg = styled.img`   
    height: 4rem;
    width: 4rem;`;

export {
  BooksNav, BooksNavList, AmazonLink, BooksNavListItem, BooksNavItemContainer,
  BooksNavItemInfo, BooksNavInfoHeader, BooksNavItemImg
};
