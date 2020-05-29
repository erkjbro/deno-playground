interface Dog {
  name: string;
  age: number;
}

let dogs: Array<Dog> = [
  {
    name: "Roger",
    age: 8,
  },
  {
    name: "Syd",
    age: 7,
  },
];

export const getDogs = ({ response }: { response: any }) => {
  response.body = dogs;
};
