import { Button, Typography } from "@mui/material"
import { CustomButton } from "../design/components/buttons"
export function Home() {
    return (
    <>
        <Typography variant="h2">
            Home
        </Typography>
        <Button sx={{ p: 2 }}color="secondary" variant="contained">MUI v5 Button</Button>
        <CustomButton>test</CustomButton>
    </>
    );
}
