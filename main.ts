// 1 задание

let a: number = 123;
let b: string = "SSS";
let c: boolean = true;

// 2 задание 1 часть

function calculateArea(radius: number): number {
  const pi: number = Math.PI;
  const area: number = pi * Math.pow(radius, 2);
  return area;
}
console.log(calculateArea(100));

// 2 задание 1 часть

type VolumeNumber = (mass: number, volume: number) => number;

const calculateDensity: VolumeNumber = (mass, volume) => {
  const density: number = mass / volume;
  return density;
};
console.log(calculateDensity(100, 50));

// 3 задание

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  colors: string[];
};

const products: Product[] = [
  {
    id: 1,
    title: "Ноутбук",
    description: "MacbookPro 2019 intel core i5 8/128",
    price: 45000,
    colors: ["серебряный", "черный"],
  },
  {
    id: 2,
    title: "Смартфон",
    description: "Iphone 11 128гб 77% акб",
    price: 30000,
    colors: ["черный", "голубой"],
  },
  {
    id: 3,
    title: "Наушники",
    description: "Xiaomi MiNeck earphones",
    price: 150,
    colors: ["черный"],
  },
];
console.log(products);
