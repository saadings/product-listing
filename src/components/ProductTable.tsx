import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Button from "./Button";
import { PaginationDemo } from "./Pagination";
import { product_rating } from "@prisma/client";
import Rating from "./Rating";

// const invoices = [
//   {
//     invoice: "INV001",
//     paymentStatus: "Paid",
//     totalAmount: "$250.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV002",
//     paymentStatus: "Pending",
//     totalAmount: "$150.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV003",
//     paymentStatus: "Unpaid",
//     totalAmount: "$350.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV004",
//     paymentStatus: "Paid",
//     totalAmount: "$450.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV005",
//     paymentStatus: "Paid",
//     totalAmount: "$550.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV006",
//     paymentStatus: "Pending",
//     totalAmount: "$200.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV007",
//     paymentStatus: "Unpaid",
//     totalAmount: "$300.00",
//     paymentMethod: "Credit Card",
//   },
// ];

interface RatingTableType {
  id: number;
  rating: number;
  user: {
    name: string;
    email: string;
  };
  product: {
    name: string;
  };
}

const ProductTable = ({ ratings }: { ratings: RatingTableType[] }) => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Product Name</TableHead>
          <TableHead className="">Rating</TableHead>
          <TableHead className="">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ratings?.map((rating) => (
          <TableRow key={rating.id}>
            <TableCell className="capitalize">{rating.user.name}</TableCell>
            <TableCell className="lowercase">{rating.user.email}</TableCell>
            <TableCell className="capitalize">{rating.product.name}</TableCell>
            <TableCell>
              <Rating rating={rating.rating} title="" modal={false} />
            </TableCell>
            <TableCell>
              <Button />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={5} className="text-right"></TableCell>
          <TableCell className="text-right">
          </TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
};

export default ProductTable;
