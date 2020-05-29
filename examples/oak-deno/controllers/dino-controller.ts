interface Dino {
  name: string;
  age: number;
}

let dinos: Array<Dino> = [
  {
    name: "Roger",
    age: 8,
  },
  {
    name: "Syd",
    age: 7,
  },
];

export const getDinos = ({ response }: { response: any }) => {
  response.body = dinos;
};

export const getDino = ({
  params,
  response,
}: {
  params: {
    name: string;
  };
  response: any;
}) => {
  const dino = dinos.filter((dino) => dino.name === params.name);

  if (dino.length) {
    response.status = 200;
    response.body = dino[0];
    return;
  }

  response.status = 400;
  response.body = {
    msg: `Cannot find dino ${params.name}`,
  };
};

export const addDino = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const body = await request.body();
  const dino: Dino = body.value;
  dinos.push(dino);

  response.body = { msg: "OK" };
  response.status = 200;
};

export const updateDino = async ({
  params,
  request,
  response,
}: {
  params: {
    name: string;
  };
  request: any;
  response: any;
}) => {
  const temp = dinos.filter(dino => dino.name === params.name);
  const body = await request.body();
  const { age }: { age: number } = body.value;

  if (temp.length) {
    temp[0].age = age;
    response.status = 200;
    response.body = { msg: "OK" };
    return;
  }

  response.status = 400;
  response.body = { msg: `Cannot find dino ${params.name}` };
};

export const removeDino = ({
  params,
  response,
}: {
  params: {
    name: string;
  };
  response: any;
}) => {
  const lengthBefore = dinos.length;
  dinos = dinos.filter((dino) => dino.name !== params.name);

  if (dinos.length === lengthBefore) {
    response.status = 400;
    response.body = { msg: `Cannot find dino ${params.name}` };
    return;
  }

  response.body = { msg: "OK" };
  response.status = 200;
};
