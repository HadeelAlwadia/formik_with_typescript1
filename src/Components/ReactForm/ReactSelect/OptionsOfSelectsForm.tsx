import { Options } from "../../../@Types/Types"


const jobTitleOfOptions:Options[]=[
     {
      value:'Administrative Assistant',
      label:'Administrative Assistant '
     },
     {
          value:'Executive Assistant',
          label:'Executive Assistant'
         },
         {
          value:'Marketing Manager',
          label:'Marketing Manager'
         },
         {
          value:'Customer Service Representative',
          label:'Customer Service Representative'
         },
         {
          value:'Nurse Practitioner',
          label:'Nurse Practitioner'
         },
         {
          value:'Software Engineer',
          label:'Software Engineer'
         },
         {
          value:'Sales Manager',
          label:'Sales Manager'
         },
         {
          value:'Data Entry Clerk',
          label:'Data Entry Clerk'
         },

]

const jopFiledOfOptions:Options[]=[
     {
      value:'Architecture and engineering',
      label:'Architecture and engineering'
     },
     {
          value:'Arts, culture and entertainment',
          label:'Arts, culture and entertainment'
         },
         {
          value:'Business, management and administration',
          label:'Business, management and administration'
         },
         {
          value:'Communications',
          label:'Communications'
         },
         {
          value:'Community and social services',
          label:'Community and social services'
         },
         {
          value:'Education',
          label:'Education'
         },
         {
          value:'Science and technology',
          label:'Science and technology'
         },
         {
          value:'Installation, repair and maintenance',
          label:'Installation, repair and maintenance'
         },

]

const jobLocationOfOptions:Options[]=[
     {
      value:'Albania',
      label:'Albania'
     },
     {
          value:'Algeria',
          label:'Algeria'
         },
         {
          value:'Andorra',
          label:'Andorra'
         },
         {
          value:'Angola',
          label:'Angola'
         },
         {
          value:'Barbados',
          label:'Barbados'
         },
         {
          value:'itali',
          label:'itali'
         },
         {
          value:'Belgium',
          label:'Belgium'
         },
         {
          value:'jafa',
          label:'jafa'
         },

]


const sizeCompanyOfOptions:Options[]=[
    {
         value: 'smallCompany', 
         label: 'small Company' 
    },

    {
         value: 'medemCompany', 
         label: 'medem Company' 

    },
    { 
        value: 'largeCompany',
       label: 'large Company' 
    }
]





const industryCompanyOfOptions:Options[]=[
     { 
          value: 'Transport Industry',
         label: 'Transport Industry' 
      },
      { 
          value: 'Aerospace Industry',
         label: 'Aerospace Industry' 
      },
      { 
          value: 'Computer Industry',
         label: 'Computer Industry' 
      },
      { 
          value: 'Telecommunication Industry',
         label: 'Telecommunication Industry' 
      },
      { 
          value: 'Agriculture Industry',
         label: 'Agriculture Industry' 
      },
      { 
          value: 'Construction Industry',
         label: 'Construction Industry' 
      },
      { 
          value: 'Education Industry',
         label: 'Education Industry' 
      },
      { 
          value: 'Pharmaceutical Industry',
         label: 'Pharmaceutical Industry' 
      }
]


const sectorCompanyOfOptions:Options[]=[

 { 
     value: 'Energy sector',
    label: 'Energy sector' 
 },
 { 
     value: 'Materials sector',
    label: ' Materials sector' 
 },
 { 
     value: 'Industrials sector',
    label: 'Industrials sector' 
 },
 { 
     value: ' Consumer Discretionary sector',
    label: 'Consumer Discretionary  sector' 
 },
 { 
     value: 'Consumer Staples sector',
    label: ' Consumer Staples sector' 
 },
 { 
     value: 'Health Care sector',
    label: 'Health Care sector' 
 },
 {
      value:'Financials sector',
      label:'Financials sector'
 },
 {
      value:'Information Technology sector',
      label:'Information Technology sector'
 }
]


const currancySalaryOfOptions:Options[]=[
     { 
         value: 'dinar currancy ',
         label: 'dinar currancy'

      }]



export{
     sizeCompanyOfOptions ,
     industryCompanyOfOptions,
     sectorCompanyOfOptions,
     currancySalaryOfOptions,
     jobLocationOfOptions,
     jopFiledOfOptions,
     jobTitleOfOptions

}