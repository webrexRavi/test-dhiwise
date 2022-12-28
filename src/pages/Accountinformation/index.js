import React from "react";

import {
  Column,
  Stack,
  Row,
  Img,
  Text,
  Button,
  Line,
  List,
  SelectBox,
  Input,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const AccountinformationPage = () => {
  const navigate = useNavigate();

  function handleBackNavigation() {
    navigate(-1);
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-worksans items-center justify-start mx-[auto] w-[100%]">
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <Stack className="h-[923px] relative w-[100%]">
            <Column className="absolute flex flex-col items-center justify-start w-[100%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <header className="w-[100%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Column className="flex flex-col items-center justify-start w-[100%]">
                      <Column className="flex flex-col items-center justify-start w-[100%]">
                        <Column className="border border-gray_200 border-solid flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                          <Row className="bg-gray_300 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:pt-[4px] md:pt-[5px] pt-[8px] sm:px-[4px] md:px-[5px] px-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[3px] ml-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                              <Img
                                src="images/img_browsercontrol.svg"
                                className="max-w-[100%] w-[18%]"
                                alt="BrowserControl"
                              />
                              <Column className="flex flex-col items-center md:ml-[6px] ml-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
                                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                                    <Img
                                      src="images/img_curvel.svg"
                                      className="max-w-[100%] sm:mt-[13px] md:mt-[17px] mt-[26px] w-[3%]"
                                      alt="CurveL"
                                    />
                                    <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap sm:mx-[0] sm:p-[4px] md:p-[5px] p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] sm:w-[100%] w-[95%] common-row-list">
                                      <ul className="flex flex-row items-center justify-between">
                                        <li className="w-[9%] sm:w-[100%] sm:my-[10px] rounded-radius50 my-[1px]">
                                          <Img
                                            src="images/img_favicon.png"
                                            className="md:h-[12px] h-[16px] sm:h-[9px] rounded-radius50"
                                            alt="Favicon"
                                          />
                                        </li>
                                        <li className="w-[auto] sm:w-[100%] sm:my-[10px] my-[2px]">
                                          <a
                                            href={"javascript:"}
                                            className="cursor-pointer font-normal not-italic text-[12px] text-gray_800 tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1"
                                            rel="noreferrer"
                                          >
                                            sportcycle.com .
                                          </a>
                                        </li>
                                        <li className="w-[10%] sm:w-[100%] sm:my-[10px] max-w-[100%]">
                                          <Img
                                            src="images/img_close.svg"
                                            className="sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                                            alt="close"
                                          />
                                        </li>
                                      </ul>
                                    </Row>
                                    <Img
                                      src="images/img_curver.svg"
                                      className="max-w-[100%] sm:mt-[13px] md:mt-[17px] mt-[26px] w-[3%]"
                                      alt="CurveR"
                                    />
                                  </Row>
                                  <Img
                                    src="images/img_plus.svg"
                                    className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                    alt="plus"
                                  />
                                </Row>
                              </Column>
                            </Row>
                          </Row>
                          <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[2px] md:p-[3px] p-[5px] w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[4px] ml-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                                <Img
                                  src="images/img_arrowleft.svg"
                                  className="common-pointer md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                  onClick={handleBackNavigation}
                                  alt="arrowleft"
                                />
                                <Img
                                  src="images/img_arrowright.svg"
                                  className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                  alt="arrowright"
                                />
                                <Img
                                  src="images/img_refresh.svg"
                                  className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                  alt="refresh"
                                />
                                <Img
                                  src="images/img_home.svg"
                                  className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                  alt="home"
                                />
                              </Row>
                              <Row className="bg-gray_100 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mx-[0] sm:p-[3px] md:p-[4px] p-[6px] rounded-radius14 sm:w-[100%] w-[87%]">
                                <Img
                                  src="images/img_lock.svg"
                                  className="h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                  alt="lock"
                                />
                                <Column className="flex flex-col items-center ml-[10px] md:ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
                                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_900 tracking-ls025 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                      variant="body3"
                                    >
                                      jugl.com
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-gray_701 tracking-ls025 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                      variant="body3"
                                    >
                                      /Chat
                                    </Text>
                                  </Row>
                                </Column>
                                <Img
                                  src="images/img_bookmark.svg"
                                  className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] ml-[1068px] sm:ml-[568px] md:ml-[734px] mr-[4px] md:w-[11px] w-[16px] sm:w-[8px]"
                                  alt="bookmark"
                                />
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[4%]">
                                <Img
                                  src="images/img_imageuserpr.png"
                                  className="sm:h-[12px] md:h-[16px] h-[22px] rounded-radius50 sm:w-[11px] md:w-[15px] w-[22px]"
                                  alt="ImageUserPr"
                                />
                                <Img
                                  src="images/img_overflowmenu.svg"
                                  className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                  alt="overflowmenu"
                                />
                              </Row>
                            </Row>
                          </Row>
                        </Column>
                        <Img
                          src="images/img_imagegoeshere.png"
                          className="max-w-[100%] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
                          alt="IMAGEGOESHERE"
                        />
                      </Column>
                      <Column className="flex flex-col items-center justify-start w-[100%]">
                        <Button
                          className="cursor-pointer font-medium text-[16px] text-center text-gray_901 w-[100%]"
                          variant="FillBluegray50"
                        >
                          Free Shipping Order above the $50
                        </Button>
                        <Column className="bg-white_A700 flex flex-col items-center justify-end md:pt-[10px] pt-[15px] sm:pt-[7px] md:px-[10px] px-[15px] sm:px-[7px] w-[100%]">
                          <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                            <Column className="flex flex-col items-center justify-start w-[100%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[35%]">
                                  <Column className="flex flex-col justify-start mt-[3px] sm:mx-[0] sm:px-[0] w-[10%] sm:w-[100%]">
                                    <Text
                                      className="font-medium text-red_A700 w-[auto]"
                                      variant="body2"
                                    >
                                      Home
                                    </Text>
                                    <div className="bg-red_A700 h-[1px] mt-[3px] rounded-radius05 sm:w-[100%] w-[42%]"></div>
                                  </Column>
                                  <Column className="flex flex-col items-center justify-start sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[23%]">
                                    <Text
                                      className="font-normal my-[2px] not-italic text-gray_900_90 w-[auto]"
                                      variant="body2"
                                    >
                                      Adult’s Board
                                    </Text>
                                  </Column>
                                  <Column className="flex flex-col items-center justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[19%]">
                                    <Text
                                      className="font-normal not-italic text-gray_900_90 w-[auto]"
                                      variant="body2"
                                    >
                                      Kid’s Board
                                    </Text>
                                  </Column>
                                  <Column className="flex flex-col items-center justify-start sm:mx-[0] pr-[1px] pt-[1px] sm:px-[0] sm:w-[100%] w-[20%]">
                                    <Text
                                      className="font-normal mt-[3px] not-italic text-gray_900_90 w-[auto]"
                                      variant="body2"
                                    >
                                      Long Board
                                    </Text>
                                  </Column>
                                  <Column className="flex flex-col items-center justify-start mt-[4px] sm:mx-[0] sm:px-[0] w-[10%] sm:w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_900_90 w-[auto]"
                                      variant="body2"
                                    >
                                      Blogs
                                    </Text>
                                  </Column>
                                </Row>
                                <Img
                                  src="images/img_logo12.png"
                                  className="max-w-[100%] md:ml-[105px] ml-[154px] sm:ml-[82px] w-[8%]"
                                  alt="logoTwelve"
                                />
                                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[174px] ml-[253px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[29%]">
                                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                                      <Text
                                        className="flex-grow not-italic text-gray_900_87 tracking-ls024 md:tracking-ls11 sm:tracking-ls11"
                                        variant="body5"
                                      >
                                        Search...
                                      </Text>
                                      <Img
                                        src="images/img_search.svg"
                                        className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                        alt="search One"
                                      />
                                    </Row>
                                    <Button
                                      className="flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                                      size="smIcn"
                                    >
                                      <Img
                                        src="images/img_cart.svg"
                                        className="h-[16px] sm:h-[9px] md:h-[12px] flex items-center justify-center"
                                        alt="cart"
                                      />
                                    </Button>
                                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                                      <Column className="flex flex-col items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                                        <Text
                                          className="not-italic text-red_A700 w-[auto]"
                                          variant="body5"
                                        >
                                          Welcome!
                                        </Text>
                                        <Text
                                          className="font-medium text-gray_901 w-[auto]"
                                          variant="body3"
                                        >
                                          Suganth A
                                        </Text>
                                      </Column>
                                      <Img
                                        src="images/img_ellipse5.png"
                                        className="sm:h-[18px] md:h-[23px] h-[32px] rounded-radius50 sm:w-[17px] md:w-[22px] w-[32px]"
                                        alt="EllipseFive"
                                      />
                                    </Row>
                                  </Row>
                                  <Line className="bg-gray_900_7e sm:h-[19px] md:h-[25px] h-[35px] w-[1px]" />
                                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] py-[2px] sm:w-[100%] w-[24%]">
                                    <Img
                                      src="images/img_1280pxflagof.png"
                                      className="max-w-[100%] w-[32%]"
                                      alt="1280pxFlagof"
                                    />
                                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                                      <Text
                                        className="font-normal not-italic text-gray_901 w-[auto]"
                                        variant="body2"
                                      >
                                        ₹
                                      </Text>
                                      <Text
                                        className="font-normal not-italic text-gray_901 w-[auto]"
                                        variant="body4"
                                      >
                                        INR
                                      </Text>
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="max-w-[100%] w-[17%]"
                                        alt="arrowdown"
                                      />
                                    </Row>
                                  </Row>
                                </Row>
                              </Row>
                              <Line className="bg-gray_400_7e h-[0.5px] sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]" />
                            </Column>
                          </Column>
                        </Column>
                      </Column>
                    </Column>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end md:ml-[27px] ml-[40px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
                      <Img
                        src="images/img_home_24X24.svg"
                        className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="home Two"
                      />
                      <div className="bg-gray_401 h-[1px] sm:ml-[4px] md:ml-[5px] ml-[8px] my-[11px] sm:my-[5px] md:my-[7px] w-[10%]"></div>
                      <Text
                        className="font-normal mb-[1px] sm:ml-[4px] md:ml-[5px] ml-[8px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-red_A700 w-[auto]"
                        variant="body3"
                      >
                        My profile
                      </Text>
                    </Row>
                  </Column>
                </header>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                  <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                    <Text
                      className="not-italic text-gray_901 md:tracking-ls1 sm:tracking-ls1 tracking-ls12000000000000002 uppercase w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      My profile
                    </Text>
                    <Stack className="h-[589px] sm:mt-[12px] md:mt-[16px] mt-[24px] outline outline-[0.25px] outline-black_900_63 py-[14px] sm:py-[7px] md:py-[9px] relative w-[100%]">
                      <div className="absolute bg-blue_A400_63 sm:h-[24px] md:h-[31px] h-[44px] top-[20%] w-[100%]"></div>
                      <Column className="absolute flex flex-col inset-x-[0] justify-start sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[90%]">
                        <Column className="flex flex-col items-end justify-start sm:mx-[0] pb-[1px] sm:px-[0] px-[1px] sm:w-[100%] w-[69%]">
                          <Text
                            className="capitalize font-normal mr-[1px] not-italic text-black_900 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            Account information
                          </Text>
                        </Column>
                        <Line className="bg-black_900_63 h-[0.5px] mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]" />
                        <Column className="flex flex-col items-end justify-start mt-[11px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] pb-[1px] pl-[1px] sm:px-[0] sm:w-[100%] w-[59%]">
                          <Text
                            className="capitalize font-normal not-italic text-black_900 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            Change password
                          </Text>
                        </Column>
                        <Line className="bg-black_900_63 h-[0.5px] mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]" />
                        <Column className="flex flex-col items-end justify-start mt-[11px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] pb-[1px] pl-[1px] sm:px-[0] sm:w-[100%] w-[30%]">
                          <Text
                            className="capitalize font-normal not-italic text-black_900 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            Address
                          </Text>
                        </Column>
                        <Line className="bg-black_900_63 h-[0.5px] mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]" />
                        <Column className="flex flex-col items-end justify-start mt-[11px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] pb-[1px] pl-[1px] sm:px-[0] sm:w-[100%] w-[37%]">
                          <Text
                            className="capitalize font-semibold text-blue_A400 md:tracking-ls1 sm:tracking-ls1 tracking-ls192 w-[auto]"
                            variant="body2"
                          >
                            My order
                          </Text>
                        </Column>
                        <Line className="bg-black_900_63 h-[0.5px] mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]" />
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
                    <Column className="flex flex-col items-center justify-start w-[100%]">
                      <Column className="flex flex-col justify-start sm:pt-[3px] md:pt-[4px] pt-[6px] w-[100%]">
                        <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                          <Text
                            className="font-semibold text-gray_901 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            My Orders
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] w-[100%]">
                          <Line className="bg-gray_702 h-[1px] w-[100%]" />
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                            <Text
                              className="font-normal not-italic text-gray_901 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Order#
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_901 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Product Name
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mx-[0] pl-[4px] sm:px-[0] py-[4px] sm:w-[100%] w-[67%]">
                              <Text
                                className="font-normal my-[1px] not-italic text-gray_901 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Order on
                              </Text>
                              <Text
                                className="font-normal ml-[135px] sm:ml-[71px] md:ml-[92px] mt-[1px] not-italic text-gray_901 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Status
                              </Text>
                              <Text
                                className="font-normal sm:ml-[42px] md:ml-[55px] ml-[80px] my-[1px] not-italic text-gray_901 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Invoice
                              </Text>
                            </Row>
                          </Row>
                          <Line className="bg-gray_702 h-[1px] sm:mt-[4px] md:mt-[5px] mt-[8px] w-[100%]" />
                        </Column>
                        <List
                          className="md:gap-[11px] gap-[16px] sm:gap-[8px] grid min-h-[auto] md:ml-[11px] ml-[16px] sm:ml-[8px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:w-[100%] w-[96%]"
                          orientation="vertical"
                        >
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                              <Text
                                className="font-medium text-red_A700 w-[auto]"
                                variant="body3"
                              >
                                #408-1210345
                              </Text>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                                <Stack className="bg-bluegray_100_71 h-[60px] relative rounded-radius10 sm:w-[31px] md:w-[41px] w-[60px]">
                                  <Img
                                    src="images/img_rectangle1768.png"
                                    className="absolute h-[60px] max-w-[100%] sm:w-[31px] md:w-[41px] w-[60px]"
                                    alt="Rectangle1768"
                                  />
                                </Stack>
                                <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                                  <Text
                                    className="font-semibold text-gray_901 w-[auto]"
                                    variant="body2"
                                  >
                                    Elegant Graphic Skartboard
                                  </Text>
                                  <Text
                                    className="font-normal mt-[3px] not-italic text-red_A700 w-[auto]"
                                    variant="body2"
                                  >
                                    View
                                  </Text>
                                </Column>
                              </Row>
                            </Row>
                            <Text
                              className="font-normal not-italic text-gray_901 w-[auto]"
                              variant="body2"
                            >
                              9 July 2022, 10:00am
                            </Text>
                            <Button
                              className="cursor-pointer font-medium min-w-[8%] md:my-[12px] my-[18px] sm:my-[9px] text-[12px] text-blue_500 text-center w-[max-content]"
                              shape="RoundedBorder4"
                              size="sm"
                              variant="FillBlue50"
                            >
                              In Transit
                            </Button>
                            <Img
                              src="images/img_file.svg"
                              className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                              alt="file"
                            />
                          </Row>
                          <Line className="self-center w-[100%] h-[1px] bg-bluegray_800_63" />
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                              <Text
                                className="font-medium text-red_A700 w-[auto]"
                                variant="body3"
                              >
                                #408-1210345
                              </Text>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                                <Stack className="bg-bluegray_100_71 h-[60px] relative rounded-radius10 sm:w-[31px] md:w-[41px] w-[60px]">
                                  <Img
                                    src="images/img_rectangle1768.png"
                                    className="absolute h-[60px] max-w-[100%] sm:w-[31px] md:w-[41px] w-[60px]"
                                    alt="Rectangle1768 One"
                                  />
                                </Stack>
                                <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                                  <Text
                                    className="font-semibold text-gray_901 w-[auto]"
                                    variant="body2"
                                  >
                                    Elegant Graphic Skartboard
                                  </Text>
                                  <Text
                                    className="font-normal mt-[3px] not-italic text-red_A700 w-[auto]"
                                    variant="body2"
                                  >
                                    View
                                  </Text>
                                </Column>
                              </Row>
                            </Row>
                            <Text
                              className="font-normal not-italic text-gray_901 w-[auto]"
                              variant="body2"
                            >
                              9 July 2022, 10:00am
                            </Text>
                            <Button
                              className="cursor-pointer font-medium min-w-[8%] md:my-[12px] my-[18px] sm:my-[9px] text-[12px] text-center text-green_700 w-[max-content]"
                              shape="RoundedBorder4"
                              size="sm"
                              variant="FillLightgreen100"
                            >
                              Delivered
                            </Button>
                            <Img
                              src="images/img_file.svg"
                              className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                              alt="file One"
                            />
                          </Row>
                          <Line className="self-center w-[100%] h-[1px] bg-bluegray_800_63" />
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                              <Text
                                className="font-medium text-red_A700 w-[auto]"
                                variant="body3"
                              >
                                #408-1210345
                              </Text>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                                <Stack className="bg-bluegray_100_71 h-[60px] relative rounded-radius10 sm:w-[31px] md:w-[41px] w-[60px]">
                                  <Img
                                    src="images/img_rectangle1768.png"
                                    className="absolute h-[60px] max-w-[100%] sm:w-[31px] md:w-[41px] w-[60px]"
                                    alt="Rectangle1768 Two"
                                  />
                                </Stack>
                                <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                                  <Text
                                    className="font-semibold text-gray_901 w-[auto]"
                                    variant="body2"
                                  >
                                    Elegant Graphic Skartboard
                                  </Text>
                                  <Text
                                    className="font-normal mt-[3px] not-italic text-red_A700 w-[auto]"
                                    variant="body2"
                                  >
                                    View
                                  </Text>
                                </Column>
                              </Row>
                            </Row>
                            <Text
                              className="font-normal not-italic text-gray_901 w-[auto]"
                              variant="body2"
                            >
                              9 July 2022, 10:00am
                            </Text>
                            <Button
                              className="cursor-pointer font-medium min-w-[8%] md:my-[12px] my-[18px] sm:my-[9px] text-[12px] text-blue_500 text-center w-[max-content]"
                              shape="RoundedBorder4"
                              size="sm"
                              variant="FillBlue50"
                            >
                              In Transit
                            </Button>
                            <Img
                              src="images/img_file.svg"
                              className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                              alt="file Two"
                            />
                          </Row>
                          <Line className="self-center w-[100%] h-[1px] bg-bluegray_800_63" />
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                              <Text
                                className="font-medium text-red_A700 w-[auto]"
                                variant="body3"
                              >
                                #408-1210345
                              </Text>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                                <Stack className="bg-bluegray_100_71 h-[60px] relative rounded-radius10 sm:w-[31px] md:w-[41px] w-[60px]">
                                  <Img
                                    src="images/img_rectangle1768.png"
                                    className="absolute h-[60px] max-w-[100%] sm:w-[31px] md:w-[41px] w-[60px]"
                                    alt="Rectangle1768 Three"
                                  />
                                </Stack>
                                <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                                  <Text
                                    className="font-semibold text-gray_901 w-[auto]"
                                    variant="body2"
                                  >
                                    Elegant Graphic Skartboard
                                  </Text>
                                  <Text
                                    className="font-normal mt-[3px] not-italic text-red_A700 w-[auto]"
                                    variant="body2"
                                  >
                                    View
                                  </Text>
                                </Column>
                              </Row>
                            </Row>
                            <Text
                              className="font-normal not-italic text-gray_901 w-[auto]"
                              variant="body2"
                            >
                              9 July 2022, 10:00am
                            </Text>
                            <Button
                              className="cursor-pointer font-medium min-w-[8%] md:my-[12px] my-[18px] sm:my-[9px] text-[12px] text-amber_700 text-center w-[max-content]"
                              shape="RoundedBorder4"
                              size="sm"
                              variant="FillAmber100"
                            >
                              Returned
                            </Button>
                            <Img
                              src="images/img_file.svg"
                              className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                              alt="file Three"
                            />
                          </Row>
                          <Line className="self-center w-[100%] h-[1px] bg-bluegray_800_63" />
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                              <Text
                                className="font-medium text-red_A700 w-[auto]"
                                variant="body3"
                              >
                                #408-1210345
                              </Text>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                                <Stack className="bg-bluegray_100_71 h-[60px] relative rounded-radius10 sm:w-[31px] md:w-[41px] w-[60px]">
                                  <Img
                                    src="images/img_rectangle1768.png"
                                    className="absolute h-[60px] max-w-[100%] sm:w-[31px] md:w-[41px] w-[60px]"
                                    alt="Rectangle1768 Four"
                                  />
                                </Stack>
                                <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                                  <Text
                                    className="font-semibold text-gray_901 w-[auto]"
                                    variant="body2"
                                  >
                                    Elegant Graphic Skartboard
                                  </Text>
                                  <Text
                                    className="font-normal mt-[3px] not-italic text-red_A700 w-[auto]"
                                    variant="body2"
                                  >
                                    View
                                  </Text>
                                </Column>
                              </Row>
                            </Row>
                            <Text
                              className="font-normal not-italic text-gray_901 w-[auto]"
                              variant="body2"
                            >
                              9 July 2022, 10:00am
                            </Text>
                            <Button
                              className="cursor-pointer font-medium min-w-[11%] md:my-[12px] my-[18px] sm:my-[9px] text-[12px] text-center text-red_A701 w-[max-content]"
                              shape="RoundedBorder4"
                              size="sm"
                              variant="FillDeeporange50"
                            >
                              Out of delivery
                            </Button>
                            <Img
                              src="images/img_file.svg"
                              className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                              alt="file Four"
                            />
                          </Row>
                        </List>
                      </Column>
                      <Line className="bg-bluegray_800_63 h-[1px] sm:mt-[4px] md:mt-[5px] mt-[8px] w-[100%]" />
                    </Column>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[10px] mt-[15px] sm:mt-[7px] p-[12px] sm:p-[6px] md:p-[8px] w-[100%]">
                      <Text
                        className="ml-[4px] not-italic text-black_900_7f w-[auto]"
                        variant="body5"
                      >
                        Rows per page:
                      </Text>
                      <SelectBox
                        className="font-semibold md:ml-[6px] ml-[9px] sm:mx-[0] md:pr-[12px] sm:pr-[15px] pr-[18px] text-[14px] text-red_A700 sm:w-[100%] w-[4%]"
                        placeholderClassName="text-red_A700"
                        name="GroupTwentyFour"
                        placeholder="10"
                        isSearchable={false}
                        isMulti={false}
                      ></SelectBox>
                      <Img
                        src="images/img_arrowleft_bluegray_101.svg"
                        className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[345px] md:ml-[446px] ml-[649px] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="arrowleft One"
                      />
                      <Button
                        className="cursor-pointer font-semibold sm:h-[18px] md:h-[23px] h-[32px] sm:ml-[4px] md:ml-[5px] ml-[8px] text-[14px] text-center text-red_A700 sm:w-[17px] md:w-[22px] w-[32px]"
                        shape="RoundedBorder4"
                        variant="OutlineRedA700_1"
                      >
                        1
                      </Button>
                      <Button
                        className="cursor-pointer font-semibold sm:h-[18px] md:h-[23px] h-[32px] sm:ml-[4px] md:ml-[5px] ml-[8px] text-[14px] text-bluegray_900_7f text-center sm:w-[17px] md:w-[22px] w-[32px]"
                        shape="RoundedBorder4"
                        variant="OutlineBlack90033"
                      >
                        2
                      </Button>
                      <Button
                        className="cursor-pointer font-semibold sm:h-[18px] md:h-[23px] h-[32px] sm:ml-[4px] md:ml-[5px] ml-[8px] text-[14px] text-bluegray_900_7f text-center sm:w-[17px] md:w-[22px] w-[32px]"
                        shape="RoundedBorder4"
                        variant="OutlineBlack90033"
                      >
                        3
                      </Button>
                      <Img
                        src="images/img_arrowleft_bluegray_101.svg"
                        className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[4px] md:ml-[5px] ml-[8px] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="arrowright One"
                      />
                    </Row>
                  </Column>
                </Row>
              </Column>
            </Column>
            <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:px-[0] right-[3%] top-[26%] sm:w-[100%] w-[41%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-normal not-italic p-[0] text-[13px] placeholder:text-bluegray_102 text-bluegray_102 w-[100%]"
                  wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[85%]"
                  name="SearchFixedwi"
                  placeholder="Search Name, Message..."
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer ml-[35px] mr-[1px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                        onClick={() => setInputvalue("")}
                        color="#d2d2d7"
                      />
                    ) : (
                      <Img
                        src="images/img_search_20X20.svg"
                        className="cursor-pointer ml-[35px] mr-[1px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                        alt="search"
                      />
                    )
                  }
                  shape="srcRoundedBorder8"
                  size="smSrc"
                  variant="srcOutlineGray50"
                ></Input>
                <Button
                  className="flex sm:h-[22px] md:h-[29px] h-[41px] items-center justify-center mt-[1px] sm:w-[21px] md:w-[28px] w-[41px]"
                  shape="icbRoundedBorder8"
                  size="smIcn"
                >
                  <Img
                    src="images/img_menu.svg"
                    className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                    alt="menu"
                  />
                </Button>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[11px] ml-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                  <Text
                    className="flex-grow font-normal not-italic text-gray_900_90"
                    variant="body3"
                  >
                    Filter
                  </Text>
                  <Img
                    src="images/img_share.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                    alt="share"
                  />
                </Row>
                <SelectBox
                  className="font-normal sm:mx-[0] not-italic text-[14px] text-gray_900_90 sm:w-[100%] w-[50%]"
                  placeholderClassName="text-gray_900_90"
                  name="Frame312"
                  placeholder="Sort By"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_black_900.svg"
                      className="w-[24px] h-[24px] mr-[0] sm:h-[13px] sm:w-[12px] md:h-[17px] md:w-[16px] max-w-[100%]"
                      alt="arrow_down"
                    />
                  }
                  size="sm"
                ></SelectBox>
              </Row>
            </Row>
          </Stack>
          <Column className="flex flex-col items-center justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
            <Column className="bg-bluegray_100_63 flex flex-col items-center justify-end sm:p-[15px] md:p-[25px] p-[37px] w-[100%]">
              <Column className="flex flex-col items-center justify-start max-w-[1360px] ml-[auto] mr-[auto] sm:mt-[3px] md:mt-[4px] mt-[6px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <Column className="flex flex-col items-center justify-start w-[100%]">
                  <Text
                    className="not-italic text-red_A700 uppercase w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    recently viewed
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[23px] md:mt-[30px] mt-[45px] w-[100%]">
                    <Column className="border border-gray_302 border-solid flex flex-col items-center sm:mx-[0] sm:pb-[10px] md:pb-[13px] pb-[20px] sm:px-[0] rounded-radius10 sm:w-[100%] w-[24%]">
                      <Column className="bg-bluegray_100_71 flex flex-col items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]">
                        <Column
                          className="bg-cover bg-no-repeat flex flex-col items-end justify-start md:p-[11px] sm:p-[15px] p-[16px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_group5.png')",
                          }}
                        >
                          <Column className="bg-green_500 flex flex-col sm:h-[28px] md:h-[36px] h-[52px] items-center justify-end md:mb-[116px] mb-[170px] sm:mb-[90px] mt-[1px] px-[10px] sm:px-[5px] md:px-[6px] rounded-radius50 shadow-bs2 sm:w-[27px] md:w-[35px] w-[52px]">
                            <Text
                              className="font-bold mt-[1px] text-white_A700 uppercase w-[auto]"
                              variant="body3"
                            >
                              10%
                            </Text>
                            <Text
                              className="font-normal mt-[1px] not-italic text-white_A700 uppercase w-[auto]"
                              variant="body4"
                            >
                              off
                            </Text>
                          </Column>
                        </Column>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                        <Column className="flex flex-col items-center justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_901 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Elegant Graphic Skartboard
                          </Text>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                            <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                              <Text
                                className="font-medium text-gray_901 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $ 534.00
                              </Text>
                            </Column>
                            <Img
                              src="images/img_cart_24X24.svg"
                              className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mt-[2px] sm:w-[12px] md:w-[16px] w-[24px]"
                              alt="cart One"
                            />
                          </Row>
                        </Column>
                      </Column>
                    </Column>
                    <List
                      className="sm:gap-[17px] md:gap-[22px] gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:w-[100%] w-[75%]"
                      orientation="horizontal"
                    >
                      <Column className="border border-gray_302 border-solid flex flex-col items-center justify-start sm:pb-[10px] md:pb-[13px] pb-[20px] sm:px-[0] rounded-radius10 w-[100%]">
                        <Stack className="bg-bluegray_100_71 h-[255px] relative rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]">
                          <Img
                            src="images/img_rectangle272_255X316.png"
                            className="absolute h-[255px] max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                            alt="Rectangle272"
                          />
                        </Stack>
                        <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                          <Column className="flex flex-col items-center justify-start w-[100%]">
                            <Text
                              className="font-normal not-italic text-gray_901 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Elegant Graphic Skartboard
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                              <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                                <Text
                                  className="font-medium text-gray_901 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  $ 534.00
                                </Text>
                              </Column>
                              <Img
                                src="images/img_cart_24X24.svg"
                                className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mt-[2px] sm:w-[12px] md:w-[16px] w-[24px]"
                                alt="cart Two"
                              />
                            </Row>
                          </Column>
                        </Column>
                      </Column>
                      <Column className="border border-gray_302 border-solid flex flex-col items-center justify-start sm:pb-[10px] md:pb-[13px] pb-[20px] sm:px-[0] rounded-radius10 w-[100%]">
                        <Stack className="bg-bluegray_100_71 h-[255px] relative rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]">
                          <Img
                            src="images/img_rectangle272_1.png"
                            className="absolute h-[255px] max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                            alt="Rectangle272 One"
                          />
                        </Stack>
                        <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                          <Column className="flex flex-col items-center justify-start w-[100%]">
                            <Text
                              className="font-normal not-italic text-gray_901 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Elegant Graphic Skartboard
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                              <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                                <Text
                                  className="font-medium text-gray_901 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  $ 534.00
                                </Text>
                              </Column>
                              <Img
                                src="images/img_cart_24X24.svg"
                                className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mt-[2px] sm:w-[12px] md:w-[16px] w-[24px]"
                                alt="cart Three"
                              />
                            </Row>
                          </Column>
                        </Column>
                      </Column>
                      <Column className="border border-gray_302 border-solid flex flex-col items-center justify-start sm:pb-[10px] md:pb-[13px] pb-[20px] sm:px-[0] rounded-radius10 w-[100%]">
                        <Column className="bg-bluegray_100_71 flex flex-col items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]">
                          <Column
                            className="bg-cover bg-no-repeat flex flex-col items-end justify-start md:p-[11px] sm:p-[15px] p-[16px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_group6.png')",
                            }}
                          >
                            <Column className="bg-green_500 flex flex-col sm:h-[28px] md:h-[36px] h-[52px] items-center justify-end md:mb-[116px] mb-[170px] sm:mb-[90px] mt-[1px] px-[10px] sm:px-[5px] md:px-[6px] rounded-radius50 shadow-bs2 sm:w-[27px] md:w-[35px] w-[52px]">
                              <Text
                                className="font-bold mt-[1px] text-white_A700 uppercase w-[auto]"
                                variant="body3"
                              >
                                10%
                              </Text>
                              <Text
                                className="font-normal mt-[1px] not-italic text-white_A700 uppercase w-[auto]"
                                variant="body4"
                              >
                                off
                              </Text>
                            </Column>
                          </Column>
                        </Column>
                        <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                          <Column className="flex flex-col items-center justify-start w-[100%]">
                            <Text
                              className="font-normal not-italic text-gray_901 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Elegant Graphic Skartboard
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                              <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                                <Text
                                  className="font-medium text-gray_901 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  $ 534.00
                                </Text>
                              </Column>
                              <Img
                                src="images/img_cart_24X24.svg"
                                className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mt-[2px] sm:w-[12px] md:w-[16px] w-[24px]"
                                alt="cart Four"
                              />
                            </Row>
                          </Column>
                        </Column>
                      </Column>
                    </List>
                  </Row>
                </Column>
              </Column>
            </Column>
            <Column className="bg-bluegray_900 flex flex-col items-center justify-end sm:mt-[2px] md:mt-[3px] mt-[5px] sm:p-[15px] md:p-[22px] p-[32px] w-[100%]">
              <Column className="flex flex-col items-center justify-start max-w-[1199px] ml-[auto] mr-[auto] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <Column className="flex flex-col items-center justify-start w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[30%]">
                      <Img
                        src="images/img_image1.png"
                        className="max-w-[100%] w-[38%]"
                        alt="imageOne"
                      />
                      <Column className="flex flex-col justify-start sm:mt-[46px] md:mt-[59px] mt-[87px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                        <Text
                          className="font-normal not-italic text-white_A700 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 uppercase w-[auto]"
                          variant="body2"
                        >
                          Follow us on social media
                        </Text>
                        <Img
                          src="images/img_frame57629.svg"
                          className="max-w-[100%] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:w-[100%] w-[55%]"
                          alt="Frame57629"
                        />
                      </Column>
                    </Column>
                    <List
                      className="gap-[109px] sm:gap-[58px] md:gap-[75px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] pb-[3px] pr-[3px] sm:w-[100%] w-[61%]"
                      orientation="horizontal"
                    >
                      <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                        <Text
                          className="font-semibold text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls192 uppercase w-[auto]"
                          variant="body2"
                        >
                          Section header
                        </Text>
                        <Text
                          className="font-semibold sm:mt-[11px] md:mt-[14px] mt-[21px] text-white_A700 uppercase w-[auto]"
                          variant="body4"
                        >
                          Adult’s Board
                        </Text>
                        <Text
                          className="font-semibold sm:mt-[14px] md:mt-[19px] mt-[28px] text-white_A700 uppercase w-[auto]"
                          variant="body4"
                        >
                          kid’s Board
                        </Text>
                        <Text
                          className="font-semibold sm:mt-[14px] md:mt-[19px] mt-[28px] text-white_A700 uppercase w-[auto]"
                          variant="body4"
                        >
                          long board
                        </Text>
                        <Text
                          className="font-semibold ml-[1px] sm:mt-[14px] md:mt-[19px] mt-[28px] text-white_A700 uppercase w-[auto]"
                          variant="body4"
                        >
                          Blogs
                        </Text>
                        <Text
                          className="font-semibold sm:mt-[14px] md:mt-[19px] mt-[28px] text-white_A700 uppercase w-[auto]"
                          variant="body4"
                        >
                          My profile
                        </Text>
                      </Column>
                      <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                        <Text
                          className="font-semibold text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls192 uppercase w-[auto]"
                          variant="body2"
                        >
                          Section header
                        </Text>
                        <Text
                          className="font-semibold sm:mt-[11px] md:mt-[14px] mt-[21px] text-white_A700 w-[auto]"
                          variant="body4"
                        >
                          PRIVACY POLICY
                        </Text>
                        <Text
                          className="font-semibold sm:mt-[14px] md:mt-[19px] mt-[28px] text-white_A700 w-[auto]"
                          variant="body4"
                        >
                          TERMS AND CONDITIONS
                        </Text>
                        <Text
                          className="font-semibold sm:mt-[14px] md:mt-[19px] mt-[28px] text-white_A700 w-[auto]"
                          variant="body4"
                        >
                          CONTACT US
                        </Text>
                        <Text
                          className="font-semibold ml-[1px] sm:mt-[14px] md:mt-[19px] mt-[28px] text-white_A700 w-[auto]"
                          variant="body4"
                        >
                          SHIPPING & RETURNS
                        </Text>
                        <Text
                          className="font-semibold sm:mt-[14px] md:mt-[19px] mt-[28px] text-white_A700 w-[auto]"
                          variant="body4"
                        >
                          TRACK ORDER
                        </Text>
                      </Column>
                      <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                        <Text
                          className="font-semibold text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls192 uppercase w-[auto]"
                          variant="body2"
                        >
                          Section header
                        </Text>
                        <Text
                          className="font-semibold sm:mt-[11px] md:mt-[14px] mt-[21px] text-white_A700 w-[auto]"
                          variant="body4"
                        >
                          PRIVACY POLICY
                        </Text>
                        <Text
                          className="font-semibold sm:mt-[14px] md:mt-[19px] mt-[28px] text-white_A700 w-[auto]"
                          variant="body4"
                        >
                          TERMS AND CONDITIONS
                        </Text>
                        <Text
                          className="font-semibold sm:mt-[14px] md:mt-[19px] mt-[28px] text-white_A700 w-[auto]"
                          variant="body4"
                        >
                          CONTACT US
                        </Text>
                        <Text
                          className="font-semibold ml-[1px] sm:mt-[14px] md:mt-[19px] mt-[28px] text-white_A700 w-[auto]"
                          variant="body4"
                        >
                          SHIPPING & RETURNS
                        </Text>
                        <Text
                          className="font-semibold sm:mt-[14px] md:mt-[19px] mt-[28px] text-white_A700 w-[auto]"
                          variant="body4"
                        >
                          TRACK ORDER
                        </Text>
                      </Column>
                    </List>
                  </Row>
                  <Line className="bg-white_A700_75 h-[2px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]" />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[17px] md:mt-[22px] mt-[32px] sm:pb-[2px] md:pb-[3px] pb-[5px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
                      <Text
                        className="font-normal not-italic text-white_A700 w-[auto]"
                        variant="body2"
                      >
                        Privacy Policy
                      </Text>
                      <Text
                        className="font-normal not-italic text-white_A700 w-[auto]"
                        variant="body2"
                      >
                        Terms
                      </Text>
                    </Row>
                    <Text
                      className="font-medium text-white_A700 w-[auto]"
                      variant="body4"
                    >
                      © 2022 companyname. All rights reserved.
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default AccountinformationPage;
