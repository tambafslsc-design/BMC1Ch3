export interface Question {
  questionNumber: number;
  reference: string;
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  answer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export const questions: Question[] = [
  {
    questionNumber: 1,
    reference: "BAFS600C1Ch3-1",
    text: "Which of the following is the most appropriate definition of stakeholders of a company?",
    options: {
      A: "people working in the company",
      B: "people or organisations that would be affected by the actions of the company",
      C: "all citizens in the city where the company is located",
      D: "people or organisations that have an economic relationship with the company"
    },
    answer: "B",
    explanation: "By definition, stakeholders are people who would be affected by the company's decisions. Common classifications of stakeholders include employees, creditors, debtors, suppliers, distributors and competitors of a company as well as the government and the general public of the region in which the company operates. A, C and D are not the most appropriate definitions as stakeholders are not confined to any specific types of people or organisations which have relations to the company; instead, a more general definition would be more appropriate here."
  },
  {
    questionNumber: 2,
    reference: "BAFS600C1Ch3-2",
    text: "Which of the following are stakeholders of a company?\n\n(1) companies in the same industry\n(2) employees\n(3) the government",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "Stakeholders are groups of people who would be affected by the actions of a company. All people in option D can be affected by a company."
  },
  {
    questionNumber: 3,
    reference: "BAFS600C1Ch3-3",
    text: "Social responsibility is a set of ______________.",
    options: {
      A: "written rules that governs the behaviours of companies",
      B: "moral principles that companies should comply with",
      C: "obligations for companies to act for the benefits of the whole society",
      D: "traditional norms for companies to follow"
    },
    answer: "C",
    explanation: "Being socially responsible, a company should act for the benefits of society and minimise the negative impacts of its actions."
  },
  {
    questionNumber: 4,
    reference: "BAFS600C1Ch3-4",
    text: "Which of the following is/are the correct description(s) about business ethics?\n\n(1) It brings direct monetary rewards to companies.\n(2) It comprises a set of moral principles and standards guiding a firm to make decisions so as to conform to social norms.\n(3) Its nature is similar to the law.",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(1) and (2) only",
      D: "(2) and (3) only"
    },
    answer: "B",
    explanation: "(1) is incorrect. Complying with ethical practices can improve the companies' reputation and image which are regarded as intangible assets. However, it cannot bring direct monetary benefits to the companies. (2) is correct. It is the definition of business ethics. (3) is incorrect. Law specifies clear punishments given to those violating it, whereas ethics have no fixed standards but vary among people. There are no clear punishments for those violating ethical standards. Thus, they have different nature."
  },
  {
    questionNumber: 5,
    reference: "BAFS600C1Ch3-5",
    text: "Which of the following is/are the reason(s) for supporting social responsibility?\n\n(1) It improves the company’s image.\n(2) It directly generates revenue to the company.\n(3) It lowers the production and operation costs.",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(1) and (3) only",
      D: "(2) and (3) only"
    },
    answer: "A",
    explanation: "(1) is correct. Being socially responsible, a firm can boost its reputation because of its ethical behaviour, enhancing the credibility of a firm and thus its image. (2) and (3) are incorrect. Bearing social responsibility may incur a higher production and operation cost because the firm may be required to comply with a standard higher than the legal requirements. In the long run, a socially responsible firm can attract more customers, but taking up such responsibilities cannot directly increase the revenue of the firm."
  },
  {
    questionNumber: 6,
    reference: "BAFS600C1Ch3-6",
    text: "Which of the following descriptions about business ethics is/are correct?\n\n(1) A firm complies with business ethics by distributing dividends to its shareholders every financial year.\n(2) Complying with business ethics is beneficial to the development of a firm in economic aspect.\n(3) A firm needs to gain more profits for its owners by reducing its employees' benefits.",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(1) and (3) only",
      D: "(2) and (3) only"
    },
    answer: "B",
    explanation: "(1) is incorrect. Complying with business ethics is not equivalent to distributing dividends to shareholders every financial year. It is unethical for the firm to distribute dividends when it is in great financial difficulties because this impairs the firm's financial situation and future development. (2) is correct. Complying with business ethics can enhance the image and reputation of the firm because of its ethical behaviour to society. This in turn increases the credibility of the firm and attracts more customers. In the long run, the economic benefits of bearing social responsibility outweigh its additional costs. Thus, it is beneficial to comply with the business ethics so as to boost the economic development of the firm. (3) is incorrect. It is necessary to earn profits by sacrificing the benefits of workers. This may lead to the deprivation of workers' rights in serious cases, which is an unethical behaviour."
  },
  {
    questionNumber: 7,
    reference: "BAFS600C1Ch3-7",
    text: "Which of the following should Andrew do in order to be socially responsible to his employees?\n\n(1) pay a higher hourly wage to Yoyo, who is Andrew's cousin\n(2) provide them with a comfortable workplace\n(3) recognise the contribution made by Yoyo and Vivian to the firm",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "C",
    explanation: "(1) is incorrect while (2) and (3) are correct. It is unfair to pay higher wages to employees who are family members of the owners. This act is socially irresponsible to the employees. Instead, a socially responsible company should give employees equal opportunities, provide them with a comfortable workplace and recognise employees' contribution to the firm."
  },
  {
    questionNumber: 8,
    reference: "BAFS600C1Ch3-8",
    text: "On the other hand, which of the following should NOT be done if Andrew wants to be socially responsible to his customers?",
    options: {
      A: "sell the food at a reasonable price",
      B: "use smuggled chicken from Shenzhen to make preserved chicken rice",
      C: "post a food pyramid poster outside the tuck shop and highlight \"oil\" and \"sweet\" in the 'Eat less' section",
      D: "receive comments from students and improve services according to the comments"
    },
    answer: "B",
    explanation: "Using smuggled chicken from the Mainland may adversely affect the food quality. This violates the right of customers to enjoy safe products."
  },
  {
    questionNumber: 9,
    reference: "BAFS600C1Ch3-9",
    text: "Which of the following should NOT be done by socially responsible companies or managers?",
    options: {
      A: "pay tax honestly",
      B: "inform customers details of what they buy",
      C: "avoid using crude photos of girls in their advertisements",
      D: "allow employees to lower the product prices whenever they want"
    },
    answer: "D",
    explanation: "It reduces profits earned by the company, which in turn harms the financial interests of its shareholders."
  },
  {
    questionNumber: 10,
    reference: "BAFS600C1Ch3-10",
    text: "Which of the following is NOT a reason for people to object to a firm bearing social responsibility?",
    options: {
      A: "Profits cannot be maximised if a firm tries to bear social responsibilities.",
      B: "There will then be a loss in credibility.",
      C: "Extra costs are incurred by being socially responsible to society.",
      D: "It is the government's but not a firm's duty to help the needy."
    },
    answer: "B",
    explanation: "Being socially responsible does not lead to loss of credibility but an enhancement in it instead. This is because the reputation of a firm is boosted by bearing social responsibility. More people have trust in it as a result. A, C and D are correct. Being socially responsible hinders profit maximisation as higher costs are incurred. Besides, some people may believe that it is the responsibility of the government but not firms to help the community because firms have paid taxes."
  },
  {
    questionNumber: 11,
    reference: "BAFS600C1Ch3-11",
    text: "Which of the following is/are NOT the advantage(s) for a business to be socially responsible?\n\n(1) obtain a longer credit period when borrowing loans\n(2) attract customers who support the idea of social responsibility\n(3) maintain reliable sources of raw materials",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(1) and (3) only",
      D: "(2) and (3) only"
    },
    answer: "A",
    explanation: "(1) is incorrect. Being socially responsible does not necessarily help a firm obtain a longer credit period when borrowing loans. The length of the credit period is usually determined by rules and regulations of the financial institutions and the financial position of the firm. (2) is correct. Customers who support the idea of social responsibility tend to buy goods from shops which bear social responsibility. (3) is correct. Suppliers are more willing to provide raw materials to firms which pay the liabilities on time. Being socially irresponsible may as well lead to termination of supplies."
  },
  {
    questionNumber: 12,
    reference: "BAFS600C1Ch3-12",
    text: "Which of the following are the consequences if a firm is not socially responsible to its employees?\n\n(1) high staff turnover and low morale\n(2) diminishment in staff productivity\n(3) weaker commitment and loyalty to the firm in the part of staff members",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "(1) and (3) are correct. If a firm is socially irresponsible to its employees, they will be dissatisfied with the firm and less committed to their work, resulting in an unstable workforce and low staff morale. (2) is correct. The productivity of employees will be hindered due to unfavourable working environment and low staff morale."
  },
  {
    questionNumber: 13,
    reference: "BAFS600C1Ch3-13",
    text: "The illegal action is mainly caused by the keen competition with its competitors. Which of the following can West Daily do to promote a healthy competition atmosphere?",
    options: {
      A: "collaborate with its competitors to raise the prices of their newspapers together",
      B: "engage in an even keener competition",
      C: "emphasise the major advantages of the products that are unique to each other",
      D: "merge with its competitors to avoid direct competition"
    },
    answer: "C",
    explanation: "Emphasising major advantages of the products that are unique to each other prevents direct competition. Companies can focus on their unique advantages over other companies and make good use of them as the major gimmicks in order to attract respective customers. This promotes a healthier business environment. A is incorrect. Doing so is not ethical to customers, as they have to pay unreasonable prices for newspapers. B is incorrect. Promoting a keener competition only worsens the competition atmosphere. D is incorrect. Merging with its competitors is not a feasible approach as competitors are unlimited. Furthermore, the merger may hinder competition as the combined market power may result in the new firm dominating the market, hampering the benefits of customers."
  },
  {
    questionNumber: 14,
    reference: "BAFS600C1Ch3-14",
    text: "Suppose Janna plans to enhance the ethical standard of her subordinates. Which of the following measures can she implement?\n\n(1) shorten the lunchtime of those who act unethically\n(2) provide them with a code of ethics to follow\n(3) provide training on business ethics to staff",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "C",
    explanation: "(1) is incorrect. It is neither ethical nor humane to deprive employees of their right to have lunch and breaks at a reasonable span, though imposing punishments is sometimes effective to correct one's behaviour. (2) and (3) are correct. By providing training on business ethics and a code of ethics for the staff, they will be more aware of business ethics in the daily operation of the firm. Besides, the company can raise ethical standards of workers by rewarding and punishing ethical and unethical behaviour respectively, or emphasising the importance of business ethics when employing."
  },
  {
    questionNumber: 15,
    reference: "BAFS600C1Ch3-15",
    text: "After this incident, Hammer believes that the awareness of business ethics of his subordinates is low. Which of the following ways is NOT an appropriate way to enhance it?",
    options: {
      A: "give rewards to ethical behaviour and punishments to unethical behaviour in terms of year-end bonus",
      B: "provide additional educational courses on business ethics",
      C: "provide a hostile working environment to subordinates whose behaviour is unethical but put a tidy one to the ethical ones",
      D: "encourage subordinates to report unethical behaviour"
    },
    answer: "C",
    explanation: "C is inappropriate. Providing a hostile and tidy working environment to subordinates whose behaviour is unethical and ethical respectively is an unethical behaviour as such an act constitutes discrimination against some of the employees. A, B and D are appropriate. They convey the message that the company lays much emphasis on ethical practices to employees."
  },
  {
    questionNumber: 16,
    reference: "BAFS600C1Ch3-16",
    text: "The unethical practices of Simon have caused much pollution near the production base. In light of this, Hammer wants to bear the firm’s social responsibility to the environment. Which of the following is/are appropriate way(s) for him to achieve this aim?\n\n(1) terminate the productions in factories immediately\n(2) implement environmentally friendly measures such as recycling\n(3) relocate the production base to other less polluted countries",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(1) and (3) only",
      D: "(2) and (3) only"
    },
    answer: "B",
    explanation: "(1) is incorrect. All types of productions cause pollution. Although terminating the productions can avoid the emission of pollutants, it greatly affects the operation of business because no products would be produced. Hammer should take actions to reduce the pollution or take compensatory actions, but not terminate the production. (2) is correct. Implementing environmentally friendly measures is effective in alleviating pollution while not greatly affecting the interests of other stakeholders. (3) is incorrect. Relocating the production bases to a less polluted place is ineffective in protecting the environment because the way the factories emit pollutants would not be changed."
  },
  {
    questionNumber: 17,
    reference: "BAFS600C1Ch3-17",
    text: "Which of the following are the socially responsible behaviours of a law firm towards its clients?\n\n(1) provide discounts to loyal clients\n(2) provide services of high quality at reasonable prices\n(3) provide good follow-up services",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "C",
    explanation: "(1) is incorrect. To fulfil social responsibility, a firm provides services at reasonable prices and it does not need to offer discounts. Offering discounts can be a marketing strategy to attract customers rather than a socially responsible behaviour. It does not necessarily constitute a socially responsible act. (2) and (3) are correct. A socially responsible law firm is concerned about how customers can benefit from using its services. It should provide quality services at reasonable prices, together with comprehensive follow-up services."
  },
  {
    questionNumber: 18,
    reference: "BAFS600C1Ch3-18",
    text: "Which of the following are possible adverse consequences that the stakeholders of a firm may face if the firm goes bankrupt and winds down?\n\n(1) Customers cannot receive services or products purchased.\n(2) Creditors may not get back all the money lent to the firm.\n(3) Suppliers cannot collect all the debts owed by the firm.",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "(1), (2) and (3) are correct. A firm going bankrupt means that it is facing severe financial difficulties and that it has a low ability to repay its liabilities. In addition, customers cannot receive the services or products purchased upon the closure of the firm."
  },
  {
    questionNumber: 19,
    reference: "BAFS600C1Ch3-19",
    text: "A supplier has offered the general manager of a toy chain store an expensive diamond as a present in order to obtain a long-term contract with the store. Which of the following is the most ethical action that the general manager should take?",
    options: {
      A: "go back and discuss with the owners of the store whether to accept the offer",
      B: "sign the long-term contract but reject the present",
      C: "accept the offer and get the present if no one knows about that",
      D: "report to the Independent Commission Against Corruption (ICAC)"
    },
    answer: "D",
    explanation: "The behaviour of the supplier is an act of bribery which is unethical and illegal. The ICAC is the body responsible for tackling such crimes. A and C are incorrect. If the general manager signs the contract in return for the diamond, he will violate the law. Thus, accepting the gift, be it after the discussion with others or not, is not an ethical action. B is incorrect. Reporting the crime is more ethical than not reporting it."
  },
  {
    questionNumber: 20,
    reference: "BAFS600C1Ch3-20",
    text: "Which of the following are the benefits if a firm bears its social responsibility towards the environment?\n\n(1) It promotes sustainable development.\n(2) It boosts reputation and image.\n(3) It helps the firm earn more profit in the long run.",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "(1) is correct. Taking social responsibility towards the environment means that a firm places emphasis on protecting the environment in its production of goods. This causes less harm to the environment and thus promotes sustainable development. (2) is correct. Being socially responsible towards the environment generally betters the reputation and image of a firm. (3) is correct. Theoretically, the overall benefits of being socially responsible to the environment surpass its additional costs incurred. Thus, the firm earns more profits in the long run."
  },
  {
    questionNumber: 21,
    reference: "BAFS600C1Ch3-21",
    text: "Which of the following measures can Care Coach Company take to fulfil its social responsibility concerning its coach services?\n\n(1) charge children from low-income families a lower fee\n(2) participate in charity work with the use of coach services\n(3) provide drivers with additional safety training",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "(1) and (2) are correct. Charging children from low-income families a lower fee and participating in charity work with the use of coach services are seen as fulfilling social responsibilities towards the community because these measures can help the needy in society. (3) is correct. Providing drivers with additional safety training are regarded as fulfilling social responsibility towards customers because this is done to ensure that customers receive safe services."
  },
  {
    questionNumber: 22,
    reference: "BAFS600C1Ch3-22",
    text: "Which of the following actions can Care Coach Company take in order to bear its social responsibility towards the environment?",
    options: {
      A: "terminate the business in order to reduce pollution",
      B: "use environmentally friendly fuels and engines",
      C: "do not turn on the air-conditioners in hot weather",
      D: "carry fewer passengers per coach in hot weather"
    },
    answer: "B",
    explanation: "Using environmentally friendly fuels and engines reduces the pollutants emitted. A is incorrect. It greatly affects the operations of the firm and harms owners' interests. C is incorrect. If the working environment is too hot, health of the employees and customers may be deteriorated. D is incorrect. Suppose the demand for coach service is constant, those who cannot enjoy the coach service may turn to other means of transportation. If more cars are needed to meet the demand, more pollutants will be emitted."
  },
  {
    questionNumber: 23,
    reference: "BAFS600C1Ch3-23",
    text: "As Care Coach Company recognises the importance of fulfilling social responsibility, it is willing to accept lower return for the benefits of school children. However, some companies oppose the practice of social responsibility and do not incorporate it into one of their business goals. Which of the following are the reasons behind?\n\n(1) They have already benefited society by providing jobs, products and services.\n(2) They have paid profits tax to the government which can be used on providing social services.\n(3) Investors oppose those companies to bear social responsibility because it lowers their return on investment.",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "(1) and (2) are correct. Some companies may think that they have fulfilled their responsibilities towards different stakeholders by paying taxes and providing services or goods. They may think that they need not comply with standards higher than the law requirements. (3) is correct. Fulfilling social responsibility inevitably increases the cost of production and thus reduces the returns of investment of investors."
  },
  {
    questionNumber: 24,
    reference: "BAFS600C1Ch3-24",
    text: "Which of the following are the social responsibilities of a company towards its investors?\n\n(1) provide detailed and accurate financial information\n(2) enhance the transparency of company strategies\n(3) distribute all the profits earned to investors as dividends",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "A",
    explanation: "(1) and (2) are correct. It demonstrates the principle of honesty and transparency. Providing detailed and accurate financial information prevents the investors from being misled. This allows them to make their investment decisions correctly. Enhancing the transparency of company strategies helps investors gain a better understanding about the situation of the company, which is essential to them when making investment decisions. (3) is incorrect. A company should place emphasis on long-term sustainability. Distributing all the profits earned to investors as dividends is not a sustainable measure. This measure harms the long-term interest and development of the company, which is considered as being socially irresponsible. Part of the profits earned should be retained for the future development of the company so as to facilitate sustainable development."
  },
  {
    questionNumber: 25,
    reference: "BAFS600C1Ch3-25",
    text: "How can a company fulfil its social responsibilities towards its employees?\n\n(1) provide employees with opportunities to participate in major decisions\n(2) give them equitable and fair remuneration\n(3) provide them with a safe and healthy work environment",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "(1) is correct. Employees are valuable assets of the company. They should be given chances to express their ideas over major decisions in the company, such as modifying the wage level. This can raise their job commitment and satisfaction. (2) is correct. Employees work in return for rewards in both monetary and non-monetary aspects. Equitable and fair remuneration should be given for their efforts devoted. (3) is correct. Employees should be provided with a safe and healthy work environment so that they can work safely and free from injuries."
  },
  {
    questionNumber: 26,
    reference: "BAFS600C1Ch3-26",
    text: "Which of the following companies is/are NOT practicing social responsibility?\n\n(1) Jenny Company, which transacts frequently with charitable organisations\n(2) a local power company, which promises to cut pollutant emission locally while increasing the emission outside the city\n(3) Timmy Clothes, which is lowering the price of clothes",
    options: {
      A: "(2) only",
      B: "(3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "C",
    explanation: "(1) is correct. Transacting with charitable organisations does not mean being socially responsible. As no special discounts or donations are mentioned, the aforementioned transactions with charitable organisations are assumed to be normal transactions. (2) is correct. A socially responsible company should consider both the local and foreign communities. Emitting more pollutants in other cities is not socially responsible. (3) is correct. Lowering prices is beneficial for consumers but it does not mean a company is socially responsible. The benefit of the owners should be considered as they are also stakeholders. Lowering prices may hurt the interest of the owners and may not be a socially responsible act."
  },
  {
    questionNumber: 27,
    reference: "BAFS600C1Ch3-27",
    text: "Which of the following is an INCORRECT description of how a company addresses stakeholders’ needs?",
    options: {
      A: "concern groups | taking their opinions into consideration",
      B: "government | following laws and rules",
      C: "distributors | repaying debts on time",
      D: "shareholders | making profit"
    },
    answer: "C",
    explanation: "To address distributors' needs, a company should deliver quality products to them instead. It is the distributors' responsibility to repay the company on time. Repaying debts on time can only address the needs of creditors and suppliers. A is correct. Concern groups like environmental protection groups always give opinions to companies for more environmentally friendly operations. Companies should take into account their opinions for the benefit of the community. B is correct. The government regulates businesses and it is important for companies to follow laws and operate ethically. D is correct. Making profits benefits the shareholders in that a company can distribute some profits in the form of dividends or capital gains to the shareholders."
  },
  {
    questionNumber: 28,
    reference: "BAFS600C1Ch3-28",
    text: "Which of the following people discharges social responsibility?",
    options: {
      A: "Mr. Lei, who offers a band to all customers as a gift for promotion",
      B: "Brother Kit, who provides free lunchboxes to the impoverished elderly",
      C: "Joey, the chief executive officer of a company who decides to use harmful raw materials to manufacture free gifts for customers",
      D: "Stephen, who hires workers at an extremely low salary to produce free gifts for customers"
    },
    answer: "B",
    explanation: "Social responsibility refers to a firm’s responsibility to stakeholders in society. Providing lunchboxes to the impoverished elderly shows Brother Kit’s contribution to society. A is incorrect. Giving out free gifts in the purpose of promotion does not show that the firm is responsible to society. C is incorrect. If customers use the products, their health will be adversely affected. Joey does not discharge social responsibility. D is incorrect. A socially responsible company provides reasonable compensation and benefits to workers. As workers are only given extremely low salaries, Stephen is not socially responsible."
  },
  {
    questionNumber: 29,
    reference: "BAFS600C1Ch3-29",
    text: "John started a small business as a sole proprietor without any employees on 1 January 20X4. He went bankrupt one year later and decided to close the business. Which of the following is an adverse effect to stakeholders in John’s business after the closure?",
    options: {
      A: "Shareholders of the company could not get back their capital.",
      B: "Workers could not get back their salaries.",
      C: "Customers of the company could not buy products from the company, causing inconvenience.",
      D: "Competitors of the company would benefit due to a less fierce competition."
    },
    answer: "C",
    explanation: "Customers are the stakeholders of his business. A is incorrect. As the company is a sole proprietorship, there are no shareholders. Shareholders are not the stakeholders in this case. B is incorrect. The question mentioned that there are no workers. D is incorrect. Facing fewer competitions is not an adverse effect to competitors."
  }
];
