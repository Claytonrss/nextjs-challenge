import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { formatToCurrency, getColorByStatus } from "../utils";

export function ChargeCard({ charge }) {
  return (
    <Card key={charge.debitCode}>
      <CardHeader>
        <Heading size="md">{charge.name}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{formatToCurrency(charge.value)}</Text>
        <Badge variant="subtle" colorScheme={getColorByStatus(charge.status)}>
          {charge.status}
        </Badge>
      </CardBody>
      <CardFooter>
        <Text fontSize={"smaller"}>{charge.debitCode}</Text>
      </CardFooter>
    </Card>
  );
}
