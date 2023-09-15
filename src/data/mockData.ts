import { Access } from "../common/types";

interface PersonalInfo {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
}

interface AccessInfo {
  access: Access;
}

interface AddressInfo {
  address: string;
  city: string;
  zipCode: string;
  registrarId: number;
}

interface InvoiceInfo {
  cost: string;
  date: string;
}

export type Team = PersonalInfo & AccessInfo;

type Contact = PersonalInfo & AddressInfo;

export type Invoice = PersonalInfo & InvoiceInfo;

export const mockTeam: Team[] = [
  {
    id: 1,
    name: "Robert Downy Jr",
    email: "robert@gmail.com",
    age: 35,
    phone: "9876543210",
    access: "admin",
  },
  {
    id: 2,
    name: "John Wick",
    email: "john@gmail.com",
    age: 55,
    phone: "9876543210",
    access: "manager",
  },
  {
    id: 3,
    name: "Captain America",
    email: "captain@gmail.com",
    age: 25,
    phone: "9876543210",
    access: "user",
  },
  {
    id: 4,
    name: "Hulk",
    email: "hulk@gmail.com",
    age: 45,
    phone: "9876543210",
    access: "manager",
  },
  {
    id: 5,
    name: "Spider Man",
    email: "spider@gmail.com",
    age: 25,
    phone: "9876543210",
    access: "user",
  },
  {
    id: 6,
    name: "Joe Root",
    email: "joe@gmail.com",
    age: 24,
    phone: "9876543210",
    access: "admin",
  },
];

export const mockContacts: Contact[] = [
  {
    id: 1,
    name: "Robert Downy Jr",
    email: "robert@gmail.com",
    age: 35,
    phone: "9876543210",
    address: "0912 Won Street, Alabama, SY 10001",
    city: "New York",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 2,
    name: "John Wick",
    email: "john@gmail.com",
    age: 55,
    phone: "9876543210",
    address: "1234 Won Street, Alabama, SY 10001",
    city: "New York",
    zipCode: "10002",
    registrarId: 123512,
  },
  {
    id: 3,
    name: "Captain America",
    email: "captain@gmail.com",
    age: 25,
    phone: "9876543210",
    address: "4325 Won Street, Alabama, SY 10001",
    city: "New York",
    zipCode: "10003",
    registrarId: 123512,
  },
  {
    id: 4,
    name: "Hulk",
    email: "hulk@gmail.com",
    age: 45,
    phone: "9876543210",
    address: "8493 Won Street, Alabama, SY 10001",
    city: "New York",
    zipCode: "10004",
    registrarId: 123512,
  },
  {
    id: 5,
    name: "Spider Man",
    email: "spider@gmail.com",
    age: 25,
    phone: "9876543210",
    address: "4829 Won Street, Alabama, SY 10001",
    city: "New York",
    zipCode: "10005",
    registrarId: 123512,
  },
  {
    id: 6,
    name: "Joe Root",
    email: "joe@gmail.com",
    age: 24,
    phone: "9876543210",
    address: "4839 Won Street, Alabama, SY 10001",
    city: "New York",
    zipCode: "10006",
    registrarId: 123512,
  },
];

export const mockInvoices: Invoice[] = [
  {
    id: 1,
    name: "Robert Downy Jr",
    email: "robert@gmail.com",
    age: 35,
    phone: "9876543210",
    cost: "21.24",
    date: "09/11/2022",
  },
  {
    id: 2,
    name: "John Wick",
    email: "john@gmail.com",
    age: 55,
    phone: "9876543210",
    cost: "23.24",
    date: "03/10/2020",
  },
  {
    id: 3,
    name: "Captain America",
    email: "captain@gmail.com",
    age: 25,
    phone: "9876543210",
    cost: "34.24",
    date: "13/09/2021",
  },
  {
    id: 4,
    name: "Hulk",
    email: "hulk@gmail.com",
    age: 45,
    phone: "9876543210",
    cost: "36.24",
    date: "23/10/2022",
  },
  {
    id: 5,
    name: "Spider Man",
    email: "spider@gmail.com",
    age: 25,
    phone: "9876543210",
    cost: "89.24",
    date: "04/09/2022",
  },
  {
    id: 6,
    name: "Joe Root",
    email: "joe@gmail.com",
    age: 24,
    phone: "9876543210",
    cost: "32.24",
    date: "08/10/2022",
  },
];

export const mockTransaction = [
  {
    txId: "01e4dsa",
    user: "robert",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "01e4dsa",
    user: "captain",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "51034szv",
    user: "hulk",
    date: "2022-11-05",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "joe",
    date: "2022-11-02",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "spider",
    date: "2021-09-01",
    cost: "43.95",
  },
];
