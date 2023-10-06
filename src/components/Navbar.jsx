import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <div>
            <Flex>
                <Box>
                    {/*brand*/}
                    <h1>E-comerce</h1>
                </Box>
                <Spacer />
                <Box>
                    <Menu>
                        <MenuButton>
                            Categorias
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Categoria A</MenuItem>
                            <MenuItem>Categoria B</MenuItem>
                            <MenuItem>Categoria C</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box>
                    {/*carrito*/}
                    <CartWidget />
                </Box>
            </Flex>
        </div>
    )
}

export default Navbar