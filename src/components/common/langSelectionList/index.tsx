// components
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material"

const LangSelectionList = () => {
    return (
        <Dialog
            open
            fullWidth
            maxWidth='lg'
        >
            <DialogTitle>
                Lang
            </DialogTitle>
            <DialogContent dividers sx={{ display: 'flex', gap: 2 }}>
                <Button variant="text">English</Button>
                <Button variant="contained">繁體中文</Button>
                <Button variant="contained">C</Button>
                <Button variant="contained">D</Button>
                <Button variant="contained">E</Button>
                <Button variant="contained">F</Button>
                <Button variant="contained">G</Button>
                <Button variant="contained">H</Button>
                <Button variant="contained">I</Button>
                <Button variant="contained">J</Button>
                <Button variant="contained">K</Button>
            </DialogContent>
        </Dialog>
    )
}

export default LangSelectionList