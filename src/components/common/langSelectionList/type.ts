export interface langSelectionItemType {
    open: boolean
    loading: boolean
    onToggle: () => void
    onClose: () => void
    handleBtn: (value: string) => void
}