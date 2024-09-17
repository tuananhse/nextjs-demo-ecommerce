export interface ProjectType {
    id: string;
    agencyId: string;
    productServiceId: string;
    code: number;
    name: string;
    description: string;
    clientName: string;
    budget: number;
    startDate: string;
    endDate: string;
    createDate: string;
    updateDate: string | null;
    createBy: string | null;
    updateBy: string | null;
    isDeleted: boolean;
    images: any[];
    categories: any[];
    industries: any[];
}

export interface ProjectResponse {
    data: ProjectType[];
    totalRecords?: number;
}
