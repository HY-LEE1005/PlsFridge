import React from "react";
import './BottomNav.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function BottomNav () {
  return (
    <div className="wrapper">
      <Navbar variant="light" expand="lg" className="wrapper">
        <Container fluid>
            <Nav>
              <NavDropdown id="dropdown-button-drop-up-button-drop-up" drop="up" variant="secondary" title="마이페이지" menuVariant="light">
                {IngredientsList.map((list) => {
                  return (
                    <NavDropdown.Item href={list.link}>{list.text}</NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown id="dropdown-button-drop-up" drop="up" variant="secondary" title="음식만들기" menuVariant="light">
                {MakingFoodList.map((list) => {
                  return (
                    <NavDropdown.Item href={list.link}>{list.text}</NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown id="dropdown-button-drop-up" drop="up" variant="secondary" title="관리자페이지" menuVariant="light">
                {AdminList.map((list) => {
                  return (
                    <NavDropdown.Item href={list.link}>{list.text}</NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default BottomNav;

const baseIngredientsUrl = '/Ingredients/';
const baseMakingFoodUrl = '/MakingFood/';
const baseAdminUrl = '/Admin/';

const IngredientsList = [
  {
    link: `${baseIngredientsUrl}Account_Management`,
    text: '계정 관리',
  },
  {
    link: `${baseIngredientsUrl}Personal_Fridge`,
    text: '나의 냉장고',
  },
  {
    link: `${baseIngredientsUrl}Personal_Cookware`,
    text: '나의 조리기구',
  },
  {
    link: `${baseIngredientsUrl}Cooking_Basket`,
    text: '요리 장바구니',
  },
];

const MakingFoodList = [
  {
    link: `${baseMakingFoodUrl}Todays_Recipes`,
    text: '오늘의 레시피',
  },
  {
    link: `${baseMakingFoodUrl}Best_Recipes`,
    text: '베스트 레시피',
  },
  {
    link: `${baseMakingFoodUrl}All_Recipes`,
    text: '전체 레시피',
  },
  {
    link: `${baseMakingFoodUrl}Recipes_Registration`,
    text: '레시피 등록',
  },
];

const AdminList = [
    {
      link: `${baseAdminUrl}Admin_Page`,
      text: '관리자 페이지',
    },
  ];