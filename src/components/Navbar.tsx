import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.webp"

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="40px" />
      <Text>Game Exhibit</Text>
    </HStack>
  )
}
export default Navbar