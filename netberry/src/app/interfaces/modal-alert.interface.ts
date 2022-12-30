export interface ModalAlert {
    isEdit: boolean;
    element: any;
    msg: string;
    title: string;
    param?: string;
    showCancelButton?: boolean;
}